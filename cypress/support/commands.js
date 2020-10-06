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
Cypress.Commands.add('invoketext', (start, datatobeverified, result, data, end) => {
  cy.get(datatobeverified)
    .invoke('text').then(value => {
      cy.writeFile('./cypress/fixtures/' + result + '.json', start + '"' + data + '":' + '' + '"' + value + '"' + end+"\n", { flag: 'a+' })
    })
})

Cypress.Commands.add('pagelaunch', (start, pageclick, pagetitle, result, data, end) => {

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
  cy.get(pagetitle)
    .invoke('text').then(value => {
      cy.writeFile('./cypress/fixtures/' + result + '.json', start + '"' + data + '":' + '' + '"' + value + '"' + end+"\n", { flag: 'a+' })
    })
})

Cypress.Commands.add('analyticsarealength', (start, analyticareas, subjects, result, data, end) => {

  cy.get(analyticareas)
    .should('be.visible')
    .click()

  cy.get(subjects)
    .then(($sub) => {
      const subpagescount = $sub.length;
      cy.writeFile('./cypress/fixtures/' + result + '.json', start + '"' + data + '":' + '' + '"' + subpagescount + '"' + end + "\n", { flag: 'a+' })
    })
})

Cypress.Commands.add('subjectstext', (start, analyticareas, subjects, result, data, end) => {
  cy.get(analyticareas)
    .should('be.visible')
    .click()
  cy.get(subjects)
    .then(($sub) => {
      const subpagescount = $sub.length;

      var i;
      for (i = 1; i < (subpagescount + 1); i++) {
        const sub1 = 'div.b-subject-area > div.container-one > div > div > div:nth-child(' + i + ') > div.b-title > span'
        cy.writeFile('./cypress/fixtures/' + result + '.json', start + '"' + data + '' + i + '":', { flag: 'a+' })

        cy.get(sub1)
          .invoke('text').then(value => {
            cy.writeFile('./cypress/fixtures/' + result + '.json', '"' + value + '"' + end + "\n", { flag: 'a+' })

          })
      }
    })
})

Cypress.Commands.add('verifylist', (start, list, prefix, suffix, result, data, end) => {

  cy.get(list)
    .then(($list) => {
      const listcount = $list.length;
      cy.writeFile('./cypress/fixtures/' + result + '.json', start + '"' + data + '":' + '' + '[', { flag: 'a+' })
      var i;
      for (i = 1; i < (listcount + 1); i++) {
        const list1 = prefix + i + suffix
        cy.get(list1)
          .invoke('text').then(value => {
            cy.writeFile('./cypress/fixtures/' + result + '.json', '"'+value + '"'+ ',' ,{ flag: 'a+' })
          })
      }
      cy.writeFile('./cypress/fixtures/' + result + '.json',']'+"\n", { flag: 'a+' })
      cy.writeFile('./cypress/fixtures/' + result + '.json', start + '"' + data + 'count' + '":' + listcount+"\n", { flag: 'a+' })

    })
})