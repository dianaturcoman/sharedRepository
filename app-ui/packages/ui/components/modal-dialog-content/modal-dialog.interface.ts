import { ModalOptions } from 'ngx-bootstrap/modal';
import { ESokaIcon } from '../../enums/soka-icon/soka-icon.enum';
import { EClassType, EModalType } from '../../enums/modal-type.enum';

export interface IModalButton {
  icon?: ESokaIcon;
  label: string;
  tooltip?: string;
  classType?: EClassType;
  handler: () => void;
  isDisabled?: () => boolean;
}

export interface IDialogSettings {
  schliessenFn?: () => void; // Abschlussaktivitäten
  icon?: string;
  title: string;
  closeButton?: boolean;
  /**
   * A string reference to the component to be rendered that is registered with Angular's compiler.
   * If using a directive, the directive must have `restrict: 'E'` and a template or templateUrl set.
   *
   * It supports these bindings:
   *   - `close` - A method that can be used to close a modal, passing a result.
   *          The result must be passed in this format: `{$value: myResult}`
   *   - `dismiss` - A method that can be used to dismiss a modal, passing a result.
   *          The result must be passed in this format: `{$value: myRejectedResult}`
   *   - `modalInstance` - The modal instance.
   *   - `resolve` - An object of the modal resolve values. See [UI Router resolves] for details.
   */
  /**
   * members that will be resolved and passed to the controller as locals; it is equivalent of the `resolve`
   * property for AngularJS routes. If property value is an array, it must be in Inline Array Annotation format
   * for injection (strings followed by factory method)
   */
  resolve?: { [key: string]: string | (() => void) | Array<string | (() => void)> };
  animate?: boolean;
  buttons?: IModalButton[];
  classType?: EModalType;
  options?: ModalOptions;
}

export interface IDialogConfig {
  schliessenFn: () => void; // Abschlussaktivitäten
  icon?: string;
  title: string;
  closeButton?: boolean;
  // resolve?: { [key: string]: string | (() => void) | Array<string | (() => void)> };
  // animate?: boolean;
  buttons?: IModalButton[];
  classType?: EModalType;
  // options?: ModalOptions;
}
