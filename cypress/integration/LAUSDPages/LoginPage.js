/// <reference types="Cypress" />

class LoginPages {

    login() {

        cy.get('#loginArea > #loginForm > #formsAuthenticationArea > #userNameArea > #userNameInput', { timeout: 40000 }).should('be.visible')
        cy.get('#loginArea > #loginForm > #formsAuthenticationArea > #userNameArea > #userNameInput').type('cp-y.batmanaban@lausd.net')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('#loginArea > #loginForm > #formsAuthenticationArea > #passwordArea > #passwordInput').should('be.visible')
        cy.get('#loginArea > #loginForm > #formsAuthenticationArea > #passwordArea > #passwordInput').type('Innive24#')

        cy.get('#loginArea > #loginForm > #formsAuthenticationArea > #submissionArea > #submitButton').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.wait(200000)
    }
}
export default LoginPages