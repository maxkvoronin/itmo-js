var ships = [1,2,3,4];

var query = [];

var vector;

for (var i=0;i<100;i++) {
    var first = Math.floor(Math.random()*4);
    if (ships[first]!==0) {
        ships[first] = ships[first] - 1;
        query.push(ships[first]+1);
    } 
}

var vector = Math.floor(Math.random()-0.5);
console.log(vector);

var field = [[],[],[],[],[],[],[],[],[],[]];

for(i=0;i<10;i++) {
    for(j=0;j<10;j++) {
        field[i][j] = 1;
    }  
}

var ship1 = 10;

while(ship1!=0) {
    var y = Math.floor(Math.random()*8 + 1);
    var x = Math.floor(Math.random()*8 + 1);
    var coordinate = field[y][x];
     
    if( field[y-1][x-1] === 1) {
        if (field[y-1][x] === 1) {
            if (field[y-1][x+1] === 1) {
                if (field[y][x-1] === 1) {
                    if (field[y][x] === 1) {
                        if (field[y][x+1] === 1) {
                            if (field[y+1][x-1] === 1) {
                                if (field[y+1][x] === 1) {
                                    if (field[y+1][x+1] === 1) {
                                        if (ship1!=0) {
                                            field[y][x] = 2;
                                            ship1--;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }        
}


var str=[];

for(i=0;i<10;i++) {
    for(j=0;j<10;j++) {
        str.push(field[i][j]);
    }  
}

for (i=0;i<100;i++) {
        var div = document.createElement('div');
        if (str[i]===2) {
            //div.style.background = "green";
        }
        div.textContent = str[i];
        bigdiv.appendChild(div);

        div.onclick = function() {
            if (this.textContent === '2') {
                this.style.background = "red";
            }
            else {
                this.style.background = "bisque";
            }
        }
}









//  var ship1 = 4;
//  var ship2 = 3;
//  var ship3 = 2;
//  var ship4 = 1;

// var ships = [4,3,2,1];

//  function getTable() {


//  }