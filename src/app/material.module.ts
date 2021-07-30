import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    // MAT_TABS_CONFIG,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    FlexLayoutModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    FlexLayoutModule,
  ]
})

export class MaterialModule {}