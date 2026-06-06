import { Route, Routes } from 'react-router-dom';
import { MarsReactSite } from './mars/MarsReactSite';

function App() {
  return (
    <Routes>
      <Route path="*" element={<MarsReactSite />} />
    </Routes>
  );
}

export default App;
