import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ items }) => {
  return (
    <div>
      <Marquee pauseOnHover={true} gradient={true} gradientColor="#f3f4f6" style={{ zIndex: -20 }} className="py-8 overflow-hidden">
        {/* The link doesn't work with the Marquee component. Probably because the attached events on the marquee prevent the interaction with a link inside it */}
        {/* <a
          href={logo.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer group flex justify-center align-middle py-2 marquee-link"
        > */}
        {items.map((logo) => (
          <div className="w-32 h-auto mx-6 md:w-64">
            <img
              src={logo.imageUrl}
              alt={`${logo.name} logo`}
              className={`size-full object-contain object-center ${
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
