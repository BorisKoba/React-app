import React from "react"
export const Timer: React.FC = () => {
      const styles: React.CSSProperties = {
            backgroundColor: "lightblue", 
            fontSize: "2em"
      };
      setTimeout(tic, 1000);
      setTimeout(colorTime, 10000);
      const [time, setTime] = React.useState(new Date());
      const [color, setColor] = React.useState(styles);

      function tic() {
            setTime(new Date());
      }
      function colorTime() {
            setColor(styles)
            styles.backgroundColor = "lightblue"?"red":"lightblue";     
      }

      return <div>
            <h3 style={color}>Current Time</h3>
            <p style={styles}>{time.toLocaleTimeString()}</p>
      </div>
}
