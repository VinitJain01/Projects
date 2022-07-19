import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean=false;
  constructor(private router: Router, private loginservice: LoginService ) { }

  list:any

 

  ngOnInit(): void {
  }

  onSubmit(data: any): void{
   
    this.loginservice.findByUid(data.uid)
    .subscribe(
            response => {
              this.list=response

         if(data.uid== this.list[0].idusers && data.password== this.list[0].password){
           localStorage.setItem('loginid', data.uid);
           this.router.navigate(['catalog']); }
        else if(data.uid!= this.list[0].idusers || data.password!= this.list[0].password){
          this.alert=true

        }

      },
      (      error: any) => {
        console.log(error);
      });
     

}
onClick() {
  this.router.navigate(['register']);
}
closeAlert(){
  this.alert=false
}


}

