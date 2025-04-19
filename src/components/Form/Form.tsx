import { Container, ContainerSucces } from './styles'
import { toast, Toaster } from 'react-hot-toast'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import validator from 'validator'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [formSent, setFormSent] = useState(false)

  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const templateParams = {
      name,
      email,
      subject,
      message,
    }

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID as string
      );
      
      if (result.status === 200) {
        toast.success('Email successfully sent!', {
          position: 'bottom-left',
          duration: 3000,
        })
        setFormSent(true)

        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      }
    } catch (error) {
      toast.error('Failed to send email. Please try again later.', {
        position: 'bottom-left',
      })
    }
  }

  return (
    <>
      <Toaster />

      {formSent ? (
        <ContainerSucces>
          <h3>Thanks for getting in touch!</h3>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setFormSent(false)
            }}
          >
            Back to the top
          </button>
        </ContainerSucces>
      ) : (
        <Container>
          <h2>Get in touch using the form</h2>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                verifyEmail(e.target.value)
              }}
              required
            />

            <input
              placeholder="Subject"
              id="subject"
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <textarea
              required
              placeholder="Send a message to get started."
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              disabled={
                !validEmail || !name || !subject || !message
              }
            >
              Submit
            </button>
          </form>
        </Container>
      )}
    </>
  )
}
