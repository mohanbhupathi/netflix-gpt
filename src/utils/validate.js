const validateData = (email, password) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    console.log("isValidEmail", isValidEmail)
    if(!isValidEmail) return "Not a valid Email"
    if(!password) return "Not a valid Password"
    return null
}
export default validateData