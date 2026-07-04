import {Link} from 'react-router'
import spider from "../../assets/Spider.jpg"
import Footer from '../../components/Footer'
import { motion ,type Variants} from 'motion/react'

export default function Home(){
const textAnimation:Variants={

    hidden:{
        opacity:0,
        y:25
    },
    show:{

        opacity:1,
        y:0,
        transition:{
    staggerChildren:0.2,
        duration:0.5
    }
    }
   
}

    return(
        <div className=" min-h-screen h-fit pt-16 scroll-smooth">
             <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
            <div className="h-16 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-6xl w-95/100 flex items-center jusify-center mx-auto">
            </div>
            </div>
            <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className=" max-w-6xl flex items-center justify-center w-95/100 mx-auto  border-x border-dashed border-gray-300 dark:border-gray-800 h-40">
        <div className="flex items-center justify-center h-full w-40 border-x border-dashed border-gray-300 dark:border-gray-800 p-2">
            <motion.div 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
                duration: 0.5,
                scale: { visualDuration: 0.5, bounce: 0.5 },
            }}
            className="border-2 h-full dark:bg-gray-800 bg-gray-200 rounded-full border-dotted dark:border-gray-700 border-gray-400">
            <img
                src={spider}
                alt="Spider"
                className="rounded-full h-full object-cover p-1"
              />
              </motion.div>
              <div/>
        </div>
        </div>
        </div>
          <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <motion.div 
        initial="hidden"
        animate="show"
        variants={textAnimation}
        className=" max-w-6xl w-95/100 mx-auto  p-5 border-x border-b border-dashed border-gray-300 dark:border-gray-800 h-auto">
        <motion.p 
        variants={textAnimation}
        className="text-center text-xl md:text-3xl font-bold pb-5">Hi, I'm Abhishek</motion.p>
        <motion.h1 
        variants={textAnimation}
        className="text-3xl md:text-5xl text-center dark:text-white text-black font-bold ">
Welcome to my corner of the internet!
</motion.h1>
        </motion.div>
        </div>
        <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <motion.div 
        initial="hidden"
        animate="show"
        variants={textAnimation}
        className=" max-w-6xl w-95/100 mx-auto p-5 border-x border-b border-dashed border-gray-300 dark:border-gray-800 h-auto">
            <motion.p 
            variants={textAnimation}
            className=" text-lg md:text-xl dark:text-white text-black text-center ">I'm a <span className="font-bold text-xl md:text-2xl">Front-end developer</span><br/>with a love for design and a knack for tinkering. Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted projects.</motion.p>


        </motion.div>
        </div>
        <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className=" flex items-center justify-center h-30 max-w-6xl w-95/100 mx-auto border-x border-b border-dashed border-gray-300 dark:border-gray-800 ">
        <div className=" h-full flex justify-center items-center gap-5 lg:gap-10 border-x border-dashed border-gray-300 dark:border-gray-800 w-fit lg:p-10 p-5">
            <button className="border rounded-xl h-fit w-fit px-5 py-3 bg-black text-white hover:bg-gray-800 dark:hover:bg-gray-300 cursor-pointer dark:bg-white dark:text-black">Resume/CV</button>
            <button className="border border-gray-300 dark:border-gray-700 rounded-xl h-fit w-fit px-5 py-3 bg-white text-black hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer dark:bg-black dark:text-white"><Link to="/Contact">Get In Touch</Link></button>
        </div>
        </div>
        </div>
        <div className=" border-dashed border-gray-300 dark:border-gray-800">
       
        <div className="flex items-center justify-center h-16 max-w-6xl w-95/100 mx-auto border-x  border-dashed border-gray-300 dark:border-gray-800 ">
        <div className="h-full w-80 lg:w-94 border-x border-dashed border-gray-300 dark:border-gray-900">
        </div>
        </div>
        </div>
        <Footer width="6xl"/>
        </div>

    )
}
