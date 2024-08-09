"use client";

import { Nunito_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Article from "../small_components/article";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const AnimatedSection = () => {
  const [animationState, setAnimationState] = useState({
    title: "Money Management",
    para: "Learn how to budget, save, and make smart spending decisions",
    img: "/Images/slide_show_1.png",
    no: "top-[0vh]",
    ind: 0,
  });

  const togglers = [
    {
      title: "Money Management",
      para: "Learn how to budget, save, and make smart spending decisions",
      img: "/Images/slide_show_1.png",
      no: "top-[0vh]",
      ind: 0,
    },
    {
      title: "Banking Basics",
      para: "Discover how banks work, and understand concepts like interest, loans, and credit.",
      img: "/Images/slide_show_2.png",
      no: "top-[14vh]",
      ind: 1,
    },
    {
      title: "Investing Insights",
      para: "Get an introduction to investing and explore different investment options.",
      img: "/Images/slide_show_3.png",
      no: "top-[28vh]",
      ind: 2,
    },
    {
      title: "Entrepreneurship",
      para: "Unleash your creativity and entrepreneurial spirit by learning the basics of starting and running a business.",
      img: "/Images/slide_show_4.png",
      no: "top-[42vh]",
      ind: 3,
    },
  ];

  useEffect(() => {
    setAnimationState(togglers[0]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prevState) => {
        if (prevState.ind === togglers.length - 1) {
          return togglers[0];
        } else {
          return togglers[prevState.ind + 1];
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 flex flex-col gap-8 py-[3vh] sm:my-[20vh] md:grid md:grid-cols-2 md:grid-rows-2 md:items-center md:w-[84%] md:mx-auto">
      <Article
        button={"What You'll Learn"}
        title={"Explore the World of Financial Knowledge"}
        para={`Keed offers a wide range of topics to help you build a strong foundation in financial literacy`}
        explore={true}
      />

      {animationState && (
        <div className="flex items-center gap-4">
          <span className="flex h-[99%] w-[25px] sm:w-[10px] bg-my-orange-50 rounded-2xl relative overflow-hidden">
            <span
              className={`absolute h-[35%] rounded-3xl left-0 w-[10px] flex bg-my-orange ${animationState.no} transition-all`}
            ></span>
          </span>
          <span className="flex gap-4 flex-col justify-between md:gap-4">
            {togglers.map(({ title, para, img, no, ind }) => (
              <div
                key={no}
                className={`h-[15vh] grid place-content-center transition-all gap-2 sm:flex sm:flex-col sm:px-4 ${
                  animationState && animationState.title === title
                    ? "opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => setAnimationState({ title, para, img, no, ind })}
              >
                <h3 className="text-almost-black text-2xl">{title}</h3>
                <p className={`${nunito.className} text-small-text`}>{para}</p>
              </div>
            ))}
          </span>
        </div>
      )}

      <span className="relative flex w-[320px] h-[300px] bg-my-orange m-auto mt-8 sm:w-[70vw] sm:h-[50vh] md:w-[500px] md:h-[400px]">
        <img
          src={animationState.img}
          alt={animationState.title}
          className="absolute top-2.5 right-2.5 w-[320px] h-[300px] transition-all sm:w-[70vw] sm:h-[50vh] sm:top-3 sm:right-3 md:w-full md:h-full"
        />
      </span>
    </div>
  );
};
export default AnimatedSection;
