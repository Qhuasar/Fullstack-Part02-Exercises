import Content from "./Content";
import Header from "./Header";

const Course = ({ course , total }) => {
  return (
    <>
      <Header name={course.name} />
      <Content course={course} total={total}/>
    </>
  );
};

export default Course;
