

beforeEach(function () {
    cy.fixture('result1').then((d1) => {
        this.d1 = d1

    })

    cy.fixture('result2').then((d2) => {
        this.d2 = d2

    })
})

it('analyticarealength', function () {

    expect(this.d1.leadership_subject).to.equal(this.d2.leadership_subject)
    expect(this.d1.instruction_subject).to.equal(this.d2.instruction_subject)
    expect(this.d1.operations_subject).to.equal(this.d2.operations_subject)
    expect(this.d1.specialEd_subject).to.equal(this.d2.specialEd_subject)
    expect(this.d1.summary_subject).to.equal(this.d2.summary_subject)
    

})

it.skip('analyticarea_leadership_subjecttext', function () {
//leadership
    expect(this.d1.leadership_subjecttext1).to.equal(this.d2.leadership_subjecttext1)
    expect(this.d1.leadership_subjecttext2).to.equal(this.d2.leadership_subjecttext2)})
    it.skip('analyticarea_instruction_subjecttext', function () {
    //instruction
    expect(this.d1.instruction_subjecttext1).to.equal(this.d2.instruction_subjecttext1)
    expect(this.d1.instruction_subjecttext2).to.equal(this.d2.instruction_subjecttext2)
    expect(this.d1.instruction_subjecttext3).to.equal(this.d2.instruction_subjecttext3)
    expect(this.d1.instruction_subjecttext4).to.equal(this.d2.instruction_subjecttext4)
    expect(this.d1.instruction_subjecttext5).to.equal(this.d2.instruction_subjecttext5)})
    it.skip('analyticarea_operations_subjecttext', function () {
    //operations
    expect(this.d1.operations_subjecttext1).to.equal(this.d2.operations_subjecttext1)
    expect(this.d1.operations_subjecttext2).to.equal(this.d2.operations_subjecttext2)
    expect(this.d1.operations_subjecttext3).to.equal(this.d2.operations_subjecttext3)
    expect(this.d1.operations_subjecttext4).to.equal(this.d2.operations_subjecttext4)
    expect(this.d1.operations_subjecttext5).to.equal(this.d2.operations_subjecttext5)
    expect(this.d1.operations_subjecttext6).to.equal(this.d2.operations_subjecttext6)})
    it.skip('analyticarea_specialEd_subjecttext', function () {
    //specialEd
    expect(this.d1.specialEd_subjecttext1).to.equal(this.d2.specialEd_subjecttext1)
    expect(this.d1.specialEd_subjecttext2).to.equal(this.d2.specialEd_subjecttext2)
    expect(this.d1.specialEd_subjecttext3).to.equal(this.d2.specialEd_subjecttext3)
    expect(this.d1.specialEd_subjecttext4).to.equal(this.d2.specialEd_subjecttext4)})
    it.skip('analyticarea_summary_subjecttext', function () {
    //summary
    expect(this.d1.summary_subjecttext1).to.equal(this.d2.summary_subjecttext1)
    expect(this.d1.summary_subjecttext2).to.equal(this.d2.summary_subjecttext2)
    expect(this.d1.summary_subjecttext3).to.equal(this.d2.summary_subjecttext3)
    expect(this.d1.summary_subjecttext4).to.equal(this.d2.summary_subjecttext4)
    expect(this.d1.summary_subjecttext5).to.equal(this.d2.summary_subjecttext5)
    expect(this.d1.summary_subjecttext6).to.equal(this.d2.summary_subjecttext6)   

})

it('mmedtitlecomparison',function(){
    expect(this.d1.mmedpagetitle).to.equal(this.d2.mmedpagetitle)
})
