# DADOS-001 — Planejamento de análise de dados

- **Categoria:** Análise de Dados
- **Status:** Rascunho
- **Dificuldade:** Básica/intermediária
- **Ferramentas:** ChatGPT / Claude
- **Última revisão:** 2026-11-11

## Objetivo
Converter uma pergunta de negócio em um plano de análise mensurável.

## Quando usar
Antes de explorar uma base ou produzir um relatório para responder a uma pergunta de negócio.

## Informações que você deve fornecer
- {{PERGUNTA}}
- {{CONTEXTO}}
- {{DADOS}}
- {{PUBLICO}}

## Prompt

```text
Atue como analista de dados.
PERGUNTA DE NEGÓCIO: {{PERGUNTA}}
CONTEXTO: {{CONTEXTO}}
DADOS DISPONÍVEIS: {{DADOS}}
PÚBLICO: {{PUBLICO}}

Entregue:
- pergunta mensurável;
- indicadores e definições;
- campos e granularidade necessários;
- período e segmentações;
- hipóteses testáveis;
- limitações e dados ausentes;
- plano passo a passo;
- forma de comunicar resultados.

Não confunda correlação com causalidade. Não invente dados nem conclua antes
de analisar a base. Se faltarem dados, explique quais são necessários.
```

## Como avaliar o resultado
- [ ] A pergunta e os indicadores são mensuráveis e definidos?
- [ ] Granularidade, período e segmentações estão adequados?
- [ ] Limitações e dados ausentes foram mapeados?
- [ ] Não há conclusões inventadas nem confusão entre correlação e causalidade?

## Histórico de validação
- **Data:** Ainda não testado
- **Ferramenta/modelo:**
- **Cenário:**
- **Resultado:**
- **Melhorias:**
