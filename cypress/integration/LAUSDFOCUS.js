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

it("MMED",function(){

    const md = new MMEDPages()
    md.verifyMMEDpagelaunch()
    

})




})
