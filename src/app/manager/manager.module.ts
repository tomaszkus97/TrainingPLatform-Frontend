import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [ManagerHomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule
  ],
  exports:[ManagerHomeComponent]
})
export class ManagerModule { }
