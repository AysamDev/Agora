import { observable, action, makeObservable, computed } from 'mobx'
import { Item } from './Item'

export class Inventory {
    constructor() {
        this.items = []

        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice: action,
            numItems: computed
        })
    }
    addItem = (name,price = 0,quantity = 1) =>
    {
        let checkItem = this.items.find(item => item.name === name)
        checkItem?
        checkItem.quantity++
        :
        this.items.push(new Item(name,price,quantity))
    }

    buyItem = (name) =>
    {
        let index = this.items.findIndex(item => item.name === name)
        this.items[index].quantity > 1?
        this.items[index].quantity--
        :
        this.items.splice(index,1)
    }
    get numItems()
    {
        return this.items.length
    }
    changePrice = (name,price) =>
    {
        this.items.find(item => item.name === name).price = price
    }

    
 }