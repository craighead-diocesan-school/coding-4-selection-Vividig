// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my conversation program.')

  alert('Do you like cycling? Answer yes or no.')
  let answer = prompt()

  if (answer == 'yes') {
    alert("That's good - you will get very fit.")
  } else {
    alert('Perhaps you like some other sport.')
  }

  alert('Goodbye')
}

function age() {
  // write your code here

  let age = prompt('What is your age?')

  if (age < 1 && age > 130){
    alert('Your age is invalid')
  }
  if (age >= 65) {
    alert("You can retire!")
  } 
  if (age >= 18){
    alert('You can vote!')
  } 
  if (age != 15){
    alert('you are not the same age as me')
  } 
  if (age = 15){
    alert('you are the same age as me')
  } 
  if (age <= 5){
    alert('you need supervision when using a computer')
  }

  alert('Goodbye')
}
