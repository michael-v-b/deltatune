import ReactPlayer from "react-player";
const MotifProf = ({ name, desc, first, clips, sectionRef }) => {
  return (
    <>
      <div className="motif-page-container">
        <div ref={sectionRef} className="motif-prof-container">
          <div className="motif-name">{name}</div>
          <div className="motif-desc">{desc}</div>
          <div className="motif-desc">{first}</div>
          <div className="motif-clips">
            {clips &&
              clips.map((src, index) => {
                return (
                  <audio
                    className="motif-clip"
                    key={index}
                    src={src}
                    controls={true}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default MotifProf;
