import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const Card = ({ img, title, para, will_wrap }) => {
  return (
    <div key={title} className={`bg-white rounded-3xl overflow-hidden py-4 border-[1px] border-gray-300 grid  place-content-center ${will_wrap ? 'sm:w-[46%] sm:min-h-[60vh] sm:py-2' : 'sm:p-[5vw] md:p-6 md:w-[46%]'}`}>
      <img src={img} alt={title} className={`bg-white m-auto md:w-[50%] ${!will_wrap ? 'md:w-[100px] md:h-[100px] sm:w-[30%] sm:h-[50%]' : 'sm:w-[70%] sm:h-[70%]'}`} />
      <span className="p-4 flex flex-col mt-4 gap-4 sm:mt-0">
        <h3 className="text-almost-black text-2xl sm:text-[1.2rem]">{title}</h3>
        <p className={`${nunito.className} text-small-text`}>{para}</p>
      </span>
    </div>
  );
};
export default Card;
