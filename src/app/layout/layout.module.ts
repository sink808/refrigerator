import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreezerComponent } from './freezer/freezer.component';
import { CoolerComponent } from './cooler/cooler.component';
import { LayoutComponent } from './layout.component';
import { LayoutComponentModule } from './layout-component/layout-component.module';
import { ModelService } from '../services/model.service';
@NgModule({
  imports: [
    CommonModule,
    LayoutComponentModule
  ],
  declarations: [FreezerComponent, CoolerComponent, LayoutComponent],
  exports: [LayoutComponent],
  providers: [ModelService]
})
export class LayoutModule { }
