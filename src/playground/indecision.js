class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleTypeOption = this.handleTypeOption.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this)
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("options")
            const options = JSON.parse(json)

            if(options) {
                this.setState(() => ({ options }))
            }
        }
        catch(e) {
            // Do nothing 
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            console.log(json)
            localStorage.setItem("options", json)
        }
    }

    // handleDeleteOptions() {
    //     this.setState(() => {
    //         return {
    //             options: []
    //         }
    //     })
    // }
    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }
    handleRemoveOption(optionTyped) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionTyped !== option
                })
            }
        })
    }
    handlePick() {
        let randNum = Math.floor(Math.random()*this.state.options.length)
        alert(this.state.options[randNum])
    }
    handleTypeOption(option) {
        if(!option) {
            return "Enter a valid option"
        }
        else if(this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        }
        
        this.setState((prevState) => ({options: prevState.options.concat([option])}))
    }
    render() {
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption handleTypeOption={this.handleTypeOption}/>
            </div>
        )
    }
}


//stateless function component
const Header = (props) => {
    return (
        <div> 
            <h1>{props.title}</h1>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision"
}

// //class based react component
// class Header extends React.Component {
//     render() {
//         return (
//             <div> 
//                 <h1>{this.props.title}</h1>
//                 <h3>{this.props.subtitle}</h3>
//             </div>
//         )
//     }
// }

//stateless function component
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

// // class based react component
// class Action extends React.Component { 
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// }

//stateless function component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Enter options to start</p>}
            {
                props.options.map((opt) => <Option key={opt} optionText={opt} handleRemoveOption={props.handleRemoveOption}/>)
            }
        </div>
    )
}

// // class based react component
// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((opt) => <Option key={opt} optionText={opt}/>
//                     )
//                 }
//             </div>
//         )
//     }
// }

//stateless function component
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={() => {
                props.handleRemoveOption(props.optionText)
            }}>remove</button>
        </div>
    )
}

// // class based react component
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            Error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()

        const type = e.target.elements.typo.value.trim()
        const error = this.props.handleTypeOption(type)

        this.setState(() => ({Error: error}))

        if(!error) {
            e.target.elements.typo.value = ""
        }  
    }
    render() {
        return (
            <div>
                {this.state.Error && <p>{this.state.Error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="typo"></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))