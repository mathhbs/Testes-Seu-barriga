/// <reference types="cypress-xpath" />

import locs from '../../support/locators'

describe('Testes funcionais do site Seu Barriga - Conta', () => {
    beforeEach(() => {
        cy.login('mathhbs@mathhbs.com', '123456')
        
    })

    it('Adicionar Conta', () => {
        cy.excluirConta()
        cy.xpath(locs.MENU.CONTAS).click()
        cy.xpath(locs.CONTAS.ADICIONAR).click()
        cy.get(locs.ADDCONTAS.NOMECONTA).type('Conta Adicionada')
        cy.get(locs.ADDCONTAS.BTNSALVAR).click()
        cy.get(locs.MENSAGENS).should('contain', 'Conta adicionada com sucesso!')
    })

    it('Editar uma conta', () => {
        cy.xpath(locs.MENU.CONTAS).click()
        cy.xpath(locs.CONTAS.LISTAR).click()
        cy.xpath(locs.LISTARCONTAS.EDITARCONTA).click()
        cy.get(locs.ADDCONTAS.NOMECONTA)
            .clear()
            .type('Conta foi alterada')
        cy.get(locs.ADDCONTAS.BTNSALVAR).click()
        cy.get(locs.MENSAGENS).should('contain', 'Conta alterada com sucesso!')
    })

    

})