import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const Home = require('../../pages/Home');

describe('Home Page Zitrus', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    context('Menus', () => {
        Given('that a web browser is on the About Us page', () => {
            cy.get('.elementor-container:nth-child(2) .elementor-element-6bf5647 .elementor-widget-wrap').click();
            cy.url().should('contains', 'https://zitrus.com.br/quem-somos/');
            .should('exist')

            When('I see "Commitment to Result and Transformation"', () => {      
                cy.get('.elementor-heading-title elementor-size-default')
                .find('h2')
                .should('have.text', 'Commitment to Result and Transformation')
              
                Then('I should see the following menus About Us', () => {
                    cy.get('elementor-heading-title elementor-size-default')
                    .should('exist')
                    .and('have.class', 'x-large')
                                                       
                });        
            });
        });
    });
    context('Address', () => {
        Given('', () => {
            cy.visit('/');
            When('', () => { 
                cy.get('.elementor-icon-list-text')
                .find('h2')
                .should('have.text', 'R. Xavantes, 54 - 2nd floor. - Atiradores, Joinville - SC, 89203-210 ')

                Then('', () => {
                    cy.get('.elementor-icon-list-text')
                    .should('have.text', 'R. Xavantes, 54 - 2nd floor. - Atiradores, Joinville - SC, 89203-210 ')  
                    .should('exist')    
                });        
            });
        });
    }); 
    context('Proximo Test', () => {
        Given('', () => {
            cy.visit('/');
            When('', () => {
                Then('', () => {      
                });        
            });
        });
    });
}); 