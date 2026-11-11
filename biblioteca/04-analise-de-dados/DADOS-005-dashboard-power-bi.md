# DADOS-005 — Planejamento de dashboard no Power BI

- **Categoria:** Análise de Dados
- **Status:** Rascunho
- **Dificuldade:** Intermediária
- **Ferramentas:** Power BI / Excel / ChatGPT
- **Última revisão:** 2026-11-11

## Objetivo
Planejar um dashboard orientado a decisões, não apenas à apresentação de gráficos.

## Quando usar
Antes de construir ou redesenhar um relatório de BI.

## Informações que você deve fornecer
- {{AREA}}
- {{PUBLICO}}
- {{DECISOES}}
- {{FONTES}}
- {{INDICADORES}}

## Prompt

```text
Atue como analista de BI e especialista em Power BI.
ÁREA: {{AREA}}
PÚBLICO: {{PUBLICO}}
DECISÕES: {{DECISOES}}
FONTES: {{FONTES}}
INDICADORES: {{INDICADORES}}

Entregue:
- objetivo e perguntas que o dashboard deve responder;
- KPIs, fórmulas, unidades e regras;
- modelo de dados e relacionamentos;
- medidas DAX explicadas, se houver informações suficientes;
- páginas e hierarquia da informação;
- visuais justificados por pergunta de negócio;
- filtros e interações;
- atualização, desempenho e RLS quando aplicável;
- checklist de validação.

Evite excesso de visuais. Não invente colunas ou medidas e não diga que DAX
foi testado sem executar no modelo. Marque premissas e dados que precisam
ser confirmados.
```

## Como avaliar o resultado
- [ ] Decisões e perguntas estão definidas antes dos visuais?
- [ ] KPIs têm fórmula, unidade e regra claras?
- [ ] Modelo de dados e segurança por linha foram considerados quando aplicáveis?
- [ ] Nenhuma medida foi declarada como testada sem execução real?

## Histórico de validação
- **Data:** Ainda não testado
- **Ferramenta/modelo:**
- **Cenário:**
- **Resultado:**
- **Melhorias:**
