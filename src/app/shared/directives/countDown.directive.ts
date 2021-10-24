import {Directive, HostListener, ElementRef, OnInit, Input, OnDestroy} from '@angular/core';
import * as moment from 'moment';
import {Subscription, interval, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({selector: '[countDown]'})
export class CountdownDirective implements OnInit, OnDestroy {

  @Input()
  set dateEnd(date: string) {
    this.date = date;
  }

  @Input()
  set secondDisplay(value: boolean) {
    this.displaySecond = value;
  }

  @Input()
  set plusActive(value: boolean) {
    this.pulseMode = value;
  }

  @Input()
  set timeOut(value: boolean) {
    this.timeOutDisplay = value;
  }

  date?: string;
  counter$!: Observable<any>;
  counter_sub!: Subscription;
  displaySecond = true;
  pulseMode = false;
  timeOutDisplay = false;
  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.counter$ = interval(1000).pipe(
      map((x) => {
        this.lauchCountDown();
        return x;
      })
    );
    this.counter_sub = this.counter$.subscribe();
  }

  lauchCountDown() {

    const eventTime = moment(this.date).unix();
    const currentTime = moment(Date.now()).unix();
    const diffTime = eventTime - currentTime;
    const intervalNb = 1000;

    if (diffTime > 0) {
      const duration = moment.duration((diffTime * 1000) - intervalNb, 'milliseconds');
      const h = moment.duration(duration).hours();
      const m = moment.duration(duration).minutes();
      const s = moment.duration(duration).seconds();
      // Clean
      const hClean = h.toString().trim().length === 1 ? '0' + h : h;
      const mClean = m.toString().trim().length === 1 ? '0' + m : m;
      const sClean = s.toString().trim().length === 1 ? '0' + s : s;

      const classAlert = (h === 0 && m < 3 && this.pulseMode) ? 'bg-color-red ft-color-white myanim_pulse_timer px-2' : '';

      if (this.displaySecond) {
        this.el.innerHTML = `<div class="${classAlert}">${hClean}:${mClean}:${sClean}</div>`;
      } else {
        this.el.innerHTML = `<div class="${classAlert}">${hClean}:${mClean}</div>`;
      }
    } else {
      if (this.timeOutDisplay) {
        this.el.innerHTML = '<div class="ft-color-red ft-weight-600">TIME OUT</div>';
      } else {
        this.el.innerHTML = '';
      }
    }
  }

  ngOnDestroy(): void {
    if (this.counter_sub) {
      this.counter_sub.unsubscribe();
    }
  }

}
