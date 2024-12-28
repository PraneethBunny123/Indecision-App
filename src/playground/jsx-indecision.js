var appRoot = document.getElementById('app');

// ////////////////////////////////////////////////////////////////

const user ={
    name: 'Praneeth',
    age: 23,
    location: 'Corpus Christi'
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age ? user.age : 'Anonymous'}</p>}
        <p>Location: {user.location ? user.location : 'Not found'}</p>
    </div>
);

// ////////////////////////////////////////////////////////////////

const temp = {
    title: 'This is an Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}   

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if(option){
        temp.options.push(option)
        e.target.elements.option.value = ""
        renderIndecisionApp()
    }

    
}

const removeAll = () => {

    temp.options = []

    renderIndecisionApp()
}

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random()*temp.options.length)
    const option = temp.options[randNum]
    alert(option)
}

const renderIndecisionApp = () => {

    const template = (
        <div>
            <h1>{temp.title}</h1> 
            {temp.subtitle && <p>{temp.subtitle}</p>}
            <p>{temp.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={temp.options.length===0} onClick={onMakeDecision}>What should I chose?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    temp.options.map((opt) => {
                        return <li key={opt}>{opt}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot)
}

renderIndecisionApp();



