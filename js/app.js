const categories = [
  'Desenvolvimento Web', 'Programação', 'Inteligência Artificial',
  'Análise de Dados', 'Finanças e Investimentos',
  'Produtividade e Administração', 'Design e Criatividade', 'Pesquisa e Estudos'
];
const key = 'prompt-library-v1';
const starter = categories.map((category, i) => ({
  id: `example-${i}`, title: `Exemplo: ${category}`, category,
  description: `Um modelo inicial para a categoria ${category}.`,
  tags: ['exemplo'], favorite: false,
  prompt: `Ajude-me com [objetivo] relacionado a ${category}. Considere o contexto [contexto] e apresente uma resposta clara, prática e organizada.`
}));
const $ = (selector) => document.querySelector(selector);
const list = $('#list'), search = $('#search'), filter = $('#category'), editor = $('#editor'), form = $('#form');
let prompts;
try { prompts = JSON.parse(localStorage.getItem(key)) || starter; } catch { prompts = starter; }
function save() { localStorage.setItem(key, JSON.stringify(prompts)); }
function fillSelects() {
  for (const select of [filter, $('#form-category')]) {
    categories.forEach((name) => { const option = document.createElement('option'); option.value = name; option.textContent = name; select.append(option); });
  }
}
function el(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; }
function render() {
  const query = search.value.trim().toLowerCase();
  const visible = prompts.filter((p) => (!filter.value || p.category === filter.value) && `${p.title} ${p.description} ${p.category} ${(p.tags || []).join(' ')} ${p.prompt}`.toLowerCase().includes(query));
  $('#count').textContent = `${visible.length} de ${prompts.length} prompts`;
  list.replaceChildren();
  if (!visible.length) { list.append(el('p', 'empty', 'Nenhum prompt encontrado. Tente outra busca ou crie um novo.')); return; }
  visible.forEach((p) => {
    const card = el('article', 'card'), head = el('div', 'card-head');
    head.append(el('span', 'badge', p.category));
    const star = el('button', 'star', p.favorite ? '★' : '☆'); star.type = 'button'; star.title = 'Alternar favorito'; star.onclick = () => { p.favorite = !p.favorite; save(); render(); }; head.append(star);
    card.append(head, el('h2', '', p.title), el('p', '', p.description || 'Sem descrição'));
    card.append(el('div', 'preview', p.prompt));
    const tags = el('div', 'tags'); (p.tags || []).forEach((tag) => tags.append(el('span', 'tag', tag))); card.append(tags);
    const actions = el('div', 'card-actions');
    const copy = el('button', 'small', 'Copiar'); copy.type = 'button'; copy.onclick = async () => { try { await navigator.clipboard.writeText(p.prompt); copy.textContent = 'Copiado!'; setTimeout(() => copy.textContent = 'Copiar', 1400); } catch { window.prompt('Copie o texto do prompt:', p.prompt); } };
    const edit = el('button', 'small', 'Editar'); edit.type = 'button'; edit.onclick = () => openEditor(p);
    const remove = el('button', 'small', 'Excluir'); remove.type = 'button'; remove.onclick = () => { if (confirm(`Excluir “${p.title}”?`)) { prompts = prompts.filter((item) => item.id !== p.id); save(); render(); } };
    actions.append(copy, edit, remove); card.append(actions); list.append(card);
  });
}
function openEditor(p) {
  form.reset(); $('#id').value = p?.id || ''; $('#title').value = p?.title || '';
  $('#form-category').value = p?.category || categories[0]; $('#description').value = p?.description || '';
  $('#tags').value = (p?.tags || []).join(', '); $('#prompt').value = p?.prompt || ''; $('#favorite').checked = !!p?.favorite;
  $('#form-title').textContent = p ? 'Editar prompt' : 'Novo prompt'; editor.showModal();
}
$('#add').onclick = () => openEditor();
$('#close').onclick = $('#cancel').onclick = () => editor.close();
search.oninput = filter.onchange = render;
form.onsubmit = (event) => {
  event.preventDefault();
  const id = $('#id').value || (crypto.randomUUID?.() ?? String(Date.now()));
  const item = { id, title: $('#title').value.trim(), category: $('#form-category').value, description: $('#description').value.trim(), tags: $('#tags').value.split(',').map((x) => x.trim()).filter(Boolean), prompt: $('#prompt').value.trim(), favorite: $('#favorite').checked };
  const index = prompts.findIndex((p) => p.id === id); if (index >= 0) prompts[index] = item; else prompts.push(item);
  save(); editor.close(); render();
};
fillSelects(); render();
