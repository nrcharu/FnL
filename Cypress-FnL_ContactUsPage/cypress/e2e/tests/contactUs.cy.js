/// <reference types="Cypress" />

import contactUsPage from "../pages/contactUsPage";

describe("Automating Contact Us Page scenarios",()=>{
    beforeEach(function(){
        cy.visit("/contact")

        cy.fixture("validData").then((vData)=>{
            this.vData = vData
        })
        
        cy.fixture("invalidData").then((iData)=>{
            this.iData = iData
        })

    })

    it("Submit form - positive scenario",function(){
        contactUsPage.checkContactUsHeader()
        contactUsPage.typeFirstName(this.vData.firstname)
        contactUsPage.typeLastName(this.vData.lastname)
        contactUsPage.typeEmail(this.vData.email)
        contactUsPage.typePhoneNum(this.vData.phone)
        contactUsPage.selectAboutUs(this.vData.option)
        contactUsPage.typeMessage(this.vData.message)
        contactUsPage.clickSendMessageButton()
        contactUsPage.checkSuccessMessage()

        
    })

    it("Submit form - negative scenario",function(){
        contactUsPage.checkContactUsHeader()
        contactUsPage.clickSendMessageButton()
        contactUsPage.checkFirstNameErrorCheck()
        contactUsPage.checkLastNameErrorCheck()
        contactUsPage.checkEmailErrorCheck()
        contactUsPage.checkPhoneNoErrorCheck()
        contactUsPage.checkMessageAreaErrorCheck()

    })

    it("Submit form - invalid data scenario",function(){
        contactUsPage.checkContactUsHeader()
        contactUsPage.typeEmail(this.iData.email)
        contactUsPage.typePhoneNum(this.iData.phone)
        contactUsPage.clickSendMessageButton()
        contactUsPage.checkEmailInvalidCheck()
        contactUsPage.checkPhoneNoInvalidCheck()
    })
})