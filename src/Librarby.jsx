import TitleBar from "./TitleBar.jsx";
import MotifProf from "./MotifProf.jsx";
const Librarby = () => {
  var comingSoon = true;
  return (
    <>
      <TitleBar />
      {comingSoon && <div className="coming-soon">Coming Soon</div>}
      {!comingSoon && (
        <>
          <MotifProf
            name="Once Upon A Time"
            desc="This motif is used all throughout Undertale and is attributed to be
            the theme of the game as a whole."
            first={`Clip used from "Once Upon A Time".`}
            clip="clip"
          />{" "}
          <MotifProf
            name="Flowey"
            desc="This is Flowey's theme, and is used in songs that relate to him."
            first={`Clip used from "Your Best Friend".`}
            clip="clip"
          />
          <MotifProf
            name="Toriel"
            desc="This is Toriel's character theme, and it is surprisingly rare. It is used in songs that relate to her."
            first={`Clip used from "Fallen Down".`}
            clip="clip"
          />
          <MotifProf
            name="Ruins"
            desc="This also can be considered the theme for The Underground as a whole and it is not only used in the Ruins."
            first={`Clip used from "Ruins".`}
            clip="clip"
          />
          <MotifProf
            name="Anticipation"
            desc="This is the song is the pretheme to Undertale's battle theme. Its simple melody links it to a few songs throughout both games."
            first={`Clip used from "Anticipation".`}
            clip="clip"
          />
          <MotifProf
            name="Enemy Approaching"
            desc="This is the battle theme in Undertale. Its melody is referenced a few times during the battle themes for Undertale."
            first={`Clip used from "Enemy Approaching".`}
            clip="clip"
          />
          <MotifProf
            name="Ghost Fight"
            desc="This theme is used whenever something spOOooOoOoky is going on. It is the quintessential ghost theme."
            first={`Clip used from "Ghost Fight".`}
            clip="clip"
          />
          <MotifProf
            name="Determination"
            desc="This is Undertale's death theme. It plays whenever the player needs to be motivated."
            first={`Clip used from "Determination".`}
            clip="clip"
          />
          <MotifProf
            name="Heartache"
            desc="This is Toriel's battle theme. It only ever gets played twice in both games."
            first={`Clip used from "Heartache".`}
            clip="clip"
          />
          <MotifProf
            name="Sans"
            desc="This is Sans's theme. It plays in scenes where sans is involved."
            first={`Clip used from "sans.".`}
            clip="clip"
          />
          <MotifProf
            name="Papyrus"
            desc="This is Papyrus's theme. It plays in scenes where sans is involved."
            first={`Clip used from "Nyeh Heh Heh".`}
            clip="clip"
          />
          <MotifProf
            name="Snowdin"
            desc="This theme also has been interpreted as the Monster's theme, as it plays whenever referring to all the monsters of The Underground in Undertale. "
            first={`Clip used from "Shop".`}
            clip="clip"
          />
          <MotifProf
            name="Hopes and Dreams"
            desc="This theme is the quint essential `friendship` theme in Undertale, played amnytimes throughout the pacifist run."
            first={`Clip used from "Snowdin Town".`}
            clip="clip"
          />
          <MotifProf
            name="Spear of Justice"
            desc="This is Undyne's battle theme, and is typically used during tense and bombastic moments."
            first={`Clip used from "Dating Tense".`}
            clip="clip"
          />
          <MotifProf
            name="Your Best Nightmare"
            desc="This is Omega Flowey's theme. It is often used during unsettling moments of dread."
            first={`Clip used from "Premonition".`}
            clip="clip"
          />
          <MotifProf
            name="Another Medium"
            desc="This is the theme of Hot Land. It is used in Hot Land and its adjacent locations."
            first={`Clip used from "Waterfall".`}
            clip="clip"
          />
          <MotifProf
            name="Asriel"
            desc="This is the theme for Asriel. It is often used during Undertale's sentimental and emotional moments."
            first={`Clip used from "Memory".`}
            clip="clip"
          />
          <MotifProf
            name="Dummy!"
            desc="This is the theme used by the Mad Dummy boss fight. It is only used twice in Undertale and Deltarune."
            first={`Clip used from "Dummy!".`}
            clip="clip"
          />
          <MotifProf
            name="Jingle Bells"
            desc="This song is used occasionally mostly as a joke, but it is used twice in the Deltarune and Undertale OST."
            first={`Clip used from "Ghouliday".`}
            clip="clip"
          />
          <MotifProf
            name="It's Showtime!"
            desc="This is Mettaton's show theme. It is used whenever Mettaton is performing or broadcasting to his audience."
            first={`Clip used from "Death Report".`}
            clip="clip"
          />
          <MotifProf
            name="Metal Crusher"
            desc="This is the theme for Mettaton's more robotic side. It is primarily used during his bossfight."
            first={`Clip used from "Metal Crusher".`}
            clip="clip"
          />
          <MotifProf
            name="Hotel"
            desc="This is the musical pattern used in the beginning of Hotel. It is primarily used in the hotel area and its adjacent areas."
            first={`Clip used from "Hotel".`}
            clip="clip"
          />
          <MotifProf
            name="CORE"
            desc="This motif is used to represent the CORE from Undertale. It is used in the CORE and some of its adjacent areas."
            first={`Clip used from "CORE".`}
            clip="clip"
          />
          <MotifProf
            name="ASGORE"
            desc="This is Asgore's character theme. It is used in scenes that directly relate to him."
            first={`Clip used from "Bergentrückung".`}
            clip="clip"
          />
          <MotifProf
            name="Black Knife"
            desc="This is the drum beat that is used in high stake, intense narrative battles."
            first={`Clip used from "Burn In Despair".`}
            clip="clip"
          />
          <MotifProf
            name="Power of NEO"
            desc="This theme is used to show the empowered NEO bosses."
            first={`Clip used from "Battle Against A True Hero".`}
            clip="clip"
          />
          <MotifProf
            name="Gaster"
            desc="This is the theme for the mysterious W.D. Gaster. While, it technically first appears in Undertale in a secret music menu, it first officially appears in Deltarune."
            first={`Clip used from "Another Him".`}
            clip="clip"
          />
          <MotifProf
            name="Don't Forget"
            desc="This theme is often considered the theme of Deltarune as a whole. It is by far the most widely used theme at 36 songs."
            first={`Clip used from "Beginning".`}
            clip="clip"
          />
          <MotifProf
            name="Hometown"
            desc="This is the theme for the light world area, Hometown in Deltarune."
            first={`Clip used from "School".`}
            clip="clip"
          />
          <MotifProf
            name="Susie"
            desc="This is Susie's theme. It is often used in scenes that relate to her"
            first={`Clip used from "Susie".`}
            clip="clip"
          />
          <MotifProf
            name="The Door"
            desc="This theme is sometimes considered the theme for the dark. "
            first={`Clip used from "The Door".`}
            clip="clip"
          />
          <MotifProf
            name="The Legend"
            desc="This is the theme for Deltarune's prophecy. It is used in scenes that relate to it."
            first={`Clip used from "The Legend".`}
            clip="clip"
          />
          <MotifProf
            name="Lancer"
            desc="This is Lancer's theme. It is often used for fun, silly scenes or gags in Deltarune"
            first={`Clip used from "Lancer".`}
            clip="clip"
          />
          <MotifProf
            name="Rude Buster"
            desc="This is Deltarune's battle theme. As of chapter 5 every chapter uses at least a variation of this theme."
            first={`Clip used from "Rude Buster".`}
            clip="clip"
          />
          <MotifProf
            name="Field of Hopes and Dreams"
            desc="This is the theme for the Field of Hopes and Dreams. It is used when relating to that area."
            first={`Clip used from "Field of Hopes and Dreams".`}
            clip="clip"
          />
          <MotifProf
            name="Checker Dance"
            desc="This theme is used for Checker King Boss fight. It is often used for gimmick fights in Deltarune."
            first={`Clip used from "Checker Dance".`}
            clip="clip"
          />
          <MotifProf
            name="Scarlet Forest"
            desc="This is the theme for the Scarlet Forest area. It is primarily used in Scarlet Forest and its subregions."
            first={`Clip used from "Scarlet Forest".`}
            clip="clip"
          />
          <MotifProf
            name="Card Castle"
            desc="This is the Card Castle Theme. It is primarily used in Card Castle and its subregions."
            first={`Clip used from "Card Castle".`}
            clip="clip"
          />
          <MotifProf
            name="Rouxls Kaard"
            desc="This is Rouxls Karrd's character theme. It is used during his dialogue and bossfights."
            first={`Clip used from "Rouxls Kaard".`}
            clip="clip"
          />
          <MotifProf
            name="Hip Shop"
            desc="This is the them for Rouxls Kaard's shop. It is used in some other relaxing/safe areas."
            first={`Clip used from "Hip Shop".`}
            clip="clip"
          />
          <MotifProf
            name="Darkness Falls"
            desc="This is the death theme for Deltarune, similar to Determination from Undertale. It happens whenever your party all dies."
            first={`Clip used from "Darkness Falls".`}
            clip="clip"
          />
          <MotifProf
            name="Freedom Motif"
            desc="This is the theme associated with the secret bosses. It can be found in their boss themes in different areas associated with them."
            first={`Clip used from "THE WORLD REVOLVING".`}
            clip="clip"
          />
          <MotifProf
            name="The Holy"
            desc="This theme is used in significant areas that relate to the prophecy, such as dark fountains."
            first={`Clip used from "The Holy".`}
            clip="clip"
          />
          <MotifProf
            name="Girl Next Door"
            desc="This is Noelle's character theme. It plays in songs that relate to her or the holiday family."
            first={`Clip used from "Girl Next Door".`}
            clip="clip"
          />
          <MotifProf
            name="Lost Girl"
            desc="Lost Girl is a functionally considered Dess's theme. It is also sometimes used an tone setting song for emotional moments."
            first={`Clip used from "Girl Next Door".`}
            clip="clip"
          />
          <MotifProf
            name="Berdly"
            desc="This is Berdly's theme. It plays in many songs that relate to him."
            first={`Clip used from "Berdly".`}
            clip="clip"
          />
          <MotifProf
            name="Queen"
            desc="This is Queen's theme. It is used in songs that directly relate to her."
            first={`Clip used from "Queen".`}
            clip="clip"
          />
          <MotifProf
            name="Cyber World"
            desc="This is the main melody of the Cyber World. It plays in various locations in the Cyber World."
            first={`Clip used from "A CYBER WORLD?".`}
            clip="clip"
          />
          <MotifProf
            name="Sweet Cap'n Cakes"
            desc="This is the character theme for Sweet Cap'n Cakes, it plays whenever they are on screen."
            first={`Clip used from "Studio".`}
            clip="clip"
          />
          <MotifProf
            name="It's TV Time!"
            desc="This is part of both Spamton's and Tenna's introduction. It is associated with both Spamton and Tenna"
            first={`Clip used from "Feature Presentation".`}
            clip="clip"
          />
          <MotifProf
            name="Spamton"
            desc="This is Spamton's theme. It plays during his boss fights."
            first={`Clip used from "Spamton".`}
            clip="clip"
          />
          <MotifProf
            name="Roots"
            desc="This theme plays during the various ROOTS areas of the game. It is often used to set a dark tone for particularly forboding areas."
            first={`Clip used from "Digital Roots".`}
            clip="clip"
          />
          <MotifProf
            name="BIG SHOT"
            desc="This theme plays during Spamton's secret battle in his NEO form. It is also used in other fights associated with Spamton"
            first={`Clip used from "BIG SHOT".`}
            clip="clip"
          />
          <MotifProf
            name="The Dark Truth"
            desc="This theme is associated with the secrets from the prophecy. It plays when Ralsei tells us part of the prophecy that he was hiding."
            first={`Clip used from "The Dark Truth".`}
            clip="clip"
          />
          <MotifProf
            name="Flashback"
            desc="This theme is played when during exposition scenes and flashbacks."
            first={`Clip used from "Before The Story".`}
            clip="clip"
          />
          <MotifProf
            name="Tenna"
            desc="This is Tenna's theme. It is used in scenes and locations related to him."
            first={`Clip used from "Mike The BOARD, please!".`}
            clip="clip"
          />
          <MotifProf
            name="Tenna"
            desc="This is Tenna's theme. It is used in scenes and locations related to him."
            first={`Clip used from "Mike The BOARD, please!".`}
            clip="clip"
          />
          <MotifProf
            name="Dark Sanctuary"
            desc="This is the theme for the Dark Sanctuary area. It plays in that area and its subregions."
            first={`Clip used from "Dark Sanctuary".`}
            clip="clip"
          />
          <MotifProf
            name="Gerson"
            desc="This is Gerson's theme. It plays during scenes that relate to him."
            first={`Clip used from "Blyah Hah Hah".`}
            clip="clip"
          />
          <MotifProf
            name="SPAWN"
            desc="This is the Titan's theme. It plays during the encounter with the Titan."
            first={`Clip used from "Crumbling Tower".`}
            clip="clip"
          />
          <MotifProf
            name="Catswing"
            desc="This refers to the bassline used in Catswing. It's mostly used in scenes that relate to the Mikes."
            first={`Clip used from "Volume Adjustment".`}
            clip="clip"
          />
          <MotifProf
            name="Flowery"
            desc="This Flowery's character theme. It plays during scenes and locations that relate to him."
            first={`Clip used from "Your Dad's Best Friend".`}
            clip="clip"
          />
          <MotifProf
            name="Sunset of Seven Suns"
            desc="This is the theme for the seven flowers. It plays in their location and for each of their individual themes."
            first={`Clip used from "Who might you be?".`}
            clip="clip"
          />
          <MotifProf
            name="Violet Tactics"
            desc="This is Seth's battle theme. It also can be heard in some dramatic areas in the chapter 5 dark world."
            first={`Clip used from "Violet Tactics".`}
            clip="clip"
          />
          <MotifProf
            name="Pink"
            desc="This is Pink's theme. It plays during her boss fight and in scenes related to her."
            first={`Clip used from "Pink".`}
            clip="clip"
          />
        </>
      )}
    </>
  );
};
export default Librarby;
