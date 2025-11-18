import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ items }) => {
  return (
    <div>
      <Marquee pauseOnHover={true} gradient={true} style={{ zIndex: -20 }}>
        {/* The link doesn't work with the Marquee component. Probably because the attached events on the marquee prevent the interaction with a link inside it*/}
        {/* <a
          href={logo.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer group flex justify-center align-middle py-2 marquee-link"
        > */}
        {items.map((logo) => (
          <img
            src={logo.imageUrl}
            alt={`${logo.name} logo`}
            className={`min-w-12 my-0 mx-9 md:max-h-16 max-w-24 md:max-w-52 w-full object-contain duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-110 ${
              logo.invert ? "invert" : ""
            }`}
            width={200}
            height={100}
            loading="lazy"
          />
        ))}
        {/* </a> */}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
