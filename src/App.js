import './App.css';
import BarChart from './components/BarChart'
import { useState } from 'react';
import { AppBar, Toolbar, Button, ButtonGroup, Container } from '@mui/material';

const App = () => {
  const [selectedGraph, setSelectedGraph] = useState('Aminoacids')

    const renderGraph = () => {
        if (selectedGraph === 'Aminoacids') {
            return  <BarChart/>
        } else {
            return <BarChart/>
        }
    }

  return (
      <div className="base">
            <AppBar position="fixed">
                <Toolbar>
                    <ButtonGroup color="secondary" variant="text" aria-label="text button group">
                        <Button onClick={() => setSelectedGraph('Aminoacids')}>Aminoacids</Button>
                        <Button onClick={() => setSelectedGraph('Diet')}>Diet</Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
            <Toolbar />
        <div className="displayArea">
            <div className="graph">
                {renderGraph()}
            </div>
        </div>
      </div>
    )
}

export default App;
