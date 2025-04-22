
import { Interface } from "readline"

 export interface Mortgage{
    amount: number, 
    term: number,
    rate: number, 
    type: 'Repayment' | 'Interest'
  }  