import Footer from "../../components/Footer";
import { Mail, PhoneCall } from "lucide-react";
import ContactBox from "./ContactBox";

import Icons from "./SocialIcons"

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPinterest,
  FaReddit,
} from "react-icons/fa";
import { motion } from "motion/react";

export default function Contact() {
  return (<>
    <div className=" min-h-screen scroll-smooth flex items-center justify-center flex-col pt-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          bounce: 0.5,
        }}
        className=" border h-fit flex items-center justify-center dark:border-gray-700 border-gray-400 max-w-3xl w-95/100 flex-col scroll-smooth"
      >
        <div className="h-16 border dark:border-gray-700  border-gray-400 w-full grid grid-cols-8">
          <div className=" h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
        </div>
        <div>
        </div>
        <div className=" h-fit grid grid-cols-1 gap-5 p-5 w-full">

            <div className="flex items-center justify-center flex-col gap-3 p-5">
              <p className="font-bold text-3xl">Let's Connect</p>
              <p>
                Have a project in mind or looking for a frontend developer? I'd
                love to hear from you.
              </p>
            </div>
            
        
          <div className=" h-fit grid grid-cols-1 md:grid-cols-2 gap-5">
            <ContactBox
              icon={<Mail />}
              text="Email"
              email="abhishekmahato647@gmail.com"
            />
            <ContactBox
              icon={<PhoneCall />}
              text="Lets Talk"
              phone="+918928297764"
            />
          </div>
          <div className="grid grid-cols-6">
              <Icons icon={<FaInstagram size="30"/>}/>
              <Icons icon={<FaLinkedin size="30" />}/>
              <Icons icon={<FaGithub size="30" />}/>
              <Icons icon={<FaTwitter size="30" />}/>
              <Icons icon={<FaReddit size="30" />}/>
              <Icons icon={<FaPinterest size="30" />}/>
            </div>
        </div>

        <div className="h-16 border dark:border-gray-700  border-gray-400  w-full grid grid-cols-8">
          <div className=" h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
          <div className="border-l dark:border-gray-700  border-gray-400 h-full"></div>
        </div>
      </motion.div>
      
    </div>
    <Footer width="3xl" />
    </>
  );
}
