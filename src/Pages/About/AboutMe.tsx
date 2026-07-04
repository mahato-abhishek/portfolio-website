import { motion, type Variants } from "motion/react";
import Spider from "../../assets/Spider.jpg";
import Social from "../../components/Ui/SocialMedia";

export default function AboutMe() {

const textUpAnimation:Variants={

    hidden:{
        opacity:0,
        y:25
    },
    show:{

        opacity:1,
        y:0,
        transition:{
    staggerChildren:0.1,
        duration:0.4
    }
    }
  }
  return (
    <>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className=" max-w-5xl flex items-center justify-center w-95/100 mx-auto  border-x border-dashed border-gray-300 dark:border-gray-800 h-20">
          <div className="h-full w-80 border-x border-dashed border-gray-300 dark:border-gray-900"></div>
        </div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800 h-40 lg:h-50">
        <div className="flex max-w-5xl w-95/100 mx-auto border-x  border-dashed border-gray-300 dark:border-gray-800 h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { visualDuration: 0.5, bounce: 0.5 },
            }}
            className="h-full w-40 lg:w-50 border-x border-dashed border-gray-300 dark:border-gray-800 "
          >
            <img
              src={Spider}
              alt="Spider"
              className="rounded-full h-full object-cover p-1 bg-gray-300 dark:bg-gray-900 border-2 border-dotted border-gray-300 dark:border-gray-700"
            />
          </motion.div>
          <motion.div 
          initial="hidden"
          animate="show"
          variants = {textUpAnimation}
          className="pl-5 lg:pt-5 pt-3 flex flex-col gap-2">
            <motion.p 
            variants = {textUpAnimation}
            className="text-md lg:text-2xl font-medium">
              I'm <span className="font-bold">Abhishek Mahato</span>
            </motion.p>
            <motion.p 
            variants = {textUpAnimation}
            className="font-bold text-xl lg:text-3xl ">
              {" "}
              Frontend Developer
            </motion.p>
            <motion.p 
            variants = {textUpAnimation}
            className="lg:text-lg text-md">based in WB/INDIA</motion.p>

            <Social />
          </motion.div>
        </div>
      </div>
    </>
  );
}
