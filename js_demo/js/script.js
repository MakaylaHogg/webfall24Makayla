function askName() {
    var nameReturn =document.getElementById('ask-name');
    var name = prompt('Please enter your name' , 'HERE');
    if (name == ''){
        alert('Please try again')
    } else {
        nameReturn.innerHTML = 'Hello ' + name +  '!Nice to meet you! '
    }
}

function askQuestion() {
    var q = prompt('whats your favorite type of dog');
    if (q !=null){
        document.getElementById('question').innerHTML= ' ' +q+ ' wow i agree'
    }
}