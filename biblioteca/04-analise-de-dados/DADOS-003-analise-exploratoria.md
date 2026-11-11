# DADOS-003 — Análise exploratória (EDA)

- **Categoria:** Análise de Dados
- **Status:** Rascunho
- **Dificuldade:** Intermediária
- **Ferramentas:** Python / pandas / Excel
- **Última revisão:** 2026-11-11

## Objetivo
Explorar dados, identificar padrões e formular perguntas para investigação.

## Quando usar
Na etapa inicial de análise, após conhecer a estrutura e a qualidade da base.

## Informações que você deve fornecer
- {{BASE}}
- {{OBJETIVO}}
- {{COLUNAS_E_SIGNIFICADOS}}

## Prompt

```text
Atue como cientista de dados e analista exploratório.
BASE: {{BASE}}
OBJETIVO: {{OBJETIVO}}
DICIONÁRIO DE DADOS: {{COLUNAS_E_SIGNIFICADOS}}

Verifique dimensões, tipos e qualidade; estatísticas descritivas; distribuições
e extremos; relações entre variáveis; comparações entre grupos ou períodos;
visualizações úteis; limitações e vieses.

Apresente de 3 a 5 achados com números reais da base. Para cada um, informe
evidência, interpretação e ressalva. Não fabrique estatísticas nem confunda
associação com causalidade. Se não tiver acesso aos dados, peça a base ou
explique o que pode e não pode concluir. Gere código reproduzível quando solicitado.
```

## Como avaliar o resultado
- [ ] Estatísticas e achados foram calculados a partir da base?
- [ ] Evidências estão separadas de interpretações e hipóteses?
- [ ] Limitações e possíveis vieses foram registrados?
- [ ] Código, quando solicitado, é reproduzível?

## Histórico de validação
- **Data:** Ainda não testado
- **Ferramenta/modelo:**
- **Cenário:**
- **Resultado:**
- **Melhorias:**
