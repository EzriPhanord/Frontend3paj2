import "./styles.css";
//Comportement
const Select = () => {
  alert("Votre est interface va etre tester par Seliluim");
};
const Retour = () => {
  alert("Retour sur la page d'accueil");
};
export default function App() {
  return (
    <body className="body">
      <div className="box1">
        <h2>Commencer le teste</h2>
      </div>
      <div>
        <form>
          <form className="box">
            <fieldset className="fs">Configuration du teste</fieldset>
            <input type="checkbox" value="ligne" name="En Ligne" /> En ligne{" "}
            <br />
            <input
              type="checkbox"
              value="Boutton"
              name="Boutton"
            /> Boutton <br />
            <input type="checkbox" value="Other" name="autre" /> Autre <br />
          </form>
          <form className="boutton">
            <button className="b1" onClick={Select}>
              {" "}
              Tester
            </button>
            <button className="b2" onClick={Retour}>
              {" "}
              Retour
            </button>
          </form>
        </form>
      </div>
    </body>
  );
}
