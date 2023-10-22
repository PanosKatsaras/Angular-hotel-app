import { Component } from '@angular/core';
import { EntriesServiceService } from '../entries-service.service';

//Map component that takes the entries as a service
@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {

  public entries : any [] = [];

    constructor(service: EntriesServiceService) {
      this.entries = service.ngOnInit();
      }

  }


