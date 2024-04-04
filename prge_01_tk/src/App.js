import "./App.css";

const lista_uzytkownikow = [
  { imie: "Marek" },
  { imie: "Wika" },
  { imie: "Kinia" },
];

function App() {
  return (
    <div className="App">
      {lista_uzytkownikow.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
    </div>
  );
}

export default App;
