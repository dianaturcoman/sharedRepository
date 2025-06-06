// import { Component, OnInit, TemplateRef, ViewChild, inject, OnDestroy } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
// import { ESokaIcon } from '@soka-bau-uba/uba-ui-components/enums/soka-icon';
// import { EModalType } from '@soka-bau-uba/uba-ui-components/enums/modal-type';
// import { IDialogSettings, IModalButton } from './modal-dialog.interface';

// @Component({
//   selector: 'shared-modal-dialog-content-component',
//   templateUrl: 'modal-dialog-content.component.html',
//   styleUrls: ['./modal-dialog-content.component.scss']
// })
// export class ModalDialogContentComponent implements OnInit, OnDestroy {
//   @ViewChild('modalTemplate', { static: true })
//   public modalTemplate: TemplateRef<unknown>;

//   protected ESokaIcon: typeof ESokaIcon = ESokaIcon;

//   protected endSubscriptions$: Subject<boolean> = new Subject<boolean>();

//   ngOnDestroy(): void {
//     this.endSubscriptions$.next(true);
//     this.endSubscriptions$.complete();
//   }

//   public isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//   public dialogIcon: string;

//   public dialogTitle: string;

//   public dialogBeenden = false;

//   public dialogSchliessenFn: () => void;

//   public buttons: IModalButton[] = [];

//   public classType: EModalType = EModalType.INFO;

//   private _modalRef: BsModalRef;

//   private _modalService = inject(BsModalService);

//   ngOnInit() {
//     this._modalService.onShow.pipe(takeUntil(this.endSubscriptions$)).subscribe(() => this.isOpen$.next(true));

//     this._modalService.onHide.pipe(takeUntil(this.endSubscriptions$)).subscribe(() => {
//       this.isOpen$.next(false);
//       if (this.dialogSchliessenFn) {
//         this.dialogSchliessenFn();
//       }
//     });
//   }

//   // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
//   public open(config: IDialogSettings): void {
//     this.dialogIcon = config.icon ?? '';
//     this.dialogTitle = config.title;
//     // this.dialogSchliessenFn = config.schliessenFn;
//     this.dialogBeenden = config.closeButton === true;
//     this.buttons = config.buttons ?? [];
//     // this.classType = config.classType ?? EModalType.INFO;
//     this._modalRef = this._modalService.show(this.modalTemplate);
//   }

//   public hide(): void {
//     if (this._modalRef) {
//       this._modalRef.hide();
//     }
//   }
// }
