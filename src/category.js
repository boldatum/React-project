import React from 'react'

 const Category = ({getCategory, getAll}) => {
    return (
        
            <nav>
                <ul>
                    <li onClick={getAll}>All</li>
                    <li onClick={()=>getCategory("breakfast")}>Breakfast</li>
                    <li onClick={()=>getCategory("lunch")}>Lunch</li>
                    <li onClick={()=>getCategory("shakes")}>Shakes</li>
                </ul>
            </nav>
        
    )
}

export default Category
