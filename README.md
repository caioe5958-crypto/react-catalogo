# 📝 Todo React Avançado

Aplicação de lista de tarefas (Todo List) desenvolvida com React, utilizando recursos avançados como Hooks, Context API, Hooks customizados e Memorização.

## 🚀 Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Remover tarefas
- Filtrar tarefas (todas, concluídas e pendentes)

## 🧠 Conceitos aplicados

Este projeto foi desenvolvido com foco em boas práticas e recursos avançados do React:

### Hooks
- `useState` → gerenciamento de estado das tarefas
- `useEffect` → persistência de dados no `localStorage` (opcional)

### Context API
- Gerenciamento global do estado das tarefas
- Uso de `useContext` para acesso e atualização do estado em diferentes componentes

### Hooks Customizados
- Criação de hooks reutilizáveis para lógica como:
  - manipulação de `localStorage`
  - controle de inputs

### Memoização
- Uso de `useMemo` e `React.memo` para evitar renderizações desnecessárias
- Otimização da lista de tarefas e filtros

## 🛠️ Tecnologias utilizadas

- React
- JavaScript
- Context API
- Hooks (useState, useEffect, useContext, useMemo)
- CSS 

## 📦 Como rodar o projeto

1. Clone o repositório:
git clone https://github.com/SEU-USUARIO/todo-react-avancado.git

2. Acesse a pasta do projeto
cd todo-react-avancado

3. Instale as dependências
npm install

4. Inicie o projeto
npm run dev

5. Abra no navegador
http://localhost:5173