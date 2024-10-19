import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { IoIosCheckmark } from "react-icons/io";
import CardContainer from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Main Container */}
      <div className="min-h-screen w-full bg-[#142257] flex flex-col lg:flex-row">
        {/* Left Image */}
        <div className="w-full lg:w-1/5 h-64 lg:h-screen pt-4 lg:pt-12 px-4 flex items-start">
          <div className="relative w-full h-full hidden lg:block">
            <Image
              src='/images/imageleft.png'
              alt="left top"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 1024px) 100vw, 20vw"
              priority
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Center Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center items-center text-white px-4 py-8 lg:py-0">
          <div className="flex flex-wrap gap-x-4 justify-center text-lg lg:text-2xl text-gray-400">
            <p>Maintenance .</p>
            <p>Repairs .</p>
            <p>Improvements</p>
          </div>
          <div className="flex flex-col items-center font-bold text-4xl lg:text-6xl mt-6 text-center gap-y-2">
            <div>Need Improvement</div>
            <div>or repair your home?</div>
            <div>We can help!</div>
          </div>
          <div className="flex flex-wrap text-[#15B2F5] justify-center gap-x-4 lg:gap-x-8 text-xl lg:text-3xl mt-8">
            <p>Free Quotes</p>
            <p>100% commitment Free</p>
          </div>
          <div>
            <button type="button" className="text-white bg-[#15B2F5] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-8">Call us now</button>
          </div>
          <div className="flex flex-wrap justify-center gap-12 text-base lg:text-xl mt-8 lg:mt-[15vh]">
            <div className="flex w-36 gap-x-2 justify-center items-center">
              <div className="bg-[#1f1384] w-16 h-12 flex justify-center items-center rounded-xl">
                <FaCheck />
              </div>
              <div>Satisfaction Guarantee</div>
            </div>
            <div className="flex w-36 gap-x-2 justify-center items-center">
              <div className="bg-[#1f1384] w-16 h-12 flex justify-center items-center rounded-xl">
                <GoClock />
              </div>
              <div>24 Hour availability</div>
            </div>
            <div className="flex w-36 gap-x-2 justify-center items-center">
              <div className="bg-[#1f1384] w-16 h-12 flex justify-center items-center rounded-xl">
                <CiLocationOn />
              </div>
              <div>Local UK professional</div>
            </div>
            <div className="flex w-32 gap-x-2 justify-center items-center">
              <div className="bg-[#1f1384] w-18 h-12 flex justify-center items-center rounded-xl">
                <CiCalendarDate size={28} />
              </div>
              <div>Flexible appointments</div>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="w-full lg:w-1/5 h-64 lg:h-screen pt-4 lg:pt-12 px-4 flex items-start">
          <div className="relative w-full h-full hidden lg:block">
            <Image
              src='/images/imageright.png'
              alt="right top"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 1024px) 100vw, 20vw"
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="h-screen w-[80%] m-auto bg-white text-black flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mt-[12vh]">
          <div className="text-5xl w-[80%]">
            <h2 className="font-semibold">Professional for your home services</h2>
          </div>
          <div className="mt-6 text-xl text-[#545971] flex flex-col">
            You need help for home care? We are home care professionals
            <div>focused in the US region. We provide several services that</div>
            <div>support home services</div>
          </div>
          <div className="mt-[6vh] flex justify-between w-[85%] text-xl text-[#1F3584]">
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center font-semibold">
                <IoIosCheckmark size={45} />
                <h2>Repair and Installation</h2>
              </div>
              <div className="flex items-center font-semibold">
                <IoIosCheckmark size={45} />
                <h2>Maintenance</h2>
              </div>
              <div className="flex items-center font-semibold">
                <IoIosCheckmark size={45} />
                <h2>Home Security Services</h2>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center font-semibold">
                <IoIosCheckmark size={45} />
                <h2>Plumbing</h2>
              </div>
              <div className="flex items-center font-semibold">
                <IoIosCheckmark size={45} />
                <h2>Budget-friendly</h2>
              </div>
              <div className="flex items-center font-semibold">
                <IoIosCheckmark size={45} />
                <h2>Eco-friendly Solutions</h2>
              </div>
            </div>
          </div>
          <div className="text-white bg-[#15B2F5] w-[80%] p-4 rounded-3xl ml-2 text-xl mt-[6vh]">
            <div>we provide 24 hours fast services to help you.</div>
            <div>You can contact us at <strong>(888)617-5894</strong></div>
          </div>
        </div>

        {/* Hide image on small screens */}
        <div className="hidden lg:block w-1/2">
          <Image
            src='/images/working.png'
            alt="working"
            width={700}
            height={800}
            className="mt-[12vh]"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="md:h-screen flex flex-col w-[80%] m-auto">
        <div className="flex flex-col items-center ">
          <div className="font-semibold text-5xl mt-[12vh]">Our Services</div>
          <div className="text-xl mt-4 text-[#545971]">You have problem with leaking pipes, broken tiles, lost keys, or</div>
          <div className="text-xl text-[#545971]">want to tidy up the trees around you, of course you need our help!</div>
        </div>
        {/* Cards for service */}
        <div className="mt-12 px-4">
          <CardContainer />
        </div>
      </div>

      {/* How it works */}
      <div className="h-screen flex flex-col lg:flex-row">
        {/* Image section */}
        <div className="lg:block w-1/2 flex justify-center items-center relative">
          <Image
            src='/images/working.png'
            alt="working"
            width={600}
            height={700}
            className="mt-[5vh]"
          />
        </div>
        {/* Text section */}
        <div className="w-full lg:w-1/2 overflow-y-auto">
          <div className="max-w-2xl mx-auto py-16 px-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">
              How <span className="text-[#142288]">homeniser</span> works?
            </h2>
            <div className="space-y-8">
              {/* First pointer */}
              <div className="flex items-start bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <span>01</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Choose a service</h3>
                  <p className="text-gray-600">Select the service you need for your home improvement.</p>
                </div>
              </div>
              {/* Second pointer */}
              <div className="flex items-start bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <span>02</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Set your appointment</h3>
                  <p className="text-gray-600">Pick a date and time that works for you for the service.</p>
                </div>
              </div>
              {/* Third pointer */}
              <div className="flex items-start bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <span>03</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Get the job done</h3>
                  <p className="text-gray-600">Our professionals will take care of everything from start to finish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      
    </div>
  );
}
