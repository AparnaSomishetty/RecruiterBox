/// <reference types="Cypress" />


describe ('RecruiterBox', function()
{
   it('Jobs through Search box', function()
   {
       cy.visit('https://sdetapplication.recruiterbox.com/')
       cy.get('.js-careers-page-search-bar').type('Account Executive')
       cy.get('.rb-input__button').click()
       cy.contains('Account Executive').click()  
       cy.wait(2000) 
       cy.get('.apply-with-indeed').contains('Apply with Indeed').click()
       
       }
   )
}
)