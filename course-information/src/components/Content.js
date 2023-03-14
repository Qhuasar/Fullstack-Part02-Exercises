import Part from "./Part";

const Total = ({ total }) => <p>total of 42 exercises: {total}</p>;

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
