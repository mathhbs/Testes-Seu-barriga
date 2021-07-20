/// <reference types="cypress-xpath" />

import locs from '../../support/locators'
import '../../support/commandsTransacoes'

describe('Testes funcionais do site Seu Barriga - Conta', () => {
    
    beforeEach(() => {
        cy.login('mathhbs@mathhbs.com', '123456')
        
    })

    it('Verificar mensagem campo numérico - Valor', () => {
        cy.criarMovReceitaPendente('REC', '15/07/2021', '19/07/2021', 'Automatizando movimentação', 'Fulano', 'TESTE', '699075')
        cy.get(locs.MENSAGENS_ERRO).should('contain', 'Valor deve ser um número')
    })

    it('Add Movimentação Receita - Pendente', () => {
        cy.criarMovReceitaPendente('REC', '15/07/2021', '19/07/2021', 'Automatizando movimentação', 'Fulano', '200', '699075')
        cy.get(locs.MENSAGENS).should('contain', 'Movimentação adicionada com sucesso!')
    })

    it('Verificar Campos Data', () => {
        cy.criarMovReceitaPendente('REC', '15072021', '19//07/21', 'Automatizando movimentação', 'Fulano', '200', '699075')
        cy.get(locs.MENSAGENS_ERRO).should('contain', 'Data da Movimentação inválida (DD/MM/YYYY)')
        cy.get(locs.MENSAGENS_ERRO).should('contain', 'Data do pagamento inválida (DD/MM/YYYY)')
    })


})