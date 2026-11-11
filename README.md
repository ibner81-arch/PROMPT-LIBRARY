# PROMPT LIBRARY

Biblioteca pessoal para guardar, consultar e organizar prompts por categoria.

## Duas formas de usar

- **Biblioteca versionada:** os arquivos Markdown em `biblioteca/` são os documentos completos, revisados e guardados no Git.
- **Aplicação web:** `index.html` apresenta o catálogo resumido de `dados/prompts.json`. Alterações feitas na interface ficam no armazenamento local do navegador (`localStorage`); elas não atualizam automaticamente os arquivos Markdown nem o JSON no GitHub.

## Executar localmente

A aplicação busca um arquivo JSON e, por isso, precisa ser aberta por um servidor local (abrir `index.html` diretamente pode bloquear a leitura do arquivo).

1. Baixe o repositório pelo botão **Code → Download ZIP** e extraia os arquivos, ou clone o repositório.
2. Abra um terminal na pasta do projeto, no mesmo nível de `index.html`.
3. Inicie um servidor:
   - Windows: `py -m http.server 8000`
   - macOS/Linux: `python3 -m http.server 8000` (ou `python -m http.server 8000`)
4. Abra http://localhost:8000 no navegador. Pare o servidor com `Ctrl+C`.

## Adicionar ou atualizar um prompt

1. Crie ou edite o arquivo Markdown na pasta da categoria, seguindo `biblioteca/PROMPT_TEMPLATE.md` e `biblioteca/CONTRIBUTING.md`.
2. Atualize `biblioteca/CATALOG.md` e o README da categoria.
3. Atualize também o registro correspondente em `dados/prompts.json` para que apareça na aplicação. Use o mesmo código como `id` e `status`; o campo `file` aponta para o Markdown.
4. Faça commit das alterações.

A aplicação permite criar, editar, excluir e favoritar cópias locais dos prompts. Essas ações não gravam no repositório. Para não perder alterações locais, mantenha também o Markdown e `dados/prompts.json` atualizados no Git.

## Estrutura

- `index.html`, `css/` e `js/` — aplicação web
- `dados/prompts.json` — catálogo usado pela aplicação
- `biblioteca/` — prompts completos, catálogo documental e guias

Antes de publicar ou compartilhar, remova dados pessoais, segredos e informações confidenciais. Veja também o [histórico de alterações](biblioteca/CHANGELOG.md).
