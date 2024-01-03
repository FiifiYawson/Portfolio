import { useState } from 'react'
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

function MessageSection() {
    const [formFieldsState, setFormFieldsState] = useState({
        message: {
            value: "",
            error: false,
            errorMessage: ""
        }
    })

    const [formStatus, setFormStatus] = useState({
        sending: false,
        sent: false,
        error: false,
        statusMessage: "",
    })

    const handleFormVerification = () => {
        const messageValue = formFieldsState.message.value

        const newState = {}

        let valid = true

        if (
            messageValue === "" ||
            !messageValue
        ) {
            valid = false

            newState.message = {
                ...formFieldsState.message,
                error: true,
                errorMessage: "message is required"
            }
        }

        setFormFieldsState((state) => ({
            ...state,
            ...newState,
        }))

        return valid
    }

    const handleSendMessage = async (e) => {
        e.preventDefault()

        setFormStatus({
            ...formStatus,
            sending: true
        })

        if (!handleFormVerification()) return

        const res = await fetch("/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: formFieldsState.message.value
            })
        })

        if(res.status === 200){
            setFormStatus({
                ...formStatus,
                sending: false,
                sent: true,
                statusMessage: "Message sent"
            })
        }

        setTimeout(()=>{
            setFormStatus({
                ...formStatus,
                sent: false,
                error: false,
                statusMessage: ""
            })
        }, 6000)
    }

    const handleFormFieldOnChange = (e) => {        
        setFormFieldsState(state => ({
            ...state,
            [e.target.name]: {
                ...state[e.target.name],
                value: e.target.value,
                error: false,
                errorMessage: "",
            }
        }))
    }


    return (
        <section className="text-white px-app-padding mt-[150px]">
            <Box mb="40px">
                <Typography variant='h2' m="auto" className='w-fit after:block after:rounded-t-[80%] after:rounded-br-[90%] after:h-[20px] after:bg-primary-color after:blur-xl'>Message me</Typography>
            </Box>
            <form className='flex flex-col gap-5' onSubmit={handleSendMessage}>
                <TextField
                    variant='filled'
                    placeholder='send me a message'
                    label="message *"
                    onInput= {handleFormFieldOnChange}
                    value={formFieldsState.message.value}    
                    error={formFieldsState.message.error}
                    helperText={formFieldsState.message.error && formFieldsState.message.errorMessage}
                    name='message'                
                    multiline
                    FormHelperTextProps={{
                        sx: {
                            fontSize: "12px"
                        }
                    }}
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
                ><Typography className="text-black" variant='body2'>
                    {formStatus.sending ? "...sending" : "send"}
                </Typography></Button>
            </form>
            {formStatus.sent && <Typography variant='subtitle1'>{formStatus.statusMessage}</Typography>}
        </section>
    )
}

export default MessageSection