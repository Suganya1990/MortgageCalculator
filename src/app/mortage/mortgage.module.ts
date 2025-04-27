
import { Interface } from "readline"

 export interface Mortgage{
    amount: Number, 
    term: Number,
    rate: Number, 
    type: String | null|  "Repayment" | "Interest" ,
  }  