
type Prop={
    icon:React.ReactNode
}
export default function Icons(prop:Prop){
    return(
        <div className="border flex items-center justify-center border-gray-300 dark:border-gray-700 py-2">
            {prop.icon}
         </div>
    )
}