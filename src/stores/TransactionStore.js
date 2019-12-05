import { observable} from  'mobx'
import moment from 'moment'

export class Reservation {
    @observable amount
    @observable category
    @observable vendor
    @observable date
    constructor(amount, category, vendor, date) {
        this.amount = parseInt(amount)
        this.category = category
        this.vendor = vendor
        this.date = moment(date).format('MMM-YYYY')
    }
}