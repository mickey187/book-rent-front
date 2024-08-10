


function Navbar({role, title}){
return(<>
<nav className="rounded-lg  bg-white h-16">
    <div className="flex flex-row  px-16 py-5">
        <h1 className=" font-bold text-black">{role}</h1>/ <h1 className=" text-gray-400">{title}</h1>
    </div>
</nav>
</>);
}

export default Navbar;