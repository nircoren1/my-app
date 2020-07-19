
import React from 'react';
import Card from './card.js';
import Stopwatch from './clock.js';


let flippedCards =[]
let win = []

class Game extends React.Component{
    

    constructor(){
      super()
      this.state = {
        cardsList : [
          {name:"monkey", image:"https://a.cdn-hotels.com/gdcs/production194/d68/033e803c-12f2-4a56-b2cf-5a27a87cc162.jpg" , id:"1"},
          {name:"monkey", image:"https://a.cdn-hotels.com/gdcs/production194/d68/033e803c-12f2-4a56-b2cf-5a27a87cc162.jpg", id:"2"},
          {name:"bannana", image:"https://cdn.shopify.com/s/files/1/0041/7116/9921/products/ytrt_255x.jpg?v=1587497387", id:"3"},
          {name:"bannana", image:"https://cdn.shopify.com/s/files/1/0041/7116/9921/products/ytrt_255x.jpg?v=1587497387", id:"4"},
          {name:"basketball", image:"https://res-5.cloudinary.com/russell-corp-australia-pty-ltd/image/upload/c_fit,dpr_2.0,f_auto,h_950,q_auto,w_950/media/catalog/product/image/113199a6/tf-250-basketball.jpg", id:"5"},
          {name:"basketball", image:"https://res-5.cloudinary.com/russell-corp-australia-pty-ltd/image/upload/c_fit,dpr_2.0,f_auto,h_950,q_auto,w_950/media/catalog/product/image/113199a6/tf-250-basketball.jpg", id:"6"},
          {name:"surfboard", image:"https://dwk1ydkfsczz3.cloudfront.net/images/2019/08/26/ARAK64-SD-0099-1jpg-2809783b-02ae-4e76-b9f5-f256b77d9eda.jpg", id:"7"},
          {name:"surfboard", image:"https://dwk1ydkfsczz3.cloudfront.net/images/2019/08/26/ARAK64-SD-0099-1jpg-2809783b-02ae-4e76-b9f5-f256b77d9eda.jpg", id:"8"},
          {name:"reactlogo", image:process.env.PUBLIC_URL + '/images/logo192.jpg', id:"9"},
          {name:"reactlogo", image:process.env.PUBLIC_URL + '/images/logo192.jpg', id:"10"},
          {name:"hamburger", image:"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg?output-format=auto&output-quality=auto", id:"11"},
          {name:"hamburger", image:"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg?output-format=auto&output-quality=auto", id:"12"},
          {name:"boxing gloves", image:"https://www.8weapons.com/media/images/org/8-weapons-boxhandschuhe-big8-premium-rot.jpg", id:"13"},
          {name:"boxing gloves", image:"https://www.8weapons.com/media/images/org/8-weapons-boxhandschuhe-big8-premium-rot.jpg", id:"14"},
          {name:"ferrari", image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-ferrari-812-superfast-99leadgallery-1534888079.jpg?crop=0.816xw:1.00xh;0.173xw,0&resize=640:*", id:"15"},
          {name:"ferrari", image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-ferrari-812-superfast-99leadgallery-1534888079.jpg?crop=0.816xw:1.00xh;0.173xw,0&resize=640:*", id:"16"},
          {name:"nir", image:process.env.PUBLIC_URL + '/images/banjipic.jpg', id:"17"},
          {name:"nir", image:process.env.PUBLIC_URL + '/images/banjipic.jpg', id:"18"},
          
          
          
          
          
        ] ,
        count: 0,
        intervalId:false

          
      }
      this.shuffle = this.shuffle.bind(this);
      this.work = this.work.bind(this);
      this.resetFlip = this.resetFlip.bind(this);
      this.start = this.start.bind(this)
      this.count = this.count.bind(this)
      this.returnCount = this.returnCount.bind(this)
      this.startTimer = this.startTimer.bind(this)
      this.stop = this.stop.bind(this)
     
      
    }
    resetFlip= () =>{
      this.setState({isFlipped :this.state.isFlipped})
      
    }
      

    work = ()=>{
      var AllState = this.state.cardsList
      return AllState
    }
    count = () =>{
      this.setState({count:this.state.count + 1 }
       )
    }
    returnCount = ()=>{ return this.state.count}

    shuffle= () => {
      var a = this.state.cardsList
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      this.setState({
        cardsList: a,
        isFlipped: false
    })
  }
  // need to seperate the function inside setTimeout to be an individual function
  cardEvent(card){
   
    flippedCards.push(card)
    card.setState({cantBeClicked: "on"})
    if (flippedCards.length ==2) {
      flippedCards.forEach((c) => c.setState({cantBeClicked: "off"}))
      document.getElementsByClassName("cardHolder")[0].style.pointerEvents= "none"
    }
       setTimeout(() => {
        
        var all = document.getElementsByClassName(card.props.name)
        if (flippedCards.length == 2 && flippedCards[0].props.name == flippedCards[1].props.name ) {
          // same
          win.push(0,0)
         
            for (var i = 0; i < all.length; i++) {
            all[i].style.visibility = 'hidden';
          }
          if (win.length == card.props.flip().length) {
            alert("well done! it took you " + card.props.returnCount() + " seconds.")
            card.props.stop()
          }
          flippedCards = []
        
        } else if (flippedCards.length == 2){
          // different
          flippedCards.forEach((c) => c.setState({isFlipped: false}))
          flippedCards = []
          console.log(card)
        }
        document.getElementsByClassName("cardHolder")[0].style.pointerEvents= "auto" },3000)
    
     
     
  }
  



 
stop= ()=> {
  clearInterval(this.state.intervalId)
}


 
  
  start = () =>{
  return this.state.cardsList.map((card) =>
  <Card  returnCount={this.returnCount.bind(this)} 
         flip={this.work.bind(this)} 
         key={card.id} 
         image={card.image} 
         name={card.name}
         startTimer = {this.startTimer.bind(this)}
         cardEvent = {this.cardEvent}
         stop = {this.stop.bind(this)}
        />
         
     )}
     
  startTimer= ()=>{
    let intervalId = setInterval(() =>{
      this.count()},1000)
    this.setState({ intervalId: intervalId })
      
            document.getElementsByClassName("cardHolder")[0].style.pointerEvents= "auto"
            document.getElementsByClassName("startButton")[0].style.pointerEvents= "none"
     }   
   
  render(){
  return (
    <div className="container">
      <Stopwatch resetFlip={this.resetFlip.bind(this)}
                 shuffle={this.shuffle.bind(this)}
                 count={this.count.bind(this)}
                 returnCount={this.returnCount.bind(this)}
                 startTimer = {this.startTimer.bind(this)}
                 cardEvent={this.cardEvent.bind(this)}
                />
                <div className="cardHolder">{this.start()}</div>
      
    </div>
  );
  }
 
      
  }

  export default Game;


 
  
