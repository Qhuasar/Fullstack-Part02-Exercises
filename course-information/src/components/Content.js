import Part from "./Part";

const Total = ({ total }) => <p>total of {total} exercises</p>;

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
