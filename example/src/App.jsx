import { useRef, useState } from "react";
import { Menulist, Template } from "./hidden-component";
// import { Contents } from './Contents.jsx'

function App() {
  const [showicon, setShowIcon] = useState(false);
  const MenuRef = useRef();
  const IconRef = useRef();
  const handleShowIcon = () => {
    setShowIcon(!showicon);
  };

  window.addEventListener("click", (e) => {
    if (e.target !== MenuRef.current && e.target !== IconRef.current) {
      setShowIcon(false);
    }
  });

  return (
    <>
      <header
        className={`flex
      bg-white
         dark:text-gray gap-2 relative justify-between px-2 py-10 z-[999] sm:px-10
       items-center top-0 left-0 right-0 w-[100%] h-[60px] bg-slate-200 md:relative`}
      >
       <Template/>
        <nav
          ref={MenuRef}
          className={`absolute ${showicon ? "" : "hidden"}
            md:block
            bg-white
           md:relative
           md:h-auto
           md:w-auto
            top-20 md:top-0 pt-10 md:pt-0 left-[0] right-0 z-[999] border-metal w-[90%]
           mx-auto md:m-0 h-[300px] rounded-md md:rounded-none  shadow-2xl md:shadow-none
            `}
        >
          <ul className="flex md:flex-row flex-col md:gap-2 justify-center items-center">
            {Menulist.map((Menu) => (
              <li key={Menu.id}>
                <a
                  href={Menu.Url}
                  onClick={handleShowIcon}
                  className="text-lg font-semibold hover:text-fineYellow2 p-1 hover:border-b-2
                    flex  hover:-translate-y-1 hover:scale-110 duration-100 md:visible 
                    hover:bg-slate-100 hover:text-slate-900
                    "
                >
                  {Menu.List}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className=" hidden lg:block transition drop-shadow-lg px-5 bg-fineYellow2 font-medium font-verdana h-12 w-30
         rounded-xl hover:bg-white hover:border-2 hover:border-fineYellow"
        >
          ORDER NOW
        </button>
        <div className="flex items-center  gap-2 px-5">
          <span
            className={`material-symbols-outlined
            text-fineYellow2 rounded-md h-10 w-10 flex items-center
             justify-center shadow-xl`}
          >
            pending_actions
          </span>
          {showicon ? (
            <span
              className={`material-symbols-outlined  text-fineYellow2  
            font-semibold text-4xl rounded-md h-10 w-10 flex items-center justify-center shadow-xl md:hidden`}
              onClick={handleShowIcon}
              ref={IconRef}
            >
              expand_less
            </span>
          ) : (
            <span
              onClick={handleShowIcon}
              ref={IconRef}
              className={`material-symbols-outlined  text-fineYellow2
             font-semibold text-3xl rounded-md h-10 w-10 flex 
             items-center justify-center shadow-xl md:hidden`}
            >
              menu
            </span>
          )}
        </div>
      </header>
      {/* <Contents dark={dark}/> */}
    </>
  );
}

export default App;
