import { Component, EventEmitter, Input, Output } from '@angular/core';

type BackgroundColor = 'orange-10' | 'orange-30' | 'white';
type BorderColor = 'orange-10' | 'orange-30';

/**
 * Card component.
 */
@Component({
  selector: 'uba-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  /**
   * @public
   * @type {BackgroundColor}
   */
  @Input()
  public backgroundColor: BackgroundColor = 'white';

  /**
   * @public
   * @type {string}
   */
  @Input()
  public icon?: string;

  /**
   * @public
   * @type {boolean}
   */
  @Input()
  public displayHeaderAction?: boolean = false;

  /**
   * @public
   * @type {string}
   */
  @Input()
  public actionIcon?: string;

  /**
   * @public
   * @type {BorderColor}
   */
  @Input()
  public borderColor: BorderColor = 'orange-30';

  /**
   * @public
   * @type {string}
   */
  @Input()
  public title?: string;

  /**
   * @type {EventEmitter}
   * @public
   */
  @Output() headerActionEvent = new EventEmitter();

  /**
   * Emits the "headerAction" event if the button has been clicked
   * @private
   * @returns {void}
   */
  public onClick() {
    this.headerActionEvent.emit();
  }
}
