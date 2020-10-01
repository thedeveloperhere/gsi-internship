import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'HelloWorld';    // HelloWorld is set as greetings.
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}
    
