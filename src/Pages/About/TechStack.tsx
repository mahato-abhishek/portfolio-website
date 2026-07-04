import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaNodeJs,FaPython,FaGitAlt,FaNpm } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill,RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";


export default function TechStack() {
  return (
    <>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-12 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 flex items-center jusify-center mx-auto"></div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-12 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 flex items-center jusify-center mx-auto">
          <p className="px-5 py-1 font-semibold text-2xl">Tech Stack</p>
        </div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-2 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 flex items-center jusify-center mx-auto"></div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-fit border-x  border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 grid grid-cols-4 gap-2 mx-auto font-semibold text-sm md:text-lg">
          <div className="border-r p-3 border-gray-300 dark:border-gray-800 border-dashed flex items-center justify-center gap-2 ">
            <FaHtml5 className="text-lg sm:text-3xl lg:text-4xl text-orange-500" />
            <p>HTML</p>
          </div>
          <div className="border-x p-3 border-gray-300 dark:border-gray-800  flex items-center justify-center gap-2">
            <FaCss3Alt className=" text-lg sm:text-3xl lg:text-4xl text-blue-500" />
            <p>CSS</p>
          </div>
          <div className="border-x p-3 border-gray-300 dark:border-gray-800  flex items-center justify-center gap-2">
            <FaJs className="text-lg sm:text-3xl lg:text-4xl text-yellow-500" />
            <p>JavaScript</p>
          </div>
          <div className="border-l p-3 border-gray-300 dark:border-gray-800  flex items-center justify-center   gap-2">
            <FaReact className="text-lg sm:text-3xl lg:text-4xl text-blue-400" />
            <p>React</p>
          </div>
        </div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-2 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 flex items-center jusify-center mx-auto"></div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-fit border-x  border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 grid grid-cols-4 gap-2 mx-auto font-semibold text-sm md:text-lg">
          <div className="border-r p-3 border-gray-300 dark:border-gray-800 border-dashed flex items-center justify-center gap-2 ">
            <FaNodeJs className="text-lg sm:text-3xl lg:text-4xl text-green-300" />
            <p>NodeJs</p>
          
          </div>
          <div className="border-x p-3 border-gray-300 dark:border-gray-800  flex items-center justify-center gap-2">
            <FaPython className="text-lg sm:text-3xl lg:text-4xl text-yellow-500" />
            <p>Python</p>
          </div>
          <div className="border-x p-3 border-gray-300 dark:border-gray-800  flex items-center justify-center gap-2">
            <BsTypescript className="text-lg sm:text-3xl lg:text-4xl text-blue-500" />
            <p>TypeScript</p>
          </div>
          <div className="border-l p-3 border-gray-300 dark:border-gray-800  flex items-center justify-center   gap-2">
            <RiTailwindCssFill className="text-lg sm:text-3xl lg:text-4xl text-blue-400" />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-2 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 flex items-center jusify-center mx-auto"></div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-fit border-x  border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 grid grid-cols-4 gap-2 mx-auto font-semibold text-sm md:text-lg">
          <div className="border-r p-3 border-gray-300 dark:border-gray-800 border-dashed flex items-center justify-center gap-2 ">
            <BiLogoPostgresql className="text-lg sm:text-3xl lg:text-4xl text-blue-500" />
            <p>PostgreSQL</p>
          </div>
          <div className="border-x p-3 border-gray-300 dark:border-gray-800  flex items-center justify-center gap-2">
            <FaGitAlt className="text-lg sm:text-3xl lg:text-4xl text-red-500" /> 
            <p>Git</p>
          </div>
          <div className="border-x p-3 border-gray-300 dark:border-gray-800  flex items-center justify-center gap-2">
            <FaNpm className="text-lg sm:text-3xl lg:text-4xl text-red-500" />
            <p>NPM</p>
          </div>
          <div className="border-l p-3 border-gray-300 dark:border-gray-800  flex items-center justify-center   gap-2">
            <RiNextjsFill className="text-lg sm:text-3xl lg:text-4xl text-black dark:text-white" />
            <p>NextJs</p>
          </div>
        </div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-2 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 flex items-center jusify-center mx-auto"></div>
      </div>
    </>
  );
}
