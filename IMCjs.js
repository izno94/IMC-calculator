function calIMC() {

   let x = document.getElementById('x').value,
      y = document.getElementById('y').value,
      result = Math.round(x / y ** 2 * 10000)

   console.log(result)

   if (result <= 18) {

      document.getElementById("show").innerHTML = result + " Trop maigre !!!!! MANGE MANGE !!!!! "
   }
   if (result > 18 && result <= 25) {

      document.getElementById("show").innerHTML = result + " Tu es au summum "

   }
   if (result > 25 && result <= 30) {

      document.getElementById("show").innerHTML = result + " tu es en surpoid "
   }
   if (result > 30 && result <= 35) {

      document.getElementById("show").innerHTML = result + " Obésité modérée "
   }
   if (result > 35 && result <= 40) {

      document.getElementById("show").innerHTML = result + " Obésité sévère "
   }
   if (result > 40) {

      document.getElementById("show").innerHTML = result + " Obésité morbide ou massive "
   }
}