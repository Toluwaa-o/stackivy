import { Nunito_Sans } from "next/font/google";
import AnimatedSection from "./components/animated_section/section";
import Article from "./components/small_components/article";
import Card from "./components/small_components/card";
import Feedback from "./components/feedback/Feedback";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export default function Home() {
  const cards_one = [
    {
      img: "/Images/engaging.png",
      title: "Engaging and Interactive Lessons",
      para: "Learn about money through interactive games, quizzes, and activities that make finance fun!",
    },
    {
      img: "/Images/rewards.png",
      title: "Rewards and Achievements",
      para: "Earn points, badges, and unlock exciting rewards as you progress on your financial education journey.",
    },
    {
      img: "/Images/personalized.png",
      title: "Personalized Learning",
      para: "Tailored lessons and activities that adapt to your learning pace and level of understanding.",
    },
    {
      img: "/Images/parental.png",
      title: "Parental Involvement",
      para: "Stay connected with your parents, who can track your progress and support your learning every step of the way.",
    },
  ];

  const cards_two = [
    {
      img: "/Images/badge.png",
      title: "Virtual Badges:",
      para: "Showcase your achievements and earn special badges for completing milestones.",
    },
    {
      img: "/Images/currency.png",
      title: "In-App Currency",
      para: "Collect Keed Coins and use them to unlock exclusive content, upgrades, and customization options.",
    },
    {
      img: "/Images/reward.png",
      title: "Surprise Rewards",
      para: "Keep an eye out for special surprises and bonuses as you reach new levels of financial mastery!",
    },
  ];

  const sponsors = [
    ["/Images/alt.png", "alx"],
    ["/Images/alpha.png", "alpha"],
    ["/Images/gidimo.png", "gidimo"],
    ["/Images/korapay.png", "korapay"],
    ["/Images/mono.png", "mono"],
    ["/Images/kuda.png", "kuda"],
    ["/Images/monie.png", "moniepoint"],
    ["/Images/inter.png", "interswitch"],
  ];

  const feedback = [
    {
      para: "This financial learning platform has changed the way I see money. I'm from Kaduna, Nigeria, and it helped me understand how to save and spend wisely. Now, I'm teaching my friends about money too!",
      name: "Ibrahim Abdullahi",
      home: "Kaduna, Nigeria",
      img: "/Images/avatar1.png",
    },
    {
      para: "As a mom in Nigeria, I've always wanted my kids to be financially savvy from a young age. This platform has made it possible. It's tailored perfectly for Nigerian kids, and my children are now making wise decisions about their allowances and savings",
      name: "Ngozi Okonkwo",
      home: "Abuja, Nigeria",
      img: "/Images/avatar2.png",
    },
    {
      para: "I was skeptical about online learning platforms, but KEED has completely won me over. My son loves it, and it's helped him understand the value of money. I appreciate the effort in customizing it for the Nigerian context",
      name: "Ibrahim Abdullahi",
      home: "Kaduna, Nigeria",
      img: "/Images/avatar1.png",
    },
  ];

  return (
    <main className="grid gap-4 w-[100vw] overflow-hidden">
      <div className="py-4 px-4 my-[3vh] flex flex-col gap-7">
        <h1 className="flex flex-col text-3xl text-center font-[600] tracking-wide text-almost-black sm:flex-row sm:m-auto sm:gap-2 md:text-5xl">
          Unlock the Power of{" "}
          <span className="text-blue-green">Financial Learning!</span>
        </h1>
        <p
          className={`${nunito.className} text-small-text text-center text-[16px] leading-[24px] tracking-[1%] md:w-[60%] md:m-auto`}
        >
          At Keed, we believe in making finance fun and exciting for kids. Join
          our free platform and embark on a thrilling journey to gain essential
          financial skills that will set you up for lifelong success. Get ready
          to explore, learn, and earn exciting rewards along the way!
        </p>

        <p
          role="button"
          className="bg-my-orange flex m-auto text-almost-black text-xl px-[3rem] py-3 rounded-3xl"
        >
          Get started
        </p>
      </div>

      <span className="flex flex-col items-center justify-center my-[3vh] py-4 sm:w-[90%] sm:m-auto">
        <img
          src="/Images/video_frame_mobile.png"
          alt="video frame"
          className="sm:hidden md:hidden"
        />
        <img
          src="/Images/video_frame.png"
          alt="video frame"
          className="hidden sm:block md:hidden"
        />
        <img
          src="/Images/video_frame_desktop.png"
          alt="video frame"
          className="hidden sm:hidden md:block"
        />
      </span>

      <div className="bg-blue-green px-4 flex flex-col gap-8 py-[3vh] sm:py-[10vh] my-[10vh] sm:my-[20vh] relative w-full">
        <img
          src="/Images/clouds.png"
          alt="clouds"
          className="absolute top-[-4rem] z-0 w-screen left-0 sm:top-[-13vh] md:hidden"
        />

        <img
          src="/Images/cloud_2.png"
          alt="clouds"
          className="hidden md:block absolute z-0 w-screen left-0 top-[-15vh]"
        />

        <span className="flex flex-col gap-4 z-10 md:px-[5vw]">
          <p
            role="button"
            className="bg-my-orange flex m-auto text-white text-lg py-2 px-3 rounded-3xl"
          >
            Why Choose Keed
          </p>
          <h2 className="text-almost-white text-2xl text-center tracking-wide">
            Discover the Joy of Financial Learning with KEED
          </h2>
          <p
            className={`${nunito.className} text-almost-white text-center leading-[24px] tracking-[1%]`}
          >
            At Keed, we believe in making finance fun and exciting for kids.
            Join our free platform and embark on a thrilling journey to gain
            essential financial skills that will set you up for lifelong
            success. Get ready to explore, learn, and earn exciting rewards
            along the way!
          </p>
        </span>
        <div className="flex flex-col gap-6 sm:flex-wrap sm:flex-row sm:items-center sm:justify-between z-10 md:p-[5vw]">
          {cards_one.map((details) => (
            <Card key={details.title} {...details} will_wrap={true} />
          ))}
        </div>

        <img
          src="/Images/clouds.png"
          alt="clouds"
          className="md:hidden absolute bottom-[-4rem] z-0 w-screen left-0 sm:bottom-[-13vh]"
        />
        <img
          src="/Images/cloud_2.png"
          alt="clouds"
          className="hidden md:block absolute z-0 w-screen left-0 bottom-[-15vh]"
        />
      </div>

      <AnimatedSection />

      <div className="bg-white grid px-4 gap-8 py-[20vh] sm:gap-[10vh] sm:py-[5vh] sm:my-[20vh] sm:w-[80%] sm:mx-auto md:w-full">
        <Article
          button={"Play, Learn, and Earn"}
          title={"Play, Learn, and Earn Exciting Rewards!"}
          para={`At Keed, we believe in rewarding your efforts. As you progress and complete lessons, activities, and challenges, you'll unlock amazing rewards, including`}
          explore={false}
        />

        <div className="flex flex-col gap-6 md:flex md:flex-row md:gap-4 md:w-[85%] md:mx-auto">
          {cards_two.map((details) => (
            <Card key={details.title} {...details} />
          ))}
        </div>
      </div>

      <div className="bg-my-orange px-1 flex flex-col gap-8 py-[10vh] items-center sm:py-[20vh]">
        <h3 className="text-almost-black text-3xl">Meet our Partners</h3>
        <span className="flex flex-row flex-wrap items-center justify-center gap-4">
          {sponsors.map((sponsor) => (
            <img
              key={sponsor[0]}
              src={sponsor[0]}
              alt={sponsor[1]}
              className="w-[40%] sm:w-[20%]"
            />
          ))}
        </span>
      </div>

      <Feedback feedback={feedback} />

      <div className="ozone-layer py-[3rem] px-4 w-[94%] m-auto rounded-2xl grid gap-4 my-[4rem] sm:py-[20vh] md:w-[85%] md:mx-auto">
        <img src="/Images/group.png" alt="group" className="m-auto" />
        <h3 className="m-auto text-almost-white text-[1.9rem] text-center md:text-6xl md:w-[70%]">
          Join Millions of Kids &Young Adults on KEED
        </h3>
        <p className="text-center text-almost-white text-[1.1rem] md:w-[70%] md:m-auto">
          Don't miss out on the opportunity to become a financial superstar!
          Join Keed today and empower yourself with the skills and knowledge
          needed for a financially successful future. Sign up now, its free,
          fun, and the first step towards securing your financial independence!
        </p>

        <p
          role="button"
          className={`flex m-auto text-lg py-2 px-6 rounded-3xl bg-my-orange text-black`}
        >
          Get started
        </p>
      </div>

      <div className="bg-dark-green p-4 pt-[5rem] grid gap-[2.5rem] text-gray-300 md:px-[5vw]">
        <img src="/Images/logo_footer.png" alt="logo" />

        <span className="grid gap-4 md:flex md:items-center md:justify-between">
          <span className="border-2 border-dashed border-gray-700 rounded-xl flex items-center p-2 gap-4 sm:w-[55vw] md:w-fit md:p-4">
            <img src="/Images/QRCode.png" alt="QRCode" />
            <span className="grid gap-4">
              <p>Scan to download Keed App on Playstore and Appstore</p>
              <span className="flex items-center gap-4">
                <img src="/Images/apple.png" alt="apple" />
                <img src="/Images/playstore.png" alt="playstore" />
              </span>
            </span>
          </span>
          <span className="md:ml-auto md:text-right md:w-[30%] sm:grid sm:gap-4">
            <span className="flex items-center justify-between m-auto w-full text-[1.1rem] sm:w-[50vw] sm:ml-0 md:w-full">
              <p>Home</p>
              <p>Services</p>
              <p>Resources</p>
              <p>Blog</p>
            </span>

            <span className="text-[1.1rem] flex gap-4 flex-col md:ml-auto">
              <address className="not-italic">
                P.M.B 12A, Lekki, Lagos state, Nigeria.
              </address>
              <span className="flex gap-4 tracking-wider">
                <p>(+234)</p>
                <a href="tel:+2348123567898">8123567898</a>
                &#x2022;
                <a href="tel:+2347076387567">7076387567</a>
              </span>
            </span>
          </span>
        </span>

        <span className="w[90vw] h-[1px] bg-blue-green"></span>

        <span className="sm:flex sm:justify-between">
          <p className="text-[1.1rem]">English (United Kingdom)</p>
          <span className="flex text-[1.1rem] gap-4">
            <p>Copyright</p>
            &#x2022;
            <p>2023 KEED</p>
          </span>
        </span>
      </div>
    </main>
  );
}
