import React, { useState } from 'react'

function Main( {data} ) {

    const [count,setCount]=useState(8);
    function artir(){
        if(count<46) setCount(count+8)
        else setCount(8)
    }
console.log(data.length);
  return (
    <div className="flex flex-row relative w-full justify-center">

        <div id="content" className="md:w-[80%]">
            <main>
                <div className="py-10 px-5 bg-[#ebedf3]">
                    <div id="grid"
                        className="grid grid-cols-4 grid-rows-2 gap-3 max-small4:grid-cols-1 max-small4:grid-rows-8  max-big:grid-cols-2 max-big:grid-rows-4 max-big2:grid-cols-3 max-big2:grid-rows-3">
                        <select id="marka"  name="brand"
                            className="bg-white cursor-pointer text-[#8d94ad] py-[15px] px-[10px] rounded-[7px] border border-[#dfe3e9]">
                            <option hidden>Marka</option>
                            <option className="text-[red]">sifirla</option>
                        </select>
                        <select id="model"  name="model"
                            className="bg-white cursor-pointer text-[#8d94ad] py-[15px] px-[10px] rounded-[7px] border border-[#dfe3e9]">
                            <option hidden>Model</option>
                            <option className="text-[red]">sifirla</option>
                        </select>
                        <div className="flex cursor-pointer overflow-hidden rounded-[7px] border border-[#dfe3e9]">
                            <div className="           w-[100%] flex items-center justify-center bg-[#ca1016] text-white">
                                Hamisi</div>
                            <div
                                className="bg-white w-[100%] flex items-center justify-center border-r-1 border-l-1 border-[#dfe3e9] text-[#8d94ad]">
                                Yeni</div>
                            <div className="bg-white w-[100%] flex items-center justify-center text-[#8d94ad]">Surulmus
                            </div>
                        </div>
                        <select id="city"  name="city"
                            className="bg-white cursor-pointer text-[#8d94ad] py-[15px] px-[10px] rounded-[7px] border border-[#dfe3e9]">
                            <option hidden>Seher</option>
                            <option className="text-[red]">sifirla</option>
                        </select>
                        <div className="flex bg-white  rounded-[7px] border border-[#dfe3e9]">
                            <input className="outline-[#8d94ad]  py-[15px] px-[10px] w-[50%]" type="number"
                                placeholder="Qiymet,min" />
                            <input className="outline-[#8d94ad] py-[15px] px-[10px] w-[50%] border-l-1 border-[#dfe3e9]"
                                type="number" placeholder="maks." />
                        </div>
                        <div className="flex gap-5.5">
                            <select id="val"  name="currency"
                                className="bg-white cursor-pointer text-[#8d94ad] w-[100%] py-[15px] px-[8px] rounded-[7px] border border-[#dfe3e9]">
                                <option hidden>AZN</option>
                                <option className="text-[red]">sifirla</option>
                            </select>
                            <button
                                className="bg-white cursor-pointer w-[100%] py-[15px] px-[8px] rounded-[7px] border border-[#dfe3e9] text-[#8d94ad]">Kredit</button>
                            <button
                                className="bg-white cursor-pointer w-[100%] py-[15px] px-[8px] rounded-[7px] border border-[#dfe3e9] text-[#8d94ad]">Barter</button>
                        </div>
                        <select id="ban"  name="banType"
                            className="bg-white cursor-pointer text-[#8d94ad] py-[15px] px-[10px] rounded-[7px] border border-[#dfe3e9]">
                            <option hidden>Ban novu</option>
                            <option className="text-[red]">sifirla</option>
                        </select>
                        <div className="flex  overflow-hidden  rounded-[7px] border border-[#dfe3e9]">
                            <select id="il"  name="year"
                                className="bg-white cursor-pointer text-[#8d94ad] w-[50%] py-[15px] px-[10px]">
                                <option hidden>Il,min.</option>
                                <option className="text-[red]">sifirla</option>
                            </select>
                            <select id="maks"  name="year"
                                className="bg-white cursor-pointer text-[#8d94ad] w-[50%] py-[15px] px-[10px] border-l-1 border-[#dfe3e9]">
                                <option hidden>maks.</option>
                                <option className="text-[red]">sifirla</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-6 max-med2:flex-col max-med2:gap-3.5">
                        <p><span>Bu gun: </span><a className="text-[#4c88f9] cursor-pointer">1183 yeni elan</a></p>
                        <div className="flex gap-5.5 items-center max-med2:gap-2 max-sm1:flex-col">
                            <p className="text-[#8d94ad] cursor-pointer" >Sifirla</p>
                            <p className="flex gap-2.5 items-center cursor-pointer">
                                <span className="text-[#ca1016]">Daha cox filtr</span>
                                <svg width="17" height="9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.102.125.786 1.4 8.5 8.875 16.214 1.4 14.898.125 8.5 6.325z"
                                        fill="#CA1016" />
                                </svg>
                            </p>
                            <button
                                className="max-med2:px-[10px] max-med2:py-[10px] hover:brightness-80 duration-300 text-white py-[15px] px-[40px] bg-[#ca1016] rounded-[7px] cursor-pointer">Elanlari
                                goster</button>
                        </div>
                    </div>
                </div>


                <div className="bg-[#f1f3f7] border-t-1 border-b-1 border-[#eaebf2] px-5 py-5 font-bold text-[16px]">
                    <h1>PREMIUM ELANLAR</h1>
                </div>

                <div id="masinlar" className="bg-[#f6f7fa] px-5 py-6 flex flex-wrap justify-between  gap-5 w-full ">
                    {
                        data.slice(0,count).map((item,i)=>{
                            return <a key={i} href="#" className="w-full small:w-[45%] big1:w-[31%] big3:w-[23%] max-h-[325px] bg-white rounded-[10px] overflow-hidden shadow-[0_0_15px_#ccc] relative">
                                        <div  className="absolute top-[15px] right-[15px] cursor-pointer">
                                            <svg   width="20" height="20" className="fill-[white]" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path
                                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM131.9 280.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L278.5 384.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L131.9 280.9z" />
                                            </svg>
                                        </div>

                                        <div className="h-[60%]">
                                            <img className=" w-full  h-[100%]" src={item.images[0]} alt="masin" />
                                        </div>
                                        <div className="px-3.5 pb-2 pt-2 ">
                                            <h2>{item.price} {item.currency}</h2>
                                            <p>{item.brand} {item.model}</p>
                                            <p>{item.year},{item.engine} L, {item.odometer} {item.odometerUnit}</p>
                                            <p className="text-[#8d94ad]">Baki, {item.dates}</p>
                                        </div>
                                    </a>
                        })
                    }
                    
                </div>
                <div className="text-center py-3.5">
                    <button onClick={artir} id="btn"
                        className="bg-[#85c01f] cursor-pointer text-white px-3.5 py-1.5 rounded-[5px]">{count<46 ? '+ 8 elave et!' : 'Evvele'}</button>
                </div>

            </main>
            <footer></footer>
        </div>

    </div>
  )
}

export default Main
