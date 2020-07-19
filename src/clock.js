import * as React from 'react';
import {Button} from "@material-ui/core"


class Stopwatch extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0
        }
 
        this.resetGame = this.resetGame.bind(this);
    }

    
     resetGame=()=>{
        
        window.location.reload(false)
    
        }
        componentDidMount(){
        this.props.shuffle()
        }

    render(){
        const count = this.props.returnCount()
        return(
            <div className="clockDiv">
                <div className="moveRight">
                    <h1 className="clock">Time: {count}</h1>
                    <Button variant="outlined" color="primary" className="startButton" onClick={this.props.startTimer}>Start Game</Button>
                    <Button variant="outlined" color="secondary" onClick={this.resetGame}>New Game</Button>
                </div>
            </div>
            
        )
        
    }
   

}

export default  Stopwatch 
    

