import React from "react";

export default function Form(){
    const [form, setForm] = React.useState({
        firstName:"",
        lastName: "",
        email:"",
        comments:"",
        isFriendly: true,
        employment: "",
        favColor:""
    })
    

    
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: type === "checkbox" ? checked : value
            }
        })
        
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(form)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={form.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={form.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={form.email}
            />
            <textarea 
                onChange={handleChange}
                name="comments"
                value={form.comments}
            />
            <br/>
            <br/>
            <input 
                type="checkbox"
                id="isFriendly"
                checked={form.isFriendly}
                onChange={handleChange} 
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are You Friendly</label>
            <br/>
            <br/>

            <a>Current employment status</a>
            <input
                type="radio"
                id="full-time"
                name="employment"
                value="full-time"
                checked={form.employment === "full-time"}
                onChange={handleChange} 
            />
            <label htmlFor="full-time">Full-time</label>
            <br/>

            <input
                type="radio"
                id="part-time"
                name="employment"
                value="part-time"
                checked={form.employment === "part-time"}
                onChange={handleChange} 
            />
            <label htmlFor="part-time">Part-time</label>
            <br/>

            <input
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked={form.employment === "unemployed"}
                onChange={handleChange} 
            />
            <label htmlFor="unemployed">Unemployed</label>
            <br/>
            <br/>            
            
            <label htmlFor="favColor">What is your fvorit color?</label>
            <br/>
            <select 
                id="favColor" 
                value={form.favColor} 
                onChange={handleChange} 
                name="favColor"
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <button>Submit</button>
        </form>
    )
}