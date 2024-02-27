// import React, { useState } from 'react'
// import { motion, useMotionValueEvent, useScroll } from "framer-motion"

// function Work() {

    
    
//     const [image,setImages]=useState([
//         {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"50%",left:"50%",isActive:false},
//         {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"53%",left:"48%",isActive:false},
//         {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"47%",left:"52%",isActive:false},
//         {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"51%",left:"49%",isActive:false},
//         {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"53%",left:"53%",isActive:false},
//         {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"55%",left:"52%",isActive:false}
//     ])
//     const {scrollYProgress}=useScroll()
    
//    scrollYProgress,on("change",(data)=>{
//     function imageShow(arr){
//         setImages(prev=>(
//             prev.map((item,index)=>(
//                 arr.indexOf(index)===-1?(
//                     {...item,isActive:false}
//                 )
//                 :{...item,isActive:true}
//             ))
//         ))
//     }
  
//   return (
//     <div className='w-full '>
//         <div className='relative max-w-screen-xl mx-auto text-center font-semibold   '>
//             <h1 className='text-[30vw] mt-20 leading-none select-none'>Work</h1>

//             <div className='absolute top-0 w-full h-full '>
//                 {image.map((elem,index)=>(elem.isActive && (<img key={index} className='w-60 -translate-x-[50%] -translate-y-[50%] rounded-lg absolute' src={elem.url} style={{top:elem.top,left:elem.left}} alt="" />
//                 )))}
                     
//             </div>
//         </div>

//     </div>
//   )
//    }

// export default Work



import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

function Work() {
    const [images, setImages] = useState([
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', top: '50%', left: '50%', isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png', top: '53%', left: '48%', isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', top: '47%', left: '52%', isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png', top: '51%', left: '49%', isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png', top: '53%', left: '53%', isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png', top: '55%', left: '52%', isActive: false }
    ]);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        images.forEach((image, index) => {
            const element = document.getElementById(`image-${index}`);
            if (element) {
                const elementPosition = element.offsetTop;

                if (scrollPosition >= elementPosition - windowHeight * 0.8) {
                    setImages(prev => prev.map((item, i) => i === index ? { ...item, isActive: true } : { ...item, isActive: false }));
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full">
            <div className="relative max-w-screen-xl mx-auto text-center font-semibold">
                <h1 className="text-[30vw] mt-20 leading-none select-none">Work</h1>
                <div className="absolute top-0 w-full h-full">
                    {images.map((elem, index) => elem.isActive && <img key={index} id={`image-${index}`} className="w-60 -translate-x-[50%] -translate-y-[50%] rounded-lg absolute" src={elem.url} style={{ top: elem.top, left: elem.left }} alt="" />)}
                </div>
            </div>
        </div>
    );
}

export default Work;
