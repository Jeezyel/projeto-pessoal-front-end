import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-uplod',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './uplod.component.html',
  styleUrl: './uplod.component.css'
})
export class UplodComponent {
  uploadForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.uploadForm = this.formBuilder.group({
      nome: ['',[Validators.required,Validators.minLength(1)]],
      file: ['',[Validators.required]]
    });
  }
  
  onFileSelected(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      this.uploadForm.patchValue({ [field]: file });
    }
  }

  clearFile(field: string) {
    this.uploadForm.patchValue({ [field]: null });
  }

  onSubmit() {
    if (this.uploadForm.valid) {
      // fazer os paranaue para mandar para o beck
    }else{
      console.log('formulario ivalido')
    }
  }
}
