/// <reference types="cypress" />

describe('Phonebook', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('add a new')
  })
  it('numbers can be saved', function () {
    cy.get('form').within(() => {
      cy.get('input:first').type('Pamela')
      cy.get('input:last').type('12345678')
      cy.get('button').click()
    })
    cy.contains('Pamela\'s number')
  })
})