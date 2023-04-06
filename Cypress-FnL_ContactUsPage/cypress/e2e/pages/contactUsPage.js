/// <reference types="Cypress" />

class contactUsPage{

    static checkContactUsHeader(){
        cy.checkHeader('Contact')
    }

    static typeFirstName($FN){
        cy.typeInput('firstname',$FN)
    }

    static typeLastName($LN){
        cy.typeInput('lastname',$LN)
    }

    static typeEmail($email){
        cy.typeInput('email',$email)
    }

    static typePhoneNum($Phno){
        cy.typeInput('mobilephone',$Phno)
    }

    static typeMessage($msg){
        cy.get("textarea[name='message']").type($msg,{force: true})
    }

    static selectAboutUs($option){
        cy.get('#how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95').select($option,{force: true})
    }

    static clickSendMessageButton(){
        cy.get("input[value='Send Message >']").click({force: true})
        
    }

    static checkFirstNameErrorCheck(){
        cy.checkMandatoryErrorMsg("div[class='hs_firstname hs-firstname hs-fieldtype-text field hs-form-field']",'Please complete this required field.')
    }

    static checkLastNameErrorCheck(){
        cy.checkMandatoryErrorMsg("div[class='hs_lastname hs-lastname hs-fieldtype-text field hs-form-field']",'Please complete this required field.')
    }

    static checkEmailErrorCheck(){
        cy.checkMandatoryErrorMsg("div[class='hs_email hs-email hs-fieldtype-text field hs-form-field']",'Please complete this required field.')
    }

    static checkPhoneNoErrorCheck(){
        cy.checkMandatoryErrorMsg("div[class='hs_mobilephone hs-mobilephone hs-fieldtype-text field hs-form-field']",'Please complete this required field.')
    }

    static checkMessageAreaErrorCheck(){
        cy.checkMandatoryErrorMsg("div[class='hs_message hs-message hs-fieldtype-textarea field hs-form-field']",'Please complete this required field.')
    }

    static checkSuccessMessage(){
        cy.get('p').contains("Thank you for your message. We'll get back to you as soon as possible.").should('be.visible')
    }

    static checkPhoneNoInvalidCheck(){
        cy.checkMandatoryErrorMsg("div[class='hs_mobilephone hs-mobilephone hs-fieldtype-text field hs-form-field']","Must contain only numbers, +()-. and x.")
    }

    static checkEmailInvalidCheck(){
        cy.checkMandatoryErrorMsg("div[class='hs_email hs-email hs-fieldtype-text field hs-form-field']",'Email must be formatted correctly.')
    }
}

export default contactUsPage;