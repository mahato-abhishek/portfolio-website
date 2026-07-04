

import { FaInstagram, FaLinkedin,FaGithub } from "react-icons/fa";

export default function Social(){
    return(
        <div className="w-fit flex items-ceter justify-center gap-2 border dark:border-gray-500 border-gray-800 px-2 py-1 rounded-full">
            <FaInstagram size="24"/>
            <FaLinkedin size="24"/>
            <FaGithub size="24"/>
        </div>
    )
}