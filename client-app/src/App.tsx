import React, {Component} from 'react';
import { Header, List } from 'semantic-ui-react'
import './App.css';
import {cars} from './demo';
import CarItem from "./CarItem";
import  axios from 'axios';

class App extends Component {
  
  state = {
    values : []
  }

  componentDidMount(){
    //fetch

    axios.get('http://localhost:5000/api/values')
    .then((res) => {
    //  console.log(res);
      this.setState({
        
       // values: [{id:1, name:'Value 101'}, {id:2, name: 'Value 102'}]
        values: res.data
      })
    })

    
  }

  render(){
    return (
      <div>
        <Header as='h2' icon='users' content='Reactivities' />

        <List>

        {this.state.values.map((value:any) => (
              // <li key={value.id}>{value.name}</li>   
              <List.Item key={value.id}>{value.name}</List.Item> 
            ))}
         
          
        </List>

          
       
        {/* <ul>
          {cars.map((car: any) => (
            <CarItem car ={car} />
            // <li>{cars.color}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  
}

export default App;
