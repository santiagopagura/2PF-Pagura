import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';

import { studentsReducer } from '../../../core/students/students.reducer';
import { StudentsEffects } from '../../../core/students/students.effects';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent
  ],
  exports: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule, 
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    
    // StoreModule.forFeature('students', studentsReducer),
    // EffectsModule.forFeature([StudentsEffects])
  ]
})
export class StudentsModule { }
