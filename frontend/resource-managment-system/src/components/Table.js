import React from "react";

function Table(props){
    return(
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Url</th>
                        <th>Description</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                {props.table_data.map((item, index) =>(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.url}</td>
                        <td>{item.description}</td>
                        <td><a href="#" onClick={ ()=> props.handleEdit(item._id)}>Edit</a> | <a href="#">Delete</a> </td>  
                    </tr>
                ))}
                    
                </tbody>
                </table>
        </div>
    )
}

export default Table;