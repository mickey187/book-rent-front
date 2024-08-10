function MainStatBar({children}){
return(<>
<div className="w-1/3 h-full flex flex-col bg-white px-3 rounded-lg">
<h1 className="text-black text-xl mt-4 ml-3">This month statistics</h1>
<h3 className=" text-slate-400 ml-3">{Date.now()}</h3>
{children}

</div>
</>)
}

export default MainStatBar;