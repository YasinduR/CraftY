import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchValidator(matchTo: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const matchingControl = control.parent?.get(matchTo);
    if (matchingControl && control.value !== matchingControl.value) {
      return { mismatch: true };
    }
    return null;
  };
}