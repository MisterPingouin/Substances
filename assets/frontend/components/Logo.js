import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Logo = () => {
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
        axios.get('/api/logo-company/list')
            .then((response) => setLogos(response.data))
            .catch((error) => console.error("Error fetching logos:", error));
    };

    return (
        <div className="ml-12 relative z-20">
            <div className="border-t border-black w-[95%] mb-8 mx-auto relative z-20"></div>
            <h1 className="ml-6 text-5xl mt-14 font-bold mb-8">Ils me font confiance</h1>
            <div style={{ overflow: 'hidden' }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -width, right: 0 }}
                    className="flex mb-5 items-center space-x-10 cursor-pointer"
                >
                    {logos.map((logo, index) => (
                        <motion.div 
                            key={logo.id}
                            className={`flex-none ${index === logos.length - 1 ? 'mr-12' : ''}`}
                            style={{ width: `${logoWidth}px` }}
                        >
                            <img src={logo.logoPath} alt="Logo" style={{ width: '100%' }} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Logo;
