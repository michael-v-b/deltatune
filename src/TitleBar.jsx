import { motion } from "framer-motion";
const TitleBar = () => {
  return (
    <>
      <div className="title-bar">
        <div />
        <div className="title">Deltatune</div>
        <div className="title-option-container">
          <motion.div whileHover={{ color: "yellow" }} className="title-option">
            Daily
          </motion.div>
          <div className="title-option-seperator">|</div>
          <motion.div whileHover={{ color: "yellow" }} className="title-option">
            Endless
          </motion.div>
          <div className="title-option-seperator">|</div>
          <motion.div whileHover={{ color: "yellow" }} className="title-option">
            Motif Librarby
          </motion.div>
          <div className="title-option-seperator">|</div>
          <motion.div whileHover={{ color: "yellow" }} className="title-option">
            Thanks
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default TitleBar;
