import { Component, OnInit, Input, QueryList, ViewChildren } from '@angular/core';
import { Food } from '../const';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ModelService } from '../../../services/model.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})

export class FoodListComponent implements OnInit {
  private dbName: string = this.route.snapshot.paramMap.get('name');

  foodList: FormArray = this.fb.array([]);
  private initFood: Food = {
    // 定義表格的預設值
    name: '',
    number: 0,
    unit: '',
    startDate: null,
    endDate: null
  };
  addFoodForm: FormGroup;
  @Input() public docName: string;

  constructor(private db: AngularFirestore,
              private auth: ModelService,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.resetAddFoodForm();
    this.loadListFromFireBase();
  }

  addFood(): void {
    this.foodList.push(this.addFoodForm);
    this.setDbFoodList(this.foodList.value);
  }

  setDbFoodList(list): void {
    this.db.collection(this.dbName).doc(this.docName).set({
      foodList: list,
    })
      .then(() => {
        this.resetAddFoodForm();
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }

  private resetAddFoodForm(): void {
    this.addFoodForm = this.fb.group(this.initFood);
  }

  private loadListFromFireBase(): void {
    this.db.collection(this.dbName).doc(this.docName).get().subscribe((doc) => {
      if (doc.exists) {
          console.log('Document data:', doc.data());
          const data = doc.data();
          if (data.foodList) {
            data.foodList.forEach((food) => {
              this.foodList.push(this.fb.group(food));
            });
          }
          console.log(this.foodList.value);
      } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
      }
    });
  }

  public test(): void {
    console.log('XXXXD');
  }
}

