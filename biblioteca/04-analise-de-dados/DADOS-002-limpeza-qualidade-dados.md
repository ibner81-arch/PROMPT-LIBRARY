# DADOS-002 — Limpeza e qualidade dos dados

- **Categoria:** Análise de Dados
- **Status:** Rascunho
- **Dificuldade:** Intermediária
- **Ferramentas:** Excel / Python / pandas / SQL
- **Última revisão:** 2026-11-11

## Objetivo
Diagnosticar a qualidade dos dados sem alterar silenciosamente os dados originais.

## Quando usar
Antes de transformar uma base para análise ou relatório.

## Informações que você deve fornecer
- {{BASE}}
- {{FERRAMENTA}}
- {{OBJETIVO}}
- {{REGRAS}}

## Prompt

```text
Atue como analista de qualidade de dados.
BASE: {{BASE}}
FERRAMENTA: {{FERRAMENTA}}
OBJETIVO: {{OBJETIVO}}
REGRAS: {{REGRAS}}

Diagnostique tipos e formatos; valores ausentes; duplicidades; valores extremos;
categorias inconsistentes; datas, moedas e unidades; e violações das regras
informadas. Depois proponha tratamentos explicando o motivo, o risco e o efeito
esperado. Preserve uma cópia original e gere um resumo antes/depois.

Não exclua linhas, preencha ausências ou remova outliers sem justificar a regra.
Não invente valores. Se gerar código, inclua verificações e mantenha explícita
a separação entre diagnóstico e transformação.
```

## Como avaliar o resultado
- [ ] A base original foi preservada?
- [ ] O diagnóstico foi apresentado antes das transformações?
- [ ] Cada tratamento tem regra, justificativa e efeito esperado?
- [ ] Código sugerido inclui verificações?

## Histórico de validação
- **Data:** Ainda não testado
- **Ferramenta/modelo:**
- **Cenário:**
- **Resultado:**
- **Melhorias:**
