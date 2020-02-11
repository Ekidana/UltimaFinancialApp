import { Expense } from './expense'; 
import { IonIcon } from '@ionic/angular';

export class SingleExpense {
    title: string;
    Id: number;
    note: string;
    //declare icon 
    
    constructor (public expense:Expense, Id?: number, title?: string, note?: string, icon?: string) {
        this.Id = Id
        this.title = title
        this.note = note
        //initiate icon 
        
    }
}