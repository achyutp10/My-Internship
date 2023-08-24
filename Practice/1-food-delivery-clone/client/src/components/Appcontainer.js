import Navbar from "./Navbar"

function Appcontainer(props) {
  return (
    <div className="app">
      <Navbar />
      {props.children}
    </div>
  )
}

export default Appcontainer
