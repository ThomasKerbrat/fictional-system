"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const b_1 = require("./b");
class A {
    constructor() {
        this.b = new b_1.B('hello');
    }
    get c() { return this.b.b; }
}
exports.A = A;
