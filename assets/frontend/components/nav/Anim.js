export const menuSlide = {
    initial: {
        clipPath: "circle(18% at 100% 8%)", 
        transition: { duration: 0 }
    },
    enter: {
        clipPath: "circle(123% at 100% 0%)", 
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
        transition: {
            duration: 1,
            ease: "easeOut", 
            times: [0, 0.1, 1], 
            clipPath: ["circle(18% at 100% 8%)", "circle(123% at 100% 0%)", "circle(0% at 100% 0%)"]
        }
    }
};


export const slide = {
    initial: { x: 80 },
    enter: i => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
    exit: i => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
};

export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } }
};
