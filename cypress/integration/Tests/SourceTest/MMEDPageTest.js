import LoginPages from '../../Comparison/LAUSDPages/LoginPage'
import HomePages from '../../Comparison/LAUSDPages/HomePage'
import MMEDPages from '../../Comparison/LAUSDPages/MMEDpage'
import SPEDPages from '../../Comparison/LAUSDPages/SPEDpage'

describe('MMEDPageTest', function () {

    //Testcase 1: Base_URL login
    it("MMED", function () {

        cy.visit('http://focus.lausd.net')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        const lp = new LoginPages
        lp.login()
        cy.wait(120000)

        const mp = new MMEDPages
        //MMED Page
        mp.verifyMMEDpagetitlesubtitleSource()
        mp.verifymetricsataglanceSource()
        mp.verifyoperationaldashboardSource()
        //MMED Dashboard
mp.navigatingtommeddashboard()
mp.verifymmedtilesSource()



    })


})