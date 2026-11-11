# WEB-002 — Arquitetura e estrutura do projeto

- **Categoria:** Desenvolvimento Web
- **Status:** Rascunho
- **Dificuldade:** Intermediária
- **Ferramentas:** Claude / Antigravity
- **Última revisão:** 2026-11-11

## Objetivo
Planejar a arquitetura antes de criar ou alterar arquivos.

## Prompt

```text
Atue como arquiteto de software e desenvolvedor full stack.
Analise o briefing e proponha uma arquitetura simples, segura e sustentável.

PROJETO: {{BRIEFING_OU_DESCRICAO}}
TECNOLOGIAS JÁ DEFINIDAS: {{STACK_OU_NENHUMA}}
NÍVEL DA EQUIPE: {{NIVEL}}

Antes de propor:
1. Inspecione os arquivos existentes, se houver.
2. Identifique tecnologias e padrões já utilizados.
3. Não presuma que arquivos ou funcionalidades existem sem verificar.

Entregue:
- Arquitetura recomendada e justificativa.
- Estrutura de diretórios em árvore.
- Responsabilidade de cada pasta e arquivo principal.
- Modelo inicial de dados, se aplicável.
- Fluxo entre frontend, backend e banco de dados.
- Variáveis de ambiente necessárias, sem inserir segredos.
- Riscos técnicos e alternativas mais simples.

Priorize a menor complexidade que atenda aos requisitos.
Não implemente ainda. Aguarde aprovação da arquitetura.
```

## Como avaliar
- [ ] A arquitetura corresponde ao escopo.
- [ ] A estrutura não tem complexidade desnecessária.
- [ ] Decisões e alternativas foram explicadas.
