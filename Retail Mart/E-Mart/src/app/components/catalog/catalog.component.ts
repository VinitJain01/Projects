import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { CatalogService } from 'src/app/services/catalog.service';
import { SearchService } from 'src/app/services/search.service';



@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  result:any;
  
  brandFilter: any=[];
  
  
  
 
 
  
  constructor(private router:Router,private catalogservice:CatalogService,private searchservice:SearchService) { }
  names:any;

  ngOnInit(): void {

    this.catalogservice.findAll().subscribe(
      response => {
        console.log(response);
        this.result = response;
      },
      error => {
        console.log(error);
      }
    );
  };


  viewDescription(data:any){
    this.router.navigate(['searchproduct'],{queryParams : {productsname:data.name}})
  }

  onFilter(data:any){
    this.result.forEach((element: any) => {
    

      if(data.brand!=null && data.price=='' && data.brand==element.brand){
        
          this.brandFilter.push(element);
          this.result=this.brandFilter;
        
      }});

      if(data.brand!='' && data.price=='Ascending'){
        this.searchservice.findbybothasc(data.brand).subscribe(
          response => { 
            this.result=response;
          },
          error => {
            console.log(error);
          }
        );
      }

      if(data.brand!='' && data.price=='Descending'){
        this.searchservice.findbybothdesc(data.brand).subscribe(
          response => { 
            this.result=response;
            
          },
          error => {
            console.log(error);
          }
        );
      }

      if(data.brand=='' && data.price=='Ascending'){
        this.searchservice.findbyAscOrder().subscribe(
          response => { 
            this.result=response;
          },
          error => {
            console.log(error);
          }
        );
      }
      if(data.brand=='' && data.price=='Descending'){
        this.searchservice.findbyDescOrder().subscribe(
                    response => {
            this.result = response;
          },
                   error=> {
            console.log(error);
          }
        );
      }

 
}

onSubmit(data: any): void{
  this.names= data.name;
  
  this.router.navigate(['searchproduct'],{ queryParams: {productsname:data.name}});
   

}

onClick() {
  localStorage.removeItem('loginid');
  this.router.navigate(['']);
}
}



