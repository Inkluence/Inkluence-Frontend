import {motion} from "framer-motion";
import {pageStyle, pageVariants, pageTransition} from '../../assets/js/PageTransition';
const ClientsnPartners = () => {
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
                ClientsnPartners
            </div>
        </motion.div>
    );
};
export default ClientsnPartners;