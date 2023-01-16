export const anim = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition:{
            delayChildren: 0.1,
            staggerChildren:0.2,
        },
    },
};

export const item = {
    hidden: {x: '0%'},
    show: {x: '100%', transition:{duration: 1.3}}
}

export const item2 = {
    hidden: {x: '100%'},
    show: {x: '0%', transition:{duration: 0.5}}
}