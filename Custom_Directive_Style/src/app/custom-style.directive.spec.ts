import { CustomStyleDirective, ElementRef } from './custom-style.directive';
import { Directive, ElementRef } from '@angular/core';
describe('CustomStyleDirective', () => {
  it('should create an instance', () => {
    const directive = new CustomStyleDirective(ElementRef);
    expect(directive).toBeTruthy();
  });
});
