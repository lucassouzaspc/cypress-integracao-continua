# cypress-integracao-continua
# Sobre o projeto

O projeto foi um treinamento (Semana Agilizei 1.0) de automação de testes com Cypress, do zero à integração contínua.
As automações de testes de interface foram aplicadas ao site http://demo.automationtesting.in/ utilizando Cypress.

# Requisitos

Instalar o Node.js

Iniciar o projeto com o comando npm install 

# Execução das specs

Para visualizar os testes no navegador executar npm run cy:open 

Para executar testes em modo headless executar npm run cy:run

# Execução das features implementadas com o cucumber

Para executá-lo no navegador npm run cy:open:cucumber

Para executá-lo em modo headless npm run cy:run:cucumber

# Relatórios

Para gerar relatórios, foram usados dois reports generators o Mochawesome e Cucumber HTML Reports

Gerando relatório com Mochawesome:

npm run report:merge 

npm run report:mocha

Gerando relatório com Cucumber HTML Reports:

npm run report:cucumber

# Integração contínua 

Foi utilizado o Github Actions para a integração contínua do projeto

Link: https://github.com/lucassouzaspc/cypress-integracao-continua/runs/1092928217?check_suite_focus=true
