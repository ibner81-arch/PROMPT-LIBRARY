const STORAGE_KEY = 'prompt-library-v1';
const $ = (selector) => document.querySelector(selector);
const list = $('#list');
const search = $('#search');
const filter = $('#category');
const editor = $('#editor');
const form = $('#form');
let categories = [];
let prompts = [];

function el(tag, className = '', text = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== '') node.textContent = text;
  return node;
}

function loadLocalPrompts() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    console.warn('Os dados locais não puderam ser lidos.', error);
    return [];
  }
}

function mergePrompts(seed, local) {
  const merged = new Map(seed.map((prompt) => [prompt.id, { ...prompt, favorite: false }]));
  local.forEach((prompt) => {
    // Remove apenas os exemplos fictícios da versão anterior da aplicação.
    if (String(prompt.id).startsWith('example-')) return;
    merged.set(prompt.id, { ...merged.get(prompt.id), ...prompt });
  });
  return [...merged.values()];
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prompts));
  } catch (error) {
    alert('Não foi possível salvar neste navegador. Exporte ou faça uma cópia dos seus prompts.');
    console.error(error);
  }
}

function fillSelects() {
  for (const select of [filter, $('#form-category')]) {
    select.replaceChildren();
    if (select === filter) {
      const all = document.createElement('option');
      all.value = '';
      all.textContent = 'Todas as categorias';
      select.append(all);
    }
    categories.forEach((name) => {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      select.append(option);
    });
  }
}

function render() {
  const query = search.value.trim().toLocaleLowerCase('pt-BR');
  const visible = prompts.filter((prompt) => {
    const matchesCategory = !filter.value || prompt.category === filter.value;
    const searchable = [prompt.title, prompt.description, prompt.category, ...(prompt.tags || []), prompt.prompt]
      .join(' ')
      .toLocaleLowerCase('pt-BR');
    return matchesCategory && searchable.includes(query);
  });

  $('#count').textContent = `${visible.length} de ${prompts.length} prompts`;
  list.replaceChildren();
  if (!visible.length) {
    list.append(el('p', 'empty', 'Nenhum prompt encontrado. Tente outra busca ou crie um novo.'));
    return;
  }

  visible.forEach((prompt) => {
    const card = el('article', 'card');
    const head = el('div', 'card-head');
    head.append(el('span', 'badge', prompt.category));
    const star = el('button', 'star', prompt.favorite ? '★' : '☆');
    star.type = 'button';
    star.title = prompt.favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
    star.setAttribute('aria-label', star.title);
    star.onclick = () => { prompt.favorite = !prompt.favorite; save(); render(); };
    head.append(star);

    card.append(head, el('h2', '', prompt.title), el('p', '', prompt.description || 'Sem descrição'));
    card.append(el('div', 'preview', prompt.prompt));
    const tags = el('div', 'tags');
    (prompt.tags || []).forEach((tag) => tags.append(el('span', 'tag', tag)));
    card.append(tags);

    const actions = el('div', 'card-actions');
    const copy = el('button', 'small', 'Copiar');
    copy.type = 'button';
    copy.onclick = async () => {
      try {
        await navigator.clipboard.writeText(prompt.prompt);
        copy.textContent = 'Copiado!';
        setTimeout(() => { copy.textContent = 'Copiar'; }, 1400);
      } catch {
        window.prompt('Copie o texto do prompt:', prompt.prompt);
      }
    };
    const edit = el('button', 'small', 'Editar');
    edit.type = 'button';
    edit.onclick = () => openEditor(prompt);
    const remove = el('button', 'small', 'Excluir');
    remove.type = 'button';
    remove.onclick = () => {
      if (confirm(`Excluir “${prompt.title}” deste navegador? O arquivo Markdown no repositório não será removido.`)) {
        prompts = prompts.filter((item) => item.id !== prompt.id);
        save();
        render();
      }
    };
    actions.append(copy, edit, remove);
    card.append(actions);
    list.append(card);
  });
}

function openEditor(prompt) {
  form.reset();
  $('#id').value = prompt?.id || '';
  $('#title').value = prompt?.title || '';
  $('#form-category').value = prompt?.category || categories[0];
  $('#description').value = prompt?.description || '';
  $('#tags').value = (prompt?.tags || []).join(', ');
  $('#prompt').value = prompt?.prompt || '';
  $('#favorite').checked = Boolean(prompt?.favorite);
  $('#form-title').textContent = prompt ? 'Editar prompt' : 'Novo prompt';
  editor.showModal();
}

async function init() {
  try {
    const response = await fetch('./dados/prompts.json');
    if (!response.ok) throw new Error(`Falha ao carregar o catálogo (${response.status}).`);
    const data = await response.json();
    if (!Array.isArray(data.categories) || !Array.isArray(data.prompts)) {
      throw new Error('O arquivo dados/prompts.json está em formato inválido.');
    }
    categories = data.categories;
    prompts = mergePrompts(data.prompts, loadLocalPrompts());
    fillSelects();
    render();
  } catch (error) {
    console.error(error);
    list.replaceChildren(el('p', 'empty', 'Não foi possível carregar dados/prompts.json. Rode a aplicação por um servidor local; consulte o README.'));
    $('#count').textContent = 'Catálogo indisponível';
  }
}

$('#add').onclick = () => openEditor();
$('#close').onclick = $('#cancel').onclick = () => editor.close();
search.oninput = filter.onchange = render;
form.onsubmit = (event) => {
  event.preventDefault();
  const id = $('#id').value || (crypto.randomUUID?.() ?? String(Date.now()));
  const item = {
    id,
    title: $('#title').value.trim(),
    category: $('#form-category').value,
    description: $('#description').value.trim(),
    tags: $('#tags').value.split(',').map((tag) => tag.trim()).filter(Boolean),
    prompt: $('#prompt').value.trim(),
    favorite: $('#favorite').checked
  };
  const index = prompts.findIndex((prompt) => prompt.id === id);
  if (index >= 0) prompts[index] = { ...prompts[index], ...item };
  else prompts.push(item);
  save();
  editor.close();
  render();
};

init();
