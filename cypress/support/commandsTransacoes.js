import locs from './locators'

Cypress.Commands.add('criarMovReceitaPendente', (tipo, dataMov, datapgto, desc, interessado, valor, conta) => {
    cy.xpath(locs.MENU.CRIARMOVIMENTACAO).click()
    cy.get(locs.CRIARMOVIMENTACAO.TIPOMOVIMENTACAO)
        .select('Receita')   
        .should('have.value', tipo)
    cy.get(locs.CRIARMOVIMENTACAO.DATAMOVIMENTACAO).type(dataMov)
    cy.get(locs.CRIARMOVIMENTACAO.DATAPAGTO).type(datapgto)
    cy.get(locs.CRIARMOVIMENTACAO.DESCRICAO).type(desc)
    cy.get(locs.CRIARMOVIMENTACAO.INTERESSADO).type(interessado)
    cy.get(locs.CRIARMOVIMENTACAO.VALOR).type(valor)
    cy.get(locs.CRIARMOVIMENTACAO.CONTA)
        .select('Conta Adicionada')
        .should('have.value', conta)
    cy.get(locs.CRIARMOVIMENTACAO.SITUACAO_PENDENTE)
        .click()
        .should('be.checked')
    cy.xpath(locs.CRIARMOVIMENTACAO.BTN_SALVAR).click()
    
})