/// <reference types="cypress" />

let Chane = require('chance');
let chance = new Chance();

When(/^informar meus dados$/, () => {

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
});

When(/^salvar$/, () => {

    //click
    cy.get('button#submitbtn').click();  

});

Then(/^devo ser cadastrado com sucesso$/, () => {

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
