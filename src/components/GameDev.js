import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import "../css/Page.css";

function GameDev() {
  const [value, setValue] = useState(0);
  const { title, date, descr, keywords, images } = games[value];

  return (
    <section className="game-dev content">
      <h2 className="content-title">
        <Translate>Game Development</Translate>
      </h2>
      <div className="underline"></div>
      <div className="content-center">
        <div className="btn-container">
          {games.map((item, index) => {
            return (
              <button 
                key={index}
                onClick={() => setValue(index)}
                className={`content-btn ${index === value && "active-btn"}`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <article className="content-info">
          <h3>{title}</h3>
          <p className="content-date">{date}</p>
          {Object.keys(descr).map((key, index) => {
            return (
              <div key={index} className="content-descr">
                <FontAwesomeIcon className="content-icon" icon={faAngleDoubleRight} />
                <p>{descr[key]}</p>
              </div>
            );
          })}
          <p>
            <Translate>Keywords: </Translate>
            <div className="content-keywords">
              {Object.values(keywords).map((item, index) => <span key={index}>{item}</span>)}
            </div>
          </p>
          <div className="content-images">
            {Object.values(images).map((url) => <img src={useBaseUrl(url)} className="content-image" />)}
          </div>
        </article>
      </div>
    </section>
  );
}

export default GameDev;

const games = [
  {
    title: "Hell's Kitchen",
    group: "Limited (Edition) Noodles c:",
    date: "January 2022 - April 2022",
    descr: {
      1: "Hell???s Kitchen is a 2.5D Action Dungeon Crawler game. The player embodies a small-town chef who, in order to cook meals for their clients during the day, must enter treacherous dungeons at night in search of ingredients to cook their offered recipes. Helped by an assistant sous-chef and armed with nothing but a weapon and guts, they must put their life on the line to keep their business running.",
      2: "The game uses a modified day night-cycle: restaurant chef by day, dungeon clearer by ngith. Customers fill the restaurant by day, ordering one of three signature restaurant dishes for the player to craft (using their inventory of items) and serve. By night, the player must enter the dungeon (accompanied by a sous-chef) to slay monsters and loot the ingredients they drop in death.",
      3: "For each successful dungeon run, the player's level will increase, thereby increasing the game difficulty. Be it an increased customer flow in the restaurant or an increased enemy spawn rate in the dungeon, it will only become increasingly difficult for the player to manage their restaurant adequately.",
      4: "The game can be played online with one or two players who manage the same restaurant.",
    },
    keywords: ["Unity", "Action", "Dungeon Crawler", "2.5D", "Multiplayer"],
    images: ["img/hells-kitchen/characters.png", "img/hells-kitchen/npcs.png", "img/hells-kitchen/menus.png", "img/hells-kitchen/inventory.png"],
  },
  {
    title: "Destined to Die",
    group: "Unlimited Pasta Pass",
    date: "September 2021 - December 2021",
    descr: {
      1: "Destined to Die is a 2.5D Roguelite Stealth/Combat game set in a magical library filled with perilous enemies and bathed in darkness. The player, playing as a summoned warlock, must make their way through the enemy-filled library, avoiding them or fighting their way through, as they search for the keys that will allow them to collect the power shards their Patron seeks.",
      2: "The Errant Eye is an unknowable, unspeakable otherworldly being that was banished from this plane of reality. Their influence still lingers, whispering sweetly to any who will listen, promising to reveal all that is hidden in the world. The Errant Eye???s totem was broken and stolen, and they seek help from those of this world to retrieve it. Of those who hear the whispers, some believe and, the Errant eye, in turn, grants them a part of their power: Patron Sight. These followers, known as Warlocks, wield this magic though not freely. The Errant Eye will call upon them to complete their true mission: to retrieve the relic. And, when called upon by the Errant eye, they must do as the being wishes, even if it costs them their life.",
      3: "Blessed with Patron Sight that reveals enemies in range (whether they be hidden in the shadows or not), Warlocks must wander this magical library to retrieve their Patron's totem. For each floor cleared and each shard piece gathered, they are gifted a Boon that lasts for the duration of their ongoing run. Using pre-equipped spells (acquired through their Pact of the Tome), equipped with their magical sword (acquired through their Pact of the Blade), or simply stealth, they must gather all three parts of the Broken Relic.",
      4: "The game accomodates multiple playstyles, such as stealth (aquiring keys to unlock the relic dome without getting noticed), aggro (immediately breaking the dome and spawning additional enemies), and casual (fighting enemies as you acquire the keys).",
    },
    keywords: ["Unity", "Roguelite", "Stealth", "Combat", "2.5D", "Singleplayer"],
    images: ["img/destined-to-die/icons.png", "img/destined-to-die/menus-1.png", "img/destined-to-die/map-config.png", "img/destined-to-die/map-wings.png", "img/destined-to-die/hud.png", "img/destined-to-die/menus-2.png"],
  },
];