import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import bgTexture from '../assets/bg-texture.png'
import { FaWhatsapp } from 'react-icons/fa'

interface ContactProps {}

const ContactWrapper = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 1rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 80px 1rem 2rem;
  }
`

const ContactContainer = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
    margin: 0 auto;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const ContactTitle = styled.h1`
  font-size: 2.2rem;
  color: #6a11cb;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.03em;
`

const ContactSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  color: #6a11cb;
  font-weight: 500;
  background-color: rgba(106, 17, 203, 0.1);
  padding: 1rem;
  border-radius: 10px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

const Label = styled.label`
  font-size: 0.9rem;
  color: #6a11cb;
  text-align: left;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #6a11cb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a148c;
    box-shadow: 0 0 0 3px rgba(106, 17, 203, 0.1);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #6a11cb;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a148c;
    box-shadow: 0 0 0 3px rgba(106, 17, 203, 0.1);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.95rem;
    min-height: 100px;
  }
`

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 12px;
  background-color: #6a11cb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4a148c;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`

const ContactMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const ContactMethodLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6a11cb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    color: #4a148c;
  }
`

const StatusMessage = styled.div`
  color: #6a11cb;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 50 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 120
    }
  }
}

const hoverVariants = {
  hover: {
    scale: 1.05,
    rotate: 1,
    boxShadow: '0 10px 20px rgba(106, 17, 203, 0.2)',
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 500
    }
  }
}

const Contact: React.FC<ContactProps> = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Formata a mensagem para WhatsApp
    const whatsappMessage = `Olá Joabe! 
Meu nome é: ${name}
Meu email é: ${email}

Mensagem:
${message}`
    
    // Número de WhatsApp com DDD
    const phoneNumber = '5527999159857'
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Link de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Abre o WhatsApp
    window.open(whatsappLink, '_blank')
  }

  return (
    <ContactWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContactTitle>Vamos Conversar</ContactTitle>
        </motion.div>

        <ContactSubtitle>
          Tem um projeto em mente ou quer discutir uma ideia? 
          Preencha o formulário abaixo e envie sua mensagem.
        </ContactSubtitle>

        <ContactMethods>
          <ContactMethodLink 
            as={motion.a}
            href={`https://wa.me/5527999159857`} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={hoverVariants.hover}
          >
            <FaWhatsapp /> WhatsApp
          </ContactMethodLink>
        </ContactMethods>

        <ContactInfo>
          <p> (27) 99915-9857</p>
          <p> joabealves000@gmail.com</p>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <motion.div variants={itemVariants}>
            <FormGroup>
              <Label htmlFor="name">Nome</Label>
              <Input
                as={motion.input}
                whileHover={hoverVariants.hover}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                as={motion.input}
                whileHover={hoverVariants.hover}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FormGroup>
              <Label htmlFor="message">Mensagem</Label>
              <TextArea
                as={motion.textarea}
                whileHover={hoverVariants.hover}
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FormGroup>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SubmitButton 
              as={motion.button}
              type="submit"
              whileHover={hoverVariants.hover}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensagem
            </SubmitButton>
          </motion.div>
        </ContactForm>
      </ContactContainer>
    </ContactWrapper>
  )
}

export default Contact
