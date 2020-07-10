let inputs = Array.from(document.getElementsByClassName("in"))

inputs.forEach((element) => {
  element.addEventListener('blur', function() {
    input = document.getElementById(this.id)

    value = input.value
    console.log(value)
    if(value.charAt(0) == "="){
      value = value.substring(1)

      console.log(value.split("+"))
      if(value.split("+".length) > 0){
        input.value = (parseInt(document.getElementById(value.split("+")[0]))) + (parseInt(document.getElementById(value.split("+")[1])))
      } else if (value.split("-".length) > 0){
        input.value = (parseInt(document.getElementById(value.split("-")[0]))) - (parseInt(document.getElementById(value.split("-")[1])))
      }
    }
  })
})