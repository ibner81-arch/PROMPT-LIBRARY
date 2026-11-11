# DADOS-004 — SQL e construção de consultas

- **Categoria:** Análise de Dados
- **Status:** Rascunho
- **Dificuldade:** Básica/avançada
- **Ferramentas:** ChatGPT / Claude / SQL
- **Última revisão:** 2026-11-11

## Objetivo
Construir consultas SQL legíveis e adequadas ao esquema real.

## Quando usar
Ao traduzir uma pergunta de análise em uma consulta sobre um banco conhecido.

## Informações que você deve fornecer
- {{BANCO}}
- {{ESQUEMA}}
- {{PERGUNTA}}
- {{RESULTADO}}

## Prompt

```text
Atue como analista de dados com domínio de SQL.
BANCO: {{BANCO}}
ESQUEMA: {{ESQUEMA}}
PERGUNTA: {{PERGUNTA}}
RESULTADO ESPERADO: {{RESULTADO}}

Explique tabelas e relacionamentos, granularidade, filtros, premissas e risco
de duplicidade em JOINs. Depois entregue SQL formatado, explicação por bloco,
um exemplo de saída claramente fictício e validações.

Use apenas tabelas e colunas fornecidas. Evite SELECT * quando desnecessário.
Não execute INSERT, UPDATE, DELETE ou DDL destrutivo. Pergunte se houver
ambiguidade sobre o esquema ou o resultado esperado.
```

## Como avaliar o resultado
- [ ] Tabelas e colunas correspondem ao esquema fornecido?
- [ ] JOINs, granularidade e risco de duplicidade estão explicados?
- [ ] Exemplo fictício está identificado como tal?
- [ ] Consulta pode ser validada sem operações destrutivas?

## Histórico de validação
- **Data:** Ainda não testado
- **Ferramenta/modelo:**
- **Cenário:**
- **Resultado:**
- **Melhorias:**
