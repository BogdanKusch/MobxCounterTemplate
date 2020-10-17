import { observable, makeObservable, action } from "mobx"

export class Counter {
    @observable public counter = 0;

    constructor(){
        makeObservable(this);
    }

    @action.bound public inc = () => this.counter += 1;

    @action.bound public dec = () => this.counter -= 1;
}