import logo from '../../assets/logo-color.png';

function Sidebar() {
  return (
    <>
        <div className="absolute left-0 w-1/12 bg-[#282929] z-[1035] h-full top-0 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
           <div className="w-full flex justify-center items-center mt-3 px-3">
                <img src={logo} alt="beatblendr"/>
           </div>
        </div>
    </>
  )
}

export default Sidebar
