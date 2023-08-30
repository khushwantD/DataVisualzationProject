import { Route, Routes } from 'react-router-dom'
import { DataProvider } from './ContextPage';
import Navbar from './Components/Navbar';
import CardCharts from './Components/CardCharts';

function App() {

  return (
    <DataProvider>
      <div className="app-container">
        <Navbar />
          <Routes>
            <Route path='/' element={<CardCharts />} />
          </Routes>
      </div>
    </DataProvider>
  );
}

export default App
