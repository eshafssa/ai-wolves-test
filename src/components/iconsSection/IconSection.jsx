import "./iconSection.css";
import React, { useEffect } from "react";

const IconSection = () => {
  useEffect(() => {
    const createIcons = () => {
      for (let i = 0; i < 5; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "icon-holder");
        div.style.transform = "rotate(30deg)";
        setTimeout(() => {
          for (let j = 0; j < 15; j++) {
            const randomNumber = Math.floor(Math.random() * 100);
            const imageNumber = (randomNumber % 10) + 1;
            const imageSrc = require(`../../assets/img/games/${imageNumber}.PNG`);
            const img = document.createElement("img");
            img.setAttribute("class", "icon");
            img.setAttribute("src", imageSrc);

            div.appendChild(img);
          }

          const innerView = document.getElementsByClassName("icon-section")[0];
          innerView.appendChild(div);
        }, 1000);
      }
    };
    createIcons();
  }, []);
  return (
    <div className="flex h-765 flex-col w-full overflow-hidden rounded-l-none rounded-3xl">
      <div className="icon-section"></div>
    </div>
  );
};

export default IconSection;
