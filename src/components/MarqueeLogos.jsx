import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ items }) => {
  return (
    <div>
      <Marquee pauseOnHover={true} gradient={true} gradientColor="#f3f4f6" style={{ zIndex: -20 }} className="py-8 overflow-hidden">
        {/* The link doesn't work with the Marquee component. Probably because the attached events on the marquee prevent the interaction with a link inside it*/}
        {/* <a
          href={logo.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer group flex justify-center align-middle py-2 marquee-link"
        > */}
        {items.map((logo) => (
          <div className="bg-white p-8 mx-6 rounded-xl ring ring-accent-300 duration-300 ease-in-out group-hover:ring-2 group-hover:shadow-lg group-hover:shadow-accent-600/20 group-hover:scale-110 group-hover:brightness-110">
            <img
              src={logo.imageUrl}
              alt={`${logo.name} logo`}
              className={`w-24 h-16 object-contain object-center md:w-64 ${
                logo.invert ? "invert" : ""
              }`}
              width={200}
              height={100}
              loading="lazy"
            />
          </div>
        
        ))}
        {/* </a> */}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
