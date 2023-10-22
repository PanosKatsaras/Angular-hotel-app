import { Component } from '@angular/core';
import { EntriesServiceService } from '../entries-service.service';

//Header component that takes the entries as a service
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    public entries : any [] = [];

    constructor(service: EntriesServiceService) {
      this.entries = service.ngOnInit();
      }
 }
 

      


