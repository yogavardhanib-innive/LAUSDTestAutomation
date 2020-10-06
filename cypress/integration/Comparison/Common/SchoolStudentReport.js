import LoginPages from '../LAUSDPages/LoginPage'
import MMEDPages from '../LAUSDPages/MMEDpage'
import SchoolStudentPages from './LAUSDPages/SchoolStudentPage';
const fs = require('fs');

describe('LAUSDSuite', function () {

    it("SourceURL", function () {
        const lp = new LoginPages
        const mp = new MMEDPages

        cy.visit('http://focus.lausd.net/')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        lp.login()
        cy.wait(180000)

      //  mp.verifyMMEDpagetitlesubtitle1()
      //  mp.navigatingtommeddashboard()

      //  mp.navigatingtostudentreport()

        const sp = new SchoolStudentPages
        sp.verifystudent2()

        /*cy.wait(30000)
        
                cy.xpath('(//*[@class="TapeDeckImageEna"])[1]').should('be.visible')
                cy.xpath('(//*[@class="TapeDeckImageEna"])[1]').click()
                cy.wait(50000)
                sp.verifystudent2()*/

    })
})