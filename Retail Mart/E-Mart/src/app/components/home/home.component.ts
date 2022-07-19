import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  names:any;

  login(): void{
    this.router.navigate(['login']);
  }
  register(): void{
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
  }
  onSubmit(data: any): void{
   this.names= data.name;
   
   this.router.navigate(['searchproduct'],{ queryParams: {productsname:data.name}});
    

}
}

