import { motion } from "motion/react";
import projectDark from "../../assets/Project-1-dark.png";
import projectLight from "../../assets/Project-1-light.png";
import { useTheme } from "../../Context/ThemeContext";

export default function Project1() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-16 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-4xl w-95/100 flex items-center jusify-center mx-auto"></div>
      </div>

      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-fit border-x border-gray-300 dark:border-gray-800 border-dashed max-w-4xl w-95/100 flex items-center jusify-center mx-auto">
          <p className="font-bold text-2xl px-5 py-2 ">Weather App</p>
        </div>
      </div>

      <div className="border-b border-dashed border-gray-300 dark:border-gray-800 ">
        <div className="h-fit border-x border-gray-300 dark:border-gray-800 border-dashed max-w-4xl w-95/100  mx-auto flex flex-col gap-5 px-2">
          <p className="px-3 pt-5">
            A modern, responsive weather application built with React,
            TypeScript, and Tailwind CSS. The app provides real-time weather
            conditions and forecasts using the Open-Meteo API, with support for
            city search and automatic location detection.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              bounce: 0.5,
            }}
            className="dark:border-gray-800 border-gray-300 border-dashed p-1 border dark:bg-gray-900 bg-gray-300"
          >
            <img
              src={isDarkMode ? projectDark : projectLight}
              alt="project1"
              className="rounded"
            />
          </motion.div>
          <p className=" px-2 sm:px-5 font-semibold text-xl">Features</p>
          <p className=" pl-5 md:pl-10 px-2 md:px-5">
            {" "}
            🌤️ Real-time weather and forecast data powered by the Open-Meteo
            API.
            <br />
            📍 Automatic weather updates based on the user's current location
            using browser geolocation.
            <br />
            🔍 Search weather by city with accurate location-based results.
            <br />
            📱 Fully responsive design optimized for mobile, tablet, and
            desktop.
            <br />
            ⚡ Smooth user experience with loading states and comprehensive
            error handling.
            <br />
            🎨 Clean, modern interface focused on usability and accessibility.
          </p>
          <p className="pb-5">
            <span className="px-2 md:px-5 font-semibold ">Live Demo:</span>
            <a href="https://brishti-weather.netlify.app/">
              <u>https://brishti-weather.netlify.app</u>
            </a>
            <br />
            <span className="px-2 md:px-5 font-semibold ">
              Github Repository:
            </span>
            <a href="https://github.com/mahato-abhishek/brishti">
              <u>https://github.com/mahato-abhishek/brishti</u>
            </a>
          </p>
        </div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-16 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-4xl w-95/100 flex items-center jusify-center mx-auto"></div>
      </div>
    </>
  );
}
