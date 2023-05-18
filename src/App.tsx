import { Alert } from "./components/Alert";
import  Button  from "./components/Button";
import ListGroup from "./components/ListGroup"
import { useState } from 'react'


function App() {
  const [alertOn, setAlertOn] = useState(true);


  const cities = ["New York", "Paris", "Madrid", "London"];

  const HandleSelectItem = (item: string) => {
    console.log(item);
  }

  const HandleButton = () => {

    alertOn ? setAlertOn(false) : setAlertOn(true)
  }


  return (
    <div>
      <ListGroup items={cities} heading={"Cities"} onSelectItem={HandleSelectItem}/>
      {/* <Alert text={"Alert! Alert!"}/> */}

      { alertOn && <Alert onClose={HandleButton}><p>Alert! Alert!</p></Alert>
      }
      <Button onClick={HandleButton}>
        Click Me!
      </Button>
    </div>
  )
}

export default App
