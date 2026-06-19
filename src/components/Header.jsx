import { useState } from "react"
import { sub7 } from '../constants/sub7'
import { sub6 } from '../constants/sub6'
import { sub5 } from '../constants/sub5'
import { sub4 } from '../constants/sub4'
import { sub3 } from "../constants/sub3"
import { sub2 } from '../constants/sub2'
import { sub1 } from "../constants/sub1"
import { submenu } from "../constants/submenu"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Header() {
    const [activeId, setActiveId] = useState(null)

    const [isShow, setIsShow] = useState(false);

    const [isShow2, setIsShow2] = useState(false)

    const closeAllMenus = () => {
        setIsShow(false);  
        setActiveId(null);  
    };

   const cartLength =  useSelector(state => state.cart.items.length)




    return (
        <>

            <header className="   container  flex  flex-col px-4 mx-auto" >
                <div className=" flex justify-between ">
                    <div className="flex gap-6 text-sm pt-2">
                        <Link to="/aboutus"  ><p>درباره توانی نو </p></Link>
                        <Link to="/contact-us"> <p> تماس با ما</p></Link>
                    </div>

                    <div className=" pt-2 hidden md:flex gap-1 ">
                        <i className="text-xl" class="bi bi-person"></i>
                        <p className="text-sm cursor-pointer"><Link to="/login">ورود / ثبت نام</Link></p>
                    </div>


                </div>


                <div className="  items-center justify-between hidden md:flex">
                    <div className="size-30  items-center mt-10">
                        <img className=" " src="/converted-logo2.webp" alt="" />
                    </div>

                    <div className="flex rounded-2xl items-center w-full max-w-lg overflow-hidden border border-gray-200 ">

                        <input className=" w-full px-1 bg-transparent  py-1 text-right outline-none " type="text" placeholder="نام محصول را وارد کنید . . . " />
                        <button className="p-3 cursor-pointer rounded-l-2xl bg-green-500 text-white hover:bg-green-600 transition-colors"><i class="bi bi-search"></i></button>
                    </div>

                    <Link to={'/Cart '}> <span   className="border px-6 py-1 flex gap-2 rounded-md cursor-pointer">
                       ({cartLength})
                        سبد خرید<i   class="bi bi-cart"></i>

                    </span></Link>



                </div>

                <div className="flex justify-between pt-5 ">
                    <div className="flex flex-1 justify-start pt-4 items-center gap-2 pr-2 md:hidden ">
                        <i onClick={() => setIsShow(!isShow)} className="text-xl cursor-pointer bi bi-list"></i>
                        <i onClick={() => setIsShow2(!isShow2)} className="text-xl cursor-pointer  bi bi-search"></i>
                    </div>


                    <div>
                        <img className="flex md:hidden h-[50px] size-25 " src="/converted-logo2.webp" alt="" />
                    </div>

                    <div className="flex flex-1 justify-end pt-4 items-center gap-2 pl-2 md:hidden">


                        <Link to={'/cart'}> <span><i className="text-xl cursor-pointer bi bi-cart"></i> ({cartLength})</span> </Link>
                        <Link to={'/login'}>  <i className="text-xl cursor-pointer bi bi-person"></i></Link>
                    </div>
                </div>








            </header>



            {isShow && (
                <ul className={`w-80 text-sm px-6 py-6 flex flex-col justify-between md:hidden `}>
                    {submenu.map((item) => (
                        <li key={item.id} className="border-b border-gray-100">



                            {item.id === 1 ? (<Link
                                to="/"
                                onClick={closeAllMenus}
                                className="flex items-center justify-between hover:bg-gray-300 transition-all ease-in p-4 cursor-pointer"
                            >
                                <span>{item.text}</span>
                                <i className={item.icon}></i>
                            </Link>
                            ) : (

                                <div
                                    className="relative flex items-center justify-between hover:bg-gray-300 transition-all ease-in p-4 cursor-pointer"
                                    onClick={() => {
                                        if (item.id !== 1 && item.id !== 9) {
                                            setActiveId(activeId === item.id ? null : item.id);
                                        }
                                    }}
                                >
                                    <span>{item.text}</span>
                                    <i className={activeId === item.id ? "bi bi-chevron-compact-up" : item.icon}
                                    ></i>
                                </div>)}


                            {activeId === item.id && (
                                <div className="bg-gray-50 p-2 border-t border-gray-200">
                                    <div className="max-h-60 overflow-y-auto">

                                        {(() => {
                                            let currentList = [];
                                            if (item.id === 2) currentList = sub1;
                                            else if (item.id === 3) currentList = sub2;
                                            else if (item.id === 4) currentList = sub3;
                                            else if (item.id === 5) currentList = sub4;
                                            else if (item.id === 6) currentList = sub5;
                                            else if (item.id === 7) currentList = sub6;
                                            else if (item.id === 8) currentList = sub7;

                                            return currentList.map((sub) => (

                                                <Link
                                                    key={sub.id}
                                                    to={sub.url}
                                                    onClick={closeAllMenus}
                                                    className=" flex items-center gap-2 py-2 px-4 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors border-b border-gray-100"
                                                >
                                                    <i className={sub.icon}></i>
                                                    <span className="text-sm">{sub.name || sub.text}</span>
                                                </Link>
                                            ));
                                        })()}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}


            <ul className="w-full relative items-center bg-blue-400 h-10  flex-row justify-center hidden md:flex ">

                {submenu.map((item) =>

                    <li key={item.id} className=" border-gray-100 whitespace-nowrap   group  "

                        onMouseEnter={() => item.id !== 1 && setActiveId(item.id)}
                        onMouseLeave={() => setActiveId(null)}>
                        <Link
                            to={item.url}
                            className="flex items-center  justify-between hover:bg-gray-300 transition-all ease-in p-2 text-white hover:text-black cursor-pointer"
                        >
                            {item.text}
                        </Link>

                        {activeId === item.id && (
                            <div className="fixed right-0 h-[500px] top-[250px] left-0 w-full overflow-scroll bg-white shadow-lg z-50 p-8">
                                <div className="container mx-auto columns-3 gap-8"> {(() => {
                                    let currentList = [];
                                    if (item.id === 2) currentList = sub1;
                                    else if (item.id === 3) currentList = sub2;
                                    else if (item.id === 4) currentList = sub3;
                                    else if (item.id === 5) currentList = sub4;
                                    else if (item.id === 6) currentList = sub5;
                                    else if (item.id === 7) currentList = sub6;
                                    else if (item.id === 8) currentList = sub7;

                                    return currentList.map((sub) => (
                                        <Link

                                            key={sub.id}
                                            to={sub.url}
                                            onClick={closeAllMenus}
                                            className=" flex items-center gap-2 py-2 px-4 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors border-b border-gray-100"
                                        >
                                            <i className={sub.icon}></i>
                                            <span className="text-sm whitespace-nowrap">{sub.name || sub.text}</span>
                                        </Link>
                                    ));
                                })()}


                                </div>
                            </div>


                        )}


                    </li>

                )}
            </ul>


            {isShow2 && (<div className=" rounded-2xl items-center  w-[90%] overflow-hidden border border-gray-200  flex md:hidden justify-center mr-8 ">

                <input className=" w-full px-1 bg-transparent  py-1 text-right outline-none " type="text" placeholder="نام محصول را وارد کنید . . . " />
                <button onClick={(e) => {
                    e.stopPropagation();


                }} className="p-3 cursor-pointer rounded-l-2xl bg-green-500 text-white hover:bg-green-600 transition-colors" ><i className="text-xl bi bi-search"></i></button>
            </div>
            )}



        </>





    )
}