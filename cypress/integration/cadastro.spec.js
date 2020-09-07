/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
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

        // o comando type é utilizado pra digitr texto é um campo
        cy.get('input[placeholder="First Name"]').type(chance.first())
        cy.get('input[placeholder="Last Name"]').type(chance.last())
        cy.get('input[type="email"]').type(chance.email());
        cy.get('input[type="tel"]').type(chance.phone({formatted: false}));
    
        // o comando check é utilizado para iteração radio´s e checkboxes
        cy.get('input[value="FeMale"]').check();
        cy.get('input[type="checkbox"]').check('Cricket');
        cy.get('input[type="checkbox"]').check('Hockey');

        // o comando select é utilizado para iteração com selects e selects2(como))
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('Australia', {force: true}); //{force: true} usado para forçar iteração com elementos ocultos.

        cy.get('select#yearbox').select('1996');
        cy.get('select[ng-model="monthbox"]').select('February');
        cy.get('select#daybox').select('24');

        cy.get('input#firstpassword').type('Agilizei@2020');
        cy.get('input#secondpassword').type('Agilizei@2020');
 
        //Adicionando arquivo com attachFile
        cy.get('input#imagesrc').attachFile('imagem-foto.png');
        //click
        cy.get('button#submitbtn').click();

        //Interagindo e validando com as rotas

        cy.wait('@postNewtable').then((resNewtable) => {
        // chai
        expect(resNewtable.status).to.eq(200)  
        })

        cy.wait('@postusertUble').then((resUsertable) => {
          expect(resUsertable.status).to.eq(200)
        })

        cy.wait('@getNewtable').then((resNewtable)=> {
          expect(resNewtable.status).to.eq(200)
        })

        cy.url().should('contain', 'WebTable');
    });
});

//input[placeholder="First Name"]
//input[placeholder="Last Name"]
//input[type="email"]
//input[type="tel"]

//Elemento radio´s e checkboxes
//input[value="FeMale"]
//input[type="checkbox"]

// elemento Select
//select#Skills
//select#countries
//select#country
//select#yearbox
//select[ng-model="monthbox"]
//select#daybox

//input#firstpassword
//input#secondpassword

//input#imagesrc

//button#submitbtn