import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Userslist from "./screens/Userslist";
import Homescreen from "./screens/Homescreen";
import Navbar from "./components/Navbar";
import Appcontainer from "./components/Appcontainer";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import LoginScreen from "./screens/Loginscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";
import Orderslist from "./screens/Orderslist";
import Pizzaslist from "./screens/Pizzaslist";
import Addpizza from "./screens/Addpizza";
import Editpizza from "./screens/Editpizza";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Appcontainer >
        <Homescreen />
      </Appcontainer>

    )
  },
  {
    path: "/cart",
    element: (
      <Appcontainer>
        <Cartscreen />
      </Appcontainer>
    )
  },
  {
    path: "/register",
    element: (
      <Appcontainer >

        <Registerscreen />
      </Appcontainer>
    )
  },
  {
    path: "/login",
    element: (
      <Appcontainer>
        <LoginScreen />
      </Appcontainer>

    )
  },
  {
    path: "/orders",
    element: (
      <Appcontainer>

        <Ordersscreen />
      </Appcontainer>
    )
  },
  {
    path: "/admin",
    element: (
      <Appcontainer >
        <Adminscreen >
          <Userslist />
        </Adminscreen>
      </Appcontainer>
    )
  },
  {
    path: "/admin/userslist",
    element: (
      <Appcontainer >
        <Adminscreen>
          <Userslist />
        </Adminscreen>
      </Appcontainer>
    )
  },
  {
    path: "/admin/orderslist",
    element: (
      <Appcontainer >
        <Adminscreen>

          <Orderslist />
        </Adminscreen>
      </Appcontainer>
    )
  },
  {
    path: "/admin/pizzaslist",
    element: (
      <Appcontainer >
        <Adminscreen>

          <Pizzaslist />
        </Adminscreen>
      </Appcontainer>
    )
  },
  {
    path: "/admin/addpizza",
    element: (
      <Appcontainer >
        <Adminscreen>

          <Addpizza />
        </Adminscreen>
      </Appcontainer>
    )
  },
  {
    path: "/admin/editpizza/:pizzaid",
    element: (
      <Appcontainer >
        <Adminscreen>

          <Editpizza />
        </Adminscreen>
      </Appcontainer>
    )
  },
])
export default function ReactRouter() {
  return <RouterProvider router={router} />
}