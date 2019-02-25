Feature: Add new Inflow or Outflow to the budget
    As an Budget app user
    I want to add a new inflow or outflow to my budget
    So that I could have my budget up to date

    @regression
    Scenario: add new inflow to the budget
        Given User open the  budget application
        When He would like to add a new inflow for category: Income with description: "Salary March 2019" and value: 2000.00
        Then He should see the new inflow in the budget table
        And Total inflow and Working balance should be updated

    @regression
    Scenario: add new outflow to the budget
        Given User open the  budget application
        When He would like to add a new outflow for category: Travel with description: "Tickets Trip to Orlando 2019" and value: -1000.00
        Then He should see the new inflow in the budget table
        And Total outflow and Working balance should be updated
        