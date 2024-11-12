import "./Msg.css";

import resim from "../assets/tree.webp"
import resim2 from "../assets/winter1.jpg"





const Msg = () => {
  //! javascript alani
  //! internal css
  const stil= {
    color:"green",
    fontFamily:"Tahoma",
    border:"2px solid red"

  }

  return (
    <div>
      <h2 style={stil}>MSG ALANI</h2>

      <p style={{color:"red",fontSize:"30px"}}>hoşgeldin react</p>

      {/* public in içindeki img */}
      <img src="./assets/winter1.jpg" alt="" />

      {/* src içindeki img */}
      <img src={resim} alt="" />
      <img className="image" src={resim2} alt="" />
      

      {/* google dan aldık */}
      <img
        src="https://cdn.pixabay.com/photo/2023/06/13/16/25/baby-8061294_1280.jpg"
        alt=""
      />
    </div>
  );
};

export default Msg;