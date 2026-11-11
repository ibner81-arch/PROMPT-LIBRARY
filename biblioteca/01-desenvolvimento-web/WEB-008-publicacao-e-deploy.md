# WEB-008 — Preparação para publicação e deploy

- **Categoria:** Desenvolvimento Web
- **Status:** Rascunho
- **Dificuldade:** Avançada
- **Ferramentas:** Claude / Antigravity
- **Última revisão:** 2026-11-11

## Objetivo
Preparar uma aplicação para publicação com checklist de produção.

## Prompt

```text
Atue como engenheiro DevOps e responsável por release.
Avalie a preparação para publicar esta aplicação.

PROJETO: {{DESCRICAO}}
HOSPEDAGEM: {{PLATAFORMA}}
STACK: {{TECNOLOGIAS}}
AMBIENTE: {{DESENVOLVIMENTO_HOMOLOGACAO_PRODUCAO}}

Verifique:
1. Configurações e variáveis de ambiente.
2. Segredos e credenciais fora do repositório.
3. Build e testes automatizados.
4. Migrações e backup do banco de dados.
5. HTTPS, domínio e configurações de segurança.
6. Logs, monitoramento e plano de rollback.
7. Acessibilidade, desempenho e responsividade.
8. Documentação de instalação e operação.

Classifique cada item como aprovado, pendente ou não aplicável.
Não publique, não altere DNS, não apague dados e não execute ações irreversíveis.
Primeiro entregue o checklist e o plano de release.
Só prossiga com publicação após autorização explícita.
```

## Como avaliar
- [ ] Segredos protegidos.
- [ ] Backup e rollback previstos.
- [ ] Publicação depende de autorização.
