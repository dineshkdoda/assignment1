import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitName'
})
export class SplitNamePipe implements PipeTransform {

  transform(value: string): any {
    if(!value)return null;
    
    console.log("-----value-----",value);
    let firstName = value.split(" ", 1);
    if(firstName){
      return value = firstName[0];
    }
  }

}
