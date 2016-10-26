import { FormControl, FormGroup } from '@angular/forms';

export function dateValidator(control: FormControl): { [s: string]: boolean } {
    if (new Date(control.value) <= new Date()) {
        return { invalidDate: true };
    }
}

export function endDateIsBeforeStartDateValidator(p1, p2) {
    return (group: FormGroup): { [s: string]: boolean } => {
        let start = group.controls[p1];
        let end = group.controls[p2];

        if (start.value >= end.value) {
            return { endDateIsBeforeStartDate: true };
        }
    };
}

