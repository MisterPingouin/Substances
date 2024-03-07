import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Certification = () => {
    const [logos, setLogos] = useState([]);
    const logoWidth = 200;
    const spaceBetweenLogos = 10; 
    const marginEnd = 200;
    const [width, setWidth] = useState(0);

    useEffect(() => {
        fetchLogos();
    }, []);

    useEffect(() => {
        const updateWidth = () => {
            const totalWidth = logos.length * (logoWidth + spaceBetweenLogos);
            const overflowWidth = totalWidth > window.innerWidth ? totalWidth - window.innerWidth + marginEnd : 0;
            setWidth(overflowWidth);
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, [logos]);

    const fetchLogos = () => {
        axios.get('/api/certification/list')
            .then((response) => setLogos(response.data))
            .catch((error) => console.error("Error fetching logos:", error));
    };

    return (
        <>
        <div className="text-colorbrown mt-20 border-t border-black w-[85%] mb-8 mx-auto relative z-10 lg:hidden"></div>
        <div className="ml-12 mt-20 lg:ml-0 lg:mt-0 relative z-20">
                        <div className="hidden lg:flex justify-center items-center relative z-10">
  <div className="text-colorbrown border-t w-[80%] mt-14 border-black  "></div>
</div>
            <h1 className="ml-6 text-5xl mt-14 font-bold mb-8 lg:hidden">Mes certifications</h1>
            <div style={{ overflow: 'hidden' }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -width, right: 0 }}
                    className="flex items-center ml-6 space-x-10 lg:hidden"
                >
                    {logos.map((logo, index) => (
                        <motion.div 
                            key={logo.id}
                            className={`flex-none ${index === logos.length - 1 ? 'mr-12' : ''}`}
                            style={{ width: `${logoWidth}px` }}
                        >
                            <img src={logo.Logo} alt="Logo" style={{ width: '100%' }} />
                        </motion.div>
                    ))}
                </motion.div>
                </div>
            <div className='hidden lg:flex mt-16 lg:justify-center lg:items-center w-full'>
            <h1 className="text-5xl font-bold max-w-[20%] pr-10">Mes certifications</h1>
    <div className="flex space-x-10 items-center max-w-[60%] ">
        {logos.slice(0, 5).map((logo) => (
            <div
                key={logo.id}
                className=""
            >
                <img src={logo.Logo} alt="Logo" className='h-auto w-auto'/>
            </div>
        ))}
    </div>
            </div>
        </div>
    </>
    );
};

export default Certification;
