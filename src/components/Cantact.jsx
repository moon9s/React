



export default function Contact({ item }) {
    return (
        <div className="flex p-4 border border-gray-300 rounded-2xl gap-5">
            <div><img className="size-10" src={item.img} alt="" /></div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-600">{item.title}</span>
                <p className="text-sm font-bold">{item.description}</p>
            </div>
        </div>
    )
}