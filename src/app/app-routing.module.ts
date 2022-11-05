import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:BasicComponent},
  {path:'User',component:UserComponent},
  {path:'basic',component:BasicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
