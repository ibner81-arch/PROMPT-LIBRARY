# IA-002 — Engenharia e melhoria de prompts

- **Categoria:** Inteligência Artificial
- **Status:** Rascunho
- **Dificuldade:** Básica/intermediária
- **Ferramentas:** ChatGPT / Claude / Gemini
- **Última revisão:** 2026-11-11

## Objetivo
Transformar instruções vagas em prompts claros, testáveis e reutilizáveis.

## Quando usar
Ao revisar um prompt que produz resultados inconsistentes ou que precisa ser reutilizado em diferentes contextos.

## Informações que você deve fornecer
- {{PROMPT}}
- {{OBJETIVO}}
- {{FERRAMENTA}}
- {{CONTEXTO}}

## Prompt

```text
Atue como especialista em engenharia de prompts.
PROMPT ATUAL: {{PROMPT}}
OBJETIVO REAL: {{OBJETIVO}}
FERRAMENTA/MODELO: {{FERRAMENTA}}
CONTEXTO: {{CONTEXTO}}

1. Identifique ambiguidades, lacunas e conflitos.
2. Liste as informações que precisam ser fornecidas.
3. Reescreva o prompt com papel, contexto, tarefa, restrições e formato de saída.
4. Use variáveis {{...}} para dados que mudam.
5. Inclua critérios de qualidade e instruções para declarar incerteza.
6. Crie uma versão curta e outra completa.
7. Sugira três casos de teste, incluindo um caso limite.

Não prometa eliminar erros ou alucinações; explique o que requer validação humana.
```

## Como avaliar o resultado
- [ ] Objetivo e contexto estão explícitos?
- [ ] Entradas variáveis foram identificadas?
- [ ] Formato de saída e critérios de qualidade estão definidos?
- [ ] Os testes incluem um caso limite e validação humana?

## Histórico de validação
- **Data:** Ainda não testado
- **Ferramenta/modelo:**
- **Cenário:**
- **Resultado:**
- **Melhorias:**
