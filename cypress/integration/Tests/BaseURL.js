import LoginPages from '../Comparison/LAUSDPages/LoginPage'
import HomePages from '../Comparison/LAUSDPages/HomePage'
import MMEDPages from '../Comparison/LAUSDPages/MMEDpage'
import SPEDPages from '../Comparison/LAUSDPages/SPEDpage'

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
        cy.wait(180000)
    })


it("BaseURLtest", function () {

const hp = new HomePages()
const mp = new MMEDPages()
const lp = new LoginPages()
const sp = new SPEDPages()
//hp.verifyanalyticsareas() 
//hp.verifysubjectstext()
mp.verifyMMEDpagelaunch()
lp.login()
cy.wait(20000)
//mp.navigatingtommedpage()
//mp.verifymetricsataglance()
mp.navigatingtommeddashboard()
mp.verifyprofilesummarydropdown()
//sp.verifySPEDpagelaunch()
})
})