import { B } from './b';

export class A {
    b: B = new B('hello4');
    get c() { return this.b.b; }
}
