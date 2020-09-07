import LoginPages from '../integration/LAUSDPages/LoginPage'
import CommonPages from '../integration/LAUSDPages/Common'
import MMEDPages from '../integration/LAUSDPages/MMEDpage'

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

const c = new CommonPages()
const md = new MMEDPages()
const mmed = 'div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div:nth-child(3) > div.b-icon > img'
      const  instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
c.verifyanalyticsareas1()  
cy.get(instruction)
            .should('be.visible')
            .click() 
            cy.wait(7000)
    cy.get(mmed)
    .scrollIntoView()
        .should('be.visible')
        .click()
        cy.wait(80000)
       
//md.verifyMMEDpagelaunch()

})

 //Testcase 3: Base_URL login
 it.skip("URL2_login", function () {

    cy.visit('http://focus.lausd.net/')
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    const lp = new LoginPages()
    lp.login()
})


//Testcase 4: AnalyticsAreas
it.skip("URL2_Analytics", function () {

const c = new CommonPages()
c.verifyanalyticsareas2()   

})
})