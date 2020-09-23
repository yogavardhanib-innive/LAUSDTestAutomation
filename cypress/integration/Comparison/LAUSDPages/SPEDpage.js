
/// <reference types="Cypress" />


class SPEDPages {

    verifySPEDpagelaunch() {
        const SPED = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(4) > .b-icon-mask'
        cy.pagelaunch(SPED) 
    }
    navigatingtoIEPtimelinepage() {
        const ieptimeline = 'div.b-subject-area > div.container-one > div > div.b-content-cards > div:nth-child(1) > div.b-icon > img'
        const iedptimelinepagetitle = 'p.title'
        const iedptimelinepagesubtitle = 'p.subtitle'

       cy.pagelaunch(ieptimeline)

        cy.invoketext('{', iedptimelinepagetitle, 'result1', 'spedpagetitletext', ',')
        cy.invoketext(',', iedptimelinepagesubtitle, 'result1', 'spedpagesubtitletext', ',')
    }

    verifymetricsataglance() {
        const listofmetrics = 'section > div.kpi-header > span'
        const listofmetricsdata = 'section > div.kpi-main > div.kpi-actual > div > span'
        const metricsprefix = 'section:nth-child('
        const metricssuffix = ') div.kpi-header > span'
        const metricsdataprefix = 'section:nth-child('
        const metricsdatasuffix = ') div.kpi-main > div.kpi-actual > div > span'
        cy.verifylist(',', listofmetrics, metricsprefix, metricssuffix, 'result1', 'metrictitle', ',')
        cy.verifylist(',', listofmetricsdata, metricsdataprefix, metricsdatasuffix, 'result1', 'metricdata', ',')
    }
    verifyoperationaldashboard() {
        //Objects
        const listofoperationaldashboard = 'div.b-mega-menu-pages > div > div.brintell-framework-botton-tile-name'
        const operationalprefix = 'div.b-mega-menu-pages > div:nth-child('
        const operationalsuffix = ') > div.brintell-framework-botton-tile-name'
        cy.verifylist(',', listofoperationaldashboard, operationalprefix, operationalsuffix, 'result1', 'operationaldashboard', ',')
    }

    navigatingtocentralofficedashboard() {
        const centraldashboard = 'div.b-mega-menu-pages > div:nth-child(1) > div.brintell-framework-botton-tile-name'
        const centraldashboardtitle = ''
        cy.pagelaunch(centraldashboard)
        cy.invoketext(',', centraldashboardtitle, 'result1', 'centraldashboardtitle', ',')

    }
    verifytimetrendingchart() {
        const timetrendchart = 'div.basic-container-container > div:nth-child(3) > section > div > div > section > div:nth-child(2) > div'
        cy.get(timetrendchart).should('be.visible')
      
    }

    
    
     
}
export default SPEDPages