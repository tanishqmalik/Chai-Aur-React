// function customRender(reactElement, Container){
//     // const domElement = document.createElement(reactElement.type)
//     // domElement.innerHTML= reactElement.children
//     // domElement.setAttribute('href', reactElement.props.href)
//     // domElement.setAttribute('target', reactElement.props.target)

//     // mainContainer.appendChild(domElement)

//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML= reactElement.children

//     for (const prop in reactElement.props) {
//         if(prop==='children') continue;
//         domElement.setAttribute(prop,reactElement.props[prop])
//     }

//     Container.appendChild(domElement)
// }


// const reactElement =  {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const mainContainer =document.getElementById("root")

// customRender(reactElement, mainContainer)


// -------------
// 14 june practice 

// function CustomRender(reactElement, Container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     Container.appendChild(domElement)
// }


function CustomRender(Element, Container){
    const DomElement= document.createElement(Element.type)
    DomElement.innerHTML = Element.children

    for (const prop in Element.props) {
        if(prop==='children'){
            continue;
        }
        DomElement.setAttribute(prop, Element.props[prop])
    }
    Container.appendChild(DomElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children : 'click me to visit google'
}

const mainContainer = document.getElementById('root');

CustomRender(reactElement, mainContainer)