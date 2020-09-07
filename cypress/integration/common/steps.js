//steps comuns a mais de uma feature.

Given(/^que acesso o site$/, () => {

    //POST 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
    //POST 200 /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
    //GET 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X

    //Para usar rotas ou mocks é preciso startar um servidor cy.server()
    cy.server()
    //criando rota sem mocks
    cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**')
    .as('postNewtable');
    cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**')
    .as('postusertUble');
    cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**')
    .as('getNewtable');  

    // cy.visit('Register.html') é a rota do site que será acessada.
    cy.visit('Register.html');

});