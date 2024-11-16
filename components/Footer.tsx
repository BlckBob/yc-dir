import Image from "next/image";
const Footer = () => (
  <footer className="footer_card hover:bg-primary/100">
    <p className="sm:text-16-footer flex items-start justify-center p-0 font-work-sans text-[2.5vw] font-semibold uppercase max-[376px]:text-9px">
      &copy; {new Date().getFullYear()} Boban Stojanovic &nbsp;&nbsp;
    </p>
    <Image
      src="/letter-b-01.png"
      alt="logo"
      width={32}
      height={32}
      className="-mx-1 -mt-2 mb-0 p-0 opacity-100 transition delay-150 ease-in-out hover:scale-125"
    />
    <p className="sm:text-16-footer m-0 flex items-start justify-center p-0 font-work-sans text-[2.5vw] font-semibold uppercase max-[359px]:flex-wrap max-[376px]:text-9px">
      {" "}
      &nbsp;Home Inc. All rights reserved&nbsp;
    </p>
    <Image
      src="/black-sb-01.png"
      alt="logo"
      width={32}
      height={32}
      className="-mr-2 -mt-2 mb-0 ml-0 p-0 opacity-100 transition delay-100 ease-out hover:scale-125"
    />
  </footer>
);

export default Footer;
