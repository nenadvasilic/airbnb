import data from "./data";
console.log(data);

function Navbar() {
  return (
    <nav>
      <img
        className="nav--logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
      ></img>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero--photo"
        src="https://d26a57ydsghvgx.cloudfront.net/product/Customer%20Story%20Images/airbnb3.jpg"
      ></img>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without living home.
      </p>
    </section>
  );
}

function Card(props) {
  console.log(props.item);

  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`./images/${props.coverImg}`} className="card--image"></img>
      <div className="card--stats">
        <img
          className="card--star"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/1117px-Star%2A.svg.png"
        ></img>
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From €{props.price}</span> / person
      </p>
    </div>
  );
}

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// Challenge 1:
const nums = [1, 2, 3, 4, 5];
console.log(nums);
// Treba da se napravi da bude --> [1, 4, 9, 16, 25]
// Moje rešenje:
const result = nums.map((value) => value * value);
console.log(result);
// Njihovo rešenje:
const squared = nums.map(function (num) {
  return num * num;
});
console.log(squared);

// Challenge 2:
const names = ["alice", "bob", "charlie", "danielle"];
// Treba da vrati prvo slovo da bude veliko!
console.log(names);
const uppercase = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});
console.log(uppercase);

// Challenge 3:
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// Treba da vrati --> ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
console.log(pokemon);
const elements = pokemon.map((monster) => {
  return `<p>${monster}</p>`;
});
console.log(elements);
// A može i ovako:
const el = pokemon.map((mon) => `<p>${mon}</p>`);
console.log(el);
