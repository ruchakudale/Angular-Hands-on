import { CheckNumberPipe } from './CheckNumber.pipe';

describe('CheckNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
