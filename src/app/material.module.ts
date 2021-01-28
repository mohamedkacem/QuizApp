import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule,
         MatToolbarModule,
         MatCardModule,
         MatGridListModule,
         MatListModule,
         MatExpansionModule,
         MatNavList,
         MatNativeDateModule,

         MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
       
        MatTabsModule,
       
        MatChipsModule,
        MatSnackBarModule,
        
        MatIconModule,
        MatMenuModule,
        MatSliderModule,
       
        MatProgressBarModule,
        MatTooltipModule
         
        
           } from '@angular/material';


import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule  } from '@angular/material/table';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatSelectModule,

    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatChipsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule,
    MatGridListModule,
    MatProgressBarModule,
    MatTooltipModule,
    FlexLayoutModule
     
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableDataSource,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatChipsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule,
    MatGridListModule,
    MatProgressBarModule,
    MatTooltipModule,
    FlexLayoutModule
    
    ]
})
export class MaterialModule {}
