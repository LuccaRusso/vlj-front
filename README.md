---

# Projeto VLJ Carnes

Este projeto é uma aplicação de vendas online para uma empresa fictícia chamada **VLJ Carnes**, especializada na comercialização de carnes. O site permite que os clientes naveguem entre diferentes categorias de carnes, adicionem produtos ao carrinho, se cadastrem e realizem compras.

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção da interface de usuário.
- **React Router** - Biblioteca para navegação entre diferentes páginas da aplicação.
- **CSS** - Para o estilo visual da aplicação.
- **API** - Para inserir valores no banco, como usuário e produtos

## Funcionalidades

### Páginas Principais
1. **Home**: Página inicial com um slider de promoções e links para diferentes tipos de carnes.
2. **Bovinos**: Exibe carnes bovinas com opção de adicionar ao carrinho.
3. **Aves**: Exibe carnes de aves, como frango, com opção de compra.
4. **Suínos**: Exibe carnes suínas, como costela de porco.
5. **Pescados**: Exibe pescados, como filé de merluza.
6. **Carrinho**: Página onde os usuários podem visualizar os itens adicionados ao carrinho, alterar quantidades e remover itens.
7. **Cadastro**: Página para o cadastro de novos usuários, onde são solicitados dados como nome, e-mail, senha e endereço.
8. **Compra Sucesso**: Página de confirmação de compra após a finalização do pedido.

### Recursos
- **Carrinho de Compras**: Os itens podem ser adicionados, removidos e a quantidade pode ser alterada diretamente no carrinho.
- **Cadastro de Usuário**: Permite que os clientes se cadastrem para realizar compras, salvando seus dados no localStorage.
- **Roteamento Dinâmico**: Uso do `react-router-dom` para navegação entre as diferentes páginas da aplicação.

## Como Rodar o Projeto

### Requisitos
- **Node.js** - Certifique-se de que o Node.js está instalado na sua máquina.
- **npm** ou **yarn** - Gerenciadores de pacotes para instalar as dependências do projeto.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/vlj-carnes.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd vlj-carnes
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   # ou
   yarn start
   ```

5. A aplicação estará disponível no seu navegador em `http://localhost:3000`.

## Estrutura do Projeto

```plaintext
/src
|-- components
|   |-- pages
|   |   |-- Home.js
|   |   |-- Bovino.js
|   |   |-- Ave.js
|   |   |-- Suino.js
|   |   |-- Pescado.js
|   |   |-- Carrinho.js
|   |   |-- Cadastro.js
|   |   |-- CompraSucesso.js
|-- layout
|   |-- Navbar.js
|   |-- Footer.js
|   |-- Slider.js
|-- assets
|   |-- peito_frango.webp
|   |-- contra_file.jpg
|   |-- costelinha-suina.png
|   |-- file-merluza.jpg
|-- App.js
|-- index.js
|-- styles
|   |-- Home.module.css
|   |-- Carrinho.module.css
|   |-- Cadastro.module.css
|   |-- ...
```

## Considerações Finais

- O projeto utiliza um banco SQL para salvar os dados do carrinho e do usuário.
- A aplicação simula o processo de compra, mas a integração real com um backend para processamento de pagamento e cadastro do usuário.
- O estilo visual é responsivo, adaptando-se a diferentes tamanhos de tela.

---

Esse README fornece uma descrição clara do funcionamento do seu projeto, desde a instalação até a estrutura do código. Ele também cobre as funcionalidades essenciais da aplicação e como rodá-la localmente.
