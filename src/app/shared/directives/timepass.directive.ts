import {Directive, ElementRef, Input, OnDestroy, OnInit} from "@angular/core";
import * as moment from 'moment';
import {interval, Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Directive({
  selector: '[timepass]'
})

export class TimepassDirective implements OnInit, OnDestroy {
  date !: string;
  counter$!: Observable<number>;
  el !: HTMLDivElement;
  sub !: Subscription;

  constructor(private elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }

  @Input() set setDate(date: string) {
    this.date = date;
  }

  calcTimePasses() {
    let formatedDate = '';
    formatedDate = moment(this.date).fromNow();
    this.el.innerHTML = formatedDate;
  }

  ngOnInit() {
    this.counter$ = interval(1000).pipe(
      map(x => {
        this.calcTimePasses();
        return x
      })
    )
    this.sub = this.counter$.subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
