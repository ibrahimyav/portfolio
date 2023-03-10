import React from 'react'
import Card from './Card/Card';
import {data} from '../helpers/data'
import './Main.scss'

function Main() {
  return (
    <div className='main'>
        {data.map((place)=>{
            return <Card location={place}/>
        })}
        
    </div>
  )
}

export default Main;
