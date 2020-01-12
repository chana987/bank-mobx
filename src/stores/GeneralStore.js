import { observable, action } from  'mobx'

export class GeneralStore {
    @observable amount = ''
    @observable category = ''
    @observable vendor = ''
    @observable date = ''
    @observable startDate = ''
    @observable endDate = ''
    @action handleInput = (name, value) => {
        this[name] = value
    } 
}
