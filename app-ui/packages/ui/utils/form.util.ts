import { FormControl, ValidationErrors } from '@angular/forms';

/**
 * Util class for form operations
 */
export default class FormUtil {
  /**
   * Get all formControl validation errors.
   * @param {FormControl} formControl - The current used form control.
   * @public
   */
  // eslint-disable-next-line
  public getAllFormValidatorErrors(formControl: FormControl): any[] {
    if (formControl == null || !formControl.touched) {
      return [];
    }
    const controlErrors: ValidationErrors | null = formControl.errors;
    if (controlErrors == null) {
      return [];
    }
    // eslint-disable-next-line
    const keys: any[] = [];
    Object.keys(controlErrors).forEach((keyError: string): void => {
      if (keyError !== 'key' && keyError !== 'params') {
        keys.push(keyError);
      } else {
        keys.push(controlErrors);
      }
    });
    return [...new Set(keys)];
  }
}
