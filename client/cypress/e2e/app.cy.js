/// <reference types="Cypress"/>

describe('App Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Adds number into state and renders the button', () => {
        cy.get('input').type(100)
        cy.get('button').should('have.text', 'Reveal Primes!')
    })

    it('Changes the text of a button after calculation', () => {
        cy.get('input').type(3)
        cy.get('button').click()
        cy.get('button').should('have.text', 'Reset Primes!')
    })

    it('Should have 3 prime numbers', () => {
        cy.get('input').type(5)
        cy.get('button').click()
        cy.get('.prime-number-wrapper').find('.prime-number').should('have.length', 3)
    })

    it('Should reset prime numbers and remove them from page', () => {
        cy.get('input').type(10)
        cy.get('button').click()
        cy.get('.prime-number-wrapper').find('.prime-number').should('have.length', 4)
        cy.get('button').click()
        cy.get('prime-number-wrapper').should('not.exist')
    })
})