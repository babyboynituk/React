function customRender(reactElement, mainContainer){

   /* const domElement= document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    mainReneder.appendchild(domElement)*/
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in porps){
        domElement.setAttribute(prob,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)



}



const reactElement={
    type:'a',
    props:{href:"https://www.google.com",
        target:"_blank"
    },
    children:"click me to visit the google"

}
const anotherElement=(<a href="http://google.com" target="_blank"> Visited node</a>)
const maincontainer=document.querySelectorAll('#root')
 render( anotherElement);