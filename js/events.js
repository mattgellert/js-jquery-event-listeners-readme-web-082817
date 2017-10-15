//define functions here
function getIt(){
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function() {
    $(this).addClass('tasty')
  })
}

function pressIt(){
  $(document).on('keydown', function(ev) {
    if (ev.which === 71) {
      alert('You pressed G fool!')
    }
  })
}

function submitIt(){
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here
  getIt()

  frameIt()

  pressIt()

  submitIt()
});
