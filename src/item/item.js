const Item = (props) => {
  const audios = new Audio(props.url);
  audios.preload = "metadata";
  return (
    <>
      <div className="result">
        <h1>{props.word}</h1>
        <h5>{props.origin}</h5>
        <div className="phonetics">
          <p
            className="play"
            onClick={() => {
              audios.play();
            }}
          >
            🔊
          </p>
          <p className="text">{props.text}</p>
        </div>
        {
            props.meanings.map((el,index)=>(
                <Meaning partofspeech={el.partOfSpeech} key={index} definitions = {el.definitions[0]} />
                // console.log(el.definitions[0])
                
            ))
        }
      </div>
    </>
  );
};

const Meaning = (props) => {
  return (
    <div className="meaning" >
      <p className="partofspeech">{props.partofspeech}</p>
      <p className="defination">
         <code>Defination: </code> {props.definitions.definition}
      </p>
      <p className="example"><code>example: </code>{props.definitions.example}</p>
    </div>
  );
};
export default Item;
