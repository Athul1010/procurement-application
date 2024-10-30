import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Supplier from './Components/Supplier';
import Item from './Components/Item';
import PurchaseOrder from './Components/PurchaseOrder';



function App() {
  return (
    <div className="App">
      <Supplier/>
      <Item/>
      <PurchaseOrder/>
    </div>
  );
}

export default App;
