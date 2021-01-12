/// <reference types="Cypress" />


describe ('RecruiterBox', function()
{
   it('Jobs through Search box', function()
   {
       cy.visit('https://sdetapplication.recruiterbox.com/')
       cy.wait(2000)
       cy.get('.js-careers-page-search-bar').type('AAAAAAA')
       cy.get('.rb-input__button').click()
       cy.get('.btn').contains('Clear all filters').click()
       cy.scrollTo(0,250)
       
       }
   )
}
)