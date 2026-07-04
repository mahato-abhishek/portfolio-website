

type Prop={
    icon:React.ReactNode
    text:string
    phone?:number|string
    email?:string
}
export default function ContactBox(prop:Prop){

    return(
        <div className="p-5 border dark:border-gray-700 border-gray-400 rounded flex items-center justify-center  flex-col gap-4">
            {prop.icon}
            <p className="font-bold">{prop.text}</p>
            {prop.phone && <p>{prop.phone}</p>}
            {prop.email && <p>{prop.email}</p>}
        </div>
    )
}