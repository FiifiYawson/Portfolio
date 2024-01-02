import {useRef, useState} from 'react'

function MessageSection() {
    const [formState, setFormState] = useState({
        message: {
            value: "",
            error: false,
            errorMessage: ""
        }
    })

    const handleFormVerification = () => {
        const messageValue = formState.message.value

        const newState = {}

        let valid = true

        if(
            messageValue === "" ||
            !messageValue
        ) {
            valid = false

            console.log(messageValue, formState.message.value)

            newState.message = {
                ...formState.message,
                error: false,
                errorMessage: "message is required"
            }
        }

        console.log(valid)

        setFormState((state) => ({
            ...state,
            ...newState,
        }))

        return valid
    }

    const handleSendMessage = (e) => {
        e.preventDefault()

        if(!handleFormVerification()) return

        fetch("/message", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                message: formState.message.value
            })
        })            
    }

    const handleFormFieldOnChange = (e) => setFormState(state => ({
        ...state,
        [e.target.name]: {
            ...state[e.target.name],
            value: e.target.value
        }
    }))

    return (
        <section className="text-white px-app-padding mt-[100px]">
            <form onSubmit={handleSendMessage}>
                <input className="text-black" type='text' name="message" value={formState.message.value} onChange={handleFormFieldOnChange} />
                <input className="text-white" type="submit" />
            </form>
        </section>
    )
}

export default MessageSection