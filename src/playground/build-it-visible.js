class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisbility = this.handleToggleVisbility.bind(this)
        this.state = {
            visibility: true,
        }
    }
    handleToggleVisbility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggleVisbility}>{this.state.visibility ? "show details" : "hide details"}</button>
                <p>{this.state.visibility ? "" : "Hey. These are some details you can now see!"}</p>
            </div>

        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))

////////////////////////////////////////////////////////////////////////////////////////////

// const obj = {
//     title: "Visiblity Toggle",
//     buttonName: "Show details",
//     caption: ""
// }

// const toggle = () => {
//     if(obj.buttonName === "Show details"){
//         obj.buttonName = "Hide details"
//         obj.caption = "Hey. These are some details you can now see!"
//     }else{
//         obj.buttonName = "Show details"
//         obj.caption = ""
//     }
//     renderVisible()
// }

// const renderVisible = () => {

//     const template = (
//         <div>
//             <h1>{obj.title}</h1>
//             <button onClick={toggle}>{obj.buttonName}</button>
//             <p>{obj.caption}</p>
//         </div>
        
//     )
    
//     ReactDOM.render(template, appRoot);
// }

// renderVisible();

///////////////////////////////////////////////////////////////////////////////////////////

// var appRoot = document.getElementById('app');

// let visiblity = false

// const toggle = () => {

//     visiblity = !visiblity
//     renderVisibility()
// }

// const renderVisibility = () => {

//     const template = (
//         <div>
//             <h1>Visiblity Toggle</h1>
//             <button onClick={toggle}>{visiblity ? "Hide details" : "Show details"}</button>
//             {visiblity && <p>Hey. These are some details you can now see!</p>}
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// renderVisibility()

///////////////////////////////////////////////////////////////////////////////////////////