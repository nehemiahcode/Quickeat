import { useRef, useState, useEffect } from "react";
import React from "react";
import {
  Typography,
  Span,
  DropDown,
  Paragraphs,
  Buttons,
  Button,
  MyCards,
  BiggerHeading,
  Template,
  Menulist,
  Icon
} from "./hidden-component";
import Aos from "aos";
import "aos/dist/aos.css";
import Swiperslides from "./Swiper";

function Contents() {
  const [showdrop, setShowDrop] = useState(false);
  const dropdownRef = useRef();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const handleDrop = () => {
    setShowDrop(!showdrop);
  };
  window.addEventListener("click", (e) => {
    if (e.target !== dropdownRef.current) {
      setShowDrop(false);
    }
  });

  return (
    <div
      id="home"
      className="grid grid-cols-1 px-5 md:grid-cols-2 
     mx-auto w-[100%] sm:w-[100%] sm:px-10 bg-gradient-to-r
      from-white via-white to-lightPink md:w-[100%]"
    >
      <div className="h-auto pt-20 md:pt-5" data-aos="fade-right">
        <BiggerHeading>The Best Restaurants In Your Home</BiggerHeading>
        <p className=" text-lighterblack text-1xl pt-3 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <div className="flex flex-col" onClick={handleDrop}>
          <div
            ref={dropdownRef}
            className=" w-90 sm:w-80 h-14 bg-white rounded-md shadow-xl flex justify-between items-center mt-5 px-3"
          >
            <h3
              className={`text-lg font-medium  text-lighterblack md:cursor-pointer`}
              onClick={handleDrop}
            >
              Select an Option
            </h3>
            {showdrop ? (
              <span className="material-symbols-outlined">expand_more</span>
            ) : (
              <span className="material-symbols-outlined ">expand_less</span>
            )}
          </div>
          {showdrop ? (
            <div className="flex flex-col shadow-xl rounded-md sm:w-80 bg-white mt-1">
              {DropDown.map((drop) => (
                <div
                  key={drop.id}
                  className="w-100  h-10 rounded-md bg-white flex text-sm
                px-3 font-medium hover:bg-fineYellow2 items-center transition "
                >
                  {drop.list}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
          <Button>ORDER NOW</Button>
        </div>
      </div>
      <div className="" data-aos="fade-left">
        <img
          src="https://bslthemes.com/html/quickeat/assets/img/photo-1.png"
          alt="images"
          className="h-70 object-contain max-w-full"
        />
      </div>
    </div>
  );
}

export default Contents;

export function About() {
  return (
    <>
      <h1
        id="about"
        className="text-4xl font-bold text-center py-5 text-lighterblack tracking-normal"
        data-aos="zoom-out"
      >
        How it works
      </h1>
      <p
        className="text-md font-semibold text-center text-lightblack px-10"
        data-aos="zoom-out"
      >
        Magna sit amet purus gravida quis blandit
        <br />
        turpis cursus. Venenatis tellus in metus <br />
        vulputate eu scelerisque felis.
        <br />
      </p>
      <div
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[100%] sm:w-[90%] sm:mx-10 md:w-[100%] md:mx-0"
        data-aos="zoom-out"
      >
        <div className=" bg-white h-auto w-100 px-10 pt-2 flex justify-center flex-col items-center">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/illustration-1.png"
            alt="images"
            className="h-[250px] object-contain w-[100%]"
          />
          <Typography>
            <Span>01</Span>
            Select Resturant
          </Typography>
          <Paragraphs>
            Non enim praesent elementum facilisis leo vel fringilla. Lectus
            proin nibh nisl condimentum id. Quis varius quam quisque id diam
            vel.
          </Paragraphs>
        </div>
        <div className=" bg-white h-auto w-100 px-10 pt-2 flex justify-center flex-col items-center">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/illustration-2.png"
            alt="images"
            className="h-[250px] object-contain w-[100%]"
          />
          <Typography>
            <Span>03</Span>
            Select Menu
          </Typography>
          <Paragraphs>
            Non enim praesent elementum facilisis leo vel fringilla. Lectus
            proin nibh nisl condimentum id. Quis varius quam quisque id diam
            vel.
          </Paragraphs>
        </div>
        <div className=" bg-white h-auto w-100 md:col-span-2 lg:col-span-1 md:px-40 lg:px-10 px-10 pt-2 flex justify-center flex-col items-center">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/illustration-3.png"
            alt="images"
            className="h-[250px] object-contain w-[100%]"
          />
          <Typography>
            <Span>03</Span>
            Select Delivery
          </Typography>
          <Paragraphs>
            Non enim praesent elementum facilisis leo vel fringilla. Lectus
            proin nibh nisl condimentum id. Quis varius quam quisque id diam
            vel.
          </Paragraphs>
        </div>
      </div>
    </>
  );
}

export function Details() {
  return (
    <div
      id="serve"
      className="grid grid-cols-1 w-[100%] h-auto pt-8  md:grid-cols-2 md:bg-gradient-to-tr via-white from-white to-lightPink"
    >
      <div className="h-400px w-[100%] relative" data-aos="zoom-out-left">
        <img
          src="https://bslthemes.com/html/quickeat/assets/img/photo-3.png"
          alt="images"
          className="h-[300px] object-contain w-[100%]"
        />
        <div className=" absolute h-[200px] gap-2 w-[120px] bg-white shadow-2xl right-10 sm:right-40 rounded-lg top-4 grid grid-cols-1">
          {Buttons.map((button) => (
            <button
              key={button.id}
              className="bg-white rounded-lg  flex justify-center gap-2 items-center"
            >
              <span className="material-symbols-outlined text-fineYellow2">
                {button.icon}
              </span>
              {button.text}
            </button>
          ))}
        </div>
      </div>
      <div
        className="h-[400px] w-[100%] bg-gradient-to-t from-white  to-lightPink md:bg-none px-4 "
        data-aos="zoom-out-right"
      >
        <h1 className="text-4xl font-bold text-left py-2  text-lighterblack tracking-normal">
          From your favorite Resturants to your Table
        </h1>
        <p className="text-md font-semibold text-left  text-lightblack">
          Pretium lectus quam id leo in vitae turpis massa
          <br />
          sed. Lorem done massa sapien faucibus et
          <br />
          molestie. Vitae elementum curabitur vitae nunc.
        </p>

        <Button>ODER NOW</Button>
      </div>
    </div>
  );
}

export function Cards() {
  return (
    <>
      <div
        className="grid grid-cols-1  pt-6 lg:grid-cols-4 h-auto sm:grid-cols-2 w-[70%] md:w-[90%] gap-3 lg:gap-8 mx-auto"
        data-aos="zoom-out-bottom"
      >
        <div className="text-3xl font-bold text-lightblack flex justify-center items-center">
          Service Shows good taste
        </div>
        {MyCards.map((card) => (
          <div className=" h-[9rem] w-[100%] md:w-[100%] bg-white rounded-1xl shadow-2xl flex flex-row items-center justify-center gap-2">
            <span
              key={card.id}
              className="text-4xl font-extrabold text-fineYellow"
            >
              {card.span}
            </span>
            <h1 className="text-md font-semibold text-lighterblack">
              {card.text}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}

export function Testimonials() {
  return (
    <>
      <div
        id="test"
        className="w-[100%] h-auto bg-white grid grid-cols-1 md:grid-cols-2 pt-7"
      >
        <div className=" h-auto" data-aos="zoom-out-left">
          <h1 className="text-4xl font-bold text-left py-2  text-lighterblack tracking-normal px-7">
            What customers say about us
          </h1>
          <div className=" w-[100%] h-[auto] bg-white">
            <Swiperslides></Swiperslides>
          </div>
        </div>
        <div className="h-auto w-[100%] relative" data-aos="zoom-out-right">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/photo-4.png"
            alt="images"
            className="h-[300px] object-contain w-[100%]"
          />
          <div className=" absolute top-6 left-[3rem] bg-white h-[100px] w-[100px] flex justify-center items-center rounded-full shadow-xl">
            <span className="material-symbols-outlined text-6xl font-extrabold text-fineYellow">
              favorite
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export function Subscribe() {
  return (
    <>
      <div
        id="subs"
        className="w-[100%] h-auto grid grid-cols-1 md:grid-cols-2 bg-white pb-6"
        data-aos="zoom-out"
      >
        <div className=" w-[100%] pt-4">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/illustration-4.png"
            alt="images"
            className="h-[300px] object-contain w-[100%]"
          />
        </div>
        <div className="flex flex-col pl-4 ">
          <BiggerHeading>
            Get the menu of your favorite restaurants every day
          </BiggerHeading>
          <div className="flex flex-col lg:flex-row lg:gap-2 items-center h-auto py-4">
            <form>
              <input
                type="text"
                className="bg-white h-[60px] w-[70%] rounded-xl shadow-xl
                     placeholder:text-lighterblack placeholder:text-xl px-2 placeholder:font-medium"
                placeholder="Enter email address"
              />
              <Button>ODER NOW</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-slate h-auto pb-3 lg:grid-cols-3 mx-auto">
        <div className="flex items-start pl-[1.5rem] pt-[2rem] flex-col md:pl-[6rem] sm:pl-[2rem]">
          <Template />
          <h1 className="text-4xl font-extrabold  text-white leading-10">
            The Best Restaurants in Your Home
          </h1>
          <p className="text-white font-semibold  pt-3">
            Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
            lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
            pretium quam.
          </p>
        </div>
        <div className=" flex flex-col w-[100%] md:w-32 lg:w-[100%]  pt-[2rem]">
          <h1 className="text-gray text-3xl font-bold text-center lg:text-justify  px-4 ">MENU</h1>
          <div className="flex flex-col  px-6 ">
            <ul className=" pt-3 flex flex-col gap-2">
              {Menulist.map((list) => (
                <li key={list.id}>
                  <a
                    className="text-white font-bold text-lg
                            hover:text-fineYellow2 flex"
                    href={list.Url}
                  >
                    {list.List}
                    <span className="material-symbols-outlined text-white text-lg flex items-center justify-center px-5 ">
                      arrow_right_alt
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col pt-[2rem] px-6 ">
          <h1 className="text-gray text-3xl font-bold">CONTACTS</h1>
          <div className="">
            <span className="material-symbols-outlined pt-3 text-white text-lg">
              pin_drop
            </span>
            <p className="text-white font-bold pt-3 ">1717 Harrison St, San Francisco, CA 94103, United States</p>
          </div>
          <div className="flex gap-4 mt-3">
            {Icon.map((icon) => (
                <div className="bg-white h-10 w-10 rounded-full text-[20px] hover:bg-fineYellow2 transition-all hover:text-white flex justify-center items-center ">
                <i className={icon.texts}></i>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}
