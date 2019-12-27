import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-expense-calculator',
  templateUrl: './expense-calculator.page.html',
  styleUrls: ['./expense-calculator.page.scss'],
})
export class ExpenseCalculatorPage {
value ='0';
newInput =true;
oldValue='0';
lastOperator = '*';
numberGroups = 
[ 

  [7,8,9,'/'],
  [4,5,6,'*'],
  [1,2,3,'-'],
  [0,'C','=']
];
onButtonPress(symbol){
console.log(symbol)

if  (isNumber(symbol)) {
console.log('number works');
if (this.newInput)
 this.value = ''+ symbol; 
else 
 this.value = ''+ symbol; 
  this.newInput = false;
}
else if (symbol === 'C')
{
  this.value = '0';
  this.newInput=true; 
}
else if (symbol === '='){
if (this.lastOperator === '/')
this.value=''+ (parseInt(this.oldValue)/parseInt(this.value));

else if (this.lastOperator === '*')
this.value=''+ (parseInt(this.oldValue)*parseInt(this.value));

else if (this.lastOperator === '-')
this.value=''+ (parseInt(this.oldValue)-parseInt(this.value));

else if (this.lastOperator === '+')
this.value=''+ (parseInt(this.oldValue)+parseInt(this.value));

this.newInput=true;
}

else {//operators
  this.newInput=true; 
  this.oldValue= this.value;
  this.lastOperator =symbol;
}

}
}
