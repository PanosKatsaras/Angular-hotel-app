import { Component } from '@angular/core';
import { EntriesServiceService } from '../entries-service.service';

//Navbar component that takes the entries as a service
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {
  public entries : any [] = [];

    constructor(service: EntriesServiceService) {
      this.entries = service.ngOnInit();
      }
  
}

