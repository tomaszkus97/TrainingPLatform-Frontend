import {NgModule} from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule
  } from '@angular/material';
  import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,
    FlexLayoutModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatRadioModule,
    MatChipsModule,
    MatExpansionModule,
    FlexLayoutModule
  ]
})
export class MaterialModule {}