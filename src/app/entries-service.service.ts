import { Injectable, OnInit } from '@angular/core';
import * as hotelData from '../assets/json/data.json';

//A service that takes all entries from json file
@Injectable()
export class EntriesServiceService implements OnInit{

    constructor() { }

    data: any = hotelData;

    ngOnInit() {     
      return this.data;
    }
}
