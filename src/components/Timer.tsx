import React from "react"
export const Timer: React.FC = () => {
      const styles: React.CSSProperties = {
            backgroundColor: "blue",
            fontSize: "2em"
      
      };
      setTimeout(tic, 1000);
      setInterval(colorTime, 10000);
      const [time, setTime] = React.useState(new Date());
      const [color, setColor] = React.useState(styles);

      function tic() {
            setTime(new Date());
      }
      function colorTime() {
            setColor(styles)
            styles.backgroundColor = "blue"?"red":"blue";     
      }

      return <div>
            <p style={color}>{time.toLocaleTimeString()}</p>
      </div>
}
