import { FormControl, FormGroup } from '@angular/forms';

export function emailValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
    return {invalidEmail: true};
    }
}

export function lengthValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value.length < 8 || control.value.length > 100) {
    return {invalidLength: true}
    }
}

export function lowercaseValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/[a-z]/g)) {
    return {missingLowercase: true}
    }
}

export function uppercaseValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/[A-Z]/g)) {
    return {missingUppercase: true}
    }
}

export function numberValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/\d/g)) {
    return {missingNumber: true}
    }
}

export function symbolValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/[\!\@\#\$\%\^\&\*]/g)) {
    return {missingSymbol: true}
    }
}

export function matchPasswords(p1: string, p2: string) {
    return (group: FormGroup): { [s: string]: boolean } => {
        let password = group.controls[p1];
        let verifyPassword = group.controls[p2];

        if(password.value !== verifyPassword.value) {
            return {passwordMismatch: true}
        } 
    }
}