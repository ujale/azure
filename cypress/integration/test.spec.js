/// <reference types="Cypress"/>

describe ('Google search page', function () {
    it ('Launch google search page', function() {
        cy.visit('https://www.google.com/', { retryOnNetworkFailure: true });
        cy.wait(3000);
        cy.get('.lnXdpd').should('be.visible');
        cy.get('.gLFyf').type('cypress.io{enter}');
    })
})
