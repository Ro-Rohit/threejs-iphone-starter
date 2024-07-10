import { navLists } from '../constant'
import { appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img src={appleImg} alt="Apple" width={14} height={18} />

                <ul className="flex flex-1 justify-center gap-x-5  max-sm:hidden">
                    {navLists.map((device, idx) => (
                        <li
                            key={idx}
                            className=" cursor-pointer text-gray hover:text-white  transition-all"
                        >
                            {device}
                        </li>
                    ))}
                </ul>

                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search" width={14} height={18} />
                    <img src={bagImg} alt="search" width={14} height={18} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
