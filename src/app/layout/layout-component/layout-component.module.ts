import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditModelComponent } from './edit-model/edit-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteModelComponent } from './delete-model/delete-model.component';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FoodListComponent, EditModelComponent, DeleteModelComponent],
  exports: [FoodListComponent, EditModelComponent]
})
export class LayoutComponentModule { }
