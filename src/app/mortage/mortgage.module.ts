
import { Interface } from "readline"

 export interface Mortgage{
    amount: number, 
    term: number,
    rate: number, 
    type: String | null|  "Repayment" | "Interest" ,
    monthlyPayment: number |  0 ,
    interestPayment: number | 0,
    totalRepayment: number | 0 
  }  