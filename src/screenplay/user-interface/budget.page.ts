import { Target } from 'serenity-js/lib/screenplay-protractor';
import { by } from 'protractor';

export const BudgetPage = {
    categoryNameDropdown: Target.the('Category dropdown').located(by.name('categoryId')),
    categoryDescriptionInput: Target.the('Category description field').located(by.name('description')),
    categoryValueInput: Target.the('Category value field').located(by.name('value')),
    addFlowButton: Target.the('Add flow button').located(by.className('submit')),
    updateFlowButton: Target.the('Update flow button').located(by.cssContainingText('button', 'Update')),
    deleteFlowButton: Target.the('Delete flow button').located(by.cssContainingText('button', 'Delete')),
    categoryOption: (categoryName: CATEGORIES) => { return Target.the('Category option').located(by.cssContainingText('option', categoryName))},
    flowRow: async (position: number) => {
        return await Target.the('Selected budget row')
            .located(by.css('.containers-BudgetGrid-style__budgetGrid > tbody > tr:nth-child(' + position + ')'));
    }
}

export enum CATEGORIES {
    GROCERIES = 'Groceries',
    TRAVEL = 'Travel',
    INCOME = 'Income',
    ENTERTAINMENT = 'Entertainment',
    MISC = 'Misc',
    CAR = 'Car',
    SCHOOL = 'School',
    UTENSILS = 'Utensils',
    KIDS = 'Kids',
    COMMUTE = 'Commute',
    INSURANCE = 'Insurance',
    CLOTHING = 'Clothing',
    TAXES = 'Taxes',
    HEALTH = 'Health',
    HOME = 'Home',
    BEAUTY = 'Beauty',
    GIFTING = 'Gifting'
}