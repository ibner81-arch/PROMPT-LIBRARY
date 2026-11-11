# IA-006 — Avaliação e testes de solução com IA

- **Categoria:** Inteligência Artificial
- **Status:** Rascunho
- **Dificuldade:** Avançada
- **Ferramentas:** ChatGPT / Claude / ferramentas de avaliação
- **Última revisão:** 2026-11-11

## Objetivo
Avaliar qualidade, confiabilidade, segurança e custo de um sistema de IA.

## Quando usar
Antes de lançar uma solução com IA e durante revisões de qualidade após mudanças em modelo, dados ou instruções.

## Informações que você deve fornecer
- {{SISTEMA}}
- {{TAREFAS}}
- {{PUBLICO}}
- {{DADOS}}

## Prompt

```text
Atue como especialista em avaliação de sistemas de IA.
SISTEMA: {{SISTEMA}}
TAREFAS: {{TAREFAS}}
USUÁRIOS: {{PUBLICO}}
DADOS DE TESTE: {{DADOS}}

Crie um plano com:
- métricas adequadas à tarefa e justificativa;
- casos comuns, difíceis e adversariais;
- detecção de respostas sem suporte;
- testes de privacidade, segurança e prompt injection;
- avaliação de vieses quando pertinente;
- comparação com uma baseline;
- registro de modelo, prompt, parâmetros e dados;
- limitações e plano de melhoria.

Não escolha métricas apenas por popularidade. Não declare segurança ou precisão
sem evidências. Diferencie resultado medido, avaliação subjetiva e hipótese.
```

## Como avaliar o resultado
- [ ] Métricas estão justificadas pela tarefa?
- [ ] Casos adversariais e comparação com baseline foram incluídos?
- [ ] Resultados podem ser reproduzidos com versões e dados registrados?
- [ ] Medições, avaliações subjetivas e hipóteses estão separadas?

## Histórico de validação
- **Data:** Ainda não testado
- **Ferramenta/modelo:**
- **Cenário:**
- **Resultado:**
- **Melhorias:**
