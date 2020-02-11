export class Expense{
    static collection(arg0: string) {
      throw new Error("Method not implemented.");
    }
    Id: string; 
    Item ?: string; 
    Amount?: string; 
    Date ?: Date; 
      constructor( item?: string, amount?: string, date?: Date, id?: string) 
      {
        this.Id = id;
        this.Item= item; 
        this.Amount=amount; 
        this.Date= date; 
      }
    }