import React from "react"

import Header from "./Header"
import Action from "./Action"
import Options from "./Options"
import AddOption from "./AddOption"
import OptionModal from "./OptionModal"

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOpt: undefined,
    }

    //we can use export default for class types and not for variable type like const, let etc..

    // constructor(props) {
    //     super(props)
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleTypeOption = this.handleTypeOption.bind(this)
    //     this.handleRemoveOption = this.handleRemoveOption.bind(this)
    //     this.state = {
    //         options: []
    //     }
    // }

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
    handleOkay = () => {
        this.setState(() => ({ selectedOpt: undefined }))
    }
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }
    handleRemoveOption = (optionTyped) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionTyped !== option
                })
            }
        })
    }
    handlePick = () => {
        let randNum = Math.floor(Math.random()*this.state.options.length)
        //alert(this.state.options[randNum])
        this.setState(() => {
            return {
                selectedOpt: this.state.options[randNum]
            }
        })
    }
    handleTypeOption = (option) => {
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
                <div className="container">
                    <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleRemoveOption={this.handleRemoveOption}
                        />
                        <AddOption handleTypeOption={this.handleTypeOption}/>
                    </div>
                    
                </div>
                
                <OptionModal 
                    selectedOption={this.state.selectedOpt}
                    handleOkay={this.handleOkay}
                />
            </div>
        )
    }
}
