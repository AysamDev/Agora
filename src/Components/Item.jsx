
import { Component } from 'react';
import { observer, inject } from 'mobx-react'
class Item extends Component {
    constructor()
    {
        super()

    }
    buyItem = () =>
    {
        this.props.inventory.buyItem(this.props.item.name)
    }
    changePrice = () =>
    {
        let name = this.props.item.name
        let newPrice = prompt(`Enter the new desired price for the ${name}`) || this.props.item.price
        if(isNaN(newPrice))
        {
            alert("Please insert an number!!!")
        }
        else
        {
            this.props.inventory.changePrice(name,newPrice)
        }
        
    }
  render()
  {
    let {name,price,quantity} = this.props.item
    return (
       <li onDoubleClick={this.changePrice}>
           {quantity} {name} available at {price}$ per item
           <button onClick={this.buyItem}>Buy Item</button>
       </li>
    );
  }

}

export default inject('inventory')(observer(Item));
