import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

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
  background-color: rgba(0,0,0,0.7);
  border-radius: 15px;
  padding: 3rem;
  gap: 2rem;

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
  color: #FFEC00;

  svg {
    font-size: 2rem;
    color: #FFD700;
  }
`

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormInput = styled.input`
  padding: 0.75rem;
  background-color: rgba(255,255,255,0.1);
  border: 1px solid #FFD700;
  color: #FFEC00;
  border-radius: 5px;

  &::placeholder {
    color: rgba(255,215,0,0.7);
  }
`

const FormTextarea = styled.textarea`
  padding: 0.75rem;
  background-color: rgba(255,255,255,0.1);
  border: 1px solid #FFD700;
  color: #FFEC00;
  border-radius: 5px;
  min-height: 150px;

  &::placeholder {
    color: rgba(255,215,0,0.7);
  }
`

const SubmitButton = styled(motion.button)`
  background-color: #FFD700;
  color: #000000;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FFEC00;
  }
`

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de envio de formulário
    console.log('Formulário enviado:', formData)
    alert('Mensagem enviada com sucesso!')
  }

  return (
    <ContactContainer>
      <ContactSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ContactInfo>
          <h2>Fale Conosco</h2>
          <ContactMethod>
            <FaWhatsapp />
            <span>(11) 99999-9999</span>
          </ContactMethod>
          <ContactMethod>
            <FaEnvelope />
            <span>contato@avxmarketing.com.br</span>
          </ContactMethod>
          <ContactMethod>
            <FaMapMarkerAlt />
            <span>São Paulo, SP - Brasil</span>
          </ContactMethod>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormInput 
            type="text" 
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <FormInput 
            type="email" 
            name="email"
            placeholder="Seu Email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <FormTextarea 
            name="message"
            placeholder="Sua Mensagem"
            value={formData.message}
            onChange={handleChange}
            required 
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar Mensagem
          </SubmitButton>
        </ContactForm>
      </ContactSection>
    </ContactContainer>
  )
}

export default Contact
