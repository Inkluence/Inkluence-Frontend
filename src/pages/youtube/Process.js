import {motion} from "framer-motion";
import {pageStyle, pageVariants, pageTransition} from '../../assets/js/PageTransition';
const Process = () => {
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
                Process
            </div>
        </motion.div>
    );
};
export default Process;