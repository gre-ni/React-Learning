import './App.css'
import { SecondComponent } from "./SecondComponent";
import { Button } from "./Button";
import { List } from "./List";
import { EmployeeTable } from './EmployeeTable';


function App() {
	return (
		<>
      <List />
			<Button />
      <SecondComponent />
      <EmployeeTable />
		</>
	);
}

export default App;
