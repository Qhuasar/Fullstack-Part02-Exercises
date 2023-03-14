import Part from "./Part";
import Total from "./Total";

const Content = ({ course, total }) => {
  return (
    <>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total total={total} />
    </>
  );
};

export default Content;
