import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const Article = ({ button, title, para, explore, orange}) => {
  return (
    <span className={`flex flex-col gap-4 ${explore ? "md:col-span-2 md:mb-[-15vh]" : ''}`}>
      <p
        role="button"
        className={`flex m-auto text-lg py-2 px-3 rounded-3xl ${!orange ? 'bg-blue-green text-almost-white' : 'bg-my-orange text-white'}`}
      >
        {button}
      </p>
      <h2 className="text-almost-black text-2xl text-center tracking-wide">
        {title}
      </h2>
      <p
        className={`${nunito.className} text-small-text text-center leading-[24px] tracking-[1%]`}
      >
        {para}
      </p>

      {explore ? (
        <p
          role="button"
          className="bg-my-orange flex m-auto text-almost-black text-xl px-[4rem] py-3 rounded-3xl"
        >
          Explore
        </p>
      ) : (
        ""
      )}
    </span>
  );
};
export default Article;
