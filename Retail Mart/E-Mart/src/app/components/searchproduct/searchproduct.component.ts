import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
  alertone:boolean=false;
  alerttwo:boolean=false;
  result: any;
  names:any;

  constructor(private route: ActivatedRoute,private router:Router,private searchservice:SearchService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params =>
      {
        this.names=params['productsname'];
      });



    this.searchservice.findbyName(this.names).subscribe(
      response => {

        this.result = response;
      },
      error => {
        console.log(error);
      }
      
    );
  };

  
onClick() {
  localStorage.removeItem('loginid');
  this.router.navigate(['']);
}

  onSubmit(data: any,pin: any): void{

    if((data.serviceability-pin)>10||(pin-data.serviceability)>10){

      this.alertone=true
    }
    else if((data.serviceability-pin)<10||(pin-data.serviceability)<10){
      this.alerttwo=true

    }

  }
      closeAlert(){
        this.alertone=false
        this.alerttwo=false
      }
}

