import { Question } from "serenity-js/lib/screenplay";
import { UsesAbilities} from "serenity-js/lib/screenplay"
import { BrowseTheWeb } from "serenity-js/lib/screenplay-protractor";
import { BudgetPage } from "../user-interface/budget.page";
import { Flow } from "../../models/flow";
import { BudgetTable } from "../../utils/budget-table";

export class IsNewFlowCreated implements Question<Promise<boolean>> {

    static async perform(flow: Flow) {
        return await new IsNewFlowCreated(flow);
    }

    async answeredBy(actor: UsesAbilities): Promise<boolean> {
        const rowPosition = await BudgetTable.getRowIndexFor(this.flow) + 1;
        return await BrowseTheWeb.as(actor).locate(await BudgetPage.flowRow(rowPosition)).isPresent();
    }

    constructor(private flow: Flow) {}

}