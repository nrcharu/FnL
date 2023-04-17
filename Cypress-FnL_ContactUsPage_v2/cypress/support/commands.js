// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/* Custom command to fill Contact Us form with the inputs 
    * First name
    * Last name
    * Email
    * Mobile phone number
    * How did you hear about us
    * Message
 */
Cypress.Commands.add('fillContactUsForm',($FN,$LN,$Email,$Phno,$Aboutus,$message)=>{
    
    //Fetch First name field, enter input data and validate if inputted data is available in the field
    cy.log('Entering First name') 
    cy
    .get('form')
    .findByPlaceholderText('First name*')
    .type($FN)
    .should('have.value',$FN) 

    //Fetch Last name field, enter input data and validate if inputted data is available in the field
    cy.log('Entering Last name')
    cy
    .get('form')
    .findByPlaceholderText('Last name*')
    .type($LN)
    .should('have.value',$LN)

    //Fetch Email field, enter input data and validate if inputted data is available in the field
    cy.log('Entering Email')
    cy
    .get('form').
    findByPlaceholderText('Email*')
    .type($Email)
    .should('have.value',$Email)

    //Fetch Mobile phone number field, enter input data and validate if inputted data is available in the field
    cy.log('Entering Mobile Phone number')
    cy
    .get('form')
    .findByPlaceholderText('Mobile phone number*')
    .type($Phno)
    .should('have.value',$Phno)

    //Fetch How did you hear about us field, select an option
    cy.log('Selecting How did you hear about us')
    cy
    .get('#how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95')
    .select($Aboutus)

    //Fetch Message field, enter input data and validate if inputted data is available in the field
    cy.log('Entering Message')
    cy
    .get("textarea[name='message']")
    .type($message)
    .should('have.text',$message)
})


//Custom command to check the capture the error message based on the combination of selectors
//type 'div' and 'label' and validate is against the given error message
Cypress.Commands.add('checkMandatoryErrorMsg',($divName,$errMsg)=>{
    const $div="div[class='hs_"+$divName+" hs-"+$divName+" hs-fieldtype-text field hs-form-field']"
    cy.get($div+" label[class='hs-error-msg hs-main-font-element']")
    .should('have.text',$errMsg)
})

//Custom command to check the capture the error message based on the combination of selectors
//type 'div' and 'label' and validate is against the given error message in Message Field
Cypress.Commands.add('checkMandatoryErrorMsgMessageField',($errMsg)=>{
    const $div="div[class='hs_message hs-message hs-fieldtype-textarea field hs-form-field']"
    cy.get($div+" label[class='hs-error-msg hs-main-font-element']")
    .should('have.text',$errMsg)
})


import '@testing-library/cypress/add-commands'



