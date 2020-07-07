# Projeto "RocketBox"

<br>
<img src="/mobile/src/assets/logo.png">
<br>

## Projeto desenvolvido no evento OmniStack 06.0 fornecido pela empresa RocketSeat.

Nessa semana, foi desenvolvido uma aplicação full stack integrando backend (com NodeJS), frontend (com ReactJS) e mobile (com React-Native).
<br>
<br>
A linguagem de programação utilizada foi o **`Javascript`**.

<br>
Esse projeto visa armazenar arquivos em boxes on real time.

<br>
<br>
<img src="/uploads/foto1.png">
<br>

### 1. Backend

Para o backend, foram utilizadas ferramentas como `express`, `mongoose`, `cors`, `multer` e `socket.io`. 
<br>
O backend foi construido utilizando os padrões de código da airbnb com o auxílio do `eslint` e do `prettier`.
<br>
<br>
Foram feitas as seguintes funcionalidades:
  1. Models;
  2. Controllers;
  3. Conexão com banco de dados;
  4. Criação das rotas;
  5. Uploads de arquivos;
  6. Aplicação on real time.

<br>

### 2. Frontend

Para o frontend, foram utilizadas ferramentas como `axios`, `react-router-dom`, `react-dropzone`, `date-fns` e `socket.io-client`. 
<br>
O frontend foi parcialmente construido utilizando o `styled-components`.
<br>
<br>
Possui duas telas: 
  1. Tela inicial para entrar no box (ou cadastrar caso não exista);
  2. Realizar upload e visualização de arquivos.

<br>
<img src="/uploads/foto2.png">
<br>

### 3. Mobile

Foi utilizando o React-Native com o `Expo` para a criação da aplicação mobile.
<br>
Para o mobile, foram utilizadas ferramentas como `axios`, `react-navigation`, `expo-image-picker`, `date-fns` e `socket.io-client`. 
<br>
<br>
Possui duas telas: 
  1. Tela inicial para entrar no box (ou cadastrar caso não exista);
  2. Realizar upload e visualização de arquivos.

<br>
<img src="/uploads/foto3.png">
<br>

### 4. Funcionalidade On Real Time

Ao realizar upload, as telas de todos os dispositivos serão atualizados automaticamente.
<br>
Essa funcionalidade é devida ao `socket.io` e `socket.io-client`.

<br>
<img src="/uploads/foto4.png">
<br>
