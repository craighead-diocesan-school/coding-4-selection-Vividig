// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  // write your code here
  let name = prompt('What is your name?')
  let q1 = prompt('What is the capital of france ' + name + '?')

  if (q1 == 'paris') {
    alert("That's right " + name)
  } else if (q1 == 'Paris'){
    alert("That's right " + name)
  } else {
    alert("Not quite right " + name)
  }

  alert('Goodbye')
}
