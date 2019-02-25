import { CATEGORIES } from "../../src/screenplay/user-interface/budget.page";
import { Flow } from "../../src/models/flow";
import { BudgetTable } from "../../src/utils/budget-table";
import { Update } from "../../src/screenplay/tasks/update";

export = async function updateFlowSteps() {

    this.When(/^He wants to update the recently flow created with: (.*) , description: "([^"]*)" and value: (.*)$/
        , async function (category: CATEGORIES, description: string, value: number) {
        const actualFlow: Flow = await BudgetTable.getLastFlowCreated();
        const newFlow = new Flow(category, description, value);
        await BudgetTable
        await BudgetTable.saveGeneralBalance();
        await this.stage.theActorInTheSpotlight().attemptsTo(
            Update.flow(actualFlow, newFlow)
        );
        newFlow.$value = newFlow.$value - actualFlow.$value;
        await BudgetTable.saveFlow(newFlow);
    });
}