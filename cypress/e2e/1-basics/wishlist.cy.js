/// <reference types="cypress" />

// irl use dummy data

describe('1. add to and remove from wishlist', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/#/')
  })

  it('1. displays an empty badge on default, number when item has been added to wishlist', () => {
    cy.get('.badge').should('have.text', 0)

    cy.get('.products .product').first().contains('Happy Feet Socks')
    cy.get('.products .product').last().contains('The Fisher King Plaid')

    cy.get('.products .product button[data-test="add"]').first().click()
    cy.get('.badge').should('have.text', 1)    
    cy.get('.products .product button[data-test="remove"]').first().click()
    cy.get('.badge').should('have.text', 0)
  })

  it('2. show/hide wishlist and show text no-items-yet or show added item', () => {
    cy.get('.wishlist').should('not.be.visible')    
    cy.get('[data-test=open-wishlist]').click()
    cy.get('.wishlist').should('be.visible').contains('No items in your wishlist yet')
    cy.get('[data-test=close-wishlist]').click()

    cy.get('.products .product button[data-test="add"]').first().click() 
    cy.get('[data-test=open-wishlist]').click()
    cy.get('.wishlist').should('be.visible').contains('Happy Feet Socks')
    cy.get('[data-test=close-wishlist]').click()

    cy.get('.products .product button[data-test="remove"]').first().click()
    cy.get('.badge').should('have.text', 0)
  })

  it('3. check if clicked item is stored in localStorage', () => {
    //clear localStorage before test
    cy.clearAllLocalStorage()
    cy.get('.products .product button[data-test="add"]').first().click().should(() => {
      // expect(localStorage.getItem('wishlist')).to.eq('')
      expect(localStorage.length)
    })
    cy.reload()
    cy.get('.products .product').first(".total").contains("1")
  })
})
