import LoginPages from '../integration/LAUSDPages/LoginPage'

describe('LAUSDSuite', function () {

    //Testcase 1: Base_URL login
    it("URL1_login", function () {

        cy.visit('http://focus.lausd.net/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        const lp = new LoginPages()
        lp.login()
    })


//Testcase 2: AnalyticsAreas
it("URL1_Analytics", function () {



const search = 'div.b-subject-area > div.b-area-container > div > div.container-header > div.b-content-icons > div:nth-child(1) > div > svg > path'
const searchdashboard = 'div.b-search > input[type=text]'
const mmed = 'div.b-content-cards > div:nth-child(1)'

cy.get(search).click()
cy.get(searchdashboard).type('mmed')
cy.wait(10000)
cy.get(mmed).click()
cy.wait(5000)
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


})
})