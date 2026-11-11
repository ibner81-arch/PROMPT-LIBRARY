# WEB-007 — Testes e revisão de código

- **Categoria:** Desenvolvimento Web
- **Status:** Rascunho
- **Dificuldade:** Intermediária
- **Ferramentas:** Claude / Antigravity
- **Última revisão:** 2026-11-11

## Objetivo
Revisar código e encontrar riscos sem modificar arquivos automaticamente.

## Prompt

```text
Atue como revisor de código sênior.
Faça uma revisão crítica do projeto ou diff fornecido.

ESCOPO: {{ARQUIVOS_OU_FUNCIONALIDADE}}
CRITERIOS: correção, segurança, legibilidade, desempenho, acessibilidade e manutenção.

Regras:
- Leia o contexto necessário antes de concluir.
- Priorize bugs reproduzíveis e riscos concretos.
- Não invente vulnerabilidades.
- Não faça alterações durante a auditoria.

Para cada achado, informe:
1. Severidade (crítica, alta, média, baixa ou informativa).
2. Arquivo e linha, quando disponíveis.
3. Cenário em que o problema ocorre.
4. Consequência.
5. Correção recomendada.
6. Teste que comprovaria a correção.

Procure também ausência de testes para fluxos importantes.
Finalize com um resumo dos riscos e uma lista priorizada.
Se não encontrar problemas, diga o que foi efetivamente revisado e quais
limitações permaneceram.
```

## Como avaliar
- [ ] Achados reproduzíveis e localizados.
- [ ] Severidade justificada.
- [ ] Nenhuma alteração não autorizada.
