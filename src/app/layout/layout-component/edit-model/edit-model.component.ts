import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModelService } from '../../../services/model.service';
import { Food } from '../const';
@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.scss']
})
export class EditModelComponent implements OnInit, OnChanges {
  @Input() foodForm: FormGroup;
  @Output() save: EventEmitter<boolean> = new EventEmitter<boolean>();
  editFoodForm: FormGroup;
  private initFood: Food = {
    // 定義表格的預設值
    name: '',
    number: 0,
    unit: '',
    startDate: null,
    endDate: null
  };
  constructor(public modelService: ModelService, private fb: FormBuilder) {
    this.editFoodForm = fb.group(this.initFood);
  }

  ngOnChanges() {
    this.editFoodForm.patchValue(this.foodForm.value);
  }

  ngOnInit() {
  }

  submitForm(): void {
    this.foodForm.patchValue(this.editFoodForm.value);
    this.save.emit(true);
  }
}
