// set up webdriver 
var webdriver = require("selenium-webdriver");

//set up a driver var for browser
var driver = new webdriver.Builder().forBrowser("chrome").build();
//set implicit wait
driver.manage().setTimeouts({implicit:(10000)});

//create class 
class BasePage{
    constructor(){
        //alows to share driver across page classes
        global.driver = driver;
    }

go_to_url(theURL){
    driver.get(theURL);
}
}

//export class
module.exports = BasePage;

