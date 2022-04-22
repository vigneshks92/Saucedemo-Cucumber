$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Products.feature");
formatter.feature({
  "name": "This feature would be used to test the products price of the application https://www.saucedemo.com/",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature_Products"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate the prices of the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I have logged in successful",
  "keyword": "When "
});
formatter.step({
  "name": "Validate \"\u003cProductName\u003e\" and \"\u003cPrice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ProductName",
        "Price"
      ]
    },
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)",
        "$15.99"
      ]
    }
  ]
});
formatter.background({
  "name": "Logon to the application https://www.saucedemo.com/",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the swaglabs application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SauceLoginSteps.i_have_opened_the_swaglabs_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the prices of the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature_Products"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I have logged in successful",
  "keyword": "When "
});
formatter.match({
  "location": "ValidateSteps.i_have_logged_in_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate \"Sauce Labs Backpack\" and \"$29.99\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateSteps.validate_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logon to the application https://www.saucedemo.com/",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the swaglabs application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SauceLoginSteps.i_have_opened_the_swaglabs_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the prices of the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature_Products"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I have logged in successful",
  "keyword": "When "
});
formatter.match({
  "location": "ValidateSteps.i_have_logged_in_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate \"Test.allTheThings() T-Shirt (Red)\" and \"$15.99\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateSteps.validate_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Logon to the application https://www.saucedemo.com/",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the swaglabs application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SauceLoginSteps.i_have_opened_the_swaglabs_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the prices of the product using data table",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature_Products"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have logged in successful",
  "keyword": "Given "
});
formatter.match({
  "location": "ValidateSteps.i_have_logged_in_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass below prodcuts",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ]
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ValidateSteps.i_pass_below_prodcuts(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should validate product prices against below prices",
  "rows": [
    {
      "cells": [
        "$29.99"
      ]
    },
    {
      "cells": [
        "$9.99"
      ]
    },
    {
      "cells": [
        "$15.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateSteps.i_should_validate_product_prices_against_below_prices(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/SauceLogin.feature");
formatter.feature({
  "name": "This feature would be used to test the login page of the application https://www.saucedemo.com/",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature_Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Positive Login using scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be logged in succesful and land on product page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application https://www.saucedemo.com/",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the swaglabs application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SauceLoginSteps.i_have_opened_the_swaglabs_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login using scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature_Login"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "SauceLoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "SauceLoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "SauceLoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be logged in succesful and land on product page",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceLoginSteps.i_should_be_logged_in_succesful_and_land_on_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative Login using scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be getting error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "wrong_pass"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application https://www.saucedemo.com/",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the swaglabs application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SauceLoginSteps.i_have_opened_the_swaglabs_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login using scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature_Login"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "SauceLoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"wrong_pass\"",
  "keyword": "And "
});
formatter.match({
  "location": "SauceLoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "SauceLoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be getting error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceLoginSteps.i_should_be_getting_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});