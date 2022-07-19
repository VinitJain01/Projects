import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  alert:boolean=false;
  record: any={
    idusers:'',
    fname:'',
    lname:'',
    password:'',
    repassword:''
  };

  constructor(private router: Router, private registerservice:RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    if(data.repassword==data.password){

    this.record.idusers=data.idusers;
    this.record.fname=data.fname;
    this.record.lname=data.lname;
    this.record.password=data.password;

    this.registerservice.create(this.record).subscribe(
      (        response: any) => {
       
        
        this.router.navigate(['login']);
      },
      (        error: any) => {
        console.log(error);
      }
    )
  }
else if(data.repassword!=data.password){
  this.alert=true
  
}
}

onClick() {
  this.router.navigate(['login']);
}
  closeAlert(){
    this.alert=false
  }

}

