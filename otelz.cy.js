/// <reference types="cypress" />

context('Actions', () => {
  before(() => {
    cy.visit('https://www.otelz.com/')
  })

  
  it('step 1', () => {
    
    cy.url().should('eq','https://www.otelz.com/')
  })

  it('step 2', () => {
   
    cy.get('[data-testid="locationSearchBtn"]')
      .type('istanbul').should('have.value', 'istanbul')

      cy.get('[data-testid="locationSearchBtn"]')
      .clear()
      .should('have.value', '')
  })
  it('step 3', () => {
   
    cy.get('[data-testid="locationSearchBtn"]')
      .type('adilcevaz').should('have.value', 'adilcevaz')
     
    
  })
  it('step 4', () => {
    cy.get('.active > .name').click()
    cy.get('.sc-a26d6d0-0 > .type_0').click()
    cy.get(':nth-child(3) > .react-datepicker__month > :nth-child(4) > .react-datepicker__day--022').click()
    cy.get(':nth-child(4) > .react-datepicker__day--024').click()
    cy.get('#searchbar_1 > :nth-child(1) > .btn').click()

  })
  it('step 5', () => {
   
   cy.get('[data-testid="otel-1"] > :nth-child(1)').click()
   cy.get('.navigation > :nth-child(1) > div').click()
   
  })
  it('step 6', () => {
   
    cy.get(':nth-child(1) > .select > div > .roomSelectBox')
    .select(1)
    cy.get('#totalPrice > .btn').click()
   })
   it('step 7', () => {
   
    cy.get('#guestInformationForm')
    .find('[placeholder="Adı"]').type('Oğulcan')
    cy.get('#guestInformationForm')
    .find('[placeholder="Soyadı"]').type('Karacan')
    cy.get('#guestInformationForm')
    .find('[placeholder="E-posta"]').type('deneme@gmail.com')
    cy.get('#guestInformationForm')
    .find('[placeholder="555 555 55 55"]').type('555 555 56 56')
    cy.get(':nth-child(2) > .checkbox-wrapper > .sc-5786371d-0 > .input-wrapper > [data-testid="test"]').click()
    cy.get('.col-12 > .row > :nth-child(2) > .btn').click()


  })
  it('step 8', () => {
    cy.get(':nth-child(4) > .type > .row').contains('Online öde') 
  })
 
})
