export const phoneValidator = (value, component) => {
    const pattern = new RegExp('^[+][3][8][0][0-9]{9}$')
    if (!pattern.test(value)) {
        return false
    }
    return true
}