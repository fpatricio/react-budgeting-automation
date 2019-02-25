import { Add } from "../../src/screenplay/tasks/add";
import { CATEGORIES } from "../../src/screenplay/user-interface/budget.page";
import { Flow } from "../../src/models/flow";
import { expect } from "chai";
import { IsNewFlowCreated } from "../../src/screenplay/questions/IsNewFlowCreated";
import { BudgetTable } from "../../src/utils/budget-table";


export = async function addFlowSteps() {

    this.When(/^He would like to add a new inflow for category: (.*) with description: "([^"]*)" and value: (.*)$/,
        async function (category: CATEGORIES, description: string, value: number) {
            const flow = new Flow(category, description, value);
            process.env.FLOW_CREATED = JSON.stringify(flow);
            await BudgetTable.saveGeneralBalance();
            return this.stage.theActorInTheSpotlight().attemptsTo(
                Add.inFlow(flow)
            );
    });

    this.When(/^He would like to add a new outflow for category: (.*) with description: "([^"]*)" and value: (.*)$/,
        async function (category: CATEGORIES, description: string, value: number) {
            const flow = new Flow(category, description, value);
            await BudgetTable.saveFlow(flow);
            await BudgetTable.saveGeneralBalance();
            return this.stage.theActorInTheSpotlight().attemptsTo(
                Add.outFlow(flow)
            );
    });

    this.Then(/^He should see the new inflow in the budget table$/, async function () {
        const flow: Flow = await BudgetTable.getLastFlowCreated();           
        expect(await this.stage.theActorInTheSpotlight().toSee(await IsNewFlowCreated.perform(flow)),
            `Expecting ${flow} to be created in the budget table`).to.be.true;
    });

    
}