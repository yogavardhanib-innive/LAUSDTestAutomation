
beforeEach(function () {
    cy.fixture('result1').then((d1) => {
        this.d1 = d1
    })

    cy.fixture('result2').then((d2) => {
        this.d2 = d2
    })
})

it('TotalStudentsReport', function (){
    cy.log('currentenrollmentcount=schoolreporcount')
expect(this.d1.CurrentEnrollmentcount).to.equal(this.d1.SchoolReporCount)
cy.log('currentenrollmentcount=studentreportcount')
expect(this.d1.CurrentEnrollmentcount).to.equal(this.d1.StudentReportCount)

})

it.skip('analyticarealength', function () {

    expect('leadership_subject='+this.d1.leadership_subject).to.equal('leadership_subject='+this.d2.leadership_subject)
    expect('instruction_subject='+this.d1.instruction_subject).to.equal('instruction_subject='+this.d2.instruction_subject)
    expect('operations_subject='+this.d1.operations_subject).to.equal('operations_subject='+this.d2.operations_subject)
    expect('specialEd_subject='+this.d1.specialEd_subject).to.equal('specialEd_subject='+this.d2.specialEd_subject)
    expect('summary_subject='+this.d1.summary_subject).to.equal('summary_subject='+this.d2.summary_subject)
})


it.skip('mmed', function(){
    expect('mmedpagetitle='+this.d1.mmedpagetitle).to.equal('mmedpagetitle='+this.d2.mmedpagetitle)
    expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)
    expect('metrictitle='+this.d1.metrictitle).to.equal('metrictitle='+this.d2.metrictitle)
    expect('metrictitlecount='+this.d1.metrictitlecount).to.equal('metrictitlecount='+this.d2.metrictitlecount)
    expect('metricdata='+this.d1.metricdata).to.equal('metricdata='+this.d2.metricdata)
    expect('metricdatacount='+this.d1.metricdatacount).to.equal('metricdatacount='+this.d2.metricdatacount)
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

it.skip('mmedtitlecomparison',function(){
    expect(this.d1.mmedpagetitle).to.equal(this.d2.mmedpagetitle)
})
