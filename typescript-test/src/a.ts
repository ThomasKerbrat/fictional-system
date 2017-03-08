import { B } from './b';

export class A {
    b: B = new B('hello');
    get c() { return this.b.b; }
}
