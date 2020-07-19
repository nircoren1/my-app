import React from 'react';
import ReactCardFlip from 'react-card-flip';
import "./style.css"




const divStyle = {
  height: 200,
  width: 200
};



class Card extends React.Component {
  
    constructor(props) {
      super(props);
        this.state = {
        isFlipped: false ,
        isHidden: false ,
        cantBeClicked: "off"

      };
      this.handleClick = this.handleClick.bind(this);
      
    } 
    
    
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ 
        isFlipped: !prevState.isFlipped,
      
      })); 
      this.props.cardEvent(this)
     }
      


    
    render() {
      return (
        <ReactCardFlip 
        isFlipped={this.state.isFlipped} 
        flipDirection="vertical" 
        key={this.props.id}
        
        
        >
          <front className={this.state.cantBeClicked}>
          <img style={divStyle} onClick={this.handleClick} class={this.props.name} alt="" src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1535755695"/>
          </front>
   
          <back>
          <img style={divStyle} class={this.props.name} alt="" src={this.props.image}/>
          </back>
        </ReactCardFlip>
      )
    }
  }

  
 
 export default Card
