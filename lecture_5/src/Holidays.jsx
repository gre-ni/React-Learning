import { useState, useEffect } from "react";

export const Holidays = () => {
  const [holiday, setHoliday] = useState([]);

  useEffect(() => {
    const fetchAndSetHolidays = async () => {
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/2025/CZ`,
      );
      setHoliday(await response.json());
    };

    fetchAndSetHolidays();
  }, []);

  return (
    <table>
      {holiday.map((day) => (
        <tr key={day.date}>
          <td>{day.date}</td>
          <td>{day.localName}</td>
        </tr>
      ))}
    </table>
  );
};
