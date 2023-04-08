import "./App.css";
import Free from "./component/Free";
import Pro from "./component/Pro";
import Plus from "./component/Plus";
function App() {
	return (
		<div classNameName="App">
			{/* <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! --> */}
			<section className="pricing py-5">
				<div className="container">
					<div className="row">
						{/* <!-- Free Tier --> */}
						<Free />
						{/* <!-- Plus Tier --> */}
						<Pro />
						{/* <!-- Pro Tier --> */}
						<Plus />
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
