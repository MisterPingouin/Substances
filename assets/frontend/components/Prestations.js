import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CardCoaching as Card } from "../cards/CardCoaching";
import { CardFormation as Card1 } from "../cards/CardFormation";
import { CardAteliers as Card2 } from "../cards/CardAteliers";

const cards = [<Card />, <Card1 />, <Card2 />];

const Prestation = () => {
    const [xPos, setXPos] = useState(0);
    const cardWidthRef = React.useRef(0);

    useEffect(() => {
        const handleResize = () => {
            const cardWidth = window.innerWidth * 0.8;
            cardWidthRef.current = cardWidth;
            setXPos(0); // Initialiser xPos pour commencer avec la première carte
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        setXPos((prev) => {
            const cardSpacing = 16; // Espacement entre les cartes
            const totalWidth = cards.length * cardWidthRef.current + (cards.length - 1) * cardSpacing;
            const maxOffset = -totalWidth + cardWidthRef.current; // Droite de la dernière carte
            const minOffset = 0; // Gauche de la première carte

            // Calculer le nouvel offset en respectant les limites
            let newOffset = prev + offset;
            if (newOffset > minOffset) newOffset = minOffset;
            if (newOffset < maxOffset) newOffset = maxOffset;

            return newOffset;
        });
    };

    return (
        <>
            <div className="relative w-full overflow-hidden flex justify-center items-center">
                <h1 className="text-3xl font-bold mb-4">Mes Prestations</h1>
                <motion.div
                    drag="x"
                    onDragEnd={handleDragEnd}
                    style={{ x: xPos }}
                    className="flex"
                >
                    {cards.map((card, index) => (
                        <div 
                            className={`flex-none ${index > 0 ? 'ml-4' : ''}`} 
                            key={index} 
                            style={{ width: `${cardWidthRef.current}px` }}
                        >
                            {card}
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default Prestation;

