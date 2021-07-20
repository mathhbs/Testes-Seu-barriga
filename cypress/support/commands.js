// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import locs from './locators'


Cypress.Commands.add('login', (email, senha) =>{
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get(locs.LOGIN.INPEMAIL).type(email)
    cy.get(locs.LOGIN.INPSENHA).type(senha)
    cy.get(locs.LOGIN.BTNENTRAR).click()
    cy.get(locs.MENSAGENS).should('contain', 'Bem vindo')
})

Cypress.Commands.add('excluirConta', () =>{
    cy.xpath(locs.MENU.CONTAS).click()
    cy.xpath(locs.CONTAS.LISTAR).click()
    cy.xpath(locs.LISTARCONTAS.EXCLUIRCONTA).click()
    cy.get(locs.MENSAGENS).should('contain', 'Conta removida com sucesso!')
})
