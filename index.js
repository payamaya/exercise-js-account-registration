// Runs only after the entire HTML document has been completely loaded and parsed. This means that all the elements in the DOM are fully available and can be manipulated by JavaScript.
document.addEventListener('DOMContentLoaded', () => {
  //  Ensure that the checkPasswordMatch() function is called only after the entire HTML document has been fully loaded and parsed.
  const formInput = document.querySelector('.form-registration')
  const nameInput = formInput.querySelector('#name')
  const userNameInput = formInput.querySelector('#username')
  const emailInput = formInput.querySelector('#email')
  const passwordInput = formInput.querySelector('#password')
  const confirmPasswordInput = formInput.querySelector('#confirmPassword')
  const messageSpan = formInput.querySelector('#message')
  const passwordSpan = formInput.querySelector('#passwordSpan')
  const submitBtn = formInput.querySelector('.btn-submit')
  const minLength = 8
  // checkPasswordMatch()

  // 3)focus on input when selesting the label
  // formInput.addEventListener('click', () => {
  // })
  const labels = formInput.getElementsByTagName('label')
  Array.from(labels).forEach((label) => {
    label.addEventListener('click', () => {
      const input = label.nextElementSibling
      if (input && input.tagName === 'INPUT') {
        input.focus()
      }
    })
  })

  // Fucntion to Check password and confirm

  function checkPasswordMatch() {
    const password = passwordInput.value.trim()
    const confirmPassword = confirmPasswordInput.value.trim()
    if (password.length < minLength) {
      passwordSpan.textContent = 'Password must be at least 8 characters long.'
      passwordSpan.className = 'short'
      submitBtn.disabled = true
    } else {
      passwordSpan.textContent = ''
    }

    if (password === '' && confirmPassword === '') {
      messageSpan.textContent = ''
      passwordSpan.textContent = ''
      submitBtn.disabled = true
    } else if (password.length < minLength) {
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

  formInput.addEventListener('submit', (e) => {
    e.preventDefault()
    // Create references

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
    // Clear the input fields
    messageSpan.textContent = ''
    passwordSpan.textContent = ''
    nameInput.value = ''
    userNameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''
    confirmPasswordInput.value = ''
    submitBtn.disabled = true
    alert('RegistrationData sends')
  })
  checkPasswordMatch()
})
