import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'




// ----------------------
// 14 june practice 

// function Hello(){
//     return(
//         <>
//         <h1>hello bahiya</h1>
//         <App/>
//         </>
        
//     )
// }


// const ReactElement =  {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const  anotherEle = (
//     return <reactElement/>;
// )


function Myapp(){
    return (
        <div>
            <h1>custom app ! chai</h1>
        </div>
    )
}

const anotherEle= (
    <a href="hhtps://google.com" target='_blank'>visit google</a>
)

const anotheruser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotheruser // poora tree bnne ke baad variables declare hote hai......
) 



ReactDOM.createRoot(document.getElementById('root')).render(
        // Hello()
        // <Hello/>


        // <>
        //  <App/>
        // <Myapp/>
        // </>

        // Myapp()

        // anotherEle
        reactElement
        // <App />
        

)
