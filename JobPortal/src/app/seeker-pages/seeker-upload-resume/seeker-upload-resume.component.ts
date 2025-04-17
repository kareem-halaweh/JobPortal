import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-seeker-upload-resume',
  templateUrl: './seeker-upload-resume.component.html',
  styleUrls: ['./seeker-upload-resume.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SeekerUploadResumeComponent implements AfterViewInit {
  descriptionInput: string = '';
  savedDescription: string = '';

  saveDescription() {
    this.savedDescription = this.descriptionInput.trim();
  }

  uploadedFile: File | null = null;
  pdfSrc: string | undefined;
  isBrowser: boolean;

  @ViewChild('pdfContainer', { read: ViewContainerRef }) pdfContainer!: ViewContainerRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser && this.pdfSrc) {
      void this.loadPdfViewer();
    }
  }

  async loadPdfViewer() {
    const { PdfViewerComponent } = await import('ng2-pdf-viewer');
    this.pdfContainer.clear();
    this.pdfContainer.createComponent(PdfViewerComponent).setInput('src', this.pdfSrc);
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file && file.type === 'application/pdf') {
      this.uploadedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.pdfSrc = reader.result as string;
        if (this.isBrowser) {
          void this.loadPdfViewer();
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  }

  removeFile(i: number): void {
    this.uploadedFile = null;
    this.pdfSrc = undefined;
    if (this.isBrowser) {
      this.pdfContainer.clear();
    }
  }
}
