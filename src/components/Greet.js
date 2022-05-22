import React from 'react'

const Greet = (props) => {
console.log(props)
return (<div>
<h1>Hello</h1>
<h2>{props.children}</h2>

</div>

)
}
export default Greet;