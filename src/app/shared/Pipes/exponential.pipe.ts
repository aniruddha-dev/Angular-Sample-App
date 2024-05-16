import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}


@Pipe({name: 'filterByLength'})
export class CustomPipe implements PipeTransform {
  transform(values: string[], minLength: number): string[] {
    return values.filter(value => value.length >= minLength);
  }
}