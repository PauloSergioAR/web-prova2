let inputs = Array.from(document.getElementsByClassName("in"))

inputs.forEach((element) => {
  element.addEventListener('click', function(e) {
    alert(this.id)
  })
})