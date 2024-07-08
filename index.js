document.addEventListener('click', () => {
  const labels = document.getElementsByTagName('label')
  Array.from(labels).forEach((label) => {
    label.addEventListener('click', () => {
      const input = label.nextElementSibling

      if (input && input.tagName === 'INPUT') {
        input.focus()
      }
    })
  })
})

// const formSubmit = document.querySelector('.form-registration')
// // Password matching

// const form = document.querySelector('.form-registration')
// const password = document.querySelector('#password')
// const confirmPassword = document.querySelector('#confirmPassword')
// const message = document.querySelector('.hidden')

// function checkPassword(e) {
//   e.preventDefault()
//   if (password < 8) {
//     alert('at least 8 charachter')
//   }
//   if (password.value === confirmPassword.value) {
//     alert(password.value)
//   } else if (password.value !== confirmPassword.value) {
//     message.classList.add('block')
//   }
// }

// form.addEventListener('submit', checkPassword)

const formInput = document.querySelector('.form-registration')

formInput.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = formInput.querySelector('#name')
  const username = formInput.querySelector('#username')
  const email = formInput.querySelector('#email')
  const password = formInput.querySelector('#password')
  const confirmpassword = formInput.querySelector('#confirmpassword')

  const nameValue = name.value
  const usernameValue = username.value
  const emailValue = email.value
  const passwordValue = password.value
  const confirmpasswordValue = confirmpassword.value

  const registrationData = {
    name: nameValue,
    username: usernameValue,
    email: emailValue,
    password: passwordValue,
    confirmpassword: confirmpasswordValue,
  }
  console.log('rgistration: ', registrationData)
  name.value = ''
  username.value = ''
  email.value = ''
  password.value = ''
  confirmpassword.value = ''
})
