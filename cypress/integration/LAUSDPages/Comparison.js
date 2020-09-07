

beforeEach(function () {
    cy.fixture('result1').then((d1) => {
        this.d1 = d1

    })

    cy.fixture('result2').then((d2) => {
        this.d2 = d2

    })
})

it('comparison', function () {

    expect(this.d1.leadership_subject1).to.equal(this.d2.leadership_subject2)
    expect(this.d1.instruction_subject1).to.equal(this.d2.instruction_subject2)
    expect(this.d1.operations_subject1).to.equal(this.d2.operations_subject2)
    expect(this.d1.specialEd_subject1).to.equal(this.d2.specialEd_subject2)
    expect(this.d1.summary_subject1).to.equal(this.d2.summary_subject2)
    

})
