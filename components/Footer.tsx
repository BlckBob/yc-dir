import Image from "next/image";
const Footer = () => (
  <footer className="footer_card hover:bg-primary/100">
    <p className="sm:text-16-footer text-[2vw] font-normal uppercase">
      &copy; {new Date().getFullYear()} Boban Stojanovic &nbsp;&nbsp;
    </p>
    <Image
      src="/letter-b-01.png"
      alt="logo"
      width={32}
      height={32}
      className="-mt-2 opacity-100 transition delay-150 ease-in-out hover:scale-125"
    />
    <p className="sm:text-16-footer text-normal text-[2vw] uppercase">
      {" "}
      &nbsp; Home Inc. All rights reserved.&nbsp;&nbsp;
    </p>
    <Image
      src="/black-sb-01.png"
      alt="logo"
      width={32}
      height={32}
      className="-mt-2 opacity-100 transition delay-100 ease-out hover:scale-125"
    />
  </footer>
);

export default Footer;
