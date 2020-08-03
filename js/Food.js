class Food {
constructor(){
   this.foodStock = 0;
   this.lastfed;
this.image = loadImage("images/Milk.png")
}
updatefoodStock(foodStock){
    this.foodStock = foodStock
}
getfedtime(lastfed){
this.lastfed = lastfed
}
deductfood(){
    if(this.foodStock >0 ){
        this.foodStock = this.foodStock-1
    }
}

getfoodStock(){
    return this.foodStock
}

display(){
background(46,139,87)

if(lastfed >= 12 ){
text("lastFed: "+lastfed % 12 + "pm", 50,30)
}else if(lastfed === 0){
text("lastFed: 12 am" , 50,30)
}else{
text("lastFed: "+lastfed  + "am", 50,30)
}
var x = 70,y = 100;
imageMode(CENTER)
if(this.foodStock != 0){
    for(var i =0; i<this.foodStock; i++){
        if(i % 10 === 0){
            x=70
            y = y+50
        }
        image(this.image,x,y,50,50)
        x= x+30
    }
}
for(i = 0; i<foodStock;i++){
    i.display();
  }
}
}