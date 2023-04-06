import "./App.css";
import Container from "@mui/material/Container";
import FormHead from "./FormHead";
import FormCalendar from "./FormCalendar";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
	return (
		<div className="App">
			<LocalizationProvider dateAdapter={AdapterMoment}>
				<Container maxWidth="md">
					<FormHead></FormHead>

					<FormCalendar></FormCalendar>
				</Container>
			</LocalizationProvider>
		</div>
	);
}

export default App;
