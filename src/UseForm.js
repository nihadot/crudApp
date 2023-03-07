import { useState } from "react"

function UseForm({form, additionalData, endpointUrl}) {
    const [status,setStatus] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = (event)=>{
        if(form) {
            event.preventDefault()
            setStatus("loading")
            setMessage('')

            const finalFormEndpoint = endpointUrl || form.action;
            const data = Array.form(form.element)
        }
    }
  return (
    <div>UseForm</div>
  )
}

export default UseForm