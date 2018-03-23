class Stime {
    constructor(t){
       this.hour = 0;
       this.minite = 0;
       this.second = 0;
       var atime = t.split(":");   
       if ( atime.length > 0)
           this.hour = parseInt(atime[0],10);
       if (atime.length > 1) 
           this.minute = parseInt(atime[1],10);
       if(atime.length > 2) 
           this.second = parseInt(atime[2],10);
     
    }

    add(number, type){
        if (type == "hour"){
           this.hour += number;
        }
        if (type == "minute"){
            this.minute += minute;
         }
    }

    toString(){
        return this.hour + ":" + this.minute + ":" + this.second;
    }
}

module.exports  = Stime;