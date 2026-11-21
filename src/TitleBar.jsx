import { motion } from "framer-motion";
import { useNavigate } from "react-router";
const TitleBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="title-bar">
        <div />
        <div className="title">Deltatune</div>
        <div className="title-option-container">
          <motion.div
            whileHover={{ color: "yellow" }}
            onMouseUp={() => {
              navigate("/daily");
            }}
            className="title-option"
          >
            Daily
          </motion.div>
          <div className="title-option-seperator">|</div>
          <motion.div
            whileHover={{ color: "yellow" }}
            onMouseUp={() => {
              navigate("/endless");
            }}
            className="title-option"
          >
            Endless
          </motion.div>
          <div className="title-option-seperator">|</div>
          <motion.div
            whileHover={{ color: "yellow" }}
            onMouseUp={() => {
              navigate("/librarby");
            }}
            className="title-option"
          >
            Motif Librarby
          </motion.div>
          <div className="title-option-seperator">|</div>
          <motion.div
            whileHover={{ color: "yellow" }}
            onMouseUp={() => {
              navigate("/thanks");
            }}
            className="title-option"
          >
            Thanks
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default TitleBar;
