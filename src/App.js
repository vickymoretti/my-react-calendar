import "./App.css";
import Container from "@mui/material/Container";
import FormHead from "./FormHead";
import FormCalendar from "./FormCalendar";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useEffect, useState } from "react";

function App() {

	const [eventos, setEventos] = useState([]);

	useEffect(() => {
		setEventos(eventos);
	}, [])

	function createEvento({name, date, desc}) { 
		setEventos([...eventos, {
			name: name,
			date: date,
			desc: desc
		}])
	}

	return (
		<div className="App">
			<LocalizationProvider dateAdapter={AdapterMoment}>
				<Container maxWidth="md">
					<FormHead createEvento={createEvento} ></FormHead>

					<FormCalendar eventos={eventos}></FormCalendar>
				</Container>
			</LocalizationProvider>
		</div>
	);
}

export default App;
