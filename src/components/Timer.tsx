import React from "react"
export const Timer: React.FC = () =>{
     const styles: React.CSSProperties = {backgroundColor:"lightblue",
fontSize:"2em"}  ;
 setTimeout(tic, 1000);
setTimeout(colorTime, 10000);
const [time, setTime] = React.useState(new Date());
const [color, setColor] = React.useState(styles)

function tic(){
       setTime (new Date())
}
function colorTime(){
        setColor(styles)
        
              if(styles.backgroundColor ="lightblue"){
                styles.backgroundColor="red";
        }

              else{styles.backgroundColor ="lightblue";
        }

              
              return styles;
        }

        return <div>
                <p style={color}>{time.toLocaleTimeString()}</p>
        </div>
}
