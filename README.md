# Desafio-Puma

Intruções do desafio são encontradas [aqui](https://github.com/jsfelix/puma-code-challenge)

Codigo por João Gabriel de Campos de Matos.

## Tecnologias

### Backend

Foi utilizado o `NodeJs` com o framework `Express`, para o desenvolvimento da API. Também foram utilizadas as bibliotecas `fs` e `jest` para lidar com a persistencia das informações enviadas para a API ( as mesmas sendo salvas em arquivo local) e para o desenvolvimento dos testes unitários.
#### Detalhes do backend
* `src/utils/fileManipulation.ts`: Neste arquivo se encontram as funções `clean`, `load` e `save`, sendo estas responsaveis por diretamente manipular o arquivo que armazena os dados.
* `src/controllers.ts`: Aqui se encontram funções que utilizam as citadas acima para manipular os dados armazenados conforme as regras de negocio definidas.
* `src/routes.ts`: Neste arquivo, as funções encontradas no arquivo citado acima são associadas a uma rota e método HTTP.
* `src/data/`: Neste diretorio se encontram os arquivos que armazenam os dados da aplicação.
* `src/__testes__/`: Nesta pasta se encontram os testes unitarios das funções encontradas em `controllers.ts` e `filemanipulation.ts`.


### Frontend
Foi utilizado o `React` para o desenvolvimento da interface, com auxilio da biblioteca `axios` para consumir as APIS. 

### Detalhes do frontend

* `src/assets/`: Armazena as imagens utilizadas na interface(icones).
* `src/components/`: Onde se encontram os diversos componentes que formam a pagina home.
* `src/pages/home/home.tsx`: Pagina principal da aplicação, onde os componentes são chamados.
* `src/context/index.ts`: Possui variaveis e funções que devem ser acessadas por diversos componentes, é onde se encontra boa parte da logica da aplicação (uso das APIs, distribuições das informações por todo o frontend).
  
### Detalhes gerais da aplicação
* A verificação da existencia de um usuário no github com o username fornecido ocorre apenas no frontend, com o mesmo encaminhando essas informações para o backend após essa verificação.
* Ambos frontend e backend previnem ,individualmente, que se cadastre usuários repetidos e que se tenha mais que cinco armazenados simultaneamente.

## Como executar a aplicação

1. Instale o nodeJs, versão LTS, na sua maquina.
2. Navegue pelo terminal até a pasta backend, e uma vez dentro dela, execute os comandos:
   
   ```bash
    npm install && npm start
   ```

3. Navegue pelo terminal até a pasta frontend, e uma vez dentro dela, execute os comandos:

    ```bash
       npm install && npm start
    ```
4. Abra seu navegador em `http://localhost:3000/` para acessar a aplicação.

5. Para executar os testes unitários, navegue pelo terminal até a pasta backend e execute os comandos:
    ```bash
       npm install && npm test
    ```
* Obs: é necessario que o backend esteja sendo executado para que o frontend funcione.
