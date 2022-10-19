# Project - Automation Front-end Zitrus

Este projeto, foi desenvolvido para o cliente: Zitrus. 
Neste projeto, o objetivo é checar as habilidades básicas de automação e cenários de testes.

# Requisitos do Projeto

- [X] Casos de teste em linguagem Gherkin, framework de livre escolha, porém com a justificativa
- [X] Testes automatizados front-end com framework de livre escolha
- [X] Cenário 1 - Validate from Home Page 
- [X] Cenário 2 - Validate Main Page Address r
- [X] Site da Zitrus: https://zitrus.com.br/
- [X] Sugestão Cypress Framework (https://docs.cypress.io/guides/overview/why-cypress#End-to-end)
- [X] Realizar o upload dos projetos no GitHub em um repositório público
- [X] Encaminhe o endereço para Zitrus
- [X] Faça um README objetivo e limpo
- [X] Informar como fazer o download do projeto, configurações e como executar os testes
- [X] Por favor, notificar por e-mail que os testes foram encerrados
- [X] Contar os desafios encontrados durante o teste

# Técnicas de testes escolhidas:

O projeto de teste apresenta as seguintes tecnologias:

- Desenvolvido SO Windows 10 Profissional;
- NodeJs node-v16.18.0-x64;
- Cypress.io v10: framework de testes web;
- Cucumber: biblioteca de testes de aceitação web;
- BDD: para testes de negócio;
- Linguagem Gherkin: Cucumber boilerplate (BDD para Java script), biblioteca cypress-cucumber-preprocessor
- Desing Patterns: Page Objects

# Estrutura do Projeto:

`<img src="image/README/icon_folder.png"/>` **Automation-Front-end-Zitrus:** Pasta principal do projeto

`<img src="image/README/icon_folder.png"/>` **cypress:** Pasta do framework Cypress

`<img src="image/README/icon_folder.png"/>` ***e2e***: Arquivos de teste

`<img src="image/README/icon_folder.png"/>` **features**: funcionalidades do projeto

`<img src="image/README/icon_folder.png"/>` **step_definitions**: Definição de passos para executar os testes

`<img src="image/README/icon_folder.png"/>` **fixtures:** Arquivos estáticos que seram consumidos pelos teste

`<img src="image/README/icon_folder.png"/>` **pages:** Padrão page objects

`<img src="image/README/icon_folder.png"/>` **screenshots:** Evidências (prints) dos testes que falharam

`<img src="image/README/icon_folder.png"/>` **suport:** Pasta default do cypress para comandos e configurações

`<img src="image/README/icon_folder.png"/>` **videos:** Evidências dos testes em videos dos testes

`<img src="image/README/javascript_icon_.png"/>` **Arquivo cypress.json:** Configurações para executar o projetos browser

`<img src="image/README/javascript_icon_.png"/>` **Arquivo [commandjs]**(https://docs.cypress.io/api/table-of-contents "Doc Comandos Cypress"): Comandos do cypress

`<img src="image/README/javascript_icon_.png"/>` **Arquivo e2e:** Primeiro arquivo carregado do cypress, tudo que precisa antes rodar os testes

`<img src="image/README/javascript_icon_.png"/>` **cypress-cucumber-preprocessorrc.json:** Arquivo Biblioteca Javascript de BDD Cucumber

`<img src="image/README/javascript_icon_.png"/>` **.eslintrc.json:** Arquivo  de configurações de boas práticas de codifição JavaScript e Cypress

`<img src="image/README/git_icon_.png"/>` **.gitignore:** Arquivos que serão ignorados ao realizar os commits

`<img src="image/README/javascript_icon_.png"/>` **cucumber-html-report.js:** Arquivo Gera relatório dos testes

`<img src="image/README/javascript_icon_.png"/>` **cypress.config.js:** Único arquivo que não roda dentro do browser, roda no nodejs (o que o browser não consegue rodar, roda aqui). Exemplo: Conexão banco dados.

`<img src="image/README/javascript_icon_.png"/>` **pakage.json:** Arquivo Informações do projeto

`<img src="image/README/javascript_icon_.png"/>` **tsconfig.json:** Arquivo Informações de compilações do projeto

`<img src="image/README/md_file_icon_.png"/>` **README.md:** Documentação do Projeto

# Execução do projeto:

- `gitclone https://github.com/portifolio-qa/Automation-Back-end-Zitrus.git`

# Execução Testes:

`executar o comando dentro do projeto: npx cypress open`

# Justificativa Utilizar Cucumber Linguagem Gherkin:

    A justificativa de utilizar o Cucumber boilerplate, pois utilizar BDD com Java script, biblioteca (cypress-cucumber-preprocessor), é que ele se adapta ao processo de design orientado por comportamento (BDD), que incentiva a comunicação e colaboração entre as pessoas de negócio, desenvolvimento e testes. Quando definimos novos requisitos e histórias, podemos utilizar a linguagem Gherkin, que utiliza exemplos concretos dessas interações do usuário e respostas a aplicação. Com isso, a justificativa para utilizar o Cucumber, é que com ele é possível automatizar as estórias do Gherkin.

# Desafios encontrados durante o teste:

* A página da Zitrus não possui o atributo data-test que é uma boa prática e as classes, possuem os nomes extensos,  com o atributo data-test, nada seria mudado nunca, diferente dos demais atributos padrões do projeto. Caso ocorra um deploy no site e os atributos selecionados mudem, será necessário, atualização dos testes.
* A configuração do BDD, Cucumber com Gherkin no cypress, foi um pouco demorado, com a versão 10 do Cypress, aconteceu alguns erros e foi necessário criar uma nova arquitetura para o projeto para que não perdesse as boas práticas da automação.
* Tempo para construir o PageObject e automações mais complexas.
