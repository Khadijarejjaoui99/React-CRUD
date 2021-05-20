import React, {Component} from 'react'

class AddItems extends Component{
    state={
        name : 'name ',
        price : 'price ',
        quantity : 'quantity ',
        category : 'category '
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            name : '' ,
            price : ' ',
            quantity : '',
            category : ''

        })
    }
    render(){
       return(
         <div>
           <form onSubmit= {this.handleSubmit}>
               <input type = 'text' placeholder= "Enter Name" id= "name" onChange={this.handleChange} />
               <input type = 'number' placeholder= "Enter Price" id= "price" onChange={this.handleChange} value= {this.state.price}/>
               <input type = 'number' placeholder= "Enter Quantity" id= "quantity" onChange={this.handleChange} value= {this.state.quantity}/>
               <input type = 'text' placeholder= "Enter Category" id= "category" onChange={this.handleChange}/>
               <input type="submit" value = 'Add'/>
           </form>
           
         </div>
  
       );
    }
  }
  
  export default AddItems