import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string 
  {   
    let reverseString = "";
    for (let char of value) 
    {
      reverseString = char + reverseString;
    }
    return reverseString;
  }

}
