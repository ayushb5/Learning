import Authtabs from "./Authtabs";
function AuthLayout({ title, children }) {
    return (
        <>
            <div className='min-h-screen flex justify-center items-center bg-blue-600 px-4'>
                <div className="
                w-full 
                bg-white 
                max-w-sm
                sm:max-w-md
                md:max-w-lg
                p-6
                sm:p-8
                ">
                    <Authtabs />
                    <h1 className="text-center text-[24px] font-bold text-indigo-700 mb-5">
                        {title}
                    </h1>
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
export default AuthLayout;