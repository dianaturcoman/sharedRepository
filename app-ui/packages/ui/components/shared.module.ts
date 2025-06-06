import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {TranslateModule} from '@ngx-translate/core';

import {ButtonComponent} from './button/button.component';
import {InputComponent} from './input/input.component';

const MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
    imports : [...MODULES, ButtonComponent, InputComponent],
    exports: [...MODULES, ButtonComponent, InputComponent],
    providers: []
})
export class SharedModule{
    costructor(){
        console.debug('Share Module');
    }
}