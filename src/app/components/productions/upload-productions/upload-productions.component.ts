import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpEventType} from "@angular/common/http";
import {Genre} from "../../../models/Genre";
import {LicenseType} from "../../../models/LicenseType";
import {ProductionService} from "../../../services/production.service";

@Component({
  selector: 'app-upload-productions',
  templateUrl: './upload-productions.component.html',
  styleUrl: './upload-productions.component.css'
})
export class UploadProductionsComponent {
  uploadForm!: FormGroup;
  genres: string[] = Object.values(Genre).filter(value => true);
  uploadProgress: number = 0;
  uploadMessage: string = '';

  constructor(private _formBuilder: FormBuilder, private _http: HttpClient, private _productionService: ProductionService) { }

  ngOnInit() {
    this.uploadForm = this._formBuilder.group({
      title: ['', Validators.required],
      bpm: ['', [Validators.required, Validators.min(20), Validators.max(200), Validators.pattern('^[0-9]+$')]],
      releaseDate: ['', Validators.required],
      coverImage: ['', Validators.required],
      audioMp3: ['', Validators.required],
      audioWav: [''],
      audioZip: [''],
      genre: ['', Validators.required],
      licenseType: ['', Validators.required]
    });
  }

  onFileSelected(event: any, type: string): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadForm.get(type)!.setValue(file);
    }
  }

  onDragOver(event: Event): void {
    event.preventDefault();
  }

  onDrop(event: any, type: string): void {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.uploadForm.get(type)!.setValue(files[0]);
    }
  }

  onSubmit(): void {
    if (!this.uploadForm.valid) {
      this.uploadMessage = "Please fill out the form correctly.";
      return;
    }

    const formData = new FormData();
    Object.keys(this.uploadForm.controls).forEach(key => {
      const value = this.uploadForm.get(key)?.value;
      if (value instanceof File) {
        formData.append(key, value, value.name);
      } else {
        formData.append(key, value);
      }
    });

    this._productionService.uploadProduction(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress && event.total) {
        this.uploadProgress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        console.log('Successfully uploaded', event.body);
        this.uploadMessage = "Successfully uploaded!";
        this.uploadForm.reset();
        this.uploadProgress = 0;
      }
    }, error => {
      console.error('Upload failed', error);
      this.uploadMessage = "Upload failed. Please try again.";
    });
  }
}
