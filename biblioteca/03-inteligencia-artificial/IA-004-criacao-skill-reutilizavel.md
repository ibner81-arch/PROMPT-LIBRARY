# IA-004 — Criação de skill reutilizável

- **Categoria:** Inteligência Artificial
- **Status:** Rascunho
- **Dificuldade:** Intermediária
- **Ferramentas:** Claude / agentes compatíveis
- **Última revisão:** 2026-11-11

## Objetivo
Documentar um procedimento reutilizável para um agente executar uma tarefa.

## Quando usar
Ao converter uma atividade recorrente em instruções reutilizáveis para um agente compatível.

## Informações que você deve fornecer
- {{ATIVIDADE}}
- {{GATILHOS}}
- {{ENTRADAS}}
- {{SAIDA}}
- {{REGRAS}}

## Prompt

```text
Atue como designer de skills para agentes de IA.
ATIVIDADE: {{ATIVIDADE}}
QUANDO USAR: {{GATILHOS}}
ENTRADAS: {{ENTRADAS}}
RESULTADO: {{SAIDA}}
FERRAMENTAS E LIMITES: {{REGRAS}}

Produza:
- nome e descrição;
- condições de ativação e exclusão;
- instruções passo a passo;
- validação e tratamento de erros;
- exemplos de entrada e saída;
- quando pedir esclarecimentos;
- arquivos auxiliares;
- testes de consistência.

Mantenha a skill focada em uma competência. Não invente capacidades de ferramentas.
Se o formato de destino tiver requisitos próprios, peça ou consulte a especificação.
Não inclua segredos nem dados pessoais.
```

## Como avaliar o resultado
- [ ] O escopo e os gatilhos tratam de uma competência específica?
- [ ] O procedimento pode ser seguido e verificado?
- [ ] Há exemplos, validações e tratamento de erros?
- [ ] As capacidades das ferramentas não foram presumidas?

## Histórico de validação
- **Data:** Ainda não testado
- **Ferramenta/modelo:**
- **Cenário:**
- **Resultado:**
- **Melhorias:**
