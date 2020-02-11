export class UserInvestment {
    id: string;
    amountused: string;
    buyingofferprice: number;
    investmentname: string;
    quantity: number;
    userid: string;

    constructor(id: string, amountused: string, buyingofferprice: number, investmentname: string, quantity: number, userid: string) {      
        this.id = id;
        this.amountused = amountused;
        this.buyingofferprice = buyingofferprice;
        this.investmentname = investmentname;
        this.quantity = quantity;
        this.userid = userid;
    }
}