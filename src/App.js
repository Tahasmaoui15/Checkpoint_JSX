import 'bootstrap/dist/css/bootstrap.min.css';
    
import TsCard from './components/TsCard';
import product from './product';


function App() {
  return (
    <div className="App">
     <div className="Cards" style={{display:'flex', justifyContent:'space-around', gap:'8rem'}}>
     <TsCard product= {product} />
     </div>
     <p style={{ textAlign: "center", marginTop: "25px" }}>
        Hello, there!
      </p>
     </div>
    
  );
}

export default App;
