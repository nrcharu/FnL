This resource contains Cypress scripts for automating the below scenarios of Contact us page of FnL using Javascript
Scenario 1: Submitting the Contact Us form by giving valid data (Firstname, Lastname, Email, Phone number, How do you know about us and Custom message)

Scenario 2: Submitting the form without giving any data and validating the mandatory error message

Scenario 3: Submitting the form by giving invalid data to Email and Phone number field and validating the mandatory error message.

The script is designed using POM where the Contact us page objects are derived in a separate JS Class file and imported to perform the action in the mail test.

P.S: Scenario 1 is failing due to reCaptcha image verification.