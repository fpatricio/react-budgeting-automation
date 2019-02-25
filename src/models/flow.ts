import { CATEGORIES } from "../screenplay/user-interface/budget.page";

export class Flow {
    private category: CATEGORIES;
    private description: string;
    private value: number;

    constructor(category: CATEGORIES, description: string, value: number) {
        this.category = category;
        this.description = description;
        this.value = value;
    }


    /**
     * Getter $category
     * @return {CATEGORIES}
     */
	public get $category(): CATEGORIES {
		return this.category;
	}

    /**
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Getter $value
     * @return {number}
     */
	public get $value(): number {
		return this.value;
	}

    /**
     * Setter $category
     * @param {CATEGORIES} value
     */
	public set $category(value: CATEGORIES) {
		this.category = value;
	}

    /**
     * Setter $description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}

    /**
     * Setter $value
     * @param {number} value
     */
	public set $value(value: number) {
		this.value = value;
	}

}