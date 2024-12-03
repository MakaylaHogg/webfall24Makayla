//alert("scripts work")
 
function shake(){
    askAQuestion()
    var response = giveAResponse()
    displayResponse(response)
 }
  
 function askAQuestion(){
  
 }
  
 function giveAResponse(){
     var listOfResponses = getListOfResponses()
     var resp = pickFromList(listOfResponses)
    return resp
 }
 function getListOfResponses(){
     return["yes", "no", "maybe"]
 }
  
 function pickFromList(list){
     return list[0]
 }
 function displayResponse(aresponse){
     alert(aresponse)
 }
  
  
 // alert("javascript works")
 function magic8ball() {
     askAQuestion();
     shake();
     getAFortune();
 }
 function askAQuestion() {
     //this does nothing
     //alert("Ask a yes/no question and receive a fortune")
 }
 function shake() {
     //alert("I'm shaking")
 }
 function getAFortune() {
 //random
 //to choose an answer
 // list of answers
     var fortunes = ["yes","no","maybe"]
     var num = randomNumber(fortunes.length)
     displayFortune(fortunes[num])
 }
 function displayFortune(fortune) {
     //alert(fortune)
     document
     .getElementById("fortune")
     .innerHTML = fortune
 }
 function randomNumber(n) {
     return Math.floor(Math.random() * n)
 }
  