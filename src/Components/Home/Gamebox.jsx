import React from "react";
import Game from "../../Components/Home/Game";


const Gamebox = () => (
  <section className="cardWrapper">
    <Game
      title="Lemon"
      subtitle="This is a really  tasty fruit."
      emoji="🍋"
      titleColor="#166F39"
      subtitleColor="#000000"
      textColor="#166F39"
      primary="#8CFFBA"
      secondary="#CFFFE2"
      buttonColor="#FCED84"
      buttonTextColor="#000000"
      buttonText="Order now"
    />
    <Game
      title="Rocket"
      subtitle="Join us into the outer space!"
      emoji="🚀"
      titleColor="#0B0C11"
      subtitleColor="#0B0C11"
      textColor="#0B0C11"
      primary="#A6CFE2"
      secondary="#C2DCE9"
      buttonColor="#0B0C11"
      buttonTextColor="#FFD600"
      buttonText="Book seat"
    />
    <Game
      title="Doggy"
      subtitle="Hello, do you want to be friends?"
      emoji="🐶"
      titleColor="#502F7E"
      subtitleColor="#502F7E"
      textColor="#0B0C11"
      primary="#EEB200"
      secondary="#FFE086"
      buttonColor="#FFFFFF"
      buttonTextColor="#502F7E"
      buttonText="Book seat"
    />
  </section>
);
export default Gamebox