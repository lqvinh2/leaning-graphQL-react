//
//
// Vinh
//
//
const { format } = require( 'date-fns');

 const getDateTimeNow = () => {
    const date = new Date();
    const timeLocalNow = format(new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()), 'dd/MM/yyyy hh-mm-ss aaa');
    return timeLocalNow;
}

 const getDateTimeUTCNow = () => {
    const date = new Date();
    const timeUTCNow = format(new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()), 'dd/MM/yyyy: hh-mm-ss aaa');
    return timeUTCNow;
}

module.exports = {getDateTimeNow, getDateTimeUTCNow}