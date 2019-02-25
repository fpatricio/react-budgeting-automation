Feature: Delete inflow or outflow from the budget
    As an Budget app user
    I want to delete a new inflow or outflow from my budget
    So that I could have my budget up to date

    @regression
    Scenario: delete an inflow in the budget
        Given User open the  budget application
        When He would like to add a new inflow for category: Income with description: "Salary March 2019" and value: 2000.00
        And He wants to delete the recently flow created
        Then Total inflow and Working balance should be updated

    @regression
    Scenario: delete an outflow in the budget
        Given User open the  budget application
        When He would like to add a new outflow for category: Travel with description: "Tickets Trip to Orlando 2019" and value: -1000.00
        Then He wants to delete the recently flow created
        And Total outflow and Working balance should be updated