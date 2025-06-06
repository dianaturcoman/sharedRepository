import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import FormUtil from '../../utils/form.util';

/**
 * Material Design Input.
 */
@Component({
  selector: 'shared-input',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  /**
   * @public
   * @type {FormControl}
   */
  @Input()
  public control!: FormControl;

  /**
   * @public
   * @type {String}
   */
  @Input()
  public type: string;

  /**
   * @public
   * @type {boolean}
   */
  @Input()
  public disabled: boolean = false;

  /**
   * @public
   * @type {boolean}
   */
  @Input()
  public autofocus: boolean = false;

  /**
   * @example
   * If the Validator type is e.g. "required", then add a map
   * entry as follows:
   *    {'required': 'I18n-Text'}
   * @public
   * @type {{Object.<string, string>}
   */
  @Input()
  public errors?: { [key: string]: string };

  /**
   * @type {string}
   * @public
   */
  @Input()
  public label!: string;

  /**
   * @type {string}
   * @public
   */
  @Input()
  public max?: string;

  /**
   * @type {string}
   * @public
   */
  @Input()
  public pattern?: string;

  /**
   * @public
   * @type {number}
   */
  @Input()
  public maxLength?: number;

  /**
   * @type {string}
   * @public
   */
  @Input()
  public placeholder?: string;

  /**
   * @type {FormUtil}
   * @public
   */
  public formUtil: FormUtil = new FormUtil();

  /**
   * @public
   * @type {Validators}
   */
  public validators: typeof Validators = Validators;

  /**
   * @param {TranslateService} _translateService - The translate service.
   */
  constructor(private _translateService: TranslateService) {
    this.type = 'text';
  }

  /**
   * Checks if the validation error is a more complex object instead a string.
   * @param {string} error - The error
   * @public
   * @returns {string | null}
   */
  public checkIfErrorObject(error: { key: string; params: Record<string, unknown> }): string | null {
    if (error instanceof Object && error.key) {
      const newParams: Record<string, string> = {};
      Object.entries(error.params).forEach(([key, value]) => {
        newParams[key] = this._translateService.instant(String(value));
      });
      return this._translateService.instant(error.key, newParams);
    }
    return null;
  }

  /**
   * Trims the input.
   * @returns {void}
   * @public
   */
  public trimInput(): void {
    if (this.control.value && this.control.value.toString().length > 0) {
      this.control.setValue(this.control.value.toString().trim());
    }
  }

  /**
   * Transformation of the date input field. Reset date input
   * @returns {void}
   * @public
   */
  protected onDateKeyUp(event: KeyboardEvent) {
    try {
      const { value } = event.target as HTMLInputElement;
      const year = new Date(value).getUTCFullYear();
      if (year > 9999) {
        this.control.patchValue(value.slice(-10));
      }
    } catch (e) {
      console.error(e);
    }
  }
}
