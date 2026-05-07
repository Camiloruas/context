# Context API com React

Este projeto foi desenvolvido como prática de **gerenciamento de estado global com React Context API**, utilizando **React + TypeScript + Vite**.

## Objetivo do projeto

Construir uma aplicação simples para consolidar a criação e o consumo de contexto em múltiplos componentes, evitando `prop drilling` e centralizando dados compartilhados.

## O que foi implementado

- Criação de um `UserContext` tipado com TypeScript.
- `UserProvider` responsável por disponibilizar estado e ações globais.
- Compartilhamento de dados entre componentes diferentes da árvore:
  - Nome do aluno.
  - Quantidade de alunos online.
- Atualização de estado global por meio de ações do contexto (`mudaNome` e `novoAluno`).

## Principais aprendizados

- Estruturar um contexto global com `createContext` e `Provider`.
- Tipar corretamente o contexto para ganho de segurança e autocomplete.
- Consumir contexto com `useContext` em diferentes componentes.
- Organizar estado e regras de atualização em um único ponto da aplicação.
- Entender, na prática, quando usar Context API em vez de repassar props manualmente.

## Tecnologias utilizadas

- React
- TypeScript
- Vite

## Como executar localmente

```bash
npm install
npm run dev
```

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a build de produção.
- `npm run preview`: executa a pré-visualização da build.
