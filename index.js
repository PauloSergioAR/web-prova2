let inputs = Array.from(document.getElementsByClassName("in"))

inputs.forEach((element) => {
  element.addEventListener('blur', function() {
    input = document.getElementById(this.id)

    value = input.value
    if(value.charAt(0) == "="){
      value = value.substring(1)

      console.log(value.split("+"))
      if(value.split("+").length > 1){
        input.value = (parseInt(document.getElementById(value.split("+")[0]).value)) + (parseInt(document.getElementById(value.split("+")[1]).value))
      } else if (value.split("-").length > 1){
        input.value = (parseInt(document.getElementById(value.split("-")[0]).value)) - (parseInt(document.getElementById(value.split("-")[1]).value))
      }
    }
  })
})