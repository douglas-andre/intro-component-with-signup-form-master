const form = document.querySelector('form')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const inputs = document.querySelectorAll('input')
const alertInfos = document.querySelectorAll('.alertInfo')
const alertMsgs = document.querySelectorAll('.errMsg')

const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/

let isValid = true

form.addEventListener('submit', (e) => {
    e.preventDefault()

    isValid = true

    if (firstName.value.trim() === "") { alertDisplayBlock(0); isValid = false }
    else alertDisplayNone(0)

    if (lastName.value.trim() === "") { alertDisplayBlock(1); isValid = false }
    else alertDisplayNone(1)

    if (email.value.trim() === "") { alertDisplayBlock(2); isValid = false }
    else checkEmail()

    if (password.value.trim() === "") { alertDisplayBlock(3); isValid = false }
    else alertDisplayNone(3)

    validator()
})

function alertDisplayBlock(i) {
    alertMsgs[i].classList.add("block", "error")
    alertInfos[i].classList.add("block")
    inputs[i].classList.add("errInput")
}

function alertDisplayNone(i) {
    alertMsgs[i].classList.remove("block", "error")
    alertInfos[i].classList.remove("block")
    inputs[i].classList.remove("errInput")
}

function checkEmail() {
    if (!email.value.match(pattern)) {
        alertDisplayBlock(2)
        isValid = false
    } else {
        alertDisplayNone(2)
    }
}

function validator() {
    if (isValid) {
        alert('Your form has been successfully submitted!')
        form.reset()
    }
}
