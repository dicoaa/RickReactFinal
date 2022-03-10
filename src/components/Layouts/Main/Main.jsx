import React, { useEffect, useState } from 'react'

export const Main = () => {

    const url = 'https://rickandmortyapi.com/api/character/?name='
    const [todos, setTodos] = useState()
    const [nombre, setNombre] = useState()

    const fetchApi = async () => {
        const response = await fetch(url + nombre)
        const responseJSON = await response.json()
        setTodos(responseJSON.results)
    }

    const muestra = (event) => {
        setNombre(event.target.value)
        if(event.keyCode==""){
        fetchApi()
        }
    }

    useEffect(()=>{
        fetchApi()
    },[])

    return (
        <>
            <input onKeyPress={muestra} ></input>
            <div className="general">
                    { !todos ? 'Loading...' : 
                    todos.map( (todo, index)=>{
                        return (
                            <div className="especifico" key={index}>
                                <img className="imagen" src={todo.image}/>
                                <p>{todo.name}</p>                  
                            </div>
                        )
                    })
                    }
            </div>
        </>
    );
}
