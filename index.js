// code your solution here
function saturdayFun(inPut) {
    if (inPut != undefined) {
        return `This Saturday, I want to ${inPut}!`
    } else {
        return "This Saturday, I want to roller-skate!"
    }
}

const mondayWork = function(work) {
    if (work != undefined) {
        return `This Monday, I will ${work}.`
    } else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(inPut = "*") {
    return str = function(str2) {
        return `You are ${inPut}${str2}${inPut}!`
    }
}
