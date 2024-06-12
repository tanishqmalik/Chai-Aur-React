import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'


function Hello(){
    return(
        <>
        <h1>hello bahiya</h1>
        </>
        
    )
}


const ReactElement =  {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const  anotherEle = (
    return <reactElement/>;
)


ReactDOM.createRoot(document.getElementById('root')).render(
        // Hello()
        <Hello/>
        anotherEle()
)
