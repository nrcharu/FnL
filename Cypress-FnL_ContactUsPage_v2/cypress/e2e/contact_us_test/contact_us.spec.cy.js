/// <reference types="Cypress" />


describe("Automating Contact Us Page scenarios",()=>{
    
    /* beforeEach block executes the set of code before each test block
    * 1. opens Contact Us page
    * 2. fetches the test data from validData.json & invalidData.json as alias object
    * and shares them across tests */

    beforeEach(function(){

        cy.visit("/contact") //visit Contact Us page
        cy.fixture('validData').as('vData') //fetch validData as alias 'vData'
        cy.fixture("invalidData").as('iData') //fetch invalidData as alias 'iData'
        
    })

    it("TC01_Check Header of Contact Us page",function(){  
        //Fetch the header element and validate it against 'Contact'      
        cy
        .get('h1')
        .contains('Contact')
        .should('be.visible')
    })

    it("TC02_Check Title of Contact Us page",function(){
        //Fetch the title of the page and validate it to be 'Reach out to Founder and Lightning today'
        cy
        .title()
        .should('eq','Reach out to Founder and Lightning today')
    })

    it("TC03_Submit Contact Us form with valid data",function(){

        //Input the Contact Us form fields using Custom command 'fillContactUsForm'
        cy.fillContactUsForm(this.vData.firstname,this.vData.lastname,this.vData.email
            ,this.vData.phone,this.vData.option,this.vData.message)
        
        //Click on Send Message > button.
        cy.log('Click Send Message > button')
        cy
        .findByDisplayValue("Send Message >")
        .click()

        //Validate the success message once the form is submitted successully.
        cy.log('Validate success message')
        cy
        .get('p')
        .contains("Thank you for your message. We'll get back to you as soon as possible.")
        .should('be.visible')
                
    })

    it("TC04_Submit Contact Us form with No data",function(){

        //Click on Send Message > button without entering data in input fields
        cy.log('Click on Send Message > button')
        cy
        .findByDisplayValue("Send Message >")
        .click()

        //Valdiate the error message displayed in the mandatory fields
        let errMessage = 'Please complete this required field.'
        cy.log('Validate the Error message displayed')
        cy.checkMandatoryErrorMsg("firstname", errMessage)
        cy.checkMandatoryErrorMsg("lastname", errMessage)
        cy.checkMandatoryErrorMsg("email", errMessage)
        cy.checkMandatoryErrorMsg("mobilephone", errMessage)
        cy.checkMandatoryErrorMsgMessageField(errMessage)       

    })

    it("TC05_Submit Contact Us form with invalid data",function(){

        //Enter incorrect format data in Email and Mobile phone number fields
        cy.log('Enter incorrect format data in Email and Mobile phone number fields')
        cy.fillContactUsForm(this.iData.firstname,this.iData.lastname,this.iData.email
            ,this.iData.phone,this.iData.option,this.iData.message)

        //Click on Send Message > button 
        cy.log('Click on Send Message > button')
        cy
        .findByDisplayValue("Send Message >")
        .click()

        //Valdiate the error message displayed in Email and Mobile phone number fields.
        cy.log('Validate Error messages displayed in Email and Mobile phone number field')
        cy.checkMandatoryErrorMsg("email", 'Email must be formatted correctly.')
        cy.checkMandatoryErrorMsg("mobilephone", "Must contain only numbers, +()-. and x.")
        
    })

})