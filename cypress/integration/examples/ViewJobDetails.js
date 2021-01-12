/// <reference types="Cypress" />


describe ('RecruiterBox', function()
{
   it('View jobs based on Filters', function()
   {
         cy.visit("https://sdetapplication.recruiterbox.com/")
         cy.get('.rb-scrollable-area').contains('United States').click()
         cy.get('.rb-scrollable-area').contains('Colorado').click()
         cy.get('.rb-scrollable-area').contains('Denver').click()
         cy.get('.rb-scrollable-area').contains('Engineering').click()
             
    }    )

    it('Click on the job to view the jobdetails', function()
    {
      cy.get('h3').contains('Developer').click()

    } )

       }


)