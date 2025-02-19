import React from "react";

interface CourseProps {
  course: {
    ora: string;
    frecventa: string;
    disciplina: string;
    sala: string;
    prof: string;
  };
}

const Course: React.FC<CourseProps> = ({ course }) => {
  const ore = course.ora.split("-");
  const details = [
    parseInt(ore[0]) >= 10 ? `${ore[0]}:00` : `0${ore[0]}:00`,
    parseInt(ore[1]) >= 10 ? `${ore[1]}:00` : `0${ore[1]}:00`,
  ];
  if (course.frecventa.search("sapt") !== -1)
    details.push(course.frecventa.replace(".", ""));
  console.log(details);

  return (
    <div className="flex min-h-[100px] text-xs">
      <div className="bg-sky-200 w-[20%] m-[2px] flex items-center justify-center rounded-l-[5px]">
        <div className="font-sans text-lg">
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 w-[75%] m-[2px] p-[10px_20px] rounded-r-[5px]">
        <p className="font-bold text-lg">{course.disciplina}</p>
        <p className="text-lg">Sala: {course.sala}</p>
        <p className="text-lg">{course.prof}</p>
      </div>
    </div>
  );
};

export default Course;
