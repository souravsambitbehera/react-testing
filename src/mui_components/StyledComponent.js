import styled from "styled-components";

export const Section_Nav = styled.section`
    display: flex;
    /* justify-items: center; */
    justify-content: space-between;
  font-size: 1.2em;
  background-color: aqua;
  text-align: center;
  color: #BF4F74;
  box-sizing: border-box;
  padding: 3px 18px;
  /* margin-bottom: 13px; */
  box-shadow: 0 0px 12px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);  
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.3s;
`;
export const Header_Nav = styled.header`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding: 10px;
`;
export const Nav_Item = styled.nav`
    &:hover,
  &:focus {
    color: palevioletred;
  }
`;
export const Courses_Div = styled.div`
    min-width: 600px;
    padding: 8px 10px;
    margin: 10px 18px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

`
export const Courses_Ul = styled.ul`
    list-style-type: none;
    /* background-color: black; */
    /* border: 1px solid; */

`
export const Courses_Li = styled.li`
    padding: 10px;
    color:#0065f2fc;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
    font-weight:600;
    text-transform: uppercase;
    cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.3s;
    &:hover,
  &:focus {
    color: #009bf2de;
  box-shadow: 0 0px 0px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);  

  }
`
export const Courses_Content_Div = styled.div`
     min-width: 720px; 
     padding: 8px 10px; 
     margin: 10px 18px; 

`
export const Courses_Content_Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  text-transform: capitalize;
`