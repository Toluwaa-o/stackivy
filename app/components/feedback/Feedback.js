"use client";

import { useState } from "react";
import Article from "../small_components/article";

const Feedback = ({ feedback }) => {
  const [scrollProgress, setScrollProgress] = useState(33); // Start at 33%

  const handleScroll = (event) => {
    const { scrollLeft, scrollWidth, clientWidth } = event.target;
    const maxScrollLeft = scrollWidth - clientWidth;
    const scrollPercentage = (scrollLeft / maxScrollLeft) * 100;

    let progress = 33; // Default to 33%

    if (scrollPercentage > 66) {
      progress = 99;
    } else if (scrollPercentage > 33) {
      progress = 66;
    }

    setScrollProgress(progress);
  };

  return (
    <div className="p-4 py-[10vh] sm:p-4 grid gap-6 sm:gap-[10vh] sm:my-[20vh] md:w-[85%] md:mx-auto">
      <Article
        button={"Testimonials"}
        title={
          "Hear What Kids Have to Say About Our Kids' Financial Learning Platform!"
        }
        para={`Children themselves have shared how the platform has empowered them to make smart financial decisions and set savings goals. These testimonials serve as a testament to the platform's effectiveness in shaping young minds for a financially secure future.`}
        explore={false}
        orange={true}
      />

      <div
        className="grid grid-flow-col auto-cols-[100%] overflow-scroll gap-6 snap-x snap-mandatory scroll-container sm:auto-cols-[45%] md:auto-cols-[35%]"
        onScroll={handleScroll}
      >
        {feedback.map((d) => (
          <div
            key={d.para}
            className="border-2 border-gray-200 p-4 rounded-2xl gap-8 h-fit grid snap-center sm:h-full"
          >
            <span className="flex items-start gap-3">
              <img src="/Images/comma.png" alt="comma" />
              <p className="sm:hidden">
                {d.para.length > 200
                  ? d.para.substring(0, 197) + "..."
                  : d.para}
              </p>

              <p className="sm:block hidden">
                {d.para}
              </p>
            </span>
            <span className="ml-auto flex gap-4">
              <img src={d.img} alt={d.name} className="w-[50px] h-[50px]" />
              <span>
                <h4 className="font-bold text-lg tracking-wide">{d.name}</h4>
                <p>{d.home}</p>
              </span>
            </span>
          </div>
        ))}
      </div>
      <span className="flex items-center gap-4">
        <span className="flex w-[50vw] h-[10px] bg-my-orange-50 rounded-2xl relative overflow-hidden">
          <span
            className={`absolute w-[20vw] rounded-3xl left-0 h-[10px] flex bg-my-orange transition-all`}
            style={{ width: `${scrollProgress}%` }}
          ></span>
        </span>
        <span className="flex items-center gap-4 ml-auto">
          <img src="/Images/right.png" alt="right" />
          <img src="/Images/left.png" alt="left" />
        </span>
      </span>
    </div>
  );
};
export default Feedback;
