# API de Gerenciamento de Pedidos e Produtos

## Descrição

Este projeto consiste em uma API web desenvolvida com .NET 8, utilizando o Entity Framework para comunicação com um banco de dados MySQL. A API tem como objetivo gerenciar pedidos e produtos, permitindo um CRUD completo (criação, leitura, atualização e exclusão) de três tabelas principais: **Pedido**, **Produto** e **ItensPedido**. A aplicação foi desenvolvida como parte de um desafio técnico proposto pela empresa onde trabalho.

O sistema está dividido em duas aplicações:
- **Back-end**: Desenvolvido em .NET 8, responsável pelo controle de pedidos e seus produtos.
- **Front-end**: Desenvolvido em Angular, para fornecer uma interface visual que interage com o back-end.

### Estrutura das Tabelas

A API utiliza três tabelas principais, conforme mostrado no diagrama abaixo:

![Diagrama de Entidades](https://i.imgur.com/CPgQ92X.png)

1. **Pedido**: Contém informações sobre o cliente e os detalhes do pedido.
2. **ItensPedido**: Relaciona produtos a pedidos, especificando a quantidade de cada produto.
3. **Produto**: Contém detalhes sobre os produtos disponíveis.

## Funcionalidades

A API oferece as seguintes funcionalidades:

### Pedido
- **Criar Pedido**: Cria um novo pedido, incluindo informações do cliente e itens.
- **Listar Pedidos**: Retorna todos os pedidos cadastrados, incluindo detalhes dos itens.
- **Obter Pedido por ID**: Retorna os detalhes de um pedido específico com base no seu ID.
- **Atualizar Pedido**: Atualiza os dados de um pedido existente.
- **Deletar Pedido**: Remove um pedido e seus itens relacionados do sistema.

### Produto
- **Criar Produto**: Adiciona um novo produto ao catálogo.
- **Listar Produtos**: Retorna todos os produtos disponíveis no sistema.
- **Obter Produto por ID**: Retorna os detalhes de um produto específico com base no seu ID.
- **Atualizar Produto**: Atualiza as informações de um produto existente.
- **Deletar Produto**: Remove um produto do sistema.

### ItensPedido
- **Adicionar Item ao Pedido**: Adiciona produtos a um pedido existente, especificando a quantidade.
- **Listar Itens de um pedido**: Lista os itens de um pedido indicando o ID do pedido.
- **Remover Item do Pedido**: Remove um item de um pedido existente.

## Tecnologias Utilizadas

### Back-end
- **.NET 8**: Framework utilizado para construir a API.
- **Entity Framework Core**: ORM utilizado para manipulação do banco de dados MySQL.
- **MySQL**: Banco de dados utilizado para armazenar os pedidos e produtos.

### Front-end
- **Angular**: Framework utilizado para desenvolver a interface gráfica que consome a API.

## Como Executar o Projeto

### Pré-requisitos
- **.NET SDK 8.0** ou superior
- **MySQL Server** configurado
- **Node.js** e **Angular CLI** para o front-end

### Back-end
1. Clone o repositório:
   ```bash
   git clone https://github.com/RoniAndradee/desafio-stefanini.git
   cd seuprojeto

2. Configure a conexão com o banco de dados no arquivo appsettings.json, alterando a string de conexão do MySQL:
   ```json
   "ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=seubanco;User Id=seuusuario;Password=suasenha;"
} ```

3. Execute as migrações para criar o banco de dados:
   ```bash
   dotnet ef database update
   ```

4. Inicie a aplicação:
   ```bash
   dotnet run
   ```

### Front-end

1. Navegue até o diretório do front-end e instale as dependências:

   ```bash
   cd frontend
   npm install
   ```

2. Inicie o servidor de desenvolvimento do Angular:

   ```bash
   ng serve
   ```

3. Acesse o front-end através do navegador no endereço:
   http://localhost:4200
