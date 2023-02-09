import {motion} from "framer-motion";
import {pageStyle, pageVariants, pageTransition} from '../../assets/js/PageTransition';
const Creators = () => {
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
                Creators
            </div>
        </motion.div>
    );
};
export default Creators;