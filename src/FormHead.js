import React, { useState } from "react";

import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./FormHead.css";
import Button from "@mui/material/Button";
import moment from "moment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function FormHead({ createEvento }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(moment());

  const handleSubmit = (event) => {
    // Prevenimos submit del form para evitar recarga de la web.
    event.preventDefault();
    const evento = {
      title: title,
      desc: desc,
      date: date,
    };
    createEvento(evento);
  };

  return (
    <>
      <Card className="head-card">
        <h1>Form</h1>

        {/* Agregamos Form para controlar evento Submit */}
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={4}>
              <TextField
                onChange={(e) => setTitle(e.target.value)}
                id="form-name"
                label="Event name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <DatePicker onChange={(e) => setDate(e)} label="Date" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                onChange={(e) => setDesc(e.target.value)}
                id="form-desc"
                label="Description"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" type="submit" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
}
