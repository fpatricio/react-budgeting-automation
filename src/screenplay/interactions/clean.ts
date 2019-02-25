import { Interaction } from "serenity-js/lib/screenplay";
import { UsesAbilities } from "serenity-js/lib/screenplay";
import { AnswersQuestions } from "serenity-js/lib/screenplay";
import { BrowseTheWeb, Target } from "serenity-js/lib/screenplay-protractor";
import { Key } from "protractor";

export class Clean implements Interaction {

    static theField(target: Target) {
        return new Clean(target);
    }

    async performAs(actor: UsesAbilities & AnswersQuestions) {
        const value = await BrowseTheWeb.as(actor).locate(this.target).getAttribute('value');
        await BrowseTheWeb.as(actor).locate(this.target).click();
        for (let i=0; i < value.length; i++) {
            await BrowseTheWeb.as(actor).actions().sendKeys(Key.BACK_SPACE).perform();
        }
    }

    constructor(private target: Target) {}

}