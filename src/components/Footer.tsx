import Social from "./Ui/SocialMedia";

type prop={
    width:string
}

export default function Footer(props:prop) {
  return (
    <footer className="h-fit border-t border-dashed dark:border-gray-800 border-gray-300 dark:text-gray-300">
      <div className={` text-bold grid grid-cols-2 gap-5 h-full max-w-${props.width} m-auto w-95/100 border-x dark:border-gray-800 border-dashed border-gray-300 pt-5`}>
        <div className="dark:text-gray-400 text-gray-700 text-right">
            <p>Crafted by <br/>Inspired by<br/><br/><br/>Source code</p>
             </div>
        <div className="text-left">
            <p >Abhishek<br/>NextJs
            <br/>Tailwind CSS<br/>Chandai<br/>Github</p>
        </div>
      </div>
      <div className={` text-bold flex items-center justify-center h-full max-w-${props.width} m-auto w-95/100 border-x dark:border-gray-800 border-dashed border-gray-300 p-5`}>
        <Social/>
        </div>
        <div className="border-t h-12 border-dashed border-gray-300 dark:border-gray-800">
            
            </div>
    </footer>
  );
}