import { DateCalendar, PickersDay } from "@mui/x-date-pickers";
import { Badge, Card, CardContent } from "@mui/material";
import moment from "moment";

export default function FormCalendar({ eventos }) {
  function calendarDay(props) {
    const { eventos = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
      !props.outsideCurrentMonth &&
      eventos.find((evento) => {
        return moment(evento.date).isSame(day);
      });

    return (
      <Badge
        key={props.day.toString()}
        color="error"
        invisible={!isSelected}
        overlap="circular"
        variant="dot"
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
    );
  }

  return (
    <>
      <Card>
        <CardContent>
          {eventos.length !== 0 ? (
            <DateCalendar
              slots={{
                day: calendarDay,
              }}
              slotProps={{
                day: {
                  eventos,
                },
              }}
            ></DateCalendar>
          ) : (
            <h1>No existen eventos cargados</h1>
          )}
        </CardContent>
      </Card>
    </>
  );
}
