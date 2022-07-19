import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";
import Card7 from "./components/Card7";
import Card8 from "./components/Card8";
function App() {
	return (
		<div className="App">
			<Header />

			<div className="cards">
				<div className="Class1">
					<Card />
					<Card2></Card2>
				</div>
				<div className="class1">
					<Card3></Card3>
					<Card4></Card4>
				</div>
				<div className="class1">
					<Card6></Card6>
					<Card5></Card5>
				</div>
				<div className="class1">
					<Card7></Card7>
					<Card8></Card8>
				</div>
			</div>
		</div>
	);
}

export default App;
