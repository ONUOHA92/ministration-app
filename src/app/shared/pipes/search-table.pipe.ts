import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        
        let v = args.value;

        if (v) {
            return value.filter(item => JSON.stringify(item).toLowerCase().includes(v.toLowerCase()))
        } else {
            return value;
        }
    }
}