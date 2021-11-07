var words = ["Flabbergasted", "Perplexed", "Revered", "Buoyant"];
let prom = true;
//let prom = confirm("Do you want to play Hangman");
if (prom) {
    var word = words[Math.floor(Math.random() * 4)];
    //alert(word);
    //console.log(word);
    //document.writeln(word);
    document.getElementById("word").innerHTML = word;
    var remove = Math.floor(word.length/2);
    console.log("to remove is " + remove)
    var pluck = [];
    var wordArray = word.split("");
    //alert(wordArray);
    console.log(wordArray);
    console.log("Word length is "+word.length)
    for(let i = 0;i<remove;++i){
        var num = Math.floor(Math.random() * word.length);
        if(pluck.indexOf(num) === -1){
            pluck += num;
            
        }else{
            while(pluck.indexOf(num) !== -1){
                num = Math.floor(Math.random()*word.length);
            }
            pluck += num;
        }
        //alert(pluck);
        console.log(pluck);
    }
    for(let j = 0;j<pluck.length;++j){
        var index = pluck[j];
        wordArray[index] = "_";
    }
    //alert(wordArray);
    console.log(wordArray.join(""));
    
}else{
    alert("Boo!");
}

