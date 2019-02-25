Feature: Update aleady created inflow or outflow in the budget
    As an Budget app user
    I want to add a new inflow or outflow to my budget
    So that I could have my budget up to date

    @regression
    Scenario: update an inflow in the budget
        Given User open the  budget application
        When He would like to add a new inflow for category: Income with description: "Salary March 2019" and value: 2000.00
        And He wants to update the recently flow created with: Gifting , description: "Company gift 2019" and value: 3000.00
        Then Total inflow and Working balance should be updated

    @regression
    Scenario: update an outflow in the budget
        Given User open the  budget application
        When He would like to add a new outflow for category: Travel with description: "Tickets Trip to Orlando 2019" and value: -1000.00
        Then He wants to update the recently flow created with: Car , description: "Car gas from Florida to Orlando" and value: -2000.00
        And Total outflow and Working balance should be updated