import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modalTitle',
  standalone: true
})
export class ModalTitlePipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
  }

}
