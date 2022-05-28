import React, { useEffect, useState } from 'react'

function Api() {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((result)=>{
            result.json().then((res)=>{
                // console.log(res);
                setData(res)
            })
        })
    },[])

    return (
        <div>
            <table>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>body</td>
                </tr>
                {
                    data.map((items)=>
                        <tr>
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.body}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    )
}

export default Api