import React, { useState } from "react";
import {
  Courses_Content_Div,
  Courses_Content_Span,
  Courses_Div,
  Courses_Li,
  Courses_Ul,
  Header_Nav,
  Nav_Item,
  Section_Nav,
} from "./StyledComponent";
import { courses_data } from "./courses_data";

const datas = courses_data;
// console.log(datas);
const Two = () => {
  const [open, setOpen] = useState(1);
  const handleCoursesClick = (dataId) => {
    setOpen(open === dataId ? null : dataId);
  };
  // console.log(open);

  return (
    <>
      <Section_Nav>
        <Header_Nav>
          <Nav_Item>LoGo</Nav_Item>
          <Nav_Item>Tutorials</Nav_Item>
          <Nav_Item>Excercises</Nav_Item>
          <Nav_Item>Services</Nav_Item>
          <Nav_Item>Search</Nav_Item>
        </Header_Nav>
        <Header_Nav>
          <Nav_Item>Jobs</Nav_Item>
          <Nav_Item>Get Certified</Nav_Item>
          <Nav_Item>Profile</Nav_Item>
        </Header_Nav>
      </Section_Nav>

      <Courses_Div>
        <Courses_Ul>
          {datas.map((data) => {
            //   console.log(`here i will get: ${data.course_name} and ${open}`)

            return (
              <Courses_Li
                key={data.id}
                onClick={() => handleCoursesClick(data.id)}
              >
                {data.course_name}
              </Courses_Li>
            );
          })}
        </Courses_Ul>

        <Courses_Content_Div>
          {courses_data.map((data) => (
            <Courses_Content_Span
              key={data.id}
              style={{ display: open === data.id ? "flex" : "none" }}
            >
              {data.course_content}
            </Courses_Content_Span>
          ))}
        </Courses_Content_Div>
      </Courses_Div>
    </>
  );
};

export default Two;
