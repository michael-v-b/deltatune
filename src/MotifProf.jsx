const MotifProf = ({ name, desc, first, clip }) => {
  return (
    <>
      <div className="motif-page-container">
        <div className="motif-prof-container">
          <div className="motif-name">{name}</div>
          <div className="motif-desc">{desc}</div>
          <div className="motif-desc">{first}</div>
          <div className="motif-clip">{clip}</div>
        </div>
      </div>
    </>
  );
};
export default MotifProf;
