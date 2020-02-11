import { IonDatetime } from '@ionic/angular';

export class Unittrust {
    name : string;
    bidprice: number;
    offerprice: number;
    type: string;
    date: string;
    id: string;
    investmentamount: number;
    quantity: number;

    constructor(name: string, bidprice: number, offerprice: number, type: string, date: string, id:string, investmentamount?: number, quantity?: number) {      
        
        this.name = name;
        this.bidprice = bidprice;
        this.offerprice = offerprice;
        this.type = type;
        this.date = date;
        this.id = id;
        this.investmentamount = investmentamount;
        this.quantity = quantity;
        

    }

}