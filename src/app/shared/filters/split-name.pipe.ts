import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitName'
})
export class SplitNamePipe implements PipeTransform {

  transform(value: string): any {
    if(!value)return null;
    let initials = ['Mr', 'Mrs.', 'Mr.', 'Mrs', 'Miss', 'Miss.'];
    let firstName = value.split(" ", 3);
    if(firstName && firstName.length > 1){
      if(initials.includes(firstName[0])){
        value = firstName[1];
      }else{
        value = firstName[0];
      }
    }
    return value;
  }

}
