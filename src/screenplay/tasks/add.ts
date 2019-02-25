import { Task, Enter, Click } from "serenity-js/lib/screenplay-protractor";
import { PerformsTasks} from "serenity-js/lib/screenplay";
import { BudgetPage } from "../user-interface/budget.page";
import { Select } from "../interactions/select";
import { Flow } from "../../models/flow";

export class Add implements Task {

    static inFlow(inflow: Flow) {
        inflow.$value = (inflow.$value > 0) ? inflow.$value: (inflow.$value * -1);
        return new Add(inflow);
    }

    static outFlow(outFlow: Flow) {
        outFlow.$value = (outFlow.$value < 0) ? outFlow.$value: (outFlow.$value * -1);
        return new Add(outFlow);
    }
    
    async performAs(actor: PerformsTasks) {
        return actor.attemptsTo(
            await Select.category(this.flow.$category),
            await Enter.theValue(this.flow.$description).into(BudgetPage.categoryDescriptionInput),
            await Enter.theValue(this.flow.$value).into(BudgetPage.categoryValueInput),
            await Click.on(BudgetPage.addFlowButton)
        );
    }

    constructor(private flow: Flow) {}

}