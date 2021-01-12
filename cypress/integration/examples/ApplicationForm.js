/// <reference types="Cypress" />
import 'cypress-file-upload';

describe ('RecruiterBox', function()
{
   it('View jobs based on Filters', function()
   {
       cy.visit("https://sdetapplication.recruiterbox.com/")
       cy.contains('United States').click()
       cy.contains('Colorado').click()
       cy.contains('Denver').click()
       cy.contains('Engineering').click()
             
    }    )

    it('Click on the job to view the jobdetails', function()
    {
      
      cy.contains('Developer').click()

    } )

    it('Click on Apply button', function()
    {
    cy.wait(4000)
    cy.get('.btn-primary').contains('Apply').click()
   
      }  )
      it('Enter details into Application Form', function()
      {
         //First Name
         cy.get('#id_first_name').type('ABB')
         // Last Name
         cy.get('#id_last_name').type('SD')   
         //Email
         cy.get('#id_email').type('abcd@gmail.com') 
         //Phone number
         cy.get('#id_phone').type('9456343765') 
         //Resume upload
         const fixurepath = 'Cypress.docx'
         cy.get('#id_resume').attachFile(fixurepath)
         //Cover letter upload   
         const fixurepath1 = 'timestamp.jpg'
         cy.get('#id_cover_letter').attachFile(fixurepath1)
         //desired salary
         cy.get('#id_desired_salary').type('10')
         //Driver's License
         cy.get('#id_do_you_have_a_driver_s_license').select('Yes').should('have.value','Yes')
         //Favourite color
         cy.get('#id_what_is_your_favorite_color').type('Blue')
         //preferred to have day off
         cy.get('#id_what_days_do_you_prefer_to_have_off').type('sunday')
         //Preferred method to contact
         cy.get('#id_what_is_your_preferred_method_for_us_to_contact_you').select('Email').should('have.value','Email')
      })
      it('Click on Submit Application button', function()
      {
        cy.get('#input_application_form_submit').click()
      }
        )
         it('Success message', function()
         {
           cy.wait(2000)
           cy.get('p').contains('Your application has been submitted successfully')
         }
)

     //.meta-app-success-message
}   
   )

 