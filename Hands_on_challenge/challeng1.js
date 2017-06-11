var mystr = ""

for (var i = 0; i < 72; i++){

    if(i % 9 == 0) {

        mystr += "\n"
    } else if (i % 2 == 0) {

        mystr += "#"
    } else {

        mystr += " "
    }
}

console.log(mystr)