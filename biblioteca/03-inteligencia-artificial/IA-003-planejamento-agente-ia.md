# IA-003 — Planejamento de agente de IA

- **Categoria:** Inteligência Artificial
- **Status:** Rascunho
- **Dificuldade:** Avançada
- **Ferramentas:** Claude / ChatGPT / frameworks de agentes
- **Última revisão:** 2026-11-11

## Objetivo
Especificar um agente com escopo, ferramentas, permissões e limites seguros.

## Quando usar
Antes de desenvolver ou configurar um agente que use ferramentas, dados ou ações externas.

## Informações que você deve fornecer
- {{OBJETIVO}}
- {{USUARIOS}}
- {{TAREFAS}}
- {{FERRAMENTAS_DADOS}}
- {{NIVEL_DE_AUTONOMIA}}

## Prompt

```text
Atue como arquiteto de agentes de IA.
OBJETIVO: {{OBJETIVO}}
USUÁRIOS: {{USUARIOS}}
TAREFAS PERMITIDAS: {{TAREFAS}}
FERRAMENTAS E DADOS: {{FERRAMENTAS_DADOS}}
AUTONOMIA: {{NIVEL_DE_AUTONOMIA}}

Especifique:
- missão e limites;
- entradas e saídas;
- fluxo de execução;
- ferramentas e permissões mínimas;
- quando pedir confirmação humana;
- defesa contra instruções maliciosas em documentos;
- proteção de dados;
- tratamento de falhas, loops e custos;
- logs seguros;
- testes de aceitação e de abuso.

Adote o princípio do menor privilégio. Não envie mensagens, exclua dados,
faça pagamentos, publique conteúdo ou altere sistemas externos sem autorização
explícita. Apresente a especificação e aguarde aprovação.
```

## Como avaliar o resultado
- [ ] Ferramentas e permissões seguem o menor privilégio?
- [ ] Ações sensíveis exigem confirmação humana?
- [ ] Há limites de execução, custos e tratamento de falhas?
- [ ] Testes de abuso e instruções maliciosas foram considerados?

## Histórico de validação
- **Data:** Ainda não testado
- **Ferramenta/modelo:**
- **Cenário:**
- **Resultado:**
- **Melhorias:**
