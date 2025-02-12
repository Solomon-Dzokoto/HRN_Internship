import { useState } from "react"


const SelectTicketDetails = () => {
    const data = [
        { id:1, type:"Free", name: 'Regular Access',  available: "20/52"},
        { id:2, type:"$ 150", name: 'VIP Access',  available: "20/52"},
        { id:3, type:"$ 150", name: 'VVIP Access',  available: "20/52"},
    ]
    const [select,setSelected] = useState<number | null>(null)
    const [numberOfTickets,setNumberOfTickets] = useState<number | null>(1)

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNumberOfTickets(parseInt(e.target.value))
    }
    console.log(numberOfTickets)

    const onSelect = (id:number) => {
        setSelected(id)  

    }
    const onSubmit = () => {
        if(!numberOfTickets || !select ){
            console.log()
            return
    }
}
    return (
        <div className="rounded-2xl p-8 min-h-[38rem] grid gap-8 border-[#0E464F] w-[48rem] bg-[#041E23] mx-auto border " >
            <div className="flex justify-between items-center">
                <h2>Ticket Selection</h2>
                <p>Step 3/3</p>
            </div>
            <div className="border-[#0E464F]  grid gap-4 rounded-2xl p-4 border">
                <article className="bg-gradient-to-br from-[#0e464f98] to-[#041E23] py-8 text-[#f4f4f4] text-center rounded-2xl border border-[#0E464F] ">
                    <h1 className="text-[2rem] text-white font-semibold  ">Techember Fest "25</h1>
                    <p>Join us for an unforgettable experience at </p>
                    <p>[Event Name]! Secure your spot now. </p>
                    <p>📍 [Event Location] || March 15,2025| 7:00 MP </p>
                </article>
                <p >Select Ticket Type:</p>
                <label htmlFor="select" className="flex items-center  gap-4 p-3 rounded-2xl justify-between">
                    {
                        data.map(item=> (
                            <article
                            key={item.id}
                            onClick={()=>onSelect(item.id)}
                            className={`p-4 ${item.id == select ?"bg-[#12464E]":"bg-[#0e464f98]"} relative cursor-pointer hover:bg-[#2C545B] bg-[#0e464f98] w-full text-[#f4f4f4] border border-[#0E464F] rounded-2xl `}>
                            <input value={item.id} className="absolute inset-0 hidden " type="radio" name="select" id="" />
                            <h2 className="text-white  font-semibold text-[1.2rem]  mb-2 "> {item.type} </h2>
                            <p className="uppercase">{item.name}</p>
                            <small>{item.available}</small>
                        </article>
                        ))
                    }

                </label>
                <p>Number of Tickets</p>
   
                    <select
                    onChange={onChange}
                    className="w-full rounded-xl p-2 focus:outline-0 border border-[#0E464F]" >
                        <option defaultValue={numberOfTickets as number} value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
           

                <div className="flex gap-4">
                    <button className=" w-full transition-colors cursor-pointer p-2 border border-[#24A0B5] bg-[#041E23] text-[#24A0B5] hover:bg-[#24A0B5] hover:text-[#f4f4f4]  px-4 rounded-md">Cancel</button>
                    <button className="border p-2 w-full bg-[#24A0B5] border-[#24A0B5] text-[#f4f4f4] hover:bg-[#041E23] hover:text-[#24A0B5]  px-4 rounded-md">Next</button>
                </div>
            </div>
        </div>
    )
}

export default SelectTicketDetails
