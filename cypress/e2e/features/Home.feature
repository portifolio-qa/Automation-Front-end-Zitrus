
Feature: Home Page Site Zitrus

Home Page Functionality.

Background:
 Scenario: Validate from Home Page 
  Given that a web browser is on the About Us page
  When I view the main page menu
  Then I should see the following menus About Us

 Scenario: Validate Main Page Address 
  Given that a web browser is on the homepage
  When I see "R. Xavantes, 54 - 2nd floor. - Atiradores, Joinville - SC, 89203-210 "
  Then confirm the address