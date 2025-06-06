import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'filter' | 'minimalist';
type IconPosition = 'left' | 'right' | 'center';

/**
 * Button component.
 * @class {ButtonComponent}
 */
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'shared-button[label]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  /**
   * @type {boolean}
   * @public
   */
  @Input()
  public disabled: boolean = false;

  @Input()
  public icon: string = '';

  /**
   * @type {String}
   * @public
   */
  @Input()
  public buttonType?: string = 'button';

  /**
   * Option to hide the icon.
   * @type {boolean}
   * @public
   */
  @Input()
  public hideIcon: boolean = false;

  /**
   * Option to set the icon position.
   * @type {IconPosition}
   * @public
   */
  @Input()
  public iconPosition: IconPosition = 'right';

  /**
   * @type {string}
   * @public
   */
  @Input()
  public label?: string = '';

  /**
   * Option to display the button without border and padding.
   * @type {string}
   * @public
   */
  @Input()
  public noBorder: boolean = false;

  /**
   * @type {ButtonVariant}
   * @public
   */
  @Input()
  public variant: ButtonVariant = 'primary';

  /**
   * @type {boolean}
   * @public
   */
  @Input()
  public active: boolean = false;
}
