
import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const Home = require("../../pages/Home");

Given("A web browser is at the Zitrus home page", () => {
    cy.visit("/")
  });

  When("I click on the About Us Menu", () => {
    
  });

  Then("should I view the Zitrus History", () => {

  });
