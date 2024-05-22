export class Payment {
    constructor(recipient, //can read but can't be altered
    details, // available inside the class
    amount //can be read and altered
    ) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
