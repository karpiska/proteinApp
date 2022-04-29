import './App.css';
import { useState } from 'react';
import BarChart from './components/BarChart';
import * as graphs from "./components/AnimalChart"
// import {AllChart, AnimalChart, MeatChart, ChickenChart, MeatLegumesChart, } from "./components/AnimalChart";
import { AppBar, Toolbar, Button, ButtonGroup, Popper, Menu, MenuItem } from '@mui/material';
import comboData from './components/combinations';

const categoryNames = comboData.map((item) => item['Category'])
const App = () => {
  const [selectedGraph, setSelectedGraph] = useState('Aminoacids')

  const [anchorEl, setAnchorEl] = useState(null);

  const handleDietClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDietClose = () => {
    setAnchorEl(null);
  }

  const handleDietChoice = (categoryName) => {
    setSelectedGraph(categoryName);
    handleDietClose();
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const generateCategoryMenu = () => {
      return categoryNames.map((category) => {
        const categoryName = category.replaceAll('_', ' ')
        return <MenuItem onClick={() => handleDietChoice(category)}>{categoryName}</MenuItem>
    })
  }

    const renderGraph = () => {
        switch (selectedGraph) {
            case 'Aminoacids':
                return  <BarChart/>
            case 'ALL':
                return <graphs.AllChart/>
            case 'ANIMAL':
                return <graphs.AnimalChart/>
            case 'MEAT':
                return <graphs.MeatChart/>
            case 'CHICKEN':
                return <graphs.ChickenChart/>
            case 'MEAT_LEGUMES':
                return <graphs.MeatLegumesChart/>
            case 'LEGUMES':
                return <graphs.LegumesChart/>
            case 'LEGUMES_GRAIN_NUTS':
                return <graphs.LegumesGrainsNutsChart/>
            case 'NUTS_FRUITS_VEGGIES':
                return <graphs.NutsFruitsVeggiesChart/>
            case 'FRUITS_VEGGIES':
                return <graphs.FruitsVeggiesChart/>
        }
    }

  return (
      <div className="base">
            <AppBar position="fixed">
                <Toolbar>
                    <ButtonGroup color="secondary" variant="text" aria-label="text button group">
                        <Button onClick={() => setSelectedGraph('Aminoacids')}>Aminoacids</Button>
                        <Button onClick={handleDietClick}>Diet</Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleDietClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {generateCategoryMenu()}
                        </Menu>
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
