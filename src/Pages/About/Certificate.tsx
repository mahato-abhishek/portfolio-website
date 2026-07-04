import responsiveWebDesignCertificate from "../../assets/Responsive.png";
import javascriptCertificate from "../../assets/Javascript.png";

export default function Certificate(){
    return(
        <>
        <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-12 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 flex items-center jusify-center mx-auto"></div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className=" border-x border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 flex items-center jusify-center mx-auto">
        <p className="px-5 py-1 font-semibold text-2xl">Certificates</p>
        </div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800">
        <div className="h-fit p-2 gap-2 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 grid grid-cols-1 md:grid-cols-2 mx-auto">
        <div className="border border-gray-300 dark:border-gray-800 rounded bg-gray-100 dark:bg-gray-900">
            <a href="https://www.freecodecamp.org/certification/mahato_abhishek/javascript-v9">
            <img src={javascriptCertificate} alt="JavaScript Certificate" className="h-full w-full object-cover hover:scale-103 transition ease-in-out rounded"/>    
            </a>
        </div>
        <div className="border border-gray-300 dark:border-gray-800 rounded" >
            <a href="https://www.freecodecamp.org/certification/mahato_abhishek/responsive-web-design-v9">
            <img src={responsiveWebDesignCertificate} alt="Responsive Web Design Certificate" className="h-full w-full object-cover hover:scale-103 transition ease-in-out rounded"/>    
            </a>
            </div>
        </div>
      </div>
      <div className="border-b border-dashed border-gray-300 dark:border-gray-800 ">
        <div className="h-12 border-x border-gray-300 dark:border-gray-800 border-dashed max-w-5xl w-95/100 flex items-center jusify-center mx-auto"></div>
      </div>
        </>
    )
}