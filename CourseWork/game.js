function Grid (size) {
    this._bacteries = new Array();

    this.initDOM = function (size) {
        for(let i=0;i<this._bacteries.length; i++) {
            grid.appendChild(document.createElement('div'));
        }
    }

    this.init = function () {
        for(let i=0;i<size;i++) {
            this._bacteries[i] = new Bacterium(); 
        }
    }

    this.rand = function () {
        for(let i=0;i<size;i++) {           
            if((Math.random() - 0.5) < 0)
                this._bacteries[i].born();
            else 
                this._bacteries[i].die();
        }
    }

    this.write = function () {
        var divs = grid.getElementsByTagName('div');

        for(let i=0;i<this._bacteries.length; i++) {
            if (this._bacteries[i].isLife()) {
                divs[i].style.background = 'rgb(11, 196, 5)';
            }
            else {
                divs[i].style.background = 'rgb(0, 0, 0)';
            }
                divs[i].textContent = i;
        }
    }

    this.getBacteries = function () {
        return this._bacteries;
    }

    this.setBacteries = function (bacteries) {
        this._bacteries = bacteries;
    }

    this.buildBactera = function (i) {
        this._bacteries[i].born();
    }


    this.checkSibling = function() {
        var nwBacteries = Array();
        var length = this._bacteries.length;
        
        for(var i=0;i<length;i++) {
            nwBacteries[i] = new Bacterium(); 
            
            var sublings = [-61,-60,-59,-1,1,59,60,61];

            var y = Math.floor(i/60);
            var x = i - y*60;
            
            if (x===0)
                sublings = [-60,-59,1,60,61];
            if (y===0)
                sublings = [-1,1,59,60,61];
            if (x===59)
                sublings = [-61,-60,-1,59,60];
            if (y===59)
                sublings = [-61,-60,-59,-1,1];
        

            if (i===0)
                sublings = [1,60,61];
            if (i===59) 
                sublings = [-1,59,60];
            if (i===3540) 
                sublings = [-60,-59,1];
            if (i===3599)
                sublings = [-61,-60,-59];
        


          //в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;
           
            var aliveSiblings = 0;
            
            sublings.forEach((j) => {
                    var k = i + j;
                        if( this._bacteries[k].isLife() )
                        aliveSiblings++; 
                });

            if(this._bacteries[i].isLife()) {
                if (aliveSiblings < 2) { 
                    nwBacteries[i].die();
                }
                    
                if (aliveSiblings > 3) {
                    nwBacteries[i].die();
                }

                if (aliveSiblings===3 || aliveSiblings===2) {
                    nwBacteries[i].born();
                }
            } 
            
            if (!this._bacteries[i].isLife() && aliveSiblings === 3) {
                nwBacteries[i].born(); 

            } 
        } 

        this._bacteries = nwBacteries;

    }
}

function Bacterium () {
    this._life = false;

    this.born = function() {               
        this._life = true;      
    }   
    this.die = function() {
        this._life = false; 
    }
    this.isLife = function () {
        return this._life;
    }
}