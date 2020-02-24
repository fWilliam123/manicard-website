import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const REGEX_PASSWORD = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$';

export function areEqualValidator(matchControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control || !control.root.get(matchControlName)) {
      return null;
    }
    return control.root.get(matchControlName).value !== control.value ? { areEqual: { value: false } } : null;
  };
}
