import {motion} from "framer-motion";
import {pageStyle, pageVariants, pageTransition} from '../../assets/js/PageTransition';

const AboutUs = () => {
    return(
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
        <div>
            about us
        </div>
        </motion.div>
    );
};
export default AboutUs;