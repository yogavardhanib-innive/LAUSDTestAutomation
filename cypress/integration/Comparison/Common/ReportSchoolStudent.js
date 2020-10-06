import LoginPages from '../LAUSDPages/LoginPage'
import MMEDPages from '../LAUSDPages/MMEDpage'
import SchoolStudentPages from './SchoolStudentPage';

describe('demoSuite', function () {

  // beforeEach(() => {  


  //  })

  it('sourceURL', function () {
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
    mp.verifyMMEDpagetitlesubtitleSource()
    mp.navigatingtommeddashboard()

    mp.navigatingtostudentreport()
    cy.xpath('(//*[@class="TapeDeckImageEna"])[2]').should('be.visible')
    cy.xpath('(//*[@class="TapeDeckImageEna"])[2]').click()
    cy.wait(380000)
    cy.xpath('//*[@class="PTL"]').as('data')
    let empty = [];
    cy.get('@data').then((data) => {

      const n = data.length

      for (let i = 0; i < n; i++) {
        if (!empty.includes(data[i].innerText)) {
          empty.push(data[i].innerText)
        }
      }

      cy.log(empty, "emptylength" + empty.length)

    })
  })
})

