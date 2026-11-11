# WEB-005 — Backend e API

- **Categoria:** Desenvolvimento Web
- **Status:** Rascunho
- **Dificuldade:** Avançada
- **Ferramentas:** Claude / Antigravity
- **Última revisão:** 2026-11-11

## Objetivo
Projetar ou implementar endpoints e regras de negócio com validação e segurança.

## Prompt

```text
Atue como desenvolvedor backend sênior e especialista em segurança.
Analise a necessidade e proponha uma implementação de backend/API.

NECESSIDADE: {{DESCRICAO}}
STACK: {{LINGUAGEM_FRAMEWORK}}
DADOS: {{ENTIDADES_E_CAMPOS}}
REGRAS_DE_NEGOCIO: {{REGRAS}}
AUTENTICACAO: {{REQUISITO_OU_NAO_DEFINIDO}}

Considere:
1. Contratos de endpoint (método, rota, entrada e saída).
2. Validação de dados no servidor.
3. Autenticação e autorização, quando necessárias.
4. Tratamento consistente de erros e códigos HTTP.
5. Proteção contra injeção, exposição de dados e abuso.
6. Logs sem senhas, tokens ou dados pessoais desnecessários.
7. Paginação e limites para listas, quando aplicável.
8. Testes unitários e de integração.

Primeiro apresente o desenho da API e os riscos.
Após aprovação, implemente seguindo os padrões do projeto.
Nunca coloque segredos no código ou nos exemplos. Use variáveis de ambiente
e dados fictícios para demonstrações.
Ao final, execute os testes disponíveis e reporte os resultados reais.
```

## Como avaliar
- [ ] Contrato da API claro.
- [ ] Validação e autorização consideradas.
- [ ] Erros e testes cobertos.
