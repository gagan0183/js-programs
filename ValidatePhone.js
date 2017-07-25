function validate(phone) {
    if(phone.length > 8 || phone.length < 7) {
        return false;
    }
    var first = phone.substring(0,3);
    var second = phone.substring(phone.length - 4);
    if(phone.length === 8 && phone.charAt(3) !== '-') {
        return false;
    }
    if(isNaN(first) || isNaN(second)) {
        return false;
    }
    return true;
}

function validate1(phone) {
    return phone.match(/^\d{3}-?\d{4}$/);
}