import React, {Component} from 'react'
import TableItem from './Components/Table_item/Table_item'
import AddItems from './Components/Add_item/Add_item'

class App extends Component{
  constructor(){
    super();
    this.state = {
        filter : '',
        items : [
                    {id: 1, name:'Football', price: 49.99, quantity: 12, category: 'Sport'},
                    {id: 2, name:'Baseball', price: 9.99, quantity: 15, category: 'Sport'},
                    {id: 3, name:'Basketball', price: 29.99, quantity: 14, category: 'Sport'},
                    {id: 4, name:'iPod Touch', price: 99.99, quantity: 34, category: 'Electronics'},
                    {id: 5, name:'iPhone 5', price: 399.99, quantity: 12, category: 'Electronics'},
                    {id: 6, name:'Nexus 7', price: 199.99, quantity: 23, category: 'Electronics'},
        ]
    }

}
  deleteItem =(id) =>{
   let items = this.state.items
   let i = items.findIndex(item => item.id === id)
   items.splice(i,1)
   this.setState({items})
  }
  addItem = (item)=>{
    item.id = Math.random()
      let items = this.state.items
      items.push(item)
      this.setState({items})
  }

  


 
searchTxt (e){
    this.setState({filter: e.target.value})
}
  render(){
    let {filter, items} = this.state
    let dataSearch = items.filter(item=>
        {
            return Object.keys(item).some(key=>
                typeof item[key] === "string" && item[key].toLowerCase().includes(filter.toLowerCase()))
        }
        )

     return(
       <div className="App container">
         <h1 className= 'text-center'> React Table</h1>
         
        <input type ="search" placeholder="Search an item" id= "search" value = {filter} onChange = {this.searchTxt.bind(this)}/>
         
         <TableItem items = {dataSearch} deleteItem= {this.deleteItem} filterable/>
         <AddItems addItem= {this.addItem}/>
       </div>

     );
  }
}

export default App