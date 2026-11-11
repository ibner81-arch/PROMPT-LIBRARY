# WEB-004 — Implementação de frontend

- **Categoria:** Desenvolvimento Web
- **Status:** Rascunho
- **Dificuldade:** Intermediária
- **Ferramentas:** Claude / Antigravity
- **Última revisão:** 2026-11-11

## Objetivo
Implementar uma tela ou componente conforme requisitos aprovados.

## Prompt

```text
Atue como desenvolvedor frontend sênior.
Implemente a funcionalidade descrita respeitando o projeto existente.

FUNCIONALIDADE: {{DESCRICAO}}
CRITERIOS_DE_ACEITE: {{CRITERIOS}}
REFERENCIA_VISUAL: {{LINK_OU_DESCRICAO}}
RESTRICOES: {{TECNOLOGIAS_E_LIMITACOES}}

Antes de editar:
1. Inspecione a estrutura, dependências e convenções existentes.
2. Identifique os arquivos que realmente precisam mudar.
3. Apresente um plano curto de implementação.
4. Preserve funcionalidades existentes.

Ao implementar:
- Reutilize componentes e padrões existentes.
- Garanta responsividade e acessibilidade.
- Trate estados de carregamento, vazio e erro quando aplicável.
- Não inclua credenciais ou dados sensíveis no código.
- Evite dependências novas sem justificar.

Depois:
1. Execute os testes e verificações disponíveis.
2. Informe arquivos alterados e motivo.
3. Liste testes executados e resultados reais.
4. Informe limitações ou verificações que não conseguiu executar.

Não afirme que algo foi testado se não executou o teste.
```

## Como avaliar
- [ ] Critérios de aceite atendidos.
- [ ] Alterações limitadas ao necessário.
- [ ] Testes e limitações informados.
