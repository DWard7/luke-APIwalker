import { Outlet } from "react-router-dom"
import Form from "./Form"

function LukeApi() {
  return (
    <>
      <Form />
      <Outlet />
    </>
  )
}

export default LukeApi