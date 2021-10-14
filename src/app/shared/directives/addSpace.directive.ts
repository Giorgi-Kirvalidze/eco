import {Directive, HostListener, ElementRef, Input} from "@angular/core";

@Directive({
  selector:'[addSpace]'
})
export class AddSpaceDirective {
  @Input() spaceOn !: number;
  @Input() maxNumber !: number;

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent){
   const input = event.target  as HTMLInputElement;
   let trimmed = input.value.replace(/\s+/g, '');
   if(trimmed.length > this.maxNumber){
     trimmed = trimmed.substr(0,this.maxNumber);
   }
   let numbers = [];
   for(let i = 0; i < trimmed.length; i +=this.spaceOn) {
      numbers.push(trimmed.substr(i,this.spaceOn));
   }
   input.value = numbers.join(' ');
 }

}
