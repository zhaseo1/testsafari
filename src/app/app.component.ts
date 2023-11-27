import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formA: FormGroup;
  title = 'my-app';

  constructor(fb: FormBuilder) {
    this.formA = fb.group({
      someId: [false, Validators.requiredTrue]
    });
  }

  toggleConsent(): void {
    this.formA.controls.someId.markAsTouched();
  }

  get someId() {
    // return this.formA.controls['someId'];
    return this.formA.controls.someId;
  }
}
