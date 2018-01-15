import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelsService {

  constructor(public http:Http) { 
    console.log('Data service connected...');
  }

  getHotels(){    
    return this.http.get('http://localhost:3000/hotels')
    .map(res => res.json());
  }

  getHotelByName(name){
    return this.http.get('http://localhost:3000/hotelsByName/gethotelbyname/?hotelName='+name)
    .map(res => res.json());
  }

}