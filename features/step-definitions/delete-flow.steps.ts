import { Flow } from "../../src/models/flow";
import { BudgetTable } from "../../src/utils/budget-table";
import { Delete } from "../../src/screenplay/tasks/delete";
import { Wait, Duration } from "serenity-js/lib/screenplay-protractor";

export = async function deleteFlowSteps() {

    this.When(/^He wants to delete the recently flow created$/
        , async function () {
        const actualFlow: Flow = await BudgetTable.getLastFlowCreated();
        await BudgetTable
        await BudgetTable.saveGeneralBalance();
        await this.stage.theActorInTheSpotlight().attemptsTo(
            Wait.for(new Duration(500)),
            Delete.flow(actualFlow)
        );
        actualFlow.$value = actualFlow.$value * -1;
        await BudgetTable.saveFlow(actualFlow);
    });

}