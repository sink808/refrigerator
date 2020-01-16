import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModelService } from '../../../services/model.service';
@Component({
  selector: 'app-delete-model',
  templateUrl: './delete-model.component.html',
  styleUrls: ['./delete-model.component.scss']
})
export class DeleteModelComponent implements OnInit {
  @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public modelService: ModelService) { }

  ngOnInit() {
  }

  public remove(): void {
    this.delete.emit(true);
  }

}
