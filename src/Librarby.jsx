import TitleBar from "./TitleBar.jsx";
import MotifProf from "./MotifProf.jsx";
import onceUponATimeA from "./assets/clips/once-upon-a-time/once-upon-a-time-a.mp3";
import onceUponATimeB from "./assets/clips/once-upon-a-time/once-upon-a-time-b.mp3";
import onceUponATimeC from "./assets/clips/once-upon-a-time/once-upon-a-time-c.mp3";
import flowey from "./assets/clips/flowey.mp3";
import toriel from "./assets/clips/toriel.mp3";
import ruins from "./assets/clips/ruins.mp3";
import anticipation from "./assets/clips/anticipation.mp3";
import enemyApproaching from "./assets/clips/enemy-approaching.mp3";
import ghostFight from "./assets/clips/ghost-fight.mp3";
import determinationA from "./assets/clips/determination/determination-a.mp3";
import determinationB from "./assets/clips/determination/determination-b.mp3";
import heartacheA from "./assets/clips/heartache/heartache-a.mp3";
import heartacheB from "./assets/clips/heartache/heartache-b.mp3";
import sans from "./assets/clips/sans.mp3";
import papyrusA from "./assets/clips/papyrus/papyrus-a.mp3";
import papyrusB from "./assets/clips/papyrus/papyrus-b.mp3";
import snowdin from "./assets/clips/snowdin.mp3";
import hopesAndDreams from "./assets/clips/hopes-and-dreams.mp3";
import spearOfJustice from "./assets/clips/spear-of-justice.mp3";
import anotherMediumA from "./assets/clips/another-medium/another-medium-a.mp3";
import anotherMediumB from "./assets/clips/another-medium/another-medium-b.mp3";
import asriel from "./assets/clips/asriel.mp3";
import dummy from "./assets/clips/dummy.mp3";
import jingleBells from "./assets/clips/jingle-bells.mp3";
import itsShowtime from "./assets/clips/its-showtime.mp3";
import metalCrusherA from "./assets/clips/metal-crusher/metal-crusher-a.mp3";
import metalCrusherB from "./assets/clips/metal-crusher/metal-crusher-b.mp3";
import hotel from "./assets/clips/hotel.mp3";
import core from "./assets/clips/core.mp3";
import asgore from "./assets/clips/asgore.mp3";
import yourBestNightmare from "./assets/clips/your-best-nightmare.mp3";
import blackKnife from "./assets/clips/black-knife.mp3";
import powerOfNeo from "./assets/clips/power-of-neo.mp3";
import gaster from "./assets/clips/gaster.mp3";
import dontForget from "./assets/clips/dont-forget.mp3";
import hometown from "./assets/clips/hometown.mp3";
import susie from "./assets/clips/susie.mp3";
import theDoor from "./assets/clips/the-door.mp3";
import theLegendA from "./assets/clips/legend/the-legend-a.mp3";
import theLegendB from "./assets/clips/legend/the-legend-b.mp3";
import theLegendC from "./assets/clips/legend/the-legend-c.mp3";
import lancerA from "./assets/clips/lancer/lancer-a.mp3";
import lancerB from "./assets/clips/lancer/lancer-b.mp3";
import rudeBusterA from "./assets/clips/rude-buster/rude-buster-a.mp3";
import rudeBusterB from "./assets/clips/rude-buster/rude-buster-b.mp3";
import fieldOfHopesAndDreams from "./assets/clips/field-of-hopes-and-dreams.mp3";
import checkerDance from "./assets/clips/checker-dance.mp3";
import scarletForest from "./assets/clips/scarlet-forest.mp3";
import cardCastle from "./assets/clips/card-castle.mp3";
import rouxlsKaard from "./assets/clips/rouxls-kaard.mp3";
import hipShop from "./assets/clips/hip-shop.mp3";
import darknessFalls from "./assets/clips/darkness-falls.mp3";
import freedomMotifA from "./assets/clips/freedom-motif/freedom-motif-a.mp3";
import freedomMotifB from "./assets/clips/freedom-motif/freedom-motif-b.mp3";
import theHolyA from "./assets/clips/the-holy/the-holy-a.mp3";
import theHolyB from "./assets/clips/the-holy/the-holy-b.mp3";
import girlNextDoor from "./assets/clips/girl-next-door.mp3";
import lostGirlA from "./assets/clips/lost-girl/lost-girl-a.mp3";
import lostGirlB from "./assets/clips/lost-girl/lost-girl-b.mp3";
import berdlyA from "./assets/clips/berdly/berdly-a.mp3";
import berdlyB from "./assets/clips/berdly/berdly-b.mp3";
import queenA from "./assets/clips/queen/queen-a.mp3";
import queenB from "./assets/clips/queen/queen-b.mp3";
import cyberWorldA from "./assets/clips/cyber-world/cyber-world-a.mp3";
import cyberWorldB from "./assets/clips/cyber-world/cyber-world-b.mp3";
import sweetCapnCakes from "./assets/clips/sweet-capn-cakes.mp3";
import tvTime from "./assets/clips/tv-time.mp3";
import spamton from "./assets/clips/spamton.mp3";
import bigShot from "./assets/clips/big-shot.mp3";
import aDarkTruth from "./assets/clips/a-dark-truth.mp3";
import flashback from "./assets/clips/flashback.mp3";
import tennaA from "./assets/clips/tenna/tenna-a.mp3";
import tennaB from "./assets/clips/tenna/tenna-b.mp3";
import darkSanctuary from "./assets/clips/dark-sanctuary.mp3";
import gerson from "./assets/clips/gerson.mp3";
import spawn from "./assets/clips/spawn.mp3";
import catswing from "./assets/clips/catswing.mp3";
import flowery from "./assets/clips/flowery.mp3";
import sunsetOfSevenSunsA from "./assets/clips/sunset-of-seven-suns/sunset-of-seven-suns-a.mp3";
import sunsetOfSevenSunsB from "./assets/clips/sunset-of-seven-suns/sunset-of-seven-suns-b.mp3";
import violetTactics from "./assets/clips/violet-tactics.mp3";
import pink from "./assets/clips/pink.mp3";
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
            clips={[onceUponATimeA, onceUponATimeB, onceUponATimeC]}
          />{" "}
          <MotifProf
            name="Flowey"
            desc="This is Flowey's theme, and is used in songs that relate to him."
            first={`Clip used from "Your Best Friend".`}
            clips={[flowey]}
          />
          <MotifProf
            name="Toriel"
            desc="This is Toriel's character theme, and it is surprisingly rare. It is used in songs that relate to her."
            first={`Clip used from "Fallen Down".`}
            clips={[toriel]}
          />
          <MotifProf
            name="Ruins"
            desc="This also can be considered the theme for The Underground as a whole and it is not only used in the Ruins."
            first={`Clip used from "Ruins".`}
            clips={[ruins]}
          />
          <MotifProf
            name="Anticipation"
            desc="This is the song is the pretheme to Undertale's battle theme. Its simple melody links it to a few songs throughout both games."
            first={`Clip used from "Anticipation".`}
            clips={[anticipation]}
          />
          <MotifProf
            name="Enemy Approaching"
            desc="This is the battle theme in Undertale. Its melody is referenced a few times during the battle themes for Undertale."
            first={`Clip used from "Enemy Approaching".`}
            clips={[enemyApproaching]}
          />
          <MotifProf
            name="Ghost Fight"
            desc="This theme is used whenever something spOOooOoOoky is going on. It is the quintessential ghost theme."
            first={`Clip used from "Ghost Fight".`}
            clips={[ghostFight]}
          />
          <MotifProf
            name="Determination"
            desc="This is Undertale's death theme. It plays whenever the player needs to be motivated."
            first={`Clip used from "Determination".`}
            clips={[determinationA, determinationB]}
          />
          <MotifProf
            name="Heartache"
            desc="This is Toriel's battle theme. It only ever gets played twice in both games."
            first={`Clip used from "Heartache".`}
            clips={[heartacheA, heartacheB]}
          />
          <MotifProf
            name="Sans"
            desc="This is Sans's theme. It plays in scenes where sans is involved."
            first={`Clip used from "sans.".`}
            clips={[sans]}
          />
          <MotifProf
            name="Papyrus"
            desc="This is Papyrus's theme. It plays in scenes where sans is involved."
            first={`Clip used from "Nyeh Heh Heh".`}
            clips={[papyrusA, papyrusB]}
          />
          <MotifProf
            name="Snowdin"
            desc="This theme also has been interpreted as the Monster's theme, as it plays whenever referring to all the monsters of The Underground in Undertale. "
            first={`Clip used from "Shop".`}
            clips={[snowdin]}
          />
          <MotifProf
            name="Hopes and Dreams"
            desc="This theme is the quint essential `friendship` theme in Undertale, played amnytimes throughout the pacifist run."
            first={`Clip used from "Shop".`}
            clips={[hopesAndDreams]}
          />
          <MotifProf
            name="Spear of Justice"
            desc="This is Undyne's battle theme, and is typically used during tense and bombastic moments."
            first={`Clip used from "Spear of Justice".`}
            clips={[spearOfJustice]}
          />
          <MotifProf
            name="Another Medium"
            desc="This is the theme of Hot Land. It is used in Hot Land and its adjacent locations."
            first={`Clip used from "Waterfall".`}
            clips={[anotherMediumA, anotherMediumB]}
          />
          <MotifProf
            name="Asriel"
            desc="This is the theme for Asriel. It is often used during Undertale's sentimental and emotional moments."
            first={`Clip used from "Memory".`}
            clips={[asriel]}
          />
          <MotifProf
            name="Dummy!"
            desc="This is the theme used by the Mad Dummy boss fight. While most of the fight uses the Ghost Fight theme, the ending is unique."
            first={`Clip used from "Dummy!".`}
            clips={[dummy]}
          />
          <MotifProf
            name="Jingle Bells"
            desc="This song is used occasionally mostly as a joke, but it is used twice in the Deltarune and Undertale OST."
            first={`Clip used from "Holiday Studio".`}
            clips={[jingleBells]}
          />
          <MotifProf
            name="It's Showtime!"
            desc="This is Mettaton's show theme. It is used whenever Mettaton is performing or broadcasting to his audience."
            first={`Clip used from "It's Showtime!".`}
            clips={[itsShowtime]}
          />
          <MotifProf
            name="Metal Crusher"
            desc="This is the theme for Mettaton's more robotic side. It is primarily used during his bossfight."
            first={`Clip used from "Metal Crusher".`}
            clips={[metalCrusherA, metalCrusherB]}
          />
          <MotifProf
            name="Hotel"
            desc="This is the musical pattern used in the beginning of Hotel. It is primarily used in the hotel area and its adjacent areas."
            first={`Clip used from "Hotel".`}
            clips={[hotel]}
          />
          <MotifProf
            name="CORE"
            desc="This theme refers to the first part of the CORE song. The actual melody of core is a version of Another Medium, but the opening chords are original."
            first={`Clip used from "CORE".`}
            clips={[core]}
          />
          <MotifProf
            name="ASGORE"
            desc="This is Asgore's character theme. It is used in scenes that directly relate to him."
            first={`Clip used from "ASGORE".`}
            clips={[asgore]}
          />
          <MotifProf
            name="Your Best Nightmare"
            desc="This is Omega Flowey's theme. It is often used during unsettling moments of dread."
            first={`Clip used from "Premonition".`}
            clips={[yourBestNightmare]}
          />
          <MotifProf
            name="Black Knife"
            desc="This is the drum beat that is used in high stake, intense narrative battles."
            first={`Clip used from "Black Knife".`}
            clips={[blackKnife]}
          />
          <MotifProf
            name="Power of NEO"
            desc="This theme is used to show the empowered NEO bosses."
            first={`Clip used from "Battle Against A True Hero".`}
            clips={[powerOfNeo]}
          />
          <MotifProf
            name="Gaster"
            desc="This is the theme for the mysterious W.D. Gaster. While, it technically first appears in Undertale in a secret music menu, it first officially appears in Deltarune."
            first={`Clip used from "Gaster's Theme".`}
            clips={[gaster]}
          />
          <MotifProf
            name="Don't Forget"
            desc="This theme is often considered the theme of Deltarune as a whole. It is by far the most widely used theme, being present in 36 songs."
            first={`Clip used from "Don't Forget".`}
            clips={[dontForget]}
          />
          <MotifProf
            name="Hometown"
            desc="This is the theme for the light world area, Hometown in Deltarune."
            first={`Clip used from "School".`}
            clips={[hometown]}
          />
          <MotifProf
            name="Susie"
            desc="This is Susie's theme. It is often used in scenes that relate to her"
            first={`Clip used from "VS. Susie".`}
            clips={[susie]}
          />
          <MotifProf
            name="The Door"
            desc="This theme is sometimes considered the theme for the dark. "
            first={`Clip used from "The Door".`}
            clips={[theDoor]}
          />
          <MotifProf
            name="The Legend"
            desc="This is the theme for Deltarune's prophecy. It is used in scenes that relate to it."
            first={`Clip used from "The Legend".`}
            clips={[theLegendA, theLegendB, theLegendC]}
          />
          <MotifProf
            name="Lancer"
            desc="This is Lancer's theme. It is often used for fun, silly scenes or gags in Deltarune"
            first={`Clip used from "Lancer".`}
            clips={[lancerA, lancerB]}
          />
          <MotifProf
            name="Rude Buster"
            desc="This is Deltarune's battle theme. As of chapter 5 every chapter uses at least a variation of this theme."
            first={`Clip used from "Rude Buster".`}
            clips={[rudeBusterA, rudeBusterB]}
          />
          <MotifProf
            name="Field of Hopes and Dreams"
            desc="This is the theme for the Field of Hopes and Dreams. It is used when relating to that area."
            first={`Clip used from "Field of Hopes and Dreams".`}
            clips={[fieldOfHopesAndDreams]}
          />
          <MotifProf
            name="Checker Dance"
            desc="This theme is used for Checker King Boss fight. It is often used for gimmick fights in Deltarune."
            first={`Clip used from "Checker Dance".`}
            clips={[checkerDance]}
          />
          <MotifProf
            name="Scarlet Forest"
            desc="This is the theme for the Scarlet Forest area. It is primarily used in Scarlet Forest and its subregions."
            first={`Clip used from "Scarlet Forest".`}
            clips={[scarletForest]}
          />
          <MotifProf
            name="Card Castle"
            desc="This is the Card Castle Theme. It is primarily used in Card Castle and its subregions."
            first={`Clip used from "Card Castle".`}
            clips={[cardCastle]}
          />
          <MotifProf
            name="Rouxls Kaard"
            desc="This is Rouxls Karrd's character theme. It is used during his dialogue and bossfights."
            first={`Clip used from "Rouxls Kaard".`}
            clips={[rouxlsKaard]}
          />
          <MotifProf
            name="Hip Shop"
            desc="This is the them for Rouxls Kaard's shop. It is used in some other relaxing/safe areas."
            first={`Clip used from "Hip Shop".`}
            clips={[hipShop]}
          />
          <MotifProf
            name="Darkness Falls"
            desc="This is the death theme for Deltarune, similar to Determination from Undertale. It happens whenever your party all dies."
            first={`Clip used from "Darkness Falls".`}
            clips={[darknessFalls]}
          />
          <MotifProf
            name="Freedom Motif"
            desc="This is the theme associated with the secret bosses. It can be found in their boss themes in different areas associated with them."
            first={`Clip used from "THE WORLD REVOLVING".`}
            clips={[freedomMotifA, freedomMotifB]}
          />
          <MotifProf
            name="The Holy"
            desc="This theme is used in significant areas that relate to the prophecy, such as dark fountains."
            first={`Clip used from "The Holy".`}
            clips={[theHolyA, theHolyB]}
          />
          <MotifProf
            name="Girl Next Door"
            desc="This is Noelle's character theme. It plays in songs that relate to her or the holiday family."
            first={`Clip used from "Girl Next Door".`}
            clips={[girlNextDoor]}
          />
          <MotifProf
            name="Lost Girl"
            desc="Lost Girl is a functionally considered Dess's theme. It is also sometimes used an tone setting song for emotional moments."
            first={`Clip used from "Girl Next Door".`}
            clips={[lostGirlA, lostGirlB]}
          />
          <MotifProf
            name="Berdly"
            desc="This is Berdly's theme. It plays in many songs that relate to him."
            first={`Clip used from "Berdly".`}
            clips={[berdlyA, berdlyB]}
          />
          <MotifProf
            name="Queen"
            desc="This is Queen's theme. It is used in songs that directly relate to her."
            first={`Clip used from "Queen".`}
            clips={[queenA, queenB]}
          />
          <MotifProf
            name="Cyber World"
            desc="This is the main melody of the Cyber World. It plays in various locations in the Cyber World."
            first={`Clip used from "A CYBER WORLD?".`}
            clips={[cyberWorldA, cyberWorldB]}
          />
          <MotifProf
            name="Sweet Cap'n Cakes"
            desc="This is the character theme for Sweet Cap'n Cakes, it plays whenever they are on screen."
            first={`Clip used from "Studio".`}
            clips={[sweetCapnCakes]}
          />
          <MotifProf
            name="It's TV Time!"
            desc="This is part of both Spamton's and Tenna's introduction. It is associated with both Spamton and Tenna"
            first={`Clip used from "Feature Presentation".`}
            clips={[tvTime]}
          />
          <MotifProf
            name="Spamton"
            desc="This is Spamton's theme. It plays during his boss fights."
            first={`Clip used from "Spamton".`}
            clips={[spamton]}
          />
          <MotifProf
            name="Roots"
            desc="This theme plays during the various ROOTS areas of the game. It is often used to set a dark tone for particularly forboding areas."
            first={`Clip used from "Digital Roots".`}
          />
          <MotifProf
            name="BIG SHOT"
            desc="This theme plays during Spamton's secret battle in his NEO form. It is also used in other fights associated with Spamton"
            first={`Clip used from "BIG SHOT".`}
            clips={[bigShot]}
          />
          <MotifProf
            name="The Dark Truth"
            desc="This theme is associated with the secrets from the prophecy. It plays when Ralsei tells us part of the prophecy that he was hiding."
            first={`Clip used from "The Dark Truth".`}
            clips={[aDarkTruth]}
          />
          <MotifProf
            name="Flashback"
            desc="This theme is played when during exposition scenes and flashbacks."
            first={`Clip used from "Flashback (Excerpt)".`}
            clips={[flashback]}
          />
          <MotifProf
            name="Tenna"
            desc="This is Tenna's theme. It is used in scenes and locations related to him."
            first={`Clip used from "Mike The BOARD, please!".`}
            clips={[tennaA, tennaB]}
          />
          <MotifProf
            name="Dark Sanctuary"
            desc="This is the theme for the Dark Sanctuary area. It plays in that area and its subregions."
            first={`Clip used from "Dark Sanctuary".`}
            clips={[darkSanctuary]}
          />
          <MotifProf
            name="Gerson"
            desc="This is Gerson's theme. It plays during scenes that relate to him."
            first={`Clip used from "Gyaa Hah Hah".`}
            clips={[gerson]}
          />
          <MotifProf
            name="SPAWN"
            desc="This is the Titan's theme. It plays during the encounter with the Titan."
            first={`Clip used from "Crumbling Tower".`}
            clips={[spawn]}
          />
          <MotifProf
            name="Catswing"
            desc="This refers to the bassline used in Catswing. It's mostly used in scenes that relate to the Mikes."
            first={`Clip used from "Volume Adjustment".`}
            clips={[catswing]}
          />
          <MotifProf
            name="Flowery"
            desc="This Flowery's character theme. It plays during scenes and locations that relate to him."
            first={`Clip used from "Your Dad's Best Friend".`}
            clips={[flowery]}
          />
          <MotifProf
            name="Sunset of Seven Suns"
            desc="This is the theme for the seven flowers. It plays in their location and for each of their individual themes."
            first={`Clip used from "Who might you be?".`}
            clips={[sunsetOfSevenSunsA, sunsetOfSevenSunsB]}
          />
          <MotifProf
            name="Violet Tactics"
            desc="This is Seth's battle theme. It also can be heard in some dramatic areas in the chapter 5 dark world."
            first={`Clip used from "Violet Tactics".`}
            clips={[violetTactics]}
          />
          <MotifProf
            name="Pink"
            desc="This is Pink's theme. It plays during her boss fight and in scenes related to her."
            first={`Clip used from "Pink".`}
            clips={[pink]}
          />
        </>
      )}
    </>
  );
};
export default Librarby;
