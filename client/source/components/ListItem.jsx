import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'


export default function ListItem (props){
  console.log(props.item)

  return (
    <li className="listItem">
      <div className="half">
        <InlineEdit
          text={props.item.name}
        />
      </div>
      <div className="half right">
        <InlineEdit
          text={'$ ' + props.item.price}
        />
      </div>
    </li>
  )
}

/*-------------------
22  updateName={props.updateName}
28  updatePrice={props.updatePrice}
-------------------*/
