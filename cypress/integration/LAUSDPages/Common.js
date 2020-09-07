/// <reference types="Cypress" />

class CommonPages {

verifyanalyticsareas1()
{
    const leadership = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(1) > .b-icon-mask'
    const instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
    const operations = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(3) > .b-icon-mask'
    const specialEd = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(4) > .b-icon-mask'
    const summary = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(5) > .b-icon-mask'
    const subjects = 'div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div > div.b-title > span'
   

    cy.analyticsarealength('{',leadership, subjects,'result1','leadership_subject1',',')
    cy.analyticsarealength('',instruction, subjects, 'result1','instruction_subject1',',')
    cy.analyticsarealength('',operations, subjects, 'result1','operations_subject1',',')
    cy.analyticsarealength('',specialEd, subjects, 'result1','specialEd_subject1',',')
    cy.analyticsarealength('',summary, subjects,'result1','summary_subject1','}')
   
}

verifyanalyticsareas2()
{
    const leadership = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(1) > .b-icon-mask'
    const instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
    const operations = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(3) > .b-icon-mask'
    const specialEd = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(4) > .b-icon-mask'
    const summary = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(5) > .b-icon-mask'
    const subjects = 'div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div > div.b-title > span'
   

    cy.analyticsarealength('{',leadership, subjects,'result2','leadership_subject2',',')
    cy.analyticsarealength('',instruction, subjects, 'result2','instruction_subject2',',')
    cy.analyticsarealength('',operations, subjects, 'result2','operations_subject2',',')
    cy.analyticsarealength('',specialEd, subjects, 'result2','specialEd_subject2',',')
    cy.analyticsarealength('',summary, subjects,'result2','summary_subject2','}')
   
}

    
}
export default CommonPages