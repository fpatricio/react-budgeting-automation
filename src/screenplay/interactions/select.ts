import { Interaction } from "serenity-js/lib/screenplay";
import { UsesAbilities } from "serenity-js/lib/screenplay";
import { AnswersQuestions } from "serenity-js/lib/screenplay";
import { BrowseTheWeb } from "serenity-js/lib/screenplay-protractor";
import { BudgetPage, CATEGORIES } from "../user-interface/budget.page";

export class Select implements Interaction {

    static category(category: CATEGORIES) {
        return new Select(category);
    }

    async performAs(actor: UsesAbilities & AnswersQuestions) {
        await BrowseTheWeb.as(actor).locate(BudgetPage.categoryNameDropdown).click();
        return await BrowseTheWeb.as(actor).locate(BudgetPage.categoryOption(this.category)).click();
    }

    constructor(private category: CATEGORIES) {}

}