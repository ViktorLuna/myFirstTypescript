//classes
export class Invoice {
    constructor(client, //can read but can't be altered
    details, // available inside the class
    amount //can be read and altered
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
