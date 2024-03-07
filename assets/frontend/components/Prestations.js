import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { CardCoaching as Card } from "../cards/CardCoaching";
import { CardFormation as Card1 } from "../cards/CardFormation";
import { CardAteliers as Card2 } from "../cards/CardAteliers";

const cards = [<Card />, <Card1 />, <Card2 />];

const Prestation = () => {
    const [width, setWidth] = useState(0);
    const containerRef = useRef();

    const updateWidth = useCallback(() => {
        const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
        const totalMargin = (cards.length - 1) * 10;
        const newWidth = cards.length * containerWidth * 0.8 + totalMargin;
        setWidth(newWidth);
    }, []);

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, [updateWidth]);

    return (
        <div className="ml-12" ref={containerRef}>
            <h1 className="ml-6 text-5xl mt-14 font-bold mb-8">Mes Prestations</h1>
            <div style={{ overflow: 'hidden' }}>
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: -(width - (containerRef.current?.offsetWidth || 0) + (containerRef.current ? containerRef.current.offsetWidth * 0.2 : 20)),
                        right: 0
                    }}
                    className="flex space-x-10 cursor-pointer"
                >
                    {cards.map((card, index) => (
                        <motion.div 
                            key={index}
                            className={`flex-none ${index === 0 ? 'ml-6' : ''} ${index === cards.length - 1 ? 'mr-12' : ''}`}
                            style={{ width: containerRef.current ? containerRef.current.offsetWidth * 0.8 : '80%' }}
                        >
                            {card}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};


export default Prestation;
