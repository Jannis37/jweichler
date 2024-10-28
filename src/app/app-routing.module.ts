import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiteComponent } from './lite/lite.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'lite', component: LiteComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
