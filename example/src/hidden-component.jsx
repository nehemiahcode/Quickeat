


export function Typography({ children }) {
  return (
    <h1 className="text-2xl font-bold text-lighterblack tracking-normal">
      {children}
    </h1>
  );
}

export function Span({ children }) {
  return <span className="text-4xl font-bold text-gray pr-3">{children}</span>;
}
export function Paragraphs({ children }) {
  return (
    <p className=" text-md font-semibold text-center text-lightblack py-5">
      {children}
    </p>
  );
}
export function BiggerHeading({ children }) {
  return (
    <h1
      className=" text-4xl font-extrabold text-lighterblack leading-10
        md:leading-relaxed text-center md:text-left lg:text-6xl"
    >{children}</h1>
  );
}
export function Button({ children }) {
  return (
    <button type="button"
      className="mt-5 bg-fineYellow2
        shadow-md transition font-medium
         font-verdana h-12 w-40 rounded-xl hover:bg-white
          hover:border-2 hover:border-fineYellow"
    >
      {children}
    </button>
  );
}
export const Menulist = [
    { id: 0, List: "Home", Url: "#home" },
    { id: 1, List: "About", Url: "#about" },
    { id: 2, List: "Services", Url: "#serve" },
    { id: 3, List: "Testimonial", Url: "#test" },
    { id: 4, List: "Subscribe", Url: "#subs" },
  ];

export const DropDown = [
  { id: 0, list: "Order for Snacks" },
  { id: 1, list: "Oder for Drinks" },
  { id: 2, list: "Oder for Meals" },
  { id: 3, list: "Oder for Fish" },
];
export const Buttons = [
  { text: "Burgers", icon: "lunch_dining", id:0 },
  { text: "Steaks", icon: "cake", id:1  },
  { text: "Pizza", icon: "local_pizza", id:2  },
];
export const MyCards = [
  { text: "Satisfied Customer", span: "976", id:0  },
  { text: "Best Restaurants", span: "12", id:1  },
  { text: " Food Delivered", span: "1K+" , id:2  },
];

export const Icon = [
    {id:0, texts:"fa-brands fa-facebook-f"},
    {id:1, texts:"fa-brands fa-whatsapp"},
    {id:2, texts:"fa-brands fa-twitter"}
]
export function Template() {
    return (
        <>
         <div className="flex justify-around">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined font-black text-6xl text-fineYellow2">
            dinner_dining
            </span>
            <h2 className="font-bold text-[1rem]  md:text-3xl font-sanserif">
              QUICK<span className="text-fineYellow">EAT</span>
            </h2>
          </div>
        </div>
        </>
    )
}