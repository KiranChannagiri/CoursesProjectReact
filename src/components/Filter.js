import React from "react"

export default function Filter({filterDatadate})
{
    return (
        <div>
            {
                filterDatadate.map((data,index)=>
                {
                    return (
                        <button key={index}>
                            {data.title}
                        </button>
                    )
                })
            }
        </div>
    )
}
// note that rafc is the shortcut for creating a React Arrow Function Component in some extensions like React Snippets for VSCode.
