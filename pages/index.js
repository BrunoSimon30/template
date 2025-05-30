import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaInstagram  ,FaLinkedinIn  ,FaFacebookF  } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <header className="w-full top-0 absolute px-28 py-10">
        <div className="flex justify-between items-center">
          <div className="menu  ">
            <ul className="flex gap-8">
              <Link className="text-xl font-medium" href={""}>
                Home
              </Link>
              <Link className="text-xl font-medium" href={'/about'}>
                About
              </Link>
              <Link className="text-xl font-medium" href={""}>
                Services
              </Link>
            </ul>
          </div>
          <div className="logo-wrap bg-black w-[254px] h-[63px]"></div>
          <div className="mail-wrap">
            <Link href={""} className=" text-xl font-medium">
              hello@thelogoName.com
            </Link>
          </div>
        </div>
      </header>
      <section className="min-h-screen w-full px-28">
        <div className="container mx-auto max-w-screen ">
          <div className="top-ban pt-40">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div>
                <h1 className="text-[100px] leading-[120px] font-medium">
                  Elevate Your
                  <br />
                  Digital Presence
                  <br /> with The Logo
                </h1>
              </div>
              <div>
                <img className="" src="/img/mobile.webp" />
              </div>
            </div>
          </div>
          <div className="btm-ban">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div>
                <p className="text-2xl max-w-2xl">
                  Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ipsum dolor sit
                  consectetur amet.
                </p>
              </div>
              <div className="flex justify-end">
                <h2 className="text-5xl leading-15 font-medium">
                  Start Project!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="   bg-white  pt-12">
        <div className="container mx-auto max-w-screen">
          <div className="top-f  px-28">
            <div className="grid grid-cols-5 pt-4 pb-16  gap-4 items-center border-b-2 border-[#ffebdc]">
              <div className="col-span-2">
                <h2 className="text-[48px] leading-15 font-medium">
                  Featured In
                </h2>
              </div>
              <div className="col-span-3 flex justify-between items-center">
                <div className="bg-[#FFF9F5] border-2 border-[#ffebdc] py-5 px-7 rounded-lg">
                  <img src="/img/f1.png" />
                </div>
                <div className="bg-[#FFF9F5] border-2 border-[#ffebdc] py-5 px-7 rounded-lg">
                  <img src="/img/f2.png" />
                </div>
                <div className="bg-[#FFF9F5] border-2 border-[#ffebdc] py-5 px-7 rounded-lg">
                  <img src="/img/f3.png" />
                </div>
                <div className="bg-[#FFF9F5] border-2 border-[#ffebdc] py-5 px-7 rounded-lg">
                  <img src="/img/f4.png" />
                </div>
                <div className="bg-[#FFF9F5] border-2 border-[#ffebdc] py-5 px-7 rounded-lg">
                  <img src="/img/f5.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="mid-f pt-52 pb-18 px-28">
            <div className="grid grid-cols-3 gap-4 items-center ">
              <div className="">
                <h2 className="text-[60px] leading-22 font-medium">
                  Design is hard
                  <br />
                  Get outside <br />
                  help.
                </h2>
              </div>
              <div></div>
              <div className="space-y-6">
                <p className="text-3xl   leading-10 pl-4">
                  Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ipsum dolor sit
                  consectetur amet.
                </p>
                <p className="text-3xl  leading-10 pl-4">
                  Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ipsum dolor sit
                  consectetur amet.
                </p>
              </div>
            </div>
          </div>
          <div className="btm-f bg-[#FEECDD] py-48">
            <div className="grid grid-cols-3 gap-4 items-center px-28">
              <div className="">
                <div className="sil-wrap max-w-md pb-10">
                  <div className="flex items-center justify-between border-b   pb-2">
                    <h3 className="text-xl font-semibold">Serious Facts</h3>
                    <h3 className="text-xl flex gap-2 font-medium">
                      <span className="">01</span>/{" "}
                      <span className="text-gray-600">03</span>
                    </h3>
                  </div>
                  <div className="flex justify-between  items-center  pt-12">
                    <h2 className="text-8xl font-medium">25+</h2>
                    <p className="text-xl    ">
                      Tempor incididun
                      <br />
                      sed labore et dolore <br /> magna.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full"></div>
              <div className="">
                <Link
                  href={""}
                  className="w-fit relative flex text-xl font-medium bg-white px-16 py-4 rounded-full"
                >
                  Let's Explore
                  <span className="arow bg-white  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                    <MdArrowOutward />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" ">
        <img className="w-full" src="/img/vid.webp" />
      </section>
      <section className="we-sec px-28 bg-white py-32">
        <div className="container mx-auto max-w-screen">
          <div className="grid grid-cols-3 gap-12 ">
            <div className="col-span-2">
              <h2 className="text-[72px] leading-22 font-medium capitalize">
                We are open to any
                <br />
                kind of co-operation
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12">
              <div className="space  h-14 w-full"></div>
              <p className="text-xl   leading-10 pl-4 max-w-sm">
                We work with businesses to help them in the evolution
                reinvention or creation of their brand.
              </p>
              <div className="pr-24">
                <Link
                  href={""}
                  className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                >
                  Let's Explore
                  <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                    <MdArrowOutward />
                  </span>
                </Link>
              </div>
            </div>
            <div className="  ">
              <div className="wcard px-12 py-16 space-y-24 rounded-md  bg-[#F1FFE0] ">
                <div className="flex justify-between">
                  <h3 className="text-8xl leading-26 font-medium">01</h3>
                  <img src="/img/card1.png" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-5xl leading-26 font-medium uppercase">
                    mvp
                  </h3>
                  <p className="text-2xl   leading-10    ">
                    We assist in transforming bold ideas into impactful
                    products. Launch fast, iterate often, focus on the
                    essentials, and win big. gy fast, iterate often, focus on
                    the essentials, and win big.kif fast, iterate often, focus
                    on the essentials, and win big.
                  </p>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="wcard px-12 py-16 space-y-24 rounded-md  mt-24 bg-[#E2FDC1]">
                <div className="flex justify-between">
                  <h3 className="text-8xl leading-26 font-medium">02</h3>
                  <img src="/img/card2.png" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-5xl leading-26 font-medium capitalize">
                    Redesign
                  </h3>
                  <p className="text-2xl   leading-10    ">
                    We assist in transforming bold ideas into impactful
                    products. Launch fast, iterate often, focus on the
                    essentials, and win big. gy fast, iterate often, focus on
                    the essentials, and win big.kif fast, iterate often, focus
                    on the essentials, and win big.
                  </p>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="wcard px-12 py-16 space-y-24 rounded-md  bg-[#d1ff99]  mt-52 ">
                <div className="flex justify-between">
                  <h3 className="text-8xl leading-26 font-medium">03</h3>
                  <img src="/img/card3.png" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-5xl leading-26 font-medium capitalize">
                    Team extension
                  </h3>
                  <p className="text-2xl   leading-10    ">
                    We assist in transforming bold ideas into impactful
                    products. Launch fast, iterate often, focus on the
                    essentials, and win big. gy fast, iterate often, focus on
                    the essentials, and win big.kif fast, iterate often, focus
                    on the essentials, and win big.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="make-sec bg-white">
        <div className="container mx-auto max-w-screen">
          <div className="m-top">
            <div className="grid grid-cols-2 gap-4 items-center px-28 py-32">
              <div>
                <h2 className="text-[72px] leading-22 font-medium capitalize">
                  Make your
                  <br />
                  brand the
                  <br />
                  obvious choice
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center space-y-12">
                <p className="text-xl   leading-10 pl-4 max-w-sm">
                  We work with businesses to help them in the evolution
                  reinvention or creation of their brand.
                </p>
                <div className="pr-24">
                  <Link
                    href={""}
                    className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                  >
                    Let's Explore
                    <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                      <MdArrowOutward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="m-btm pb-12 space-y-4">
            <div className="flex flex-nowrap gap-4">
              <div className="m-img">
                <img className="rounded-xl" src="/img/p1.png" />
              </div>
              <div className="m-img">
                <img className="rounded-xl" src="/img/p2.png" />
              </div>
              <div className="m-img">
                <img className="rounded-xl" src="/img/p3.png" />
              </div>
            </div>
            <div className="flex flex-nowrap gap-4">
              <div className="m-img">
                <img className="rounded-xl" src="/img/p4.png" />
              </div>
              <div className="m-img">
                <img className="rounded-xl" src="/img/p5.png" />
              </div>
              <div className="m-img">
                <img className="rounded-xl" src="/img/p6.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dis-sec bg-white pb-24">
        <div className="container mx-auto max-w-screen">
          <div className="dis-top px-28 py-32">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div>
                <h2 className="text-[72px] leading-22    font-medium capitalize">
                  Discover what
                  <br />
                  our customers
                  <br />
                  have to say{" "}
                  <Link
                    href={""}
                    className="w-fit relative  inline-flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                  >
                    Let's Explore
                    <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                      <MdArrowOutward />
                    </span>
                  </Link>
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6">
                <div className="flex -space-x-3">
                  <img src="/img/t1.png" />
                  <img src="/img/t2.png" />
                  <img src="/img/t3.png" />
                  <img src="/img/t4.png" />
                </div>
                <p className="text-xl   leading-10 pl-4 max-w-sm">
                  Over 1.5k happy clients
                </p>
              </div>
            </div>
          </div>
          <div className="dis-btm pl-28">
            <div className="dis-sil space-y-6">
              <p className="text-6xl leading-20 font-medium">
                "I have worked with website developers in the past,
                <br /> and this was by far the BEST experience I have had.
                <br /> Communication was very easy."
              </p>
              <div className="flex  items-center gap-4">
                <div className="flex flex-nowrap gap-4 -space-x-6">
                  <div className="m-img">
                    <img className="rounded-xl" src="/img/d1.png" />
                  </div>
                  <div className="m-img">
                    <img className="rounded-xl" src="/img/d2.png" />
                  </div>
                </div>
                <div className="d-ctn">
                  <h4 className="text-xl font-semibold">Katrin L.</h4>
                  <p className="text-md font-medium">Founder, Elemotion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lat-sec px-28 pt-24 pb-75 bg-[url('/img/lat.png')] bg-cover bg-no-repeat  ">
        <div className="container mx-auto max-w-screen">
          <div className="lat-top px-28 py-32">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="col-span-2">
                <h2 className="text-[96px] leading-26 font-medium capitalize text-white ">
                  <span>
                    Latest news
                    <br />
                    from the world
                    <br />
                    of creativity
                  </span>
                  <Link
                    href={""}
                    className="w-fit relative    text-xl text-black font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                  >
                    View All Blogs!
                    <span className="arow bg-[#FEECDD]   text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                      <MdArrowOutward />
                    </span>
                  </Link>
                </h2>
              </div>
              <div>
                <p className="text-3xl max-w-3xl text-white">
                  Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ipsum dolor sit
                  consectetur amet.
                </p>
              </div>
            </div>
          </div>
          <div className="lat-btm">
            <div className="grid grid-cols-3 gap-4 items-center px-28 py-32">
              <div className="lat-card space-y-6">
                <div>
                  <img className="rounded-xl" src="/img/lat1.png" />
                </div>
                <div className="space-y-6">
                  <span className="text-white border-2 border-red-600 px-8 py-2 block w-fit text-md rounded-full">
                    Brand Guidelines
                  </span>
                  <h4 className="text-4xl text-white font-medium  ">
                    Semper placerat cursus congue leo, egestas aptent pretium
                    eros.
                  </h4>
                  <p className="text-xl text-gray-300 ">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                </div>
              </div>
              <div className="lat-card space-y-6">
                <div>
                  <img className="rounded-xl" src="/img/lat1.png" />
                </div>
                <div className="space-y-6">
                  <span className="text-white border-2 border-red-600 px-8 py-2 block w-fit text-md rounded-full">
                    Brand Guidelines
                  </span>
                  <h4 className="text-4xl text-white font-medium  ">
                    Semper placerat cursus congue leo, egestas aptent pretium
                    eros.
                  </h4>
                  <p className="text-xl text-gray-300 ">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                </div>
              </div>
              <div className="lat-card space-y-6">
                <div>
                  <img className="rounded-xl" src="/img/lat1.png" />
                </div>
                <div className="space-y-6">
                  <span className="text-white border-2 border-red-600 px-8 py-2 block w-fit text-md rounded-full">
                    Brand Guidelines
                  </span>
                  <h4 className="text-4xl text-white font-medium  ">
                    Semper placerat cursus congue leo, egestas aptent pretium
                    eros.
                  </h4>
                  <p className="text-xl text-gray-300 ">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative  px-12   -mt-64 z-10">
        <div className="shap">
          <img
            className="absolute -top-2 left-0  w-full -z-1"
            src="/img/shade.png"
          />
        </div>
        <div className="container mx-auto max-w-screen bg-[#FEECDD] px-28 py-24">
          <div className="grid grid-cols-3 gap-4 items-center  ">
            <div className="col-span-2">
              <h2 className="text-[72px] leading-22  font-medium capitalize">
                From dreams to reality.
                <br />
                Creating brands that
                <br />
                change the world.
                <br />
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12">
              <p className="text-xl   leading-10 pl-4 max-w-sm">
                We work with businesses to help them in the evolution
                reinvention or creation of their brand.
              </p>
              <div className="pr-24">
                <Link
                  href={""}
                  className="w-fit relative flex text-xl font-medium bg-white px-16 py-4 rounded-full"
                >
                  Let's Explore
                  <span className="arow bg-white  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                    <MdArrowOutward />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className=" bg-white  ">
        <div className="container mx-auto max-w-screen ">
          <div className="ft-top flex items-center   justify-between px-28 py-20 border-b ">
            <div>
              <img src="/img/ft-logo.png" />
            </div>
            <ul className="flex gap-16">
              <li>
                <Link
                  href={""}
                  className="text-[40px] capitalize text-gray-400 font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-[40px] capitalize text-gray-400 font-medium"
                >
                  works
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-[40px] capitalize text-gray-400 font-medium"
                >
                  reviews
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-[40px] capitalize text-gray-400 font-medium"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="w-fit relative flex  text-[40px] capitalize text-black font-medium gap-6 items-center"
                >
                  <span> Start Project!</span>
                  <span className="arow text-white bg-red-700  text-2xl w-13 h-13   flex items-center justify-center rounded-full">
                    <MdArrowOutward />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="ft-btm flex   justify-between px-28  ">
            <div className="ft-left w-full bg-amber-50 pt-20 pb-10 pr-24 space-y-20">
              <p className="text-xl max-w-md">
                Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ipsum dolor sit
                consectetur amet.
              </p>
              <div className="flex justify-end">
                <div className="bg-black w-[200px] h-[200px]"></div>
              </div>
              <p className="text-xl ">
                Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
                
              </p>
            </div>
            <div className="ft-right w-full bg-amber-300 pt-20 pb-10 pl-32 space-y-16">
              <div className="flex  gap-25">
                <h2 className="text-md font-medium">Services</h2>
                <ul className="ft-list">
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Back-End Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Artificial Intelligence (AI)
                    </Link>
                  </li>
                   <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                     Front-End Development
                    </Link>
                  </li>
                   <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Web Development (Full Stack)
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex  gap-25">
                <h2 className="text-md font-medium capitalize">contact</h2>
                <ul className="ft-list">
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Back-End Development
                    </Link>
                  </li>
               
                </ul>
              </div>
               <div className="flex  gap-25">
                <h2 className="text-md font-medium capitalize">socials</h2>
                <ul className="flex gap-4">
                  <li>
                    <Link
                      href={""}
                      className="text-xl w-10 h-10 bg-red-300 flex items-center justify-center rounded-full"
                    >
                      <FaInstagram/>
                    </Link>
                  </li>
                   <li>
                    <Link
                      href={""}
                      className="text-xl w-10 h-10 bg-red-300 flex items-center justify-center rounded-full"
                    >
                    <RiTwitterXLine  />
                    </Link>
                  </li>
                    <li>
                    <Link
                      href={""}
                      className="text-xl w-10 h-10 bg-red-300 flex items-center justify-center rounded-full"
                    >
                     <FaLinkedinIn />
                    </Link>
                  </li>
                       <li>
                    <Link
                      href={""}
                      className="text-xl w-10 h-10 bg-red-300 flex items-center justify-center rounded-full"
                    >
                     <FaFacebookF />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
