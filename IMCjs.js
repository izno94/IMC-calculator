function calIMC() {

   let x = document.getElementById('x').value,
      y = document.getElementById('y').value,
      result = Math.round(x / y ** 2 * 10000)

   console.log(result)

   if (result <= 18) {

      document.getElementById("show").innerHTML = result + " <br/> Trop maigre !!!!! MANGE MANGE !!!!! "
      document.getElementById("show").className = "underWeight"
   }
   if (result > 18 && result <= 25) {

      document.getElementById("show").innerHTML = result + " <br/> Tu es au summum "
      document.getElementById("show").className = "optimal"
   }
   if (result > 25 && result <= 30) {

      document.getElementById("show").innerHTML = result + " <br/> tu es en surpoid "
      document.getElementById("show").className = "overweight"
   }
   if (result > 30 && result <= 35) {

      document.getElementById("show").innerHTML = result + " <br/> Obésité modérée "
      document.getElementById("show").className = "modérée"
   }
   if (result > 35 && result <= 40) {

      document.getElementById("show").innerHTML = result + " <br/> Obésité sévère "
      document.getElementById("show").className = "danger"
   }
   if (result > 40) {

      document.getElementById("show").innerHTML = result + " <br/> Obésité morbide ou massive "
      document.getElementById("show").className = "morbide"
   }
}