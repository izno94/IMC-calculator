function calIMC() {

   let x = document.getElementById('x').value,
      y = document.getElementById('y').value,
      result = Math.round( x / y ** 2 * 10000 ) 

console.log(result)

   if (result <= 18) {
      alert(result + " Trop maigre !!!!! MANGE MANGE !!!!! ")
   }
   if (result > 18  && result <= 25) {
      alert(result + " Tu es au summum")
   }
   if (result > 25 && result <= 30) {
      alert(result + " tu es en surpoids")
   }
   if (result > 30 && result <= 35) {
      alert(result + " Obésité modérée")
   }
   if (result > 35 && result <= 40) {
      alert(result + " Obésité sévère")
   }
   if (result > 40)
   {
      alert(result + " Obésité morbide ou massive")
   }
}
