# MEDICAL_365

- ## Sobre

O projeto **MEDICAL_365** consiste em uma Aplicação para gerenciar Consultas e Exames médicos, além do cadastro dos envolvidos em banco de dados localStorage.

De maneira automatizada, é possível acessar rotas via URL para as funções de cadastrar, atualizar, deletar ou consultar os registros cadastrados em seu sistema através da interface Front apresentada.

- ## Tecnologias

A aplicação foi elaborada utilizando as seguintes tecnologias:

-- Scrum como metodologia ágil para listagem e acompanhamento das atividades. Link do Trello com o quadro em Kanban [AQUI](https://trello.com/b/joUG7pc1/labmedicalgabrielbrito)

-- Vite com React e seus Hooks para gerenciamento de estados;

-- Bibliotecas auxiliares como yup, formik e prop-types para validações de formulários;

-- React-router-dom para roteamento de páginas;

-- React-icons, styled-components e bootstrap para estilização de propriedades;

-- Os registros são armazenados via localStorage e sua arquitetura componentizada permite fácil uso e identificação do código.

- ## Instalando recursos

Requisitos iniciais: possuir um web browser com javascript habilitado para execução dos scripts;

Inicie o versionamento GIT em um diretório local:
```bash
git init
```

Clone o repositório Github:
```bash
git clone https://github.com/briitogabriel/LABMedical_React.git
cd Medical365_FRONT
```

Instale as dependências de execução:
```bash
npm install
```

Agora então, inicie sua aplicação com o script abaixo (já configurado no package.json):
```bash
npm run dev
```

O console deve exibir a mensagem abaixo indicando que o App está online.
``` bash
VITE v4.4.2  ready in 6689 ms
➜  Local:   http://localhost:5173/
```


 - ## Acessando a Aplicação localmente

Utilizando seu web browser de preferência (sugestão: Google Chrome), acesse a porta indicada no console (http://localhost:5173/) para navegar entre as páginas.

- **/login**  => Rota inicial para Cadastro de usuários e validação de acesso/login ao sistema.

- **/**  => Homepage com informações gerenciais do sistema, como visualização de estatísticas de pacientes, consultas, exames e resumos dos pacientes. Todas as rotas autenticadas possuem 2 componentes fixos: o Menu lateral que exibe opções para cadastros e listagens gerais, além de botões para direcionamento à homepage e Logout, e o componente de Toolbar, que exibe informações do usuário logado no sistema.

OBS: O usuário padrão pré cadastrado é o ADMIN:

```bash 
  e-mail: admin@admin.com
  password: admin123
```

- **/register-patient**  => Cadastrar/atualizar pacientes. Possui um Formulário com validações dos campos obrigatórios.

- **/register-appointment**  => Cadastrar/atualizar consultas. Possui um Formulário com validações dos campos obrigatórios.

- **/register-exam**  => Cadastrar/atualizar exames. Possui um Formulário com validações dos campos obrigatórios.

- **/medical-records**  => Listagem dos pacientes cadastrados com opções para ver mais detalhes dos seus registros.

- **/patient-records/:id**  => Listagem dos prontuários do paciente em questão.

 - ## Melhorias futuras

Este sistema está na v1, portanto ainda não possui opção para recuperação de senha ou integração com back-end para armazenamento de informações na nuvem. A ideia é que tudo seja hospedado de forma remota futuramente, evitando o uso do localStorage, além da integração com bibliotecas que efetuem a encriptação dos dados sensíveis dos seus usuários.