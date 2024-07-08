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
const formInput = document.querySelector('.form-registration')

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password')
  const confirmPasswordInput = document.getElementById('confirmPassword')
  const messageSpan = document.getElementById('message')

  function checkPasswordMatch() {
    const password = passwordInput.value
    const confirmPassword = confirmPasswordInput.value

    if (password === '' || confirmPassword === '') {
      messageSpan.textContent = ''
      messageSpan.className = 'hidden'
    } else if (password === confirmPassword) {
      messageSpan.textContent = 'Passwords match!'
      messageSpan.className = 'match'
    } else {
      messageSpan.textContent = 'Passwords do not match.'
      messageSpan.className = 'no-match'
    }
  }

  passwordInput.addEventListener('input', checkPasswordMatch)
  confirmPasswordInput.addEventListener('input', checkPasswordMatch)
})

// formInput.addEventListener('submit', (e) => {
//   e.preventDefault()
//   // const name = formInput.querySelector('#name')
//   // const username = formInput.querySelector('#username')
//   // const email = formInput.querySelector('#email')
//   const password = formInput.querySelector('#password')
//   const confirmpassword = formInput.querySelector('#confirmpassword')

//   // const nameValue = name.value
//   // const usernameValue = username.value
//   // const emailValue = email.value
//   const passwordValue = password.value.trim()
//   const confirmpasswordValue = confirmpassword.value.trim()

//   const message = document.querySelector('.message')

//   const registrationData = {
//     // name: nameValue,
//     // username: usernameValue,
//     // email: emailValue,
//     password: passwordValue,
//     confirmpassword: confirmpasswordValue,
//   }

//   if (passwordValue !== confirmpasswordValue) {
//     message.classList.add('passMatch')
//   }
//   if (passwordValue === confirmpasswordValue) {
//     console.log('rgistration: ', registrationData)
//     // name.value = ''
//     // username.value = ''
//     // email.value = ''
//     // message.textContent = 'Passwords match!'
//     message.classList.remove('passMatch')
//     message.classList.add('match')
//     password.value = ''
//     confirmpassword.value = ''
//     // message.classList.add('hidden')
//   } else {
//     // If passwords do not match, show error message
//     message.textContent = 'Passwords do not match. Please try again.'
//     message.classList.remove('hidden')
//     message.classList.remove('match') // Remove match class if present
//   }
//   if (password.v === confirmpasswordValue.textContent) {
//     message.textContent = 'Passwords match!'
//   }
// })
