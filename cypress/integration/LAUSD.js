import LoginPages from './Comparison/LAUSDPages/LoginPage'
import CommonPages from './Comparison/LAUSDPages/Common'
import MMEDPages from './Comparison/LAUSDPages/MMEDpage'

describe('LAUSDSuite', function () {

    //Testcase 1: Base_URL login
    it("URL1_login", function () {

        cy.visit('http://focusdev.lausd.net/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        const lp = new LoginPages()
        lp.login()
        cy.wait(160000)
    })


//Testcase 2: AnalyticsAreas
it("URL1_Analytics", function () {

const c = new CommonPages()
const md = new MMEDPages()
const lp = new LoginPages()
//c.verifyanalyticsareas1() 
//c.verifysubjectstext()
md.verifyMMEDpagelaunch()
lp.login()
cy.wait(20000)
md.navigatingtommed()
md.verifymetricsataglance()
md.verifyprofilesummarydropdown()
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
    cy.wait(160000)
})


//Testcase 4: AnalyticsAreas
it.skip("URL2_Analytics", function () {

const c = new CommonPages()
//c.verifyanalyticsareas2()   
//c.verifysubjectstext2()
md.verifyMMEDpagelaunch()
lp.login()
cy.wait(20000)
md.navigatingtommed()
md.verifymetricsataglance()

})
})