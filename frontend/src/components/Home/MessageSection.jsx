import { useState } from 'react'
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

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

        if (
            messageValue === "" ||
            !messageValue
        ) {
            valid = false

            newState.message = {
                ...formState.message,
                error: false,
                errorMessage: "message is required"
            }
        }

        setFormState((state) => ({
            ...state,
            ...newState,
        }))

        return valid
    }

    const handleSendMessage = (e) => {
        e.preventDefault()

        if (!handleFormVerification()) return

        fetch("/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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
            <form className='flex flex-col gap-5' onSubmit={handleSendMessage}>
                <TextField
                    variant='filled'
                    placeholder='send me a message'
                    label="message"
                    onInput= {handleFormFieldOnChange}
                    value={formState.message.value}    
                    name='message'                
                    multiline
                    InputLabelProps={{
                        sx: {
                            fontSize: "20px",
                        }
                    }}
                    inputProps={{
                        sx: {
                            fontSize: "20px",
                            lineHeight: "100%",
                            minHeight: "50px",
                            color: "white"
                        }
                    }}
                    InputProps={{
                        sx : {
                            "&&:hover,&&:focus": {
                                backgroundColor: "rgba(255, 255, 255, 0.15)",
                            },
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                        }
                    }}
                />
                <Button
                    variant='contained'
                    type="submit"
                    className='py-3'
                ><Typography className="text-black" variant='body2'>Send</Typography></Button>
            </form>
        </section>
    )
}

export default MessageSection