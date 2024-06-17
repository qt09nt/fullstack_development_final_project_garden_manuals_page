import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {
    if (control.value.toUpperCase() == 'PASSWORD'){

        return{
            invalidPassword: true
        }
    } 
    return null;

}
