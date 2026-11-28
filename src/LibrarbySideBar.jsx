import { motion } from "framer-motion";
const LibrarbySideBar = ({ profileRefs, motifEntries }) => {
  console.log(motifEntries);
  return (
    <>
      <div className="librarby-side-bar">
        <div className="side-bar-top">Motif List</div>
        {motifEntries.map((value, index) => {
          return (
            <motion.div
              className="motif-sidebar-entry"
              whileHover={{ scale: 1.1, color: "yellow" }}
              whileTap={{ scale: 0.9 }}
              onMouseUp={() => {
                profileRefs.current[index].scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {value[0]}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default LibrarbySideBar;
