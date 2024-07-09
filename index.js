// Runs only after the entire HTML document has been completely loaded and parsed. This means that all the elements in the DOM are fully available and can be manipulated by JavaScript.
document.addEventListener('DOMContentLoaded', () => {
  //  Ensure that the checkPasswordMatch() function is called only after the entire HTML document has been fully loaded and parsed.
  checkPasswordMatch()
})

const formInput = document.querySelector('.form-registration')

// 3)focus on input when selesting the label
formInput.addEventListener('click', () => {
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

formInput.addEventListener('submit', (e) => {
  e.preventDefault()
  const nameInput = formInput.querySelector('#name')
  const userNameInput = formInput.querySelector('#username')
  const emailInput = formInput.querySelector('#email')
  const passwordInput = formInput.querySelector('#password')
  const confirmPasswordInput = formInput.querySelector('#confirmPassword')
  const messageSpan = formInput.querySelector('#message')
  const passwordSpan = formInput.querySelector('#passwordSpan')
  const submitBtn = formInput.querySelector('.btn-submit')

  submitBtn.disabled = true
  // remove white spaces
  const name = nameInput.value.trim()
  const username = userNameInput.value.trim()
  const email = emailInput.value.trim()
  const password = passwordInput.value.trim()

  const registrationData = {
    name,
    username,
    email,
    password,
  }
  console.log(registrationData)

  // clear the input
  messageSpan.textContent = ''
  passwordSpan.textContent = ''
  userNameInput.value = ''
  nameInput.value = ''
  emailInput.value = ''
  passwordInput.value = ''
  confirmPasswordInput.value = ''
})

// Check password and confirm
function checkPasswordMatch() {
  const passwordInput = formInput.querySelector('#password')
  const confirmPasswordInput = formInput.querySelector('#confirmPassword')
  const messageSpan = formInput.querySelector('#message')
  const passwordSpan = formInput.querySelector('#passwordSpan')
  const submitBtn = formInput.querySelector('.btn-submit')

  const password = passwordInput.value.trim()
  const confirmPassword = confirmPasswordInput.value.trim()

  if (password === '' || confirmPassword === '') {
    messageSpan.textContent = ''
    passwordSpan.textContent = ''
    submitBtn.disabled = true
  } else if (password.length < 8) {
    passwordSpan.textContent = 'Password must be at least 8 charachters long'
    passwordSpan.className = 'no-match'
  } else if (password === confirmPassword) {
    messageSpan.textContent = 'Passwords match!'
    messageSpan.className = 'match'
    submitBtn.disabled = false
    passwordSpan.textContent = ''
  } else {
    messageSpan.textContent = 'Passwords do not match.'
    messageSpan.className = 'no-match'
  }
  passwordInput.addEventListener('input', checkPasswordMatch)
  confirmPasswordInput.addEventListener('input', checkPasswordMatch)
}
