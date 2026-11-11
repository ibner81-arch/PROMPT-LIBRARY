# IA-005 — Integração de API de modelo de IA

- **Categoria:** Inteligência Artificial
- **Status:** Rascunho
- **Dificuldade:** Avançada
- **Ferramentas:** Claude / ChatGPT / IDE com agente
- **Última revisão:** 2026-11-11

## Objetivo
Planejar uma integração com API de modelo de IA com segurança e controle de custos.

## Quando usar
Ao adicionar uma chamada de modelo de IA a uma aplicação existente ou nova.

## Informações que você deve fornecer
- {{PROJETO}}
- {{STACK}}
- {{MODELO}}
- {{FUNCAO}}

## Prompt

```text
Atue como engenheiro de software especializado em APIs de IA.
PROJETO: {{PROJETO}}
STACK: {{STACK}}
PROVEDOR/MODELO: {{MODELO}}
FUNCIONALIDADE: {{FUNCAO}}

Consulte a documentação oficial atual do provedor, se disponível. Não presuma
endpoints, parâmetros, limites ou preços. Planeje:
- configuração por variáveis de ambiente;
- segredos somente no servidor;
- validação e limites de entrada;
- timeout, erros e tentativas com backoff;
- controle de custos;
- tratamento de respostas inválidas;
- logs sem conteúdo sensível;
- testes simulados e de integração;
- documentação.

Não exponha chaves no frontend, repositório ou logs. Não faça chamadas pagas
nem publique sem autorização. Explique os arquivos alterados e os testes locais.
```

## Como avaliar o resultado
- [ ] A documentação oficial foi consultada ou a limitação foi informada?
- [ ] Chaves e outros segredos ficam protegidos no servidor?
- [ ] Custos, limites, timeouts e falhas foram considerados?
- [ ] Chamadas pagas e publicação dependem de autorização?

## Histórico de validação
- **Data:** Ainda não testado
- **Ferramenta/modelo:**
- **Cenário:**
- **Resultado:**
- **Melhorias:**
