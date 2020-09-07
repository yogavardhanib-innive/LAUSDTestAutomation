// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('pagelaunch', (pageclick, pagetitle, pagetitletext,result,start,data,end) => { 

    cy.wait(70000)
    cy.get(pageclick)
    .scrollIntoView()
        .should('be.visible')
        .click()
        cy.wait(80000)
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
      })
    cy.get(pagetitle).should('have.text', pagetitletext)
    cy.writeFile('./cypress/fixtures/'+result+'.json',start,'"'+data+'":'+''+'"'+pagetitletext+'"'+end,{ flag: 'a+' })
  })

    Cypress.Commands.add('analyticsarealength', (start,analyticareas, subjects,result,data,end) => { 

        cy.get(analyticareas)
        .should('be.visible')
        .click()
    
        cy.get(subjects)
           .then(($sub) => {
         const subpagescount = $sub.length;
         cy.writeFile('./cypress/fixtures/'+result+'.json',start+'"'+data+'":'+''+'"'+subpagescount+'"'+end, { flag: 'a+' })
          //  expect($sub).to.have.length(definelength)
        })
      })


