import { Unittrust } from './unittrust';


export class BuyUnit {
    id : string;

    constructor(public unittrust: Unittrust, public quantity: number,public investamount: number,id?: string) {

        this.id = id

    }


}


