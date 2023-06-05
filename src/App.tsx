import { Route, Routes, Navigate } from "react-router-dom";
import CalendarPage from "@/pages/calendar/Calendar";
import EventsPage from "@/pages/events/Events";
import NewEvent from "@/pages/newEvent/NewEvents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/events">
          <Route path="new" element={<NewEvent />} />
          <Route path=":eventId" element={<EventsPage />} />
        </Route>
        <Route path="/*" element={<Navigate to="/calendar" replace />} />
      </Routes>
    </>
  );
}

export default App;
