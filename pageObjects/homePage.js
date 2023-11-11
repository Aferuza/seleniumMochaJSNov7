// the methods of selenium webdriver we can call in our script
const{Builder, By, Key, util} =require("selenium-webdriver");
//create var for Basepage- extend it

var BasePage = require(" ../pageObjects/BasePage");
//set up Wbdriver var

var webdriver = require("selenium-webdriver");
// create homePage class- extend the Baseclass to share driver with

class HomePage extends BasePage{
    // crete enter search
    enter_search(searchtext){
        // enter text into search field
        driver.findElement(By.css("input[name=q]").sendKeys(searchtext));

        //send enter key to the element
        driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER);
        module.exports = new HomePage();

    }
}



