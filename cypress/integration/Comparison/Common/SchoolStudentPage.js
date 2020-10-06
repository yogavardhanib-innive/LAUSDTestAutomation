/// <reference types="Cypress" />


class SchoolStudentPages {
emptyarray = [];

  /*  verifystudent() {

      var emptyarray = [];
cy.xpath('//*[@class="PTL"]') 
.each(($el, index, $list)  =>{
        cy.wrap($el).as('myElements')
        cy.get('@myElements')
         .invoke('text').then(value => {
          cy.log("test"+value)
          
          if(!emptyarray.includes(value)){
            emptyarray.push(value)
            }
             })
       
    })
    cy.log("length"+emptyarray.length)
       
    }}*/


   verifystudent5() {
      cy.xpath('//*[@class="date"]') 
.each(($el, index, $list)  =>{
        cy.wrap($el).as('myElements')
        cy.get('@myElements')
         .invoke('text').then(value => {
          cy.log("test"+value)
          
          if(!this.emptyarray.includes(value)){
            this.emptyarray.push(value)
            
          }
          cy.log("length1"+this.emptyarray.length)
    
             })
       
    })
    cy.log("length2"+this.emptyarray.length)
       
    }

  /* verifystudent2() {
      var emptyarray = {};
       
        cy.xpath('//*[@class="PTL"]') 
        .each(($el, index, $list)  =>{
         
                cy.wrap($el).as('myElements')
                cy.get('@myElements').invoke('text').as('txt')

             //  cy.log("text"+txt)
                
          if(!emptyarray[this.txt]){
            emptyarray[this.txt] = true;
           cy.log(this.txt)
           // cy.log("length"+emptyarray.length)  
          //  return;
            
        }
      })
     // cy.log(emptyarray)
     
            }

*/
verifystudent2() {

  var emptyarray = {};
   
    cy.xpath('//*[@class="date"]') 
    .each(($el, index, $list)  =>{
     
            //cy.wrap($el).as('myElements')
            //cy.get('@myElements').invoke('text').as('txt')

         //  cy.log("text"+txt)
        const txt = $el.text
            
      if(!emptyarray.includes(txt)){
        emptyarray.push(txt);
       cy.log(txt)
  cy.log(emptyarray.length)

       // cy.log("length"+emptyarray.length)  
      //  return;
       cy.debug() 
    }
  })
 
        }


}        
export default SchoolStudentPages