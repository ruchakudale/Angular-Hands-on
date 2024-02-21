import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CheckNumber',
  standalone: true
})

export class CheckNumberPipe implements PipeTransform {
  chkPrime(No: number):boolean
  {
      var flag: boolean= true;
      var i : number=0;
  
      for (i = 2; i <= No/2 ; i++)
      if (No % i == 0) {
          flag = false;
          break;
      }
      return flag;
  }
  transform(value: number, Param: string): string {
    var result: string="";

    switch(Param)
    {
      case "Even":
        if(value%2==0)
           result="It is even number.";
        else
          result="It is odd number."
        break;
      
      case "Prime":
        var isPrime: boolean= false;
        isPrime= this.chkPrime(value);
        if(isPrime)
            result="It is prime number";
        else
            result="It is not prime number";
        break;
      
      case "Perfect":
        return this.ChkPerfect(value);
        break;

      default:
        return "Please mention correct parameter.";
        break;

    }
    return result;
  }
  
  ChkPerfect(No:number):string 
  {
    var result:string="";
    var temp = 0;    
    for (var i = 1; i <= No / 2; i++) 
    {
      if (No % i === 0) {        
        temp += i;
      }
    }
        
    if (temp === No && temp !== 0) 
      result= "It is a perfect number.";
     else 
      result= "It is not a perfect number.";
    
    return result;
  }

}
