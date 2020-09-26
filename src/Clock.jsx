import React, { useState } from 'react'

export default function Clock() {
    const [hello ,setHello] = useState("")
    const clockTime = ()=>{
        const ele = new Date().toLocaleTimeString()
        return setHello(ele)
    }
 

    setInterval(clockTime,1000)

    
    return (
        <div>
       the time is now {hello}
        </div>
    )
}
