import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const Home = require('../../pages/Home');

describe('Home Page Zitrus', () => {
    context('Menus', () => {
        Given('a web browser is on the Zitrus homepage', () => {
            cy.visit('/');

            When('I view the main page menus', () => {      
  
                Then('I should see the following menus About Us, Solutions, Blog and Careers', () => {
          
                });        
            });
        });
    });
    context('Address', () => {
        Given('', () => {
            cy.visit('/');
            When('', () => { 

                Then('', () => {      
                });        
            });
        });
    }); 
    context('Plus', () => {
        Given('', () => {
            cy.visit('/');
            When('', () => {
                Then('', () => {      
                });        
            });
        });
    });
}); 