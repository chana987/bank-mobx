import { observable} from  'mobx'
import moment from 'moment'

export default class Transaction {
    @observable amount
    @observable category
    @observable vendor
    @observable date
    @observable id
    constructor(amount, category, vendor, date, id) {
        this.amount = parseInt(amount)
        this.category = category
        this.vendor = vendor
        this.date = moment(date).format('MMM, YYYY')
        this.id = id
    }
}