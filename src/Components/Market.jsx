
import { Component } from 'react';
import Item from './Item'
import { observer , inject} from 'mobx-react'
class Market extends Component {
    constructor()
    {
        super();
        this.state = {
            newItem: ''
          }

    }

    addItem = () => {

        const newItem = this.state.newItem
        if(newItem === '')
        {
            alert('Insert an suitable new item')
           
        }
        else
        {
            this.props.inventory.addItem(newItem)
            this.setState(
                {
                    newItem: ''
                }
            )
        }
    
      }

      handleChange = (event) =>
      {
          const {name,value} = event.target
          this.setState({
              [name]:value
          })
      }
      keyPress = (event) =>
      {
        if(event.charCode === 13)
        {
            this.addItem()
        }
      }
  render()
  {

     
    return (
        <div className="market">
            <input name="newItem" type="text" value={this.state.newItem} onChange={this.handleChange} onKeyPress={this.keyPress}/>
            <button onClick={this.addItem}>Add Item</button>
        {
            <ul>
                {this.props.inventory.items.map(
                    item => 
                    <Item item={item} />
                )}
            </ul>
        }
        </div>
    );
  }

}

export default inject('inventory')(observer(Market));
