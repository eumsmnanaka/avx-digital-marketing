import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import InputMask from 'react-input-mask'

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  color: #FFD700;
  padding: 2rem;
  min-height: 100vh;
`

const ContactSection = styled(motion.section)`
  display: flex;
  width: 100%;
  max-width: 1200px;
  background-color: transparent;
  border-radius: 15px;
  padding: 3rem;
  gap: 2rem;
  box-shadow: none;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255,236,0,0.8);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  svg {
    font-size: 2rem;
    color: rgba(255,215,0,0.8);
  }
`

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: rgba(255,215,0,0.8);
  font-weight: 600;
`

const Input = styled(motion.input)<{ $hasError?: boolean }>`
  width: 100%;
  padding: 12px;
  background-color: transparent;
  border: 2px solid ${props => props.$hasError ? 'rgba(255,65,54,0.6)' : 'rgba(255,215,0,0.3)'};
  border-radius: 8px;
  color: rgba(255,255,255,0.9);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255,215,0,0.8);
    box-shadow: none;
  }
`

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  resize: vertical;
  min-height: 120px;
`

const SubmitButton = styled(motion.button)`
  background-color: rgba(255,215,0,0.8);
  color: rgba(0,0,0,0.8);
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255,236,0,0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ErrorMessage = styled.span`
  color: rgba(255,65,54,0.8);
  font-size: 0.8rem;
  margin-top: -0.5rem;
`

const SuccessMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: rgba(46,204,64,0.8);
  font-weight: bold;
  margin-top: 1rem;
`

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    let valid = true
    const newErrors = { name: '', email: '', phone: '', message: '' }

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
      valid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório'
      valid = false
    } else if (!/\(\d{2}\)\s\d{4,5}-\d{4}/.test(formData.phone)) {
      newErrors.phone = 'Telefone inválido'
      valid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Aqui você pode adicionar a lógica de envio do formulário
      console.log('Formulário enviado:', formData)
      setIsSubmitted(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' })
    setErrors({ name: '', email: '', phone: '', message: '' })
    setIsSubmitted(false)
  }

  return (
    <ContactContainer>
      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContactInfo>
          <ContactMethod>
            <FaWhatsapp />
            <div>
              <strong>WhatsApp</strong>
              <p>+55 (XX) XXXXX-XXXX</p>
            </div>
          </ContactMethod>
          <ContactMethod>
            <FaEnvelope />
            <div>
              <strong>E-mail</strong>
              <p>contato@avxmarketing.com</p>
            </div>
          </ContactMethod>
          <ContactMethod>
            <FaMapMarkerAlt />
            <div>
              <strong>Localização</strong>
              <p>Cidade, Estado - Brasil</p>
            </div>
          </ContactMethod>
        </ContactInfo>

        {!isSubmitted ? (
          <ContactForm onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                $hasError={!!errors.name}
                placeholder="Seu nome"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                $hasError={!!errors.email}
                placeholder="Seu e-mail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="phone">Telefone</Label>
              <InputMask
                mask="(99) 99999-9999"
                maskChar=""
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              >
                {(inputProps: any) => (
                  <Input
                    {...inputProps}
                    $hasError={!!errors.phone}
                    placeholder="Seu telefone"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                )}
              </InputMask>
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="message">Mensagem</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                $hasError={!!errors.message}
                placeholder="Sua mensagem"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </InputGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane /> Enviar Mensagem
            </SubmitButton>
          </ContactForm>
        ) : (
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCheckCircle />
            Mensagem enviada com sucesso!
            <motion.button
              onClick={handleReset}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
            >
              Enviar outra
            </motion.button>
          </SuccessMessage>
        )}
      </ContactSection>
    </ContactContainer>
  )
}

export default Contact
