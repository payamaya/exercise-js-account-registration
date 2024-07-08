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
// script.js
document.addEventListener('DOMContentLoaded', () => {
  checkPasswordMatch()
})
const formInput = document.querySelector('.form-registration')
formInput.addEventListener('submit', (e) => {
  e.preventDefault()
  checkPasswordMatch()
  const passwordInput = formInput.querySelector('#password')
  const confirmPasswordInput = formInput.querySelector('#confirmPassword')
  const messageSpan = formInput.querySelector('#message')
  messageSpan.textContent = ''
  passwordInput.value = ''
  confirmPasswordInput.value = ''
})

function checkPasswordMatch() {
  const formInput = document.querySelector('.form-registration')
  const passwordInput = formInput.querySelector('#password')
  const confirmPasswordInput = formInput.querySelector('#confirmPassword')
  const messageSpan = formInput.querySelector('#message')
  const submitBtn = formInput.querySelector('.btn-submit')

  const password = passwordInput.value
  const confirmPassword = confirmPasswordInput.value
  const registrationFormData = {
    password: password,
    confirmPassword: confirmPassword,
  }
  if (password === '' || confirmPassword === '') {
    messageSpan.textContent = ''
    submitBtn.disabled = true
    // messageSpan.className = 'hidden'
  } else if (password === confirmPassword) {
    messageSpan.textContent = 'Passwords match!'
    messageSpan.className = 'match'
    submitBtn.disabled = false
  } else {
    messageSpan.textContent = 'Passwords do not match.'
    messageSpan.className = 'no-match'
  }
  console.log(registrationFormData)

  passwordInput.addEventListener('input', checkPasswordMatch)
  confirmPasswordInput.addEventListener('input', checkPasswordMatch)
}
