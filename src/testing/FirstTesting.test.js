import { fireEvent, render, waitFor } from "@testing-library/react"
import FirstTesting from "./FirstTesting"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"


test("test for compoent rendering",()=>{
    const app = render(<FirstTesting />)
    // console.log(app)
    const element = app.getByText("FirstTesting")
    expect(element).toBeInTheDocument()
})
test("test for inputbox", async()=>{
    const app = render(<FirstTesting/>)
    const element = app.getByRole("textbox")
    // console.log(element)
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute("name","sourav")
    expect(element).toHaveAttribute("type","text")
    expect(element).toHaveAttribute("id","texti-id")
    expect(element).toHaveAttribute("placeholder","Enter Your Name")
    expect(element).toHaveAttribute("value","")
    // expect(element).toHaveAttribute("onChange")
    // expect(element.name =="sourav")
    // expect(element.attributes =="fnru")
    // expect(element.name =="sourav")
    await act(async()=>{
        userEvent.type(element, "hello")
        await waitFor(() => {
           expect(element).toHaveValue("hello");
        });
    })
   
  
    
})

test("test for button click",async ()=>{
    const app = render(<FirstTesting/>)
    const element = app.getByTestId("button-click")
    // console.log(element)
    expect(element).toBeInTheDocument()
    // expect(element).toHaveAttribute("type","div")
    await act(async()=>{
        userEvent.click(element)
        await waitFor(() => {
           expect(element).toHaveValue("");
        });
    })
})

