//classes
export class Invoice {
    constructor(
        readonly client: string, //can read but can't be altered
        private details: string, // available inside the class
        public amount: number //can be read and altered
    ){}

    format(){ //method
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}