import {ElementRef, Pipe, PipeTransform, Renderer2} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'maturity'
})

export class MaturityPipe implements  PipeTransform{
  constructor(private elRef : ElementRef,private renderer: Renderer2,private _domSanitizer: DomSanitizer) {
    this.el = this.elRef.nativeElement;
  }

  range : any = {
    7: {2: 'კვირა'},
    30: {10: 'თვე'},
    default: 'დღე'
  }
  divisors = [7,30];
  el!: HTMLDivElement;

  getHighestDivisor(maturity: number){
    const tempArr = [];
    for(const i of this.divisors){
       if(maturity % i !== maturity){
         tempArr.push(i);
       }
    }
    return Math.max(...tempArr);
  }

  getReminder(dividend: number, divisor: number){
      return dividend % divisor;
  }

  getKeyFromRange(num : number){
    return +Object.keys(this.range[num]);
  }

  getValueFromRange(num: number) :any{
    return Object.values(this.range[num])[0];
  }

  isBetween(value:number, num1:number, num2:number): boolean{
    return num1 <= value && value <= num2
  }


  transform(maturity: number): any {
    const minDivisor = this.divisors[0];
    if(maturity < (minDivisor - this.getKeyFromRange(minDivisor)) && maturity >= 1 ){
      return this.el.innerHTML = `${maturity.toString()} ${this.range['default']}`;
    }
    if(maturity < minDivisor){
        const val = this.getValueFromRange(minDivisor);
        return this.el.innerHTML = `1 ${val}`;
      }
    if(this.isBetween(maturity, 340,365)){
        return this.el.innerHTML = `${maturity} day of 365.`
    }

    const maxDivisor = this.getHighestDivisor(maturity);
    if(maxDivisor){
      const reminder = this.getReminder(maturity, maxDivisor);
      const keyRange = this.getKeyFromRange(maxDivisor);
      const quotient = Math.floor(maturity / maxDivisor);
      const nextQuotientInteger = ((+quotient * maxDivisor) + maxDivisor);

      if(reminder > keyRange && !this.isBetween(maturity,nextQuotientInteger - keyRange, nextQuotientInteger + keyRange)){
        return this.el.innerHTML = `${maturity.toString()} ${this.range['default']}`;
      }

      const weekOrMonth = this.range[maxDivisor][keyRange];
      if(this.isBetween(maturity,nextQuotientInteger - keyRange, nextQuotientInteger + keyRange)){
        return this.el.innerHTML =`${quotient + 1} ${weekOrMonth} `;
      }
      return this.el.innerHTML = `${quotient} ${weekOrMonth} `;
    }
  }
}
