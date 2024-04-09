export interface Items {
   
        id:number;
        name:string;
        place:string;
        age:number;
        dob:string;
        phoneNumber:string;
        Company:string;
        StreetAddress:string;
        Postcode:string;
        Country:string;
        City:string;
        gmail:string;
        CreditCard: {
            Number: string,
            Expiry: string,
            CVV: string
          }
       
}
