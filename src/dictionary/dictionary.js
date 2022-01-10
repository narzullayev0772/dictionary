import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Item from "../item/item";
import "./dictionary.css";

const Dictionary = () => {
  const [item, setItem] = useState(null);
  const [word, setWord] = useState("");
  const [search, setSearch] = useState(false);
  //   console.log(item);
  useEffect(() => {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
      .then((res) => setItem(res.data[0]))
      .catch(
        (err) => console.log(err)
      );
  }, [word]);
  return (
    <>
      <h2 className="logo">My English Dictionary</h2>
      <a className="footer" href="https://t.me/Alisher_Narzullayev">
        © Alisher Narzullayev 2022
      </a>
      <div className="input-wrap">
        <input
          type="text"
          placeholder="Type here..."
          className="input"
          onChange={(e) => {
            let word = e.target.value;
            setWord(word);
          }}
        />
        <span
          className="searchIcon"
          onClick={() => {
            setSearch(true);
          }}
        >
          🔍
        </span>
      </div>
      <div className="results">
        {item && search && (
          <Item
            origin={item.origin}
            word={item.word}
            url={item.phonetics[0].audio}
            text={item.phonetics[0].text}
            meanings={item.meanings}
          />
        )}
      </div>
    </>
  );
};

export default Dictionary;
