import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { ChartService } from './chart.service';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [ChartService]
})
export class DashboardModule {}
