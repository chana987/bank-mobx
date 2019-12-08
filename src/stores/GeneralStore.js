import { observable, action } from  'mobx'

export class GeneralStore {
    @observable amount = ''
    @observable category = ''
    @observable vendor = ''
    @observable date = ''
    @observable startDate = ''
    @observable endDate = ''
    @action handleInput = (name, value) => {
        name === 'number' ? this[name] = parseInt(value)
        : this[name] = value
    } 
}
