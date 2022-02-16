class Cars {
 constructor (brand,year,color,engine) {
     this.brand = brand;
     this.yeat=year;
     this.color = color;
     this.engine = engine;
 }

 showInfo() {
     return `brand:${this.brand}; 
     year:${this.year};
     color:${this.color};
     engine power:${this.engine}`;
 }

}

class  ElectroCars extends Cars {
constructor(brand,year,color,engine,battery){
    super (brand,year,color,engine);
    this.battery = battery;
}

showInfo(){
    return super.showInfo +  `battery:` + this.battery;
}

promote(){
    return `The-state-of-art cars.You deserve more and you get it right now!`;
}
}

const BMW5x = new Cars (" BMW5x ", "2019", " black",  '625');
const ELEC = new ElectroCars ("Bentley" ,"2019" ,"black" ,'625','12V');
console.log( BMW5x.showInfo());
console.log(ELEC.showInfo());
console.log(ELEC.promote());
