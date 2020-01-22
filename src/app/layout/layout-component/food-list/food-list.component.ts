import { Component, OnInit, Input } from '@angular/core';
import { Food, ObjDate } from '../const';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})

export class FoodListComponent implements OnInit {
  private dbName: string = this.route.snapshot.paramMap.get('name');
  private initFood: Food = {
    // 定義表格的預設值
    name: '',
    number: 0,
    unit: '',
    startDate: null,
    endDate: null
  };
  foodList: FormArray = this.fb.array([]);
  addFoodForm: FormGroup;
  @Input() public docName: string;

  constructor(private db: AngularFirestore,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.resetAddFoodForm();
    this.loadListFromFireBase();
  }

  addFood(): void {
    this.foodList.push(this.addFoodForm);
    this.resetAddFoodForm();
    this.setDbFoodList(this.foodList.value);
  }

  setDbFoodList(list): void {
    this.db.collection(this.dbName).doc(this.docName).set({
      foodList: list,
    })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }

  isExpired(date: ObjDate): boolean {
    const today: Date = new Date();
    const inputDate: Date = date ? new Date(`${date.year}-${date.month}-${date.day}`) : null;
    return (inputDate || new Date()) < today;
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
      } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
      }
    });
  }


}

