import { Task } from "serenity-js/lib/screenplay";
import { PerformsTasks } from  "serenity-js/lib/screenplay"
import { Flow } from "../../models/flow";
import { Click, Target, Enter, Wait, Duration } from "serenity-js/lib/screenplay-protractor";
import { BudgetPage } from "../user-interface/budget.page";
import { BudgetTable } from "../../utils/budget-table";
import { Select } from "../interactions/select";
import { Clean } from "../interactions/clean";

export class Update implements Task {

    static flow(actualFlow: Flow, newFlow: Flow) {
        return new Update(actualFlow, newFlow);
    }

    async performAs(actor: PerformsTasks) {
        const rowPosition = await BudgetTable.getRowIndexFor(this.actualFlow) + 1;
        const flowRow: Target = await BudgetPage.flowRow(rowPosition);
        return await actor.attemptsTo(
            await Click.on(flowRow),
            await Select.category(this.newFlow.$category),
            await Clean.theField(BudgetPage.categoryDescriptionInput),
            await Enter.theValue(this.newFlow.$description).into(BudgetPage.categoryDescriptionInput),
            await Clean.theField(BudgetPage.categoryValueInput),
            await Enter.theValue(this.newFlow.$value).into(BudgetPage.categoryValueInput),
            await Click.on(BudgetPage.updateFlowButton)
        )
    }

    constructor(private actualFlow: Flow, private newFlow: Flow){}

}