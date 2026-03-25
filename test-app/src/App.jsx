import { Colors } from './Colors.jsx'
import './App.css'
import { Menu } from './Menu.jsx'
import { Numbers } from './Numbers.jsx'
import { People } from './People.jsx'
import { User } from './User.jsx'
import { lide } from './lide.js'


function App() {
  const user = {jmeno:'John', prijmeni:'Smith', vek: 40};
  
  return (
    <>
      <Menu />
      <Colors />
      <Numbers />
      <People table={lide}/>
      <User user={user} />
    </>
  )
}

export default App
