
/// <reference types="Cypress" />


class MMEDPages {

    verifyMMEDpagetitlesubtitleSource() {
        const instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
        const mmed = 'div.b-subject-area > div.container-one > div > div.b-content-cards > div:nth-child(3) > div.b-icon > img'
        const mmedpagetitle = 'div.banner-row div.box-title p.title'
        const mmedpagesubtitle = 'p.subtitle'
        cy.get(instruction).should('be.visible')
        cy.get(instruction).click()
        cy.wait(20000)
        cy.pagelaunch('{', mmed, mmedpagetitle, 'result1', 'mmedpagetitle', ',')
        cy.invoketext('', mmedpagesubtitle, 'result1', 'mmedpagesubtitle', ',')
    }


    verifyMMEDpagetitlesubtitleTarget() {
        const instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
        const mmed = 'div.b-subject-area > div.container-one > div > div.b-content-cards > div:nth-child(3) > div.b-icon > img'
        const mmedpagetitle = 'div.banner-row div.box-title p.title'
        const mmedpagesubtitle = 'p.subtitle'
        cy.get(instruction).should('be.visible')
        cy.get(instruction).click()
        cy.wait(20000)
        cy.pagelaunch('{', mmed, mmedpagetitle, 'result2', 'mmedpagetitle', ',')
        cy.invoketext('', mmedpagesubtitle, 'result2', 'mmedpagesubtitle', ',')
    }


    verifymetricsataglanceSource() {
        const listofmetrics = 'div.kpis section > div.kpi-header > span'
        const listofmetricsdata = 'div.kpis section > div.kpi-main > div.kpi-actual > div > span'
        const metricsprefix = 'div.kpis section:nth-child('
        const metricssuffix = ') div.kpi-header > span'
        const metricsdataprefix = 'div.kpis section:nth-child('
        const metricsdatasuffix = ') div.kpi-main > div.kpi-actual > div > span'
        cy.verifylist('', listofmetrics, metricsprefix, metricssuffix, 'result1', 'metrictitle', ',')
        cy.verifylist(',', listofmetricsdata, metricsdataprefix, metricsdatasuffix, 'result1', 'metricdata', ',')
    }

    verifymetricsataglanceTarget() {
        const listofmetrics = 'div.kpis section > div.kpi-header > span'
        const listofmetricsdata = 'div.kpis section > div.kpi-main > div.kpi-actual > div > span'
        const metricsprefix = 'div.kpis section:nth-child('
        const metricssuffix = ') div.kpi-header > span'
        const metricsdataprefix = 'div.kpis section:nth-child('
        const metricsdatasuffix = ') div.kpi-main > div.kpi-actual > div > span'
        cy.verifylist('', listofmetrics, metricsprefix, metricssuffix, 'result2', 'metrictitle', ',')
        cy.verifylist(',', listofmetricsdata, metricsdataprefix, metricsdatasuffix, 'result2', 'metricdata', ',')
    }

  
    verifyoperationaldashboardSource() {
       
        const operational_dashboard_title = 'div.brintell-framework-botton-tiles-title-second-level.brintell-framework-botton-tiles-title-selected > span'
        const operational_dashboard = '.b-mega-menu-pages > .brintell-framework-botton-tile > .brintell-framework-botton-tile-name'
        const listofoperationaldashboard = 'div.b-mega-menu-pages > div > div.brintell-framework-botton-tile-name'
        const operationalprefix = 'div.b-mega-menu-pages > div:nth-child('
        const operationalsuffix = ') > div.brintell-framework-botton-tile-name'
        cy.verifylist(',', listofoperationaldashboard, operationalprefix, operationalsuffix, 'result1', 'operationaldashboard', ',')
    }

    verifyoperationaldashboardTarget() {
       
        const operational_dashboard_title = 'div.brintell-framework-botton-tiles-title-second-level.brintell-framework-botton-tiles-title-selected > span'
        const operational_dashboard = '.b-mega-menu-pages > .brintell-framework-botton-tile > .brintell-framework-botton-tile-name'
        const listofoperationaldashboard = 'div.b-mega-menu-pages > div > div.brintell-framework-botton-tile-name'
        const operationalprefix = 'div.b-mega-menu-pages > div:nth-child('
        const operationalsuffix = ') > div.brintell-framework-botton-tile-name'
        cy.verifylist(',', listofoperationaldashboard, operationalprefix, operationalsuffix, 'result1', 'operationaldashboard', ',')
    }
   
    
    navigatingtommeddashboard() {
        const mmeddashboard = 'div.b-mega-menu-pages > div:nth-child(1) > div.brintell-framework-botton-tile-name'
        const mmeddashboardtitle = 'div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)'
              cy.pagelaunch('{', mmeddashboard, mmeddashboardtitle, 'result1', 'mmeddashboardtitle', ',')
              Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
      
    }

    verifymmedtilesSource() {
        const tiles = 'div.kpi-card-single-component-wrapper > div >span'
        const list = 'div.basic-container-container ul.slider-list > li'
        const prefix = 'div.basic-container-container ul.slider-list > li:nth-child('
        const suffix = ')'

        cy.verifylist(',', list, prefix, suffix, 'result1', 'mmedtiles', ',')

    }

    verifymmedtilesTarget() {
        const tiles = 'div.kpi-card-single-component-wrapper > div >span'
        const list = 'div.basic-container-container ul.slider-list > li'
        const prefix = 'div.basic-container-container ul.slider-list > li:nth-child('
        const suffix = ')'

        cy.verifylist(',', list, prefix, suffix, 'result2', 'mmedtiles', ',')

    }


    verifyprofilesummarySource() {
        const profilesummarytitle = 'div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(1) > section > div.wrap-component-top > div span.toolbar-component-title'
        const dropdownID = '#react-select-2--value > div.Select-value'
        const droplist = '#react-select-8--list'
        const dropdownoptions = 'div.Select-option'
        cy.invoketext(',', profilesummarytitle, 'result1', 'profilesummarytitle', ',')
       

        
        for (let option = 1; option <= noOfOptions; option++) {
            cy.log('In loop dd:' + option)
            dd.openDropDown(dropdownID)
            dd.clickOption(option)
            cy.wait(2000)
            cy.writeFile('./cypress/fixtures/result1.json', '\n' + '"Chart' + dropdownID + 'dropdown' + option + '": [', { flag: 'a+' })
            cy.xpath(dropdownoptions.getValueXpath(dropdownID)).its('length').then(valuesCount => {
                cy.log(valuesCount)
                for (let val = 1; val <= valuesCount; val++) {
                    cy.xpath(dropdownoptions.getValueXpath(dropdownID) + '[' + val + ']').invoke('text').then(value => {
                        cy.log(value)
                        let valueApp = value + ' '
                        cy.writeFile('./cypress/fixtures/result1.json', valueApp, { flag: 'a+' })
                        if (val < valuesCount) {
                            cy.writeFile('./cypress/fixtures/result1.json', ',', { flag: 'a+' })
                        }
                    })
                }
            })
        }
    }

verifyprofilesumm(){

    const listoftextxaxis = 'div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(1) > section > div:nth-child(2) > div svg  g:nth-child(15) g(1)'
    const listoftextyaxis = 'div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(1) > section > div:nth-child(2) > div svg  g:nth-child(15) g(2)'
    const prefixxaxis = ''
    const suffixxaxis = ''
    const prefixyaxis = ''
    const suffixyaxis = ''
    cy.verifylist(',', listoftextxaxis, prefix, suffix, 'result1', 'mmedtiles', ',')
    cy.verifylist(',', listoftextyaxis, prefix, suffix, 'result1', 'mmedtiles', ',')
   
}



    verifycurrentyearanalysis() {
        const currentyearcharttitle = 'div.basic-container-container > div:nth-child(4) > section > div > div:nth-child(1) > section > div.wrap-component-top > div span.toolbar-component-title'
        const current_year = '.switcher-container-content-child:nth-child(1) > .wrap-component > .wrap-component-top > .toolbar-component > .toolbar-component-header-container > .toolbar-component-title-subtitle > .toolbar-component-title'
        const current_year_graphview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(1)'
        const current_year_tableview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(2)'
        const listoflegendgraphview = 'div.basic-container-container > div:nth-child(4) > section > div  div > div.amChartsLegend.amcharts-legend-div > svg > g > g > g > text'
        const prefixlegendgraphview = 'div.basic-container-container > div:nth-child(4) > section > div  div > div.amChartsLegend.amcharts-legend-div > svg > g > g > g:nth-child('
        const suffixlegendgraphview = ') > text'
        const listofxaxisgraphview = 'div.basic-container-container > div:nth-child(4) > section > div div > div.amcharts-chart-div > svg > g:nth-child(15) > g:nth-child(1) > text > tspan'
        const prefixxaxisgraphview = 'div.basic-container-container > div:nth-child(4) > section > div div > div.amcharts-chart-div > svg > g:nth-child(15) > g:nth-child(1) > text:nth-child('
        const suffixxaxisgraphview = ') > tspan'

        const listofyaxisgraphview = 'div.basic-container-container > div:nth-child(4) > section > div div > div.amcharts-chart-div > svg > g:nth-child(15) > g:nth-child(2) > text > tspan'
        const prefixyaxisgraphview = 'div.basic-container-container > div:nth-child(4) > section > div div > div.amcharts-chart-div > svg > g:nth-child(15) > g:nth-child(2) > text:nth-child('
        const suffixyaxisgraphview = ') > tspan'


        const listofheadertableview = 'div.basic-container-container > div:nth-child(4) > section > div td.PTChildPivotTable > table  > tbody > tr:nth-child(2) > td'
        const prefixheadertableview = 'div.basic-container-container > div:nth-child(4) > section > div td.PTChildPivotTable > table  > tbody > tr:nth-child(2) > td:nth-child('
        const suffixheadertableview = ')'
        cy.get(current_year).should('be.visible')
        cy.get(current_year_graphview).should('be.visible')
        cy.get(current_year_tableview).should('be.visible')

        cy.invoketext(',', currentyearcharttitle, 'result1', 'currentyearcharttitle', ',')
        cy.verifylist(',', listoflegendgraphview, prefixlegendgraphview, suffixlegendgraphview, 'result1', 'graphviewlegend', ',')
        cy.verifylist(',', listofxaxisgraphview, prefixxaxisgraphview, suffixxaxisgraphview, 'result1', 'graphviewxaxis', ',')
        cy.verifylist(',', listofyaxisgraphview, prefixyaxisgraphview, suffixyaxisgraphview, 'result1', 'graphviewyaxis', ',')

        cy.get(current_year_tableview).click()
        cy.verifylist(',', listofheadertableview, prefixheadertableview, suffixheadertableview, 'result1', 'tableviewheader', ',')



    }

    verifycurrentyeartableview(){
        const tablebutton = '(//*[@class = "button-switcher-container"])[1]'
        const currentenrollmentlist = '(//*[@class="PTChildPivotTable"])[4] //table //tbody // tr // td[2] // a'
        cy.xpath(tablebutton).click()
        cy.wait(50000)
               cy.xpath(currentenrollmentlist)
                    .then(($list) => {
                        const listcount = $list.length;
                        cy.writeFile('./cypress/fixtures/result1.json', "number of rows" + listcount +'\n')
                        var i;
                        cy.writeFile('./cypress/fixtures/result1.json', "currentenrollment:" +'[', { flag: 'a+' })
                        for (i = 1; i < (listcount); i++) {
                            const prefix = '((//*[@class="PTChildPivotTable"])[4] //table //tbody // tr // td[2] // a)['
                            const suffix = ']'
                           cy.xpath(prefix+i+suffix)
                           .invoke('text').then(value => {
                            cy.writeFile('./cypress/fixtures/result1.json', '"'+value+'"' +',', { flag: 'a+' })
                           })
                        }
                        cy.writeFile('./cypress/fixtures/result1.json', "" +']', { flag: 'a+' })

                   /*     for (i = 1; i < (listcount); i++) {
                            const prefix = '((//*[@class="PTChildPivotTable"])[4] //table //tbody // tr // td[2] // a)['
                            const suffix = ']'
                                cy.xpath(prefix+i+suffix).click()  
                                cy.wait(20000)
                                cy.xpath('(//*[@class="contextMenuOptionText"])[1]').click()
                                cy.wait(120000)
                                cy.xpath('//*[@class = "mPTHC TTHT mPTHT PTHT mPTLR PTLR mPTLC PTLC OORT"]')
                                 .invoke('text').then(value => {
                                    cy.writeFile('./cypress/fixtures/result1.json', "Schooldashboard_Total:"+'"'+value + '"'+ ',' ,{ flag: 'a+' })
                                  })      
        
                        }
                        cy.writeFile('./cypress/fixtures/result1.json', ']', { flag: 'a+' })*/
                    })

    }

    navigatingtostudentreport(){
        cy.xpath('(//*[@class = "button-switcher-container"])[1]').click()
        cy.wait(10000)
        cy.xpath('((//*[@class="PTChildPivotTable"])[4] //table //tbody // tr // td[2] // a)[1]').click()
        cy.wait(20000)
        cy.xpath('(//*[@class="contextMenuOptionText"])[2]').click()
        cy.wait(80000)

      
    }

    verifyglobalfilter() {
        const filtericon = 'div.brintell-framework-icons > div:nth-child(3) > div > button'
        cy.get(filtericon).click()

    }



    //mmedelementarydashboard
    verifycurrentyearanalysis2() {
        const mmedelementarytile = 'div.brintell-framework-App-container-landing > div > div.banner-content > div:nth-child(2) > div > div > div.b-mega-menu-pages > div:nth-child(2)'
        const mmedelementarypagetitle = 'div.brintell-framework-top > div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)'
        const mmedelementarypagetitletext = 'Multilingual and Multicultural Education Department '
        const current_year = '.switcher-container-content-child:nth-child(1) > .wrap-component > .wrap-component-top > .toolbar-component > .toolbar-component-header-container > .toolbar-component-title-subtitle > .toolbar-component-title'
        const current_year_graphview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(1)'
        const current_year_tableview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(2)'

        //Test case8: MMED- RFEP Enrollment- Current Year vs Last Year Analysis
        //Navigating from MMED home page by clicking MMED tile
        cy.pagelaunch(mmedelementarytile, mmedelementarypagetitle, mmedelementarypagetitletext);

        //   cy.wait(7000)
        cy.get(current_year).should('be.visible')
        cy.get(current_year_graphview).should('be.visible')
        cy.get(current_year_tableview).should('be.visible')
    }
    verifymmedtiles() {
        const tiles = 'div.kpi-card-single-component-wrapper > div >span'

        cy.get(tiles)
            .should(($tiles) => {
                // should have found 7 elements
                expect($tiles).to.have.length(7)
                expect($tiles.eq(0)).to.contain('RFEP Enrollment')
                expect($tiles.eq(1)).to.contain('English Learners ETK 12')
                expect($tiles.eq(2)).to.contain('Newcomer')
                expect($tiles.eq(3)).to.contain('P - LTEL')
                expect($tiles.eq(4)).to.contain('LTEL')
                expect($tiles.eq(5)).to.contain('RFEP to Date - As Of Census Day')
                expect($tiles.eq(6)).to.contain('RFEP Monitoring')

            })
    }

    verifyglobalfilter() {
        const filtericon = 'div.brintell-framework-icons > div:nth-child(3) > div > button'
        cy.get(filtericon).click()

    }



    verifyprofilesummarydropdown() {
        const dropdown = '#react-select-2--value > div.Select-value'
        const droplist = '#react-select-8--list'
        const dropdownoptions = 'div.Select-option'

        cy.get(dropdown).click()
        cy.wait(30000)
        cy.get(droplist)
            .find(dropdownoptions)
            .then(($dropoptions) => {
                const listcount = $dropoptions.length;
                expect($dropoptions).to.have.length(listcount)
                var i;
                for (i = 0; i < listcount; i++) {
                    cy.wait(30000)
                    cy.get($dropoptions[i]).click()
                    cy.wait(30000)
                    var value;
                    switch (i) {
                        case 0:
                            value = "div.basic-container-container > div:nth-child(3) > section > div > div > section > div:nth-child(2) > div > span";
                            break;
                        case 1:
                            value = "#d\:dashboard\~p\:h5mcmhuif4uusd24\~r\:khjl16chjsark38lResult > table:nth-child(1) > tbody > tr:nth-child(2) > td";
                            break;
                        case 2:
                            value = "#htmlview\!1Div > table:nth-child(1)";
                            break;
                        case 3:
                            value = "div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(4) .custom-am-charts-stacked-bar-component";
                            break;
                        case 4:
                            value = "#d\:dashboard\~p\:h5mcmhuif4uusd24\~s\:sh5idusvlr4apk00Contents";
                            break;
                        case 5:
                            value = "#SWITCHER_CONTAINER > section > div > div:nth-child(6) > section > div.wrap-component-container > div";
                            break;
                        case 6:
                            value = "#d\:dashboard\~p\:h5mcmhuif4uusd24\~s\:91h63d0bkff8sueeContents";
                            break;
                    }
                    cy.get(value).should('be.visible')
                    cy.wait(30000)

                    cy.get(dropdown).click()
                    cy.wait(30000)
                }

            });
    }

}
export default MMEDPages