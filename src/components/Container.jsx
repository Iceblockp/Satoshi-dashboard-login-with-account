import React from 'react'

const Container = ({children}) => {
  return (
    <div className='bg-[rgb(23,32,51)] min-h-screen'>
        <div className='hidden lg:block fixed h-full w-[280px] top-0 left-0 z-20 bg-[rgb(23,32,51)] '>

        </div>
        <div className='w-full min-h-screen flex flex-col relative lg:fixed top-0 left-0 z-0 ps-0 lg:ps-[284px]'>
            <div className='py-[12px] flex  '>
                <div>search</div>
                <div>middle</div>
                <div>connect</div>
            </div>
            <div className='lg:overflow-auto h-full lg:max-h-screen border border-gray-800 flex-grow lg:rounded-tl-[1rem] rounded-t-[1rem] '>
                <div className=" mb-[62px]">
                {children}
               </div>
           </div>
            
        </div>
        
    </div>
  )
}

export default Container