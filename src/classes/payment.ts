import { Hasformatter } from '../interfaces/hasformatter.js';

export class Payment implements Hasformatter{ //this class must follow the `Hasformatter` interface
    constructor(
        readonly recipient: string, //can read but can't be altered
        private details: string, // available inside the class
        public amount: number //can be read and altered
    ){}

    format(){ //this method must always implemented because of `Hasformatter`
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}