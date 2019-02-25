import { Task } from "serenity-js/lib/screenplay";
import { PerformsTasks } from  "serenity-js/lib/screenplay"
import { Flow } from "../../models/flow";
import { Click, Target } from "serenity-js/lib/screenplay-protractor";
import { BudgetPage } from "../user-interface/budget.page";
import { BudgetTable } from "../../utils/budget-table";


export class Delete implements Task {

    static flow(flow: Flow) {
        return new Delete(flow);
    }

    async performAs(actor: PerformsTasks) {
        const rowPosition = await BudgetTable.getRowIndexFor(this.flow) + 1;
        const flowRow: Target = await BudgetPage.flowRow(rowPosition);
        return await actor.attemptsTo(
            await Click.on(flowRow),
            await Click.on(BudgetPage.deleteFlowButton)
        )
    }

    constructor(private flow: Flow){}

}