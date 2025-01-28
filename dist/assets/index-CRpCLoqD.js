import{f as e,d as i,m as t,j as r,F as a,a as o,b as n,c as s,e as l,r as d,g as c,h as m,i as p,L as x,N as h,o as g,B as f,R as b,k as u,l as y,n as w}from"./vendor-D4_HWDDZ.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&i(e)})).observe(document,{childList:!0,subtree:!0})}function i(e){if(e.ep)return;e.ep=!0;const i=function(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?i.credentials="include":"anonymous"===e.crossOrigin?i.credentials="omit":i.credentials="same-origin",i}(e);fetch(e.href,i)}}();const j={colors:{primary:"#6a11cb",secondary:"#4a148c",background:"rgba(255,255,255,0.95)",text:"rgba(0,0,0,0.85)",gray:"rgba(0,0,0,0.6)"},typography:{fontFamily:"'Inter', sans-serif",fontSize:{small:"0.875rem",medium:"1rem",large:"1.25rem"}},spacing:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem"},borderRadius:{sm:"8px",md:"12px",lg:"16px"}},v=e`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  html, body {
    font-family: ${j.typography.fontFamily};
    background-color: ${j.colors.background};
    color: ${j.colors.text};
    line-height: 1.6;
    scroll-behavior: smooth;
    overscroll-behavior-x: none;
  }

  a {
    text-decoration: none;
    color: ${j.colors.primary};
    transition: color 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  input, textarea {
    font-family: ${j.typography.fontFamily};
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${j.colors.primary};
    border-radius: 4px;
  }
`,z="data:image/png;base64,aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbWVCZWhEM1ZDMWVpWFZWVlhselhWSEhkNnhZOGxZY01Rd3F5Nm5SNEFyR2tWSnIrZHh6MGxZalBhRWtCSkJUc1JqTVZCcVF2TU56cGdDSWhCalRqVXpWTkF6ZlJ6TUVHTXpJVG0zaWs3d2Roa3FYQ0gxWDR3QXVLQnJJeGF6Q0NxQVBjNlE0N3lFQmpjd004VVdzeGhKVFliUHRKZHlBNFpTeUZkU0NxdEtCSXg0RUFtd2Z4SUFBQUFBQkpSVTVFcmtKZ2dnPT0K",F=i(t.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  overflow-x: hidden;
  background: url(${z}) no-repeat center center;
  background-size: cover;
  color: ${e=>e.theme.colors.text};
`,k=i(t.section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }
`,V=i(t.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`,U=i(t.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.text};
  text-align: center;
  width: 100%;
  letter-spacing: -1px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 1rem;
  }
`,R=i(t.p)`
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.text};
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,S=i(t.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`,Z=i(t.a)`
  color: ${e=>e.theme.colors.text};
  border: 2px solid ${e=>e.theme.colors.primary};
  padding: 10px 22px;
  border-radius: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.primary};
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(106, 17, 203, 0.2), transparent);
    transition: all 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(106, 17, 203, 0.1), transparent);
    transition: all 0.5s ease;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`,N=i(t.div)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,W=i(t.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${e=>e.theme.colors.text};
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateX(10px);
  }
`,E=i(t.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`,Q=i(t.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`,M=i(t.section)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  background-color: ${e=>e.theme.colors.background};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
`,T=i(t.div)`
  background-color: white;
  border: 2px solid #6a11cb;
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`,B=i(t.div)`
  font-size: 2.5rem;
  color: #6a11cb;
  margin-bottom: 1rem;
`,C=i(t.h3)`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #6a11cb;
`,J=i(t.p)`
  color: rgba(0,0,0,0.7);
  font-size: 0.9rem;
`,$=()=>{const e=[{icon:o,title:"Desenvolvimento Web",description:"Criamos sites modernos e responsivos que se destacam."},{icon:n,title:"Design Responsivo",description:"Seu site perfeito em qualquer dispositivo."},{icon:s,title:"Otimização SEO",description:"Aumente sua visibilidade nos mecanismos de busca."},{icon:l,title:"Estratégia Digital",description:"Transforme sua presença online com estratégias inteligentes."}];return r.jsxs(F,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.8},children:[r.jsxs(k,{children:[r.jsxs(V,{children:[r.jsx(U,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"SiteForge"}),r.jsx(R,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:"Forjando sua presença digital com soluções web personalizadas e de alta performance"}),r.jsx(S,{children:r.jsx(Z,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Nossos Serviços"})}),r.jsx(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,delay:.8},children:["Sites 100% personalizados","Otimização para dispositivos móveis","Suporte técnico especializado"].map(((e,i)=>r.jsxs(W,{whileHover:{scale:1.05},children:[r.jsx(a,{color:"#000"}),e]},i)))})]}),r.jsx(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,delay:.8},children:r.jsx(Q,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,delay:.8},children:r.jsx(t.img,{src:"/logo.svg",alt:"SiteForge - Desenvolvimento de Site Profissional",style:{maxWidth:"300px",height:"300px",borderRadius:"100px",objectFit:"cover"},whileHover:{scale:1.05},whileTap:{scale:.95}})})})]}),r.jsx(M,{children:e.map(((e,i)=>r.jsxs(T,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2*i},whileHover:{scale:1.05},children:[r.jsx(B,{children:r.jsx(e.icon,{})}),r.jsx(C,{children:e.title}),r.jsx(J,{children:e.description})]},i)))})]})},H=i.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 1rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url(${z}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    padding: 80px 1rem 2rem;
  }
`,O=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`,D=i.div`
  background-color: ${e=>e.theme.colors.background};
  border-radius: 15px;
  border: 2px solid #6a11cb;
  padding: 2rem;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 100%;
    margin: 0 auto;
  }
`,I=i.div`
  font-size: 3rem;
  color: #6a11cb;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,X=i.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #6a11cb;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.03em;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,G=i.p`
  font-size: 1.1rem;
  color: rgba(0,0,0,0.7);
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Y=i.div`
  font-size: 2.8rem;
  font-weight: 800;
  color: #6a11cb;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,P=i.button`
  background: linear-gradient(135deg, #6a11cb 0%, #4a148c 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`,K=()=>{const e=[{icon:o,title:"Básico",description:"Landing Page, Design Responsivo, Otimização SEO Básica, Suporte por Email",price:"R$ 35"},{icon:n,title:"Intermediário",description:"Site Completo, Design Personalizado, Otimização SEO Avançada, Integração de Redes Sociais, Suporte Prioritário",price:"R$ 65"},{icon:l,title:"Avançado",description:"Site Empresarial Completo, Design Premium, SEO Especializado, E-commerce, Marketing Digital, Suporte Dedicado 24/7",price:"R$ 120"}];return r.jsxs(H,{children:[r.jsx("h1",{children:"Nossos Serviços"}),r.jsx(O,{children:e.map(((e,i)=>r.jsxs(D,{children:[r.jsx(I,{children:r.jsx(e.icon,{})}),r.jsx(X,{children:e.title}),r.jsx(G,{children:e.description}),r.jsx(Y,{children:e.price}),r.jsx(P,{onClick:()=>(e=>{const i=`https://wa.me/5527999159857?text=${encodeURIComponent(`Olá, tenho interesse no plano ${e}. Gostaria de mais informações.`)}`;window.open(i,"_blank")})(e.title),children:"Contratar"})]},i)))})]})},q=i(t.div)`
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
`,A=i.div`
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
`,L=i.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,_=i.h1`
  font-size: 2.2rem;
  color: #6a11cb;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.03em;
`,ee=i.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`,ie=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  color: #6a11cb;
  font-weight: 500;
  background-color: rgba(106, 17, 203, 0.1);
  padding: 1rem;
  border-radius: 10px;
`,te=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,re=i.label`
  font-size: 0.9rem;
  color: #6a11cb;
  text-align: left;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`,ae=i.input`
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
`,oe=i.textarea`
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
`,ne=i(t.button)`
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
`,se=i.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,le=i.a`
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
`;i.div`
  color: #6a11cb;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`;const de=()=>{const[e,i]=d.useState(""),[t,a]=d.useState(""),[o,n]=d.useState("");return r.jsx(q,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:r.jsx(A,{children:r.jsxs(L,{onSubmit:i=>{i.preventDefault();const r=`https://wa.me/5527999159857?text=${encodeURIComponent(`Olá Joabe! \nMeu nome é: ${e}\nMeu email é: ${t}\n\nMensagem:\n${o}`)}`;window.open(r,"_blank")},children:[r.jsx(_,{children:"Vamos Conversar"}),r.jsx(ee,{children:"Tem um projeto em mente ou quer discutir uma ideia? Preencha o formulário abaixo e envie sua mensagem."}),r.jsx(se,{children:r.jsxs(le,{href:"https://wa.me/5527999159857",target:"_blank",rel:"noopener noreferrer",children:[r.jsx(c,{})," WhatsApp"]})}),r.jsxs(ie,{children:[r.jsx("p",{children:" (27) 99915-9857"}),r.jsx("p",{children:" joabealves000@gmail.com"})]}),r.jsxs(te,{children:[r.jsx(re,{htmlFor:"name",children:"Nome"}),r.jsx(ae,{type:"text",id:"name",value:e,onChange:e=>{i(e.target.value)},required:!0})]}),r.jsxs(te,{children:[r.jsx(re,{htmlFor:"email",children:"Email"}),r.jsx(ae,{type:"email",id:"email",value:t,onChange:e=>{a(e.target.value)},required:!0})]}),r.jsxs(te,{children:[r.jsx(re,{htmlFor:"message",children:"Mensagem"}),r.jsx(oe,{id:"message",value:o,onChange:e=>{n(e.target.value)},required:!0})]}),r.jsx(ne,{type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Enviar Mensagem pelo WhatsApp"})]})})})},ce=i(t.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 1rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url(${z}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    padding: 80px 1rem 2rem;
  }
`,me=i.h1`
  font-size: 1.8rem;
  color: #6a11cb;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,pe=i.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`,xe=i.div`
  flex: 1;
  max-width: 400px;
  border-radius: 50%;
  border: 2px solid #6a11cb;
  overflow: hidden;
  aspect-ratio: 1/1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1024px) {
    max-width: 300px;
  }
