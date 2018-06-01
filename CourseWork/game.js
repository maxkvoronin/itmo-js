function Controller () {
    this.initDOM = function (size, divid) {
        for(let i=0;i<size; i++) {
            divid.appendChild(document.createElement('div'));
        }
    }

    this.getDivs = function (id) {
        return id.getElementsByTagName('div');
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

function Pool (size) {
    this._bacteries = new Array();

    this.crop = function () {
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

    this.write = function (divs) {
        for(let i=0;i<this._bacteries.length; i++) {
            if (this._bacteries[i].isLife()) {
                divs[i].style.background = '#5aaa36';
            }
            else {
                divs[i].style.background = '#000';
            }
                divs[i].textContent = i;
               
        }
    }


    this.getBacteries = function () {
        return this._bacteries;
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
           
            var aliveSiblings = 0;
            
            sublings.forEach((j) => {
                    var k = i + j;
                        if( this._bacteries[k].isLife() )
                        aliveSiblings++; 
                });

            /**
             * В пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;
             * если у живой клетки есть две или три живые соседки, то эта клетка продолжает жить; 
             * в противном случае, если соседей меньше двух или больше трёх, клетка умирает 
             * («от одиночества» или «от перенаселённости»)
             * 
             */
            //   

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