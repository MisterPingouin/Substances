import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CardCoaching as Card } from "../cards/CardCoaching";
import { CardFormation as Card1 } from "../cards/CardFormation";
import { CardAteliers as Card2 } from "../cards/CardAteliers";

const cards = [<Card />, <Card1 />, <Card2 />];

const Prestation = () => {
    const [width, setWidth] = useState(0);
    const marginEnd = 50;

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth * 0.8 * cards.length + marginEnd);
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <div className="ml-12">
            <h1 className="ml-6 text-5xl mt-14 font-bold mb-8">Mes Prestations</h1>
            <div style={{ overflow: 'hidden' }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -width + window.innerWidth - marginEnd, right: 0 }}
                    className="flex space-x-10 cursor-pointer"
                >
                    {cards.map((card, index) => (
                        <motion.div 
                            key={index}
                            className={`flex-none ${index === cards.length - 1 ? 'mr-12' : ''}`}
                            style={{ maxWidth: `${window.innerWidth * 0.8}px` }}
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
