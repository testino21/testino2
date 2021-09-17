import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { id:1, src:"assets/id1.jpg", title: 'Deal 1', cols: 2, rows: 1 },
          { id:2, src:"assets/id2.jpg", title: 'Deal 2', cols: 2, rows: 1 },
          { id:3 ,src:"assets/id3.jpg", title: 'Deal 3', cols: 2, rows: 1 },
          { id:4 ,src:"assets/id4.jpg", title: 'Deal 4', cols: 2, rows: 1 }
        ];
      }

      return [
        { id:1, src:"assets/id1.jpg", title: 'Deal 1', cols: 2, rows: 1 },
        { id:2, src:"assets/id2.jpg", title: 'Deal 2', cols: 1, rows: 1 },
        { id:3, src:"assets/id3.jpg", title: 'Deal 3', cols: 1, rows: 2 },
        { id:4, src:"assets/id4.jpg", title: 'Deal 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
