# PROMPT LIBRARY

Biblioteca pessoal para guardar, buscar e organizar prompts nas oito categorias do projeto.

## Como abrir

1. Baixe o repositório pelo botão **Code → Download ZIP** no GitHub e extraia os arquivos, ou clone o repositório.
2. Abra um terminal dentro da pasta extraída, onde está o arquivo `index.html`.
3. Execute:

```bash
python -m http.server 8000
```

4. Abra **http://localhost:8000** no navegador.
5. Para parar o servidor, volte ao terminal e pressione `Ctrl+C`.

Se o comando `python` não for reconhecido, tente `python3 -m http.server 8000` (macOS/Linux) ou `py -m http.server 8000` (Windows). Também é possível abrir `index.html` diretamente no navegador.

## Recursos

- Oito categorias iniciais
- Busca e filtro por categoria
- Criar, editar, excluir e copiar prompts
- Favoritos
- Salvamento local no navegador (`localStorage`)

**Atenção:** os prompts ficam salvos apenas no navegador e dispositivo usados. Eles não são sincronizados automaticamente com o GitHub nem entre dispositivos.
