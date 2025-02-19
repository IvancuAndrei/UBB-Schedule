import React from "react";
import Course from "./Course";

interface Course {
  ora: string;
  frecventa: string;
  disciplina: string;
  sala: string;
  prof: string;
}

interface CoursesProps {
  days: {
    [key: string]: Course[];
  };
}

const Courses: React.FC<CoursesProps> = ({ days }) => {
  return (
    <div className="flex flex-wrap px-10 py-5">
      <div className="flex-1 border-2 border-darkblue p-5 rounded-md mr-6">
        <h2 className="text-center pb-2">Luni</h2>
        {days["Luni"].map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>

      <div className="flex-1 border-2 border-darkblue p-5 rounded-md mr-6">
        <h2 className="text-center pb-2">Marti</h2>
        {days["Marti"].map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>

      <div className="flex-1 border-2 border-darkblue p-5 rounded-md mr-6">
        <h2 className="text-center pb-2">Miercuri</h2>
        {days["Miercuri"].map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>

      <div className="flex-1 border-2 border-darkblue p-5 rounded-md mr-6">
        <h2 className="text-center pb-2">Joi</h2>
        {days["Joi"].map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>

      <div className="flex-1 border-2 border-darkblue p-5 rounded-md mr-6">
        <h2 className="text-center pb-2">Vineri</h2>
        {days["Vineri"].map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
