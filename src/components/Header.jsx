import React from 'react'

function Header() {
  return (
        <header className="relative">
        <nav className="py-1.5 w-full bg-[#f6f7fa] flex justify-center ">
            <div className="w-[80%] flex flex-row justify-between items-center text-[#8d94ad] max-med1:flex-col">
                <ul className="flex flex-row gap-2.5 ">
                    <li><a className="hover:text-[#ca1016] cursor-pointer">Tap.az</a></li>
                    <li><a className="hover:text-[#ca1016] cursor-pointer">Bina.az</a></li>
                    <li><a className="hover:text-[#ca1016] cursor-pointer">Boss.az</a></li>
                </ul>
                <ul className="flex flex-row gap-2.5 max-small3:flex-col max-small3:items-center">
                    <li className="flex flex-row gap-1.5 text-black"><span>Dəstək:</span><a href="tel:(012) 526-47-47">(012)
                            526-47-47</a></li>
                    <li><a className="hover:text-[#ca1016] cursor-pointer">Yardim</a></li>
                    <li><a className="hover:text-[#ca1016] cursor-pointer">RU</a></li>
                    <li id="secilmis"><a
                            className="flex flex-row items-center gap-1.5 text-[#8d94ad] hover:text-[#ca1016] cursor-pointer"><i
                                className="fa-solid fa-heart "></i>Secilmisler</a></li>
                    <li><a
                            className="flex flex-row items-center gap-1.5 hover:text-[#ca1016] hover:fill-[#ca1016] cursor-pointer">
                            <svg className="fill-inherit h-[22px] w-[22px]" viewBox="0 0 22 22"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 0C4.926 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm0 3.29a3.639 3.639 0 1 1 0 7.276 3.639 3.639 0 0 1 0-7.277zm-.002 15.834c-2.005 0-3.841-.73-5.257-1.939a1.55 1.55 0 0 1-.544-1.178 3.67 3.67 0 0 1 3.687-3.669h4.233a3.664 3.664 0 0 1 3.682 3.669c0 .453-.198.884-.544 1.178a8.07 8.07 0 0 1-5.257 1.939z"
                                    fill="#8D94AD" fillRule="nonzero" />
                            </svg>
                            Giris</a></li>
                </ul>
            </div>
        </nav>
        <div className="py-2.5 w-full bg-[#ca1016] flex justify-center ">
            <div className="w-[80%] flex flex-row items-center relative">
                <a href="index.htm"
                    className=" turbo max-sm:text-[15px] cursor-pointer font-bold text-2xl mr-8 max-big:mr-3 justify-self-start text-white ">TURBO.AZ</a>
                <ul
                    className="sideAsagi flex flex-row gap-2.5 text-white max-big1:max-w-full   max-big1:flex-col max-big1:hover:opacity-100 duration-[1s] max-big1:opacity-0   max-big1:absolute  max-big1:top-[100%] max-big1:z-20 max-big1:bg-[#ca1016] max-big1:p-2.5 max-big1:rounded-[5px] max-big1:border-[#ead51a] max-big0:text-[15px] max-big0:gap-1.5 ">
                    <li><a className="cursor-pointer">Butun elanlar</a></li>
                    <li><a className="cursor-pointer">Dilerler</a></li>
                    <li><a className="cursor-pointer">Avtokataloq</a></li>
                    <li><a className="cursor-pointer">Moto</a></li>
                    <li><a className="cursor-pointer">Ehtiyat hisseleri ve aksesuarlar</a></li>
                    <li><a className="cursor-pointer">Icare</a></li>
                </ul>
                <div className="ml-auto flex items-center">
                    <button
                        className="ml-2 max-sm:py-0.5 max-sm:px-0.5 hover:brightness-80 duration-300 cursor-pointer flex flex-row gap-1.5 items-center bg-[#85c01f] text-[#fff]  py-[10px] px-[7px] rounded-[7px]">
                        <img className="h-[15px] w-[15px]" src="./img/+.svg" alt="plus" />
                        <span>Yeni elan</span>
                    </button>
                </div>
            </div>
        </div>
        <div id="sideBar"
            className="overflow-y-auto  ease-in duration-[1s] px-[20px] fixed  w-full right-[-1000px] small:max-w-[350px]  top-0 bottom-[100px] bg-[#ebedf3] z-1000 ">
            <div className="flex justify-between items-center mt-[15px]">
                <i id="close" className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
                <button
                    className="hover:brightness-80 duration-300 cursor-pointer bg-[#85c01f] text-[#fff]  py-[10px] px-[7px] rounded-[7px]">Sepeti
                    temizle</button>
            </div>
            <h1 className="text-center text-[red] py-[20px]">Beyenenler</h1>
            <div id="likes" className=" py-[10px] flex flex-col  gap-5 w-full">

            </div>
        </div>
        <div id="qiymetler"
            className="flex text-[15px] text-white ease-in duration-[1s] right-[-1000px] fixed p-2.5  min-h-[100px] bottom-0  bg-[#880016] w-full small:max-w-[350px] z-10">
            <div>
                <p>Mehsul sayi:<span id="mehSay"></span></p>
                <p>Umumi qiymet:<span id="umQiy"></span></p>
                <p>Umumi endirimli qiymet:<span id="umEndQiy"></span></p>
            </div>
            <div>
                <p>Umumi endirim:<span id="UmEnd"></span></p>
            </div>
        </div>
    </header>
  )
}

export default Header
