import moment from 'moment'

export function GetDate() {
    let myDate = moment().format("YYYY-MM-DD")
    return myDate
}