import TitleBar from "./TitleBar.jsx";
const Thanks = () => {
  return (
    <>
      <TitleBar />
      <div className="thanks-container">
        <div className="thanks-title">Thanks</div>
        <div className="thanks-paragraph">
          I wanted to dedicate this page to the resources that I used when
          assigning themes to songs:
        </div>
        <div className="thanks-to"> Thank you to:</div>

        <div className="thanks-item">-Music Map</div>
        <div className="thanks-item">-Motif Library</div>
        <div className="thanks-item">-Undertale Wiki</div>
        <div className="thanks-item">-Deltarune Wiki</div>

        <div className="thanks-to thanks-attribute-to">Attributions:</div>
        <div className="thanks-attribution">
          The FontStruction “8bitoperator”
          (https://fontstruct.com/fontstructions/show/534034) by “nipcen” is
          licensed under a Creative Commons Attribution Share Alike license.
          Undertale, Deltarune, and all materials derived from them are © Toby
          Fox.
        </div>
      </div>
    </>
  );
};
export default Thanks;
