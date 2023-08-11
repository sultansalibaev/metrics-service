import moment from "moment";
export function calculateTimeDiff(){
    let time = moment(localStorage.getItem('prompt time'));
    let timeDiff = moment(new Date()).diff(time, 'minutes');
    if(isNaN(timeDiff)){
        timeDiff = 11;
    }
    return {timeDiff}
}