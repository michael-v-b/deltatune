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
import digitalRoots from "./assets/clips/digital-roots.mp3";
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
import LibrarbySideBar from "./LibrarbySideBar.jsx";
import { useRef, useEffect } from "react";
const Librarby = () => {
  const comingSoon = false;
  const motifEntries = [
    [
      "Once Upon A Time",
      "This motif is used all throughout Undertale and is attributed to be the theme of the game as a whole.",
      'Clip used from "Once Upon A Time".',
      [onceUponATimeA, onceUponATimeB, onceUponATimeC],
    ],
    [
      "Flowey",
      "This is Flowey's theme, and is used in songs that relate to him.",
      'Clip used from "Your Best Friend".',
      [flowey],
    ],
    [
      "Toriel",
      "This is Toriel's character theme, and it is surprisingly rare. It is used in songs that relate to her.",
      'Clip used from "Fallen Down".',
      [toriel],
    ],
    [
      "Ruins",
      "This also can be considered the theme for The Underground as a whole and it is not only used in the Ruins.",
      'Clip used from "Ruins".',
      [ruins],
    ],
    [
      "Anticipation",
      "This is the song is the pretheme to Undertale's battle theme. Its simple melody links it to a few songs throughout both games.",
      'Clip used from "Anticipation".',
      [anticipation],
    ],
    [
      "Enemy Approaching",
      "This is the battle theme in Undertale. Its melody is referenced a few times during the battle themes for Undertale.",
      'Clip used from "Enemy Approaching".',
      [enemyApproaching],
    ],
    [
      "Ghost Fight",
      "This theme is used whenever something spOOooOoOoky is going on. It is the quintessential ghost theme.",
      'Clip used from "Ghost Fight".',
      [ghostFight],
    ],
    [
      "Determination",
      "This is Undertale's death theme. It plays whenever the player needs to be motivated.",
      'Clip used from "Determination".',
      [determinationA, determinationB],
    ],
    [
      "Heartache",
      "This is Toriel's battle theme. It only ever gets played twice in both games.",
      'Clip used from "Heartache".',
      [heartacheA, heartacheB],
    ],
    [
      "Sans",
      "This is Sans's theme. It plays in scenes where sans is involved.",
      'Clip used from "sans.".',
      [sans],
    ],
    [
      "Papyrus",
      "This is Papyrus's theme. It plays in scenes where sans is involved.",
      'Clip used from "Nyeh Heh Heh".',
      [papyrusA, papyrusB],
    ],
    [
      "Snowdin",
      "This theme also has been interpreted as the Monster's theme, as it plays whenever referring to all the monsters of The Underground in Undertale.",
      'Clip used from "Shop".',
      [snowdin],
    ],
    [
      "Hopes and Dreams",
      "This theme is the quint essential `friendship` theme in Undertale, played amnytimes throughout the pacifist run.",
      'Clip used from "Shop".',
      [hopesAndDreams],
    ],
    [
      "Spear of Justice",
      "This is Undyne's battle theme, and is typically used during tense and bombastic moments.",
      'Clip used from "Spear of Justice".',
      [spearOfJustice],
    ],
    [
      "Another Medium",
      "This is the theme of Hot Land. It is used in Hot Land and its adjacent locations.",
      'Clip used from "Waterfall".',
      [anotherMediumA, anotherMediumB],
    ],
    [
      "Asriel",
      "This is the theme for Asriel. It is often used during Undertale's sentimental and emotional moments.",
      'Clip used from "Memory".',
      [asriel],
    ],
    [
      "Dummy!",
      "This is the theme used by the Mad Dummy boss fight. While most of the fight uses the Ghost Fight theme, the ending is unique.",
      'Clip used from "Dummy!".',
      [dummy],
    ],
    [
      "Jingle Bells",
      "This song is used occasionally mostly as a joke, but it is used twice in the Deltarune and Undertale OST.",
      'Clip used from "Holiday Studio".',
      [jingleBells],
    ],
    [
      "It's Showtime!",
      "This is Mettaton's show theme. It is used whenever Mettaton is performing or broadcasting to his audience.",
      'Clip used from "It\'s Showtime!".',
      [itsShowtime],
    ],
    [
      "Metal Crusher",
      "This is the theme for Mettaton's more robotic side. It is primarily used during his bossfight.",
      'Clip used from "Metal Crusher".',
      [metalCrusherA, metalCrusherB],
    ],
    [
      "Hotel",
      "This is the musical pattern used in the beginning of Hotel. It is primarily used in the hotel area and its adjacent areas.",
      'Clip used from "Hotel".',
      [hotel],
    ],
    [
      "CORE",
      "This theme refers to the first part of the CORE song. The actual melody of core is a version of Another Medium, but the opening chords are original.",
      'Clip used from "CORE".',
      [core],
    ],
    [
      "ASGORE",
      "This is Asgore's character theme. It is used in scenes that directly relate to him.",
      'Clip used from "ASGORE".',
      [asgore],
    ],
    [
      "Your Best Nightmare",
      "This is Omega Flowey's theme. It is often used during unsettling moments of dread.",
      'Clip used from "Your Best Nightmare".',
      [yourBestNightmare],
    ],
    [
      "Black Knife",
      "This is the drum beat that is used in high stake, intense narrative battles.",
      'Clip used from "Black Knife".',
      [blackKnife],
    ],
    [
      "Power of NEO",
      "This theme is used to show the empowered NEO bosses.",
      'Clip used from "Battle Against A True Hero".',
      [powerOfNeo],
    ],
    [
      "Gaster",
      "This is the theme for the mysterious W.D. Gaster. While, it technically first appears in Undertale in a secret music menu, it first officially appears in Deltarune.",
      'Clip used from "Gaster\'s Theme".',
      [gaster],
    ],
    [
      "Don't Forget",
      "This theme is often considered the theme of Deltarune as a whole. It is by far the most widely used theme, being present in 36 songs.",
      'Clip used from "Don\'t Forget".',
      [dontForget],
    ],
    [
      "Hometown",
      "This is the theme for the light world area, Hometown in Deltarune.",
      'Clip used from "School".',
      [hometown],
    ],
    [
      "Susie",
      "This is Susie's theme. It is often used in scenes that relate to her",
      'Clip used from "VS. Susie".',
      [susie],
    ],
    [
      "The Door",
      "This theme is sometimes considered the theme for the dark.",
      'Clip used from "The Door".',
      [theDoor],
    ],
    [
      "The Legend",
      "This is the theme for Deltarune's prophecy. It is used in scenes that relate to it.",
      'Clip used from "The Legend".',
      [theLegendA, theLegendB, theLegendC],
    ],
    [
      "Lancer",
      "This is Lancer's theme. It is often used for fun, silly scenes or gags in Deltarune",
      'Clip used from "Lancer".',
      [lancerA, lancerB],
    ],
    [
      "Rude Buster",
      "This is Deltarune's battle theme. As of chapter 5 every chapter uses at least a variation of this theme.",
      'Clip used from "Rude Buster".',
      [rudeBusterA, rudeBusterB],
    ],
    [
      "Field of Hopes and Dreams",
      "This is the theme for the Field of Hopes and Dreams. It is used when relating to that area.",
      'Clip used from "Field of Hopes and Dreams".',
      [fieldOfHopesAndDreams],
    ],
    [
      "Checker Dance",
      "This theme is used for Checker King Boss fight. It is often used for gimmick fights in Deltarune.",
      'Clip used from "Checker Dance".',
      [checkerDance],
    ],
    [
      "Scarlet Forest",
      "This is the theme for the Scarlet Forest area. It is primarily used in Scarlet Forest and its subregions.",
      'Clip used from "Scarlet Forest".',
      [scarletForest],
    ],
    [
      "Card Castle",
      "This is the Card Castle Theme. It is primarily used in Card Castle and its subregions.",
      'Clip used from "Card Castle".',
      [cardCastle],
    ],
    [
      "Rouxls Kaard",
      "This is Rouxls Karrd's character theme. It is used during his dialogue and bossfights.",
      'Clip used from "Rouxls Kaard".',
      [rouxlsKaard],
    ],
    [
      "Hip Shop",
      "This is the them for Rouxls Kaard's shop. It is used in some other relaxing/safe areas.",
      'Clip used from "Hip Shop".',
      [hipShop],
    ],
    [
      "Darkness Falls",
      "This is the death theme for Deltarune, similar to Determination from Undertale. It happens whenever your party all dies.",
      'Clip used from "Darkness Falls".',
      [darknessFalls],
    ],
    [
      "Freedom Motif",
      "This is the theme associated with the secret bosses. It can be found in their boss themes in different areas associated with them.",
      'Clip used from "THE WORLD REVOLVING".',
      [freedomMotifA, freedomMotifB],
    ],
    [
      "The Holy",
      "This theme is used in significant areas that relate to the prophecy, such as dark fountains.",
      'Clip used from "The Holy".',
      [theHolyA, theHolyB],
    ],
    [
      "Girl Next Door",
      "This is Noelle's character theme. It plays in songs that relate to her or the holiday family.",
      'Clip used from "Girl Next Door".',
      [girlNextDoor],
    ],
    [
      "Lost Girl",
      "Lost Girl is a functionally considered Dess's theme. It is also sometimes used an tone setting song for emotional moments.",
      'Clip used from "Girl Next Door".',
      [lostGirlA, lostGirlB],
    ],
    [
      "Berdly",
      "This is Berdly's theme. It plays in many songs that relate to him.",
      'Clip used from "Berdly".',
      [berdlyA, berdlyB],
    ],
    [
      "Queen",
      "This is Queen's theme. It is used in songs that directly relate to her.",
      'Clip used from "Queen".',
      [queenA, queenB],
    ],
    [
      "Cyber World",
      "This is the main melody of the Cyber World. It plays in various locations in the Cyber World.",
      'Clip used from "A CYBER WORLD?".',
      [cyberWorldA, cyberWorldB],
    ],
    [
      "Sweet Cap'n Cakes",
      "This is the character theme for Sweet Cap'n Cakes, it plays whenever they are on screen.",
      'Clip used from "Studio".',
      [sweetCapnCakes],
    ],
    [
      "It's TV Time!",
      "This is part of both Spamton's and Tenna's introduction. It is associated with both Spamton and Tenna",
      'Clip used from "Feature Presentation".',
      [tvTime],
    ],
    [
      "Spamton",
      "This is Spamton's theme. It plays during his boss fights.",
      'Clip used from "Spamton".',
      [spamton],
    ],
    [
      "Roots",
      "This theme plays during the various ROOTS areas of the game. It is often used to set a dark tone for particularly forboding areas.",
      'Clip used from "Digital Roots".',
      [digitalRoots],
    ],
    [
      "BIG SHOT",
      "This theme plays during Spamton's secret battle in his NEO form. It is also used in other fights associated with Spamton",
      'Clip used from "BIG SHOT".',
      [bigShot],
    ],
    [
      "The Dark Truth",
      "This theme is associated with the secrets from the prophecy. It plays when Ralsei tells us part of the prophecy that he was hiding.",
      'Clip used from "The Dark Truth".',
      [aDarkTruth],
    ],
    [
      "Flashback",
      "This theme is played when during exposition scenes and flashbacks.",
      'Clip used from "Flashback (Excerpt)".',
      [flashback],
    ],
    [
      "Tenna",
      "This is Tenna's theme. It is used in scenes and locations related to him.",
      'Clip used from "Mike The BOARD, please!".',
      [tennaA, tennaB],
    ],
    [
      "Dark Sanctuary",
      "This is the theme for the Dark Sanctuary area. It plays in that area and its subregions.",
      'Clip used from "Dark Sanctuary".',
      [darkSanctuary],
    ],
    [
      "Gerson",
      "This is Gerson's theme. It plays during scenes that relate to him.",
      'Clip used from "Gyaa Hah Hah".',
      [gerson],
    ],
    [
      "SPAWN",
      "This is the Titan's theme. It plays during the encounter with the Titan.",
      'Clip used from "Crumbling Tower".',
      [spawn],
    ],
    [
      "Catswing",
      "This refers to the bassline used in Catswing. It's mostly used in scenes that relate to the Mikes.",
      'Clip used from "Volume Adjustment".',
      [catswing],
    ],
    [
      "Flowery",
      "This Flowery's character theme. It plays during scenes and locations that relate to him.",
      'Clip used from "Your Dad\'s Best Friend".',
      [flowery],
    ],
    [
      "Sunset of Seven Suns",
      "This is the theme for the seven flowers. It plays in their location and for each of their individual themes.",
      'Clip used from "Who might you be?".',
      [sunsetOfSevenSunsA, sunsetOfSevenSunsB],
    ],
    [
      "Violet Tactics",
      "This is Seth's battle theme. It also can be heard in some dramatic areas in the chapter 5 dark world.",
      'Clip used from "Violet Tactics".',
      [violetTactics],
    ],
    [
      "Pink",
      "This is Pink's theme. It plays during her boss fight and in scenes related to her.",
      'Clip used from "Pink".',
      [pink],
    ],
  ];

  const profileRefs = useRef([]);

  return (
    <>
      <TitleBar />
      {comingSoon && <div className="coming-soon">Coming Soon</div>}
      {!comingSoon && (
        <div className="librarby-page-container">
          <LibrarbySideBar
            profileRefs={profileRefs}
            motifEntries={motifEntries}
          />
          <div className="motif-list">
            {motifEntries.map(([name, desc, first, clips], index) => {
              return (
                <MotifProf
                  sectionRef={(node) => {
                    profileRefs.current[index] = node;
                  }}
                  key={name}
                  name={name}
                  desc={desc}
                  first={first}
                  clips={clips}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Librarby;
