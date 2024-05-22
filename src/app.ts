import { Invoice } from './classes/invoice.js' //always use .js files
import { Payment } from './classes/payment.js' //always use .js files
import { Hasformatter } from './interfaces/hasformatter.js' //always use .js files
import { listTemplate } from './classes/listTemplate.js'; //always use .js files

//Setting variable to an HTMLAnchoElement type called TypeCasting
const form = document.querySelector('.new-item-form') as HTMLAnchorElement;
// console.log(form.children)
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul') !;
const list = new listTemplate(ul)

form.addEventListener('submit',(e: Event) => {
    e.preventDefault();

    let doc: Hasformatter;

    if(type.value == 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    // console.log(doc)

    list.render(doc, type.value, 'end');
})