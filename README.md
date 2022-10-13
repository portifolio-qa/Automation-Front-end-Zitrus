# Project - Automation Front-end Zitrus

    Este projeto, foi desenvolvido para o cliente: Zitrus. Neste projeto, o objetivo é checar as habilidades básicas de automação e cenários de testes.

# Requisitos do Projeto

- [X] Casos de teste em linguagem Gherkin, framework de livre escolha, porém com a justificativa
- [X] Testes automatizados front-end com framework de livre escolha
- [X] Cenário 1 - Conhecer a Estória da Zitrus
- [ ] Cenário 2 - Acessar a Página de vagas opção Analista de Qualidade de Software Sênior
- [ ] Demais cenários (Plus)
- [X] Site da Zitrus: https://zitrus.com.br/
- [X] Sugestão Cypress Framework (https://docs.cypress.io/guides/overview/why-cypress#End-to-end)
- [X] Realizar o upload dos projetos no GitHub em um repositório público
- [ ] Encaminhe o endereço para Zitrus
- [X] Faça um README objetivo e limpo
- [X] Informar como fazer o download do projeto, configurações e como executar os testes
- [ ] Por favor, notificar por e-mail que os testes foram encerrados
- [X] Contar os desafios encontrados durante o teste

# Técnicas de testes escolhidas:

O projeto de teste apresenta as seguintes tecnologias:

- Desenvolvido SO Windows 10 Profisional;
- NodeJs node-v16.18.0-x64;
- Cypress.io v10: framework de testes web;
- Cucumber: biblioteca de testes de aceitação web;
- BDD: para testes de negócio;
- Linguagen Gherkin: Cucumber boilerplate (BDD para javascript), biblioteca cypress-cucumber-preprocessor
- Desing Patterns: Page Objects

# Estrutura do Projeto:

![1665612157638](https://file+.vscode-resource.vscode-cdn.net/d%3A/D-www/Automation-Front-end-Zitrus/image/README/1665612157638.png) **Automation-Front-end-Zitrus:** Pasta principal do projeto

    ![1665612157638](https://file+.vscode-resource.vscode-cdn.net/d%3A/D-www/Automation-Front-end-Zitrus/image/README/1665612157638.png) **cypress:** Pasta do framework Cypress

   *![1665612157638](image/README/1665612157638.png) **e2e*****:** Arquivos de teste

    ![1665612157638](https://file+.vscode-resource.vscode-cdn.net/d%3A/D-www/Automation-Front-end-Zitrus/image/README/1665612157638.png) **features**: funcionalidades do projeto

    ![1665612157638](https://file+.vscode-resource.vscode-cdn.net/d%3A/D-www/Automation-Front-end-Zitrus/image/README/1665612157638.png) **step_definitions**:

   *![1665610096653](image/README/1665610096653.png) **Fixtures:***Arquivos estáticos que seram consumidos pelos teste

    ![1665610096653](https://file+.vscode-resource.vscode-cdn.net/d%3A/D-www/Automation-Front-end-Zitrus/image/README/1665610096653.png) **Pages:** Padrão page objects

    ![1665610096653](https://file+.vscode-resource.vscode-cdn.net/d%3A/D-www/Automation-Front-end-Zitrus/image/README/1665610096653.png) **screenshots:** Evidências (prints) dos testes que falharam

    ![1665610096653](image/README/1665610096653.png) **Suport:** Pasta default do cypress para comandos e configurações

    ![1665610096653](https://file+.vscode-resource.vscode-cdn.net/d%3A/D-www/Automation-Front-end-Zitrus/image/README/1665610096653.png) **videos:** Evidências dos testes em videos dos testes

    -![1665610182954](image/README/1665610182954.png) Arquivo cypress.json:

    -![1665610182954](image/README/1665610182954.png) Arquivo [commandjs](https://docs.cypress.io/api/table-of-contents "Doc Comandos Cypress"): Comandos do cypress

    -![1665610182954](image/README/1665610182954.png) Arquivo e2e: Primeiro arquivo carregado do cypress, tudo que precisa antes rodar os testes

    ![1665610096653](https://file+.vscode-resource.vscode-cdn.net/d%3A/D-www/Automation-Front-end-Zitrus/image/README/1665610096653.png) **videos:** Evidências dos testes em vídeo

-![1665610182954](image/README/1665610182954.png) **cypress-cucumber-preprocessorrc.json:** Biblioteca Javascript de BDD Cucumber

-![1665693518726](image/README/1665693518726.png)**gitignore:** Arquivos que serão ignorados ao realizar os commits

-![1665610182954](image/README/1665610182954.png) **cucumber-html-report.js:** Gera relatório dos testes

-![1665610182954](image/README/1665610182954.png) **cypress.config.js:** Único arquivo que não roda dentro do browser, roda no nodejs (o que o browser não consegue rodar, roda aqui). Exemplo: Conexão banco dados.

-![1665610182954](image/README/1665610182954.png) **pakage.json:** Informações do projeto.

-![1665692951598](image/README/1665692951598.png)**README.md:** Documentação do Projeto

# Execuçao do projeto:

- `gitclone https://github.com/portifolio-qa/Automation-Back-end-Zitrus.git`

# Execução Testes:

`executar o comando dentro do projeto: npx cypress open`

# Justificativa Utilizar Cucumber Linguagem Gherkin:

    A justificativa de utilizar o Cucumber boilerplate, pois utilizar BDD com javascript, biblioteca (cypress-cucumber-preprocessor), é que ele se adapta ao processo de desing orientado por comportamento (BDD), que incentiva a comunicação e colaboração entre as pessoas de negócio, desenvolvimento e testes. Quando definimos novos requisitos e histórias, podemos utilizar a linguagem Gherkin, que utiliza exemplos concretos dessas interações do usuário e respostas a aplicação. Com isso, a justificativa para utilizar o Cucumber, é que com ele é possível automatizar as estórias do Gherkin.

# Desafios encontrados durante o teste:

* A página da Zitrus não possui o atributo data-test que é uma boa prática e as classes, possuem os nomes extensos,  com o atributo data-test, nada seria mudado nunca, diferente dos demais atributos padrões do projeto. Caso ocorra um deploy no site e os atributos selecionados mudem, será necessário, atualização dos testes.
* A configuração do BDD, Cucumber com Gherkin no cypress, foi um pouco demorado, com a versão 10 do Cypress, aconteceu alguns erros e foi necessário criar uma nova arquitetura para o projeto para que não perdesse as boas práticas da automação.
