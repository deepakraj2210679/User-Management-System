import { useNavigate } from "react-router-dom"

const HomePage=()=>{
    const Navigate=useNavigate();
    return(
            <div className='h-screen w-screen bg-blue-700'>
                <p className='text-2xl font-bold font-serif p-4 text-fuchsia-600'>Home Page :)</p>

                    <div className='flex flex-col items-center'>
                        <h1 className=' text-5xl pt-50 font-serif font-bold text-fuchsia-600'>CODE BUILDERS</h1> 
                        <p className='pt-3  text-green-700 font-serif font-semibold text-2xl pb-5'>LMS Application</p>
                        <button className="border-2 border-black-700 p-2 text-lg text-indigo-950 font-bold font-serif rounded-2xl bg-red-600 hover:bg-white hover:text-green-500" onClick={()=>Navigate('/login')}>Get Start</button>
                </div>
            </div>
    )
}
export {HomePage}
