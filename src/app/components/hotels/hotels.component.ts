import { Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels:Hotel[];
  starsConter:number[];
  counter:number;
  
  constructor(private hotelsService:HotelsService) { 
    this.hotelsService.getHotels().subscribe(
      (hotels) => {
      console.log(hotels);
      this.hotels = hotels;
    });
  }

  ngOnInit() {
    console.log('ngOnInit...');
    this.counter = 0;
   
  }

  getHotelByName(search){
    if(search!=""){
      this.hotelsService.getHotelByName(search).subscribe(
        (hotels) => {
          console.log(hotels);
          this.hotels = hotels;
        });  
    }else{
      this.hotelsService.getHotels().subscribe(
        (hotels) => {
        console.log(hotels);
        this.hotels = hotels;
      });
    }
    
    return false;
  }
    
  getNumber(num){
    // return new Array(num);   
    return new Array(parseInt(num));
    
    //this.starsConter = [1,2,3,4,5];
  }
  
  range (min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
        input.push(i);
    }
    return input;
  }
}

interface Hotel{
  name: string;
  stars:number;
  images:string;
  price:number;
}




/*
@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}*/
