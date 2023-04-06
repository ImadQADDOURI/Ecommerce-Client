import React from 'react';
import './navbar.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';



function Navbaar() {
  
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]
  return (
    <header>
      <nav>
<div className='left'>

<div className='navlogo'>
<img src="Amazon_logo.png" alt="" />
</div>
<AccessAlarmIcon className='bg-slate-50'/>
</div>

      </nav>


    

        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>


    </header>
  )
}
function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Navbaar