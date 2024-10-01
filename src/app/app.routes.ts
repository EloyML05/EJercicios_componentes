import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringFormaterComponent } from '../Components/String-Formater/String-Formater.component';
import { NumberRamdomComponent } from '../Components/Number-Ramdom/Number-Ramdom.component';


export const routes: Routes = [
  {
    path: 'string-Formater/:palabra',
    component: StringFormaterComponent,
  },
  {
    path: 'number-Ramdom',
    component: NumberRamdomComponent,
    
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }