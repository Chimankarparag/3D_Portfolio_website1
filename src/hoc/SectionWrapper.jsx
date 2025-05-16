
import { motion } from "framer-motion";

import { styles} from "../styles";

import { staggerContainer } from "../utils/motion";
import { Component } from "lucide-react";

const SectionWrapper = (Component, idName)=>
    // HOC (Higher Order Component) to wrap the component with a section
    // This function takes a component and an idName as arguments
    // It returns a new component that renders the passed component inside a section
    
    // The returned component uses framer-motion for animations
    // It applies a stagger container animation to the section
    // The section has padding and is centered on the page
    // The idName is used to create a span with the same id for scrolling purposes
function HOC(){
    return(
        <motion.section
            variants={staggerContainer()}
            initial ="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
            <Component/>
        </motion.section>
    ) 

}


export default SectionWrapper;