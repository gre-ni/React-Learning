import { useState, useEffect } from "react";
import { Loader } from "./Loader.jsx";

export const Holidays = () => {
  const [holiday, setHoliday] = useState([]);
  const [year, setYear] = useState(["2025"]);

  useEffect(() => {
    const fetchAndSetHolidays = async () => {
      setHoliday([]); // Clear value between calls (just to see loader)
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/${year}/CZ`,
      );
      setHoliday(await response.json());
    };

    fetchAndSetHolidays();
  }, [year]);

  return (
    <>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option>2024</option>
        <option>2025</option>
        <option>2026</option>
      </select>
      {holiday.length === 0 ? (
        <Loader />
      ) : (
        <table>
          {holiday.map((day) => (
            <tr key={day.date}>
              <td>{day.date}</td>
              <td>{day.localName}</td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
};
