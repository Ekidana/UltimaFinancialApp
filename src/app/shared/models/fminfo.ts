export class fminfo {
    id: string;
    investname : string;
    investamount: number;
    investquantity: number;
    offer_bid_pricesubmitted: number;
    status: string;
    userid: string;
    datetime: string;
    offer_bid_priceonspot: number;

    constructor(id: string, investname: string, investamount: number, investquantity: number, offer_bid_pricesubmitted: number, offer_bid_priceonspot: number, status: string, userid:string, datetime: string) {      
        this.id = id;
        this.investname = investname;
        this.investamount = investamount;
        this.investquantity = investquantity;
        this.offer_bid_pricesubmitted = offer_bid_pricesubmitted;
        this.offer_bid_priceonspot = offer_bid_priceonspot;
        this.status = status;
        this.userid = userid;
        this.datetime = datetime;
    }
}