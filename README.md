# 🎲 Gerador Inteligente de Jogos Dupla Sena

Este projeto é um gerador de jogos da Dupla Sena com foco em **diversidade numérica** e **baixa repetição** entre os jogos. Ideal para quem busca montar apostas mais estratégicas e evitar padrões óbvios como sequências e repetições excessivas.

## 🚀 Funcionalidades

- Geração de N jogos aleatórios da Dupla Sena.
- Evita jogos com **sequências numéricas** (ex: 12, 13, 14).
- Evita jogos com **muitos números repetidos entre si**.
- Garante **zero repetição entre jogos** quando possível (até 8 jogos únicos com 6 dezenas cada, sem repetição).
- Interface com Next.js e formulários otimizados com Tailwind CSS.

## 📦 Tecnologias Utilizadas

- **Next.js 14** (App Router)
- **React Server Actions**
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**

## 🧠 Lógica de Geração

- Total de dezenas disponíveis: `50`
- Dezenas por jogo: `6`
- Máximo de jogos 100% únicos: `floor(50 / 6) = 8`
- Acima de 8 jogos: utiliza algoritmo adaptativo com baixa tolerância de repetição.

## 🖥️ Como rodar localmente

```bash
git clone https://github.com/seu-usuario/gerador-dupla-sena.git
cd gerador-dupla-sena
pnpm install
pnpm dev

Acesse em `http://localhost:3000`

## 📝 Exemplo de Uso

Insira o número de jogos desejado (ex: `5`) e clique em **Gerar**. O sistema retornará jogos otimizados com:
- Sem repetições entre jogos.
- Sem sequências numéricas.
- Alta aleatoriedade e distribuição.

## 📂 Estrutura

```

/app
/actions
waitlist.ts ← lógica de geração dos jogos
/components
WaitlistForm.tsx ← formulário de geração

## 🤖 Futuras melhorias

- Exportar jogos em `.txt` ou `.csv`.
- Histórico dos jogos gerados.
- Modo estatístico baseado em concursos anteriores.
- Integração com IA para sugerir combinações "pouco apostadas".

---

Feito com 💡 por Jean Carlos Lopes de Oliveira

---

Se quiser, posso já gerar esse arquivo para você com download direto, ou integrar no seu projeto Next. Deseja isso?
