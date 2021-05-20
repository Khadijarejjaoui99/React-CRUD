import React from 'react'


const TableItem = (props) =>{
    const {items,deleteItem} = props;
    let length = items.length
    const ListItems = length ?(
        items.map(item =>{
            return(
                <div>
                    <tr>
                        <td contenteditable='true' >{item.name}</td>
                        <td contenteditable='true' >{item.price}</td>
                        <td contenteditable='true' >{item.quantity}</td>
                        <td contenteditable='true'>{item.category}</td>
                        <td className= 'action_icone' onClick = {()=>deleteItem(item.id)}>&times;</td>
                    </tr>
                </div>
            )
        })
    ): (
        <h1>There is no item to show</h1>
    )
    return(
        <div className = 'ListItems'>
            <table className = 'content-table'>
                <tr>
                    <th className= 'name title'>Name</th>
                    <th className= 'price title'>Price</th>
                    <th className= 'quantity title'>Quantity</th>
                    <th className= 'category title'>category</th>
                </tr>
                
                {ListItems}
                
            </table>
            
        </div>
    )
}
export default TableItem