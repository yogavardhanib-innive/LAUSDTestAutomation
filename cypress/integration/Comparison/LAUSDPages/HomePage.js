
/// <reference types="Cypress" />

class HomePages {

    verifyanalyticsareas()
    {
        const leadership = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(1) > .b-icon-mask'
        const instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
        const operations = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(3) > .b-icon-mask'
        const specialEd = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(4) > .b-icon-mask'
        const summary = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(5) > .b-icon-mask'
        const subjects = 'div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div > div.b-title > span'
       
    
        cy.analyticsarealength('{',leadership, subjects,'result1','leadership_subject',',')
        cy.analyticsarealength('',instruction, subjects, 'result1','instruction_subject',',')
        cy.analyticsarealength('',operations, subjects, 'result1','operations_subject',',')
        cy.analyticsarealength('',specialEd, subjects, 'result1','specialEd_subject',',')
        cy.analyticsarealength('',summary, subjects,'result1','summary_subject','}')
       
    }
    
    verifysubjectstext(){
        const leadership = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(1) > .b-icon-mask'
        const instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
        const operations = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(3) > .b-icon-mask'
        const specialEd = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(4) > .b-icon-mask'
        const summary = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(5) > .b-icon-mask'
        
        const subjects = 'div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div > div.b-title > span'
    cy.subjectstext('',leadership,subjects, 'result1','leadership_subjecttext',',')
    cy.subjectstext('',instruction,subjects, 'result1','instruction_subjecttext',',')
    cy.subjectstext('',operations,subjects, 'result1','operations_subjecttext',',')
    cy.subjectstext('',specialEd,subjects, 'result1','specialEd_subjecttext',',')
    cy.subjectstext('',summary,subjects, 'result1','summary_subjecttext',',')
    
    }
    
    
    verifysubjectstext2(){
        const leadership = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(1) > .b-icon-mask'
        const instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
        const operations = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(3) > .b-icon-mask'
        const specialEd = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(4) > .b-icon-mask'
        const summary = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(5) > .b-icon-mask'
        
        const subjects = 'div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div > div.b-title > span'
    cy.subjectstext('',leadership,subjects, 'result2','leadership_subjecttext',',')
    cy.subjectstext('',instruction,subjects, 'result2','instruction_subjecttext',',')
    cy.subjectstext('',operations,subjects, 'result2','operations_subjecttext',',')
    cy.subjectstext('',specialEd,subjects, 'result2','specialEd_subjecttext',',')
    cy.subjectstext('',summary,subjects, 'result2','summary_subjecttext',',')
    
    }
    
    
    verifysubjectstitle(){
        const subjects = 'div.b-content-cards > div > div:nth-child(3)'
    
        cy.subjecttitle('{',subjects, 'result1','leadership_subjecttitle',',')
    }
    
    verifyanalyticsareas2()
    {
        const leadership = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(1) > .b-icon-mask'
        const instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
        const operations = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(3) > .b-icon-mask'
        const specialEd = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(4) > .b-icon-mask'
        const summary = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(5) > .b-icon-mask'
        const subjects = 'div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div > div.b-title > span'
       
    
        cy.analyticsarealength('{',leadership, subjects,'result2','leadership_subject',',')
        cy.analyticsarealength('',instruction, subjects, 'result2','instruction_subject',',')
        cy.analyticsarealength('',operations, subjects, 'result2','operations_subject',',')
        cy.analyticsarealength('',specialEd, subjects, 'result2','specialEd_subject',',')
        cy.analyticsarealength('',summary, subjects,'result2','summary_subject','}')
       
    }
    
        
    }
    export default HomePages