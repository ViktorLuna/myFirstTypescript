import { Invoice } from './classes/invoice.js' //always use .js files

const invOne = new Invoice('mario','work on the mario website', 250);
const invTwo = new Invoice('luiji','work on the luiji website', 300);
// console.log(invOne, invTwo)

let invoices: Invoice[] = [];
// let invoices: string[] = [];
invoices.push(invOne)
invoices.push(invTwo)
// invoices.push({name:'josh'}) //error
// invoices.push('hello') //error
// invoices.push(21) //error

invoices.forEach(inv => {
    // inv.client = 'something' //error as mark readonly
    console.log(inv.client, inv.amount, inv.format());
    // console.log(inv.client, inv.details, inv.amount, inv.format()); //error as mark private
})