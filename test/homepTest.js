
// call out pageObjects/homepage on top of test file 
const homepage = require('../pageObjects/basePage');

describe ("selenTests", function(){
    // set a timeout
    this.timeout(50000);

//actions to run before runing the test
    beforeEach(function(){

    })

    afterEach(function(){

    });

    it("Test1", function(){
        //test steps:
        var baseUrl = "https://www.google.com";
        homepage.go_to_url(baseUrl);
        homepage.enter_search('QA Tutorial');

        //now tell driver to navigate to base url - hpage can extend baseclass methods, etc

    })

})

