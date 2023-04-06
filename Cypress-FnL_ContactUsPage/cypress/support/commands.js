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

Cypress.Commands.add('checkHeader',($headerText)=>{
    cy.get('h1').contains($headerText).should('be.visible')
})

Cypress.Commands.add('typeInput',($inputName,$text)=>{
    cy.get("input[name='"+$inputName+"']").type($text,{force: true})
})

Cypress.Commands.add('checkMandatoryErrorMsg',($divName,$errMsg)=>{
    cy.get($divName+" label[class='hs-error-msg hs-main-font-element']")
    .should('have.text',$errMsg)
})

Cypress.Commands.add('typeByID',($idvalue,$textType)=>{
    cy.get($idvalue).type($textType)
})

