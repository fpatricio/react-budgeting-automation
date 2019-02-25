# react-budgeting-automation
- Screenplay pattern 
- Serenity JS
- Cucumber
- Typescript
- Protractor

# Automation for react Aplication: https://github.com/ModusCreateOrg/budgeting-sample-app-webpack2

## Prerequisites

You need to have installed node.js in your machine (you can download the latest version)

## Instruccions 

1. Clone this repository inside the react application root project folder (https://github.com/ModusCreateOrg/budgeting-sample-app-webpack2) in a folder called e2e.

2. Run the the react application in your local (Please see instructions for how to run the app in the app repository).

3. Go inside the e2e folder and run this command: ``` npm install ```

## Run tests

Run the following command ``` npm test ```

## Check the Serenity HTML report

Go to the following path after run your tests: ``` \target\site\serenity ``` and open the index.html file

## Cucumber Features

You can find all the cucumber scenarios in the following path: ``` \features ```

## Test Plan 

### Scenario 1: Adding an Outflow and Inflow on the Budget app and validate the new amount of the Working Balance Calculation.
Open the budget app in chrome browser: https://budget.modus.app/budget

- Select an Outflow category (Misc)
- Add the description of the Outflow category (like “Test Outflow”)
- Add a value for the Outflow category like 350
- Verify the calculation of the new Total Outflow is correct
- Select an Inflow category (Income)
- Add the description of the Inflow category (like “Test Income”)
- Add a value for the Inflow category like 650
- Verify the calculation of the new Total Inflow is correct
- Validate, verify and show in console the new working Balance value is correct.


### Scenario 2: Update Outflow category, description and value on the Budget app and validate the new amount of the Working Balance Calculation.

- Open the budget app in chrome browser: https://budget.modus.app/budget
- Click on the Outflow category Misc row with the description “Test Outflow”
- Click on the Dropdown Category Misc
- Select Beauty
- Change the description from “Test Outflow” to “Test Beauty”
- Change the value from 350 to 450
- Click on the “Update” button
- Verify the calculation of the new Total Outflow is correct
- Validate and show in console the new working Balance value is correct.


### Scenario 3: Update Inflow category description and value, delete an Outflow category on the Budget app and validate the new amount of the Working Balance Calculation.
Open the budget app in chrome browser: https://budget.modus.app/budget

- Click on the Inflow category Income row with the description “Test Income”
- Click on the Dropdown Category Income
- Change the description from “Test Income” to “Test Income True”
- Change the value from 650 to 950
- Click on the “Update” button
- Verify the calculation of the new Total Inflow is correct
- Click on the Outflow category Beauty row with the description “Test Beauty”
- Click on the Delete button
- Validate and show in console the new working Balance value is correct.


