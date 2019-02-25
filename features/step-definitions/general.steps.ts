import { Open } from "serenity-js/lib/screenplay-protractor";
import * as fs from 'fs';
import { GeneralBalance } from "../../src/models/general-balance";
import { BudgetTable } from "../../src/utils/budget-table";
import { expect } from "chai"; 
import { Flow } from "../../src/models/flow";

const urls = JSON.parse(fs.readFileSync('./data/urls.json', 'utf8'));

export = async function generalSteps() {

    this.Given(/^(.*) open the  budget application$/, async function (actor: string) {
        return this.stage.theActorCalled(actor).attemptsTo(
            Open.browserOn(urls.base_app_url)
        );
    });

    this.Then(/^Total inflow and Working balance should be updated$/, async function () {
        const actualBalance: GeneralBalance = await BudgetTable.getGeneralBalance();
        const generalBalanceBeforeChange: GeneralBalance = await BudgetTable.getGeneralBalanceBeforeChange();
        const flow: Flow = await BudgetTable.getLastFlowCreated();
        const calculatedInflowBalance: number = (generalBalanceBeforeChange.totalInflow) + (await flow.$value) * 1;
        const calculatedWorkingBalance: number = (generalBalanceBeforeChange.workingBalance) + (flow.$value) * 1;
        expect( calculatedInflowBalance, 'Expecting Total inflow value to be updated').to.be.approximately(actualBalance.totalInflow, 0.1);
        expect( calculatedWorkingBalance, 'Expecting Working balance value to be updated').to.be.approximately(actualBalance.workingBalance, 0.1);
    });

    this.Then(/Total outflow and Working balance should be updated$/, async function () {
        let actualBalance: GeneralBalance = await BudgetTable.getGeneralBalance();
        const generalBalanceBeforeChange: GeneralBalance = await BudgetTable.getGeneralBalanceBeforeChange();
        const flow: Flow = await BudgetTable.getLastFlowCreated();
        const calculatedOutflowBalance: number = (generalBalanceBeforeChange.totalOutflow) - (flow.$value) * 1;
        const calculatedWorkingBalance: number = (generalBalanceBeforeChange.workingBalance) + (flow.$value) * 1;
        expect( calculatedOutflowBalance, 'Expecting Total inflow value to be updated').to.be.approximately(actualBalance.totalOutflow, 0.1);
        expect( calculatedWorkingBalance, 'Expecting Working balance value to be updated').to.be.approximately(actualBalance.workingBalance, 0.1);
    });

}