import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  

  header = {
    id: 'Personalnummer',
    firstName: 'Vorname',
    lastName: 'Nachname',
    code: 'Einladungscode',
  };

  people = Array(20)
    .fill(1)
    .map((_) => {
      return {
        id: 123456,
        firstName: 'Max',
        lastName: 'Mustermann',
        code: '123456789012',
      };
    });
}