`,he=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ge=i.h2`
  font-size: 1.5rem;
  color: rgba(0,0,0,0.7);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,fe=i.p`
  font-size: 1.1rem;
  color: rgba(0,0,0,0.8);
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: -0.02em;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;i.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,i(t.div)`
  background-color: rgba(255,255,255,0.9);
  border-radius: 15px;
  border: 2px solid #6a11cb;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`,i.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #6a11cb;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,i.h3`
  font-size: 1.5rem;
  color: #6a11cb;
  font-weight: 700;
  letter-spacing: -0.03em;
`,i.p`
  font-size: 1.1rem;
  color: rgba(0,0,0,0.7);
  font-weight: 400;
  letter-spacing: -0.02em;
`,i(t.button)`
  background-color: #6a11cb;  // Roxo
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: -0.02em;

  &:hover {
    background-color: #4a148c;  // Roxo mais escuro
    transform: scale(1.05);
  }
`;const be=i.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #6a11cb;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,ue=()=>r.jsx(ce,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:r.jsxs(pe,{children:[r.jsx(xe,{children:r.jsx("img",{src:"/assets/joabe-profile-DUORhcjL.jpg",alt:"Joabe Alves"})}),r.jsxs(he,{children:[r.jsx(me,{children:"Sobre Mim"}),r.jsx(ge,{children:"Desenvolvedor apaixonado por tecnologia"}),r.jsx(fe,{children:"Olá! Sou Joabe Alves, desenvolvedor apaixonado por tecnologia. Transformo ideias em soluções digitais criativas e funcionais."}),r.jsx(fe,{children:"Especializado em desenvolvimento web, busco constantemente aprimorar minhas habilidades em tecnologias modernas como React, TypeScript e outras ferramentas de ponta."}),r.jsx(be,{children:"2025 Todos os direitos reservados a Joabe Alves"})]})]})}),ye=i(t.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;  
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);  
  z-index: 1000;
  backdrop-filter: blur(5px);  
`,we=i.div`
  width: 100%;
  max-width: 1400px;  
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,je=i(x)`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:hover {
    opacity: 1;
  }
`,ve=i.span`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
`,ze=i(t.div)`
  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background: rgba(255, 255, 255, 0.95);  
    backdrop-filter: blur(5px);  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${e=>e.$isOpen?"translateX(0)":"translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    gap: 2rem;
    padding: 2rem;
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`,Fe=i(h)`
  color: #6a11cb;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
  position: relative;
  transition: all 0.3s ease;
  opacity: 1;  
  letter-spacing: -0.02em;

  &:hover {
    opacity: 1;
    color: #6a11cb;  
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #6a11cb;  
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    opacity: 1;
    color: #6a11cb;  

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 1rem 0;
    opacity: 1;  
    transform: translateY(0);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
`,ke=i.button`
  display: none;
  background: none;
  border: none;
  color: #2c3e50;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`,Ve=[{path:"/",label:"Início"},{path:"/servicos",label:"Serviços"},{path:"/sobre",label:"Sobre"},{path:"/contato",label:"Contato"}],Ue=()=>{const[e,i]=d.useState(!1),t=()=>{i(!1)};return r.jsx(ye,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},children:r.jsxs(we,{children:[r.jsxs(je,{to:"/",onClick:t,children:[r.jsx(ve,{children:"SF"}),"SiteForge"]}),r.jsx(ke,{onClick:()=>{i(!e)},children:e?r.jsx(m,{}):r.jsx(p,{})}),r.jsx(ze,{$isOpen:e,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delayChildren:.2,staggerChildren:.1},children:Ve.map(((e,i)=>r.jsx(Fe,{to:e.path,onClick:t,className:({isActive:e})=>e?"active":"",children:e.label},i)))})]})})},Re=i(t.footer)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: center;
  color: ${e=>e.theme.colors.text};
`,Se=i.p`
  font-weight: bold;
`,Ze=()=>r.jsxs(Re,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},children:[r.jsx(Se,{children:"Site Forge"}),r.jsx("p",{children:" 2024 SiteForge. Todos os direitos reservados."})]}),Ne=i.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,We=i.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`,Ee=()=>r.jsxs(g,{theme:j,children:[r.jsx(v,{}),r.jsx(f,{children:r.jsxs(Ne,{children:[r.jsx(Ue,{}),r.jsx(We,{children:r.jsxs(b,{children:[r.jsx(u,{path:"/",element:r.jsx($,{})}),r.jsx(u,{path:"/servicos",element:r.jsx(K,{})}),r.jsx(u,{path:"/sobre",element:r.jsx(ue,{})}),r.jsx(u,{path:"/contato",element:r.jsx(de,{})})]})}),r.jsx(Ze,{})]})})]});y.createRoot(document.getElementById("root")).render(r.jsx(w.StrictMode,{children:r.jsx(g,{theme:j,children:r.jsxs(r.Fragment,{children:[r.jsx(v,{}),r.jsx(Ee,{})]})})}));
