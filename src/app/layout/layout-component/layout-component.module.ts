import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditModelComponent } from './edit-model/edit-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteModelComponent } from './delete-model/delete-model.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  declarations: [FoodListComponent, EditModelComponent, DeleteModelComponent],
  exports: [FoodListComponent, EditModelComponent],
  providers: [
    AngularFirestore,
  ]
})
export class LayoutComponentModule { }
