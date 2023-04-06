import React from "react";

import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./FormHead.css";
import Button from "@mui/material/Button";

export default function FormHead() {
	return (
		<>
			<Card className="head-card">
				<h1>Form</h1>

				<Grid container>
					<Grid item xs={4}>
						<TextField id="form-name" label="Event name" variant="outlined" />
					</Grid>
					<Grid item xs={4}>
						<TextField id="form-date" label="Date" variant="outlined" />
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={10}>
						<TextField id="form-desc" label="Description" fullWidth={true} />
					</Grid>
					<Grid item xs={2}>
						<Button variant="contained" color="primary">
							Save
						</Button>
					</Grid>
				</Grid>
			</Card>
		</>
	);
}
