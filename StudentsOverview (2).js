
import React, { useState } from "react";

const studentsData = [
  { name: "Aiden Carter", level: 1, average: 88 },
  { name: "Bella Thompson", level: 2, average: 91 },
  { name: "Caleb Johnson", level: 3, average: 91 },
  { name: "Daisy Nguyen", level: 3, average: 93 },
  { name: "Ethan Wright", level: 1, average: 76 },
  { name: "Gavin Lopez", level: 3, average: 95 },
  { name: "Hannah Patel", level: 2, average: 95 },
  { name: "Isaac Chen", level: 2, average: 87 },
];

export default function StudentsOverview() {
  const [levelFilter, setLevelFilter] = useState("All Levels");

  const handleFilterChange = (e) => {
    setLevelFilter(e.target.value);
  };

  const filteredStudents =
    levelFilter === "All Levels"
      ? studentsData
      : studentsData.filter(
          (student) => student.level === parseInt(levelFilter)
        );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Students Overview</h1>
      <div className="mb-4">
        <label htmlFor="levelFilter" className="mr-2">Filter by level</label>
        <select
          id="levelFilter"
          value={levelFilter}
          onChange={handleFilterChange}
          className="border rounded p-1"
        >
          <option>All Levels</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Level</th>
            <th className="border px-4 py-2 text-left">Average Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.level}</td>
              <td className="border px-4 py-2">{student.average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
