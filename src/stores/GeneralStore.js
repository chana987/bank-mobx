import { observable, action } from  'mobx'

export class GeneralStore {
    @observable name = ''
    @observable price = ''
    @action handleInput = (name, value) => {
        this[name] = value
    } 
}
