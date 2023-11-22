import { render, waitFor } from "@testing-library/react"
import FetchApi from "../components/FetchApi"
import { userData } from "../mock/userData"


// global.fetch = jest.fn(()=>{
//     return Promise.resolve({
//         json :()=>{
//             return Promise.resolve(userData)
//         }
//     })
// })

test("test on compoent load properly or not",(async()=>{
    const fetchApi = render(<FetchApi />)
    // console.log(fetchApi)
    // const result = await waitFor(()=>expect(fetchApi.getByTestId("div")))

    // const userResult =  fetchApi.getByTestId("user-result")
    console.log(fetchApi)
}))