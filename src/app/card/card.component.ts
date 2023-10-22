import { Component } from '@angular/core';
import { EntriesServiceService } from '../entries-service.service';

//Card component that takes the entries as a service
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public entries: any [] = [];

    constructor(service: EntriesServiceService) {
      this.entries = service.ngOnInit();
     
      }
      
    }
  


