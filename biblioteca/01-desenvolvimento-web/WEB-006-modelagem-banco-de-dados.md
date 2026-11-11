# WEB-006 — Modelagem de banco de dados

- **Categoria:** Desenvolvimento Web
- **Status:** Rascunho
- **Dificuldade:** Intermediária
- **Ferramentas:** ChatGPT / Claude
- **Última revisão:** 2026-11-11

## Objetivo
Criar um modelo de dados coerente com as regras do produto.

## Prompt

```text
Atue como analista de dados e administrador de banco de dados.
Modele os dados necessários para o projeto abaixo.

PROJETO: {{DESCRICAO}}
REQUISITOS: {{REQUISITOS}}
BANCO PREFERIDO: {{POSTGRESQL_MYSQL_SQLITE_OUTRO}}

Entregue:
1. Entidades, atributos e tipos de dados.
2. Chaves primárias e estrangeiras.
3. Relacionamentos e cardinalidades.
4. Restrições, unicidade e campos obrigatórios.
5. Diagrama ER em Mermaid.
6. SQL DDL inicial, se solicitado.
7. Índices sugeridos e justificativa.
8. Regras de retenção, privacidade e acesso aos dados.

Evite armazenar dados sem finalidade clara.
Explique as decisões e aponte ambiguidades antes de gerar migrações.
Não execute comandos destrutivos nem apague dados existentes.
```

## Como avaliar
- [ ] Relacionamentos e restrições coerentes.
- [ ] Dados coletados têm finalidade.
- [ ] Migrações não destrutivas.
