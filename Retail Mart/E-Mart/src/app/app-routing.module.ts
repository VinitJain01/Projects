import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SearchproductComponent } from './components/searchproduct/searchproduct.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',
   component:HomeComponent
},

{path:'login',
component:LoginComponent,

},
{
  path:'register',
  component:RegistrationComponent
},
{
  path:'catalog',canActivate:[AuthGuard],
  component:CatalogComponent
},
{
  path:'searchproduct',canActivate:[AuthGuard],
  component:SearchproductComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
