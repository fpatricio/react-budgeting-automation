import { ElementArrayFinder, element, by, ElementFinder } from "protractor";
import { Flow } from "../models/flow";
import { GeneralBalance } from "../models/general-balance";

export class BudgetTable {


    private static budgetTableRows: ElementArrayFinder = element.all(by.css('.containers-BudgetGrid-style__budgetGrid > tbody > tr'));
    private static generalBalanceContainers: ElementArrayFinder = element.all(by.css('.components-Balance-style__balanceRow > .components-Balance-style__balanceWrapper'));
    private 

    public static async getRowIndexFor(flow: Flow): Promise<number> {
        let flows: Flow[] = [];
        for(const flowRow of await this.budgetTableRows) {
            let rowValues: any[] = [];
            const columns: ElementArrayFinder = flowRow.all(by.css('td'));
            for(const column of await columns) {
                const cellValue: ElementFinder = column.element(by.className('components-BudgetGridRow-style__cellContent'));
                await rowValues.push(await cellValue.getText());
            }

            const flowFound = new Flow(rowValues[0], rowValues[1], await this.getValueNumber(rowValues[2]));
            await flows.push(flowFound);
        }

        return await flows.findIndex((flowInTable => flowInTable.$category == flow.$category) &&
            (flowInTable => flowInTable.$description == flow.$description))
    }

    public static async getGeneralBalance(): Promise<GeneralBalance> {
        let amounts: number[] = [];
        for(const balanceContainer of await this.generalBalanceContainers) {
            const amount: ElementFinder = balanceContainer.element(by.className('components-Balance-style__balanceAmount'));
            amounts.push(await this.getValueNumber(await amount.getText()));
        }
        return {
            totalInflow: amounts[0],
            totalOutflow: amounts[1],
            workingBalance: amounts[2]
        }
    }

    public static async getLastFlowCreated(): Promise<Flow> {
        const parsedFlow = JSON.parse(process.env.FLOW_CREATED);
        return new Flow(parsedFlow.category, parsedFlow.description, parsedFlow.value);
    }

    public static async saveFlow(flow: Flow) {
        process.env.FLOW_CREATED = JSON.stringify(flow);
    }

    public static async getGeneralBalanceBeforeChange(): Promise<GeneralBalance> {
        return await JSON.parse(process.env.GENERAL_BALANCE);
    }

    public static async saveGeneralBalance() {
        process.env.GENERAL_BALANCE = JSON.stringify(await this.getGeneralBalance());
    }

    private static async getValueNumber(tableValue: string): Promise<number> {
        return +(tableValue.replace('$','').replace(',',''));
    }
}