import{d as e,m as i,u as t,j as a,F as r,a as n,b as o,c as s,e as l,r as d,f as c,g as p,h as m,L as x,N as h,i as g,o as u,B as f,A as b,R as y,k as v,l as j,n as w}from"./vendor-DCYB8-31.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&i(e)})).observe(document,{childList:!0,subtree:!0})}function i(e){if(e.ep)return;e.ep=!0;const i=function(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?i.credentials="include":"anonymous"===e.crossOrigin?i.credentials="omit":i.credentials="same-origin",i}(e);fetch(e.href,i)}}();const z="data:image/png;base64,aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbWVCZWhEM1ZDMWVpWFZWVlhselhWSEhkNnhZOGxZY01Rd3F5Nm5SNEFyR2tWSnIrZHh6MGxZalBhRWtCSkJUc1JqTVZCcVF2TU56cGdDSWhCalRqVXpWTkF6ZlJ6TUVHTXpJVG0zaWs3d2Roa3FYQ0gxWDR3QXVLQnJJeGF6Q0NxQVBjNlE0N3lFQmpjd004VVdzeGhKVFliUHRKZHlBNFpTeUZkU0NxdEtCSXg0RUFtd2Z4SUFBQUFBQkpSVTVFcmtKZ2dnPT0K",k=e(i.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  overflow-x: hidden;
  background: url(${z}) no-repeat center center;
  background-size: cover;
  color: ${e=>e.theme.colors.text};
`,F=e(i.section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 4rem 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1rem 2rem;
  }
`,V=e(i.div)`
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
`,S=e(i.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 300px;
    margin-top: 2rem;
  }
`,U=e(i.h1)`
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
`;e(i.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(106, 17, 203, 0.8);
  line-height: 1.6;
  max-width: 600px;
  text-align: center;
  letter-spacing: 0.5px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    max-width: 90%;
    padding: 0 15px;
  }
`;const R=e(i.p)`
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.text};
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,Z=e(i.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`,N=e(i.a)`
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
`;e(i.a)`
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
`;const C=e(i.div)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,W=e(i.div)`
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
`,M=e(i.section)`
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
`,E=e(i.div)`
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
`,Q=e(i.div)`
  font-size: 2.5rem;
  color: #6a11cb;
  margin-bottom: 1rem;
`,$=e(i.h3)`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #6a11cb;
`,H=e(i.p)`
  color: rgba(0,0,0,0.7);
  font-size: 0.9rem;
`,T=e(i.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(106, 17, 203, 0.15);
  color: #6a11cb;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 650;
  z-index: 1000;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(106, 17, 203, 0.25);
  box-shadow: 0 3px 5px rgba(106, 17, 203, 0.08);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgba(106, 17, 203, 0.25);
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    font-size: 0.7rem;
    padding: 6px 10px;
  }
`,B=e(i.div)`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  color: #6a11cb;
`,J=()=>{const e=t(),d=()=>{e("/servicos")},c=[{icon:o,title:"Desenvolvimento Web",description:"Criamos sites modernos e responsivos que se destacam."},{icon:s,title:"Design Responsivo",description:"Seu site perfeito em qualquer dispositivo."},{icon:l,title:"Otimização SEO",description:"Aumente sua visibilidade nos mecanismos de busca."},{icon:r,title:"Estratégia Digital",description:"Transforme sua presença online com estratégias inteligentes."}];return a.jsxs(k,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[a.jsxs(T,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5,delay:1},onClick:d,children:[a.jsx(B,{initial:{rotate:0},animate:{rotate:[0,15,-15,0]},transition:{duration:1,repeat:1/0,repeatDelay:2},children:a.jsx(r,{})}),"3 Semanas Grátis!"]}),a.jsxs(F,{children:[a.jsxs(V,{children:[a.jsx(U,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"SiteForge"}),a.jsx(R,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,delay:.4},children:"Forjando sua presença digital com soluções web personalizadas e de alta performance"}),a.jsx(Z,{children:a.jsx(N,{onClick:d,children:"NOSSOS SERVIÇOS"})}),a.jsx(C,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,delay:.8},children:["Sites 100% personalizados","Otimização para dispositivos móveis","Suporte técnico especializado"].map(((e,i)=>a.jsxs(W,{whileHover:{scale:1.05},children:[a.jsx(n,{color:"#000"}),e]},i)))})]}),a.jsx(S,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,delay:.8},children:a.jsx(i.img,{src:"/logo.svg",alt:"SiteForge - Desenvolvimento de Site Profissional",style:{maxWidth:"300px",height:"300px",borderRadius:"100px",objectFit:"cover"},whileHover:{scale:1.05},whileTap:{scale:.95}})})]}),a.jsx(M,{children:c.map(((e,i)=>a.jsxs(E,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2*i},children:[a.jsx(Q,{children:a.jsx(e.icon,{})}),a.jsx($,{children:e.title}),a.jsx(H,{children:e.description})]},i)))})]})},I=e(i.section)`
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
`,O=e(i.div)`
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
`,D=e(i.div)`
  background-color: ${e=>e.theme.colors.background};
  border: 2px solid #6a11cb;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  ${e=>e.highlight&&"\n    &::before {\n      content: 'MAIS POPULAR';\n      position: absolute;\n      top: 15px;\n      right: -30px;\n      background-color: #ffd700;\n      color: #4a148c;\n      padding: 5px 30px;\n      transform: rotate(45deg);\n      font-size: 0.7rem;\n      font-weight: bold;\n      z-index: 10;\n    }\n  "}

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(106, 17, 203, 0.1);
  }
`,q=e.div`
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
`,G=e.h2`
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
`,X=e.p`
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
`,Y=e.div`
  font-size: 2.8rem;
  font-weight: 800;
  color: #6a11cb;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,P=e.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,L=e.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text};
  opacity: 0.8;
`,A=e.button`
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
`,K=[{icon:r,title:"Teste Grátis <small>(3 semanas)</small>",description:"Transforme sua presença online sem custo! Inclui:\n• Landing Page personalizada\n• Design 100% responsivo\n• Suporte inicial\n• Sem compromisso de contratação",price:"R$ 0",features:["Landing Page Exclusiva","Design Responsivo","Configuração Básica","Sem Custo"],highlight:!0},{icon:o,title:"Básico",description:"Ideal para pequenos negócios que buscam uma presença digital profissional",price:"R$ 35",features:["Site Institucional","Otimização SEO Básica","Suporte por E-mail","1 Página Personalizada"]},{icon:s,title:"Intermediário",description:"Solução completa para empresas que precisam de uma presença online robusta",price:"R$ 65",features:["Site Completo","Design Personalizado","SEO Avançado","Integração Social"]},{icon:r,title:"Avançado",description:"Pacote premium para empresas que buscam dominância digital",price:"R$ 120",features:["Site Empresarial","Design Premium","Marketing Digital","Suporte 24/7"]}],_={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.3,staggerChildren:.2}}},ee={hidden:{opacity:0,scale:.9,y:50},visible:{opacity:1,scale:1,y:0,transition:{duration:.5,type:"spring",stiffness:120}},hover:{scale:1.05,transition:{duration:.2}}},ie=()=>a.jsxs(I,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[a.jsx(i.h1,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:"Nossos Serviços"}),a.jsx(O,{variants:_,initial:"hidden",animate:"visible",children:K.map(((e,i)=>a.jsxs(D,{initial:"hidden",animate:"visible",variants:ee,whileHover:"hover",highlight:e.highlight,onClick:()=>(e=>{const i=`https://wa.me/5527999159857?text=${encodeURIComponent(`Olá, tenho interesse no plano ${e}. Gostaria de mais informações.`)}`;window.open(i,"_blank")})(e.title),children:[a.jsx(q,{children:a.jsx(e.icon,{})}),a.jsx(G,{dangerouslySetInnerHTML:{__html:e.title}}),a.jsx(X,{children:e.description}),a.jsx(Y,{children:e.price}),e.features&&a.jsx(P,{children:e.features.map(((e,i)=>a.jsxs(L,{children:[a.jsx(n,{color:"#6a11cb"}),e]},i)))}),a.jsx(A,{children:"Contratar"})]},i)))})]}),te=e(i.div)`
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
`,ae=e(i.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`,re=e.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`,ne=e.div`
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
`,oe=e.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.8;
  color: #333;
  opacity: 0.9;
  text-align: justify;
`,se=e(i.div)`
  background-color: rgba(106, 17, 203, 0.05);
  border-left: 4px solid #6a11cb;
  padding: 1.5rem;
  margin: 1rem 0;
  font-style: italic;
`;e.h1`
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
`,e.h2`
  font-size: 1.5rem;
  color: rgba(0,0,0,0.7);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,e.p`
  font-size: 1.1rem;
  color: rgba(0,0,0,0.8);
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: -0.02em;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,e.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,e.div`
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
`,e(i.div)`
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
`,e.div`
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
`,e.h3`
  font-size: 1.5rem;
  color: #6a11cb;
  font-weight: 700;
  letter-spacing: -0.03em;
`,e.p`
  font-size: 1.1rem;
  color: rgba(0,0,0,0.7);
  font-weight: 400;
  letter-spacing: -0.02em;
`,e(i.button)`
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
`,e.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #6a11cb;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;const le={initial:{opacity:0,scale:.9},in:{opacity:1,scale:1,transition:{duration:.6,type:"spring",stiffness:100}},out:{opacity:0,scale:.9}},de={initial:{opacity:0,y:50},in:{opacity:1,y:0,transition:{duration:.6,type:"spring",stiffness:100}}},ce={initial:{opacity:0,rotate:-10,scale:.8},in:{opacity:1,rotate:0,scale:1,transition:{duration:.7,type:"spring",stiffness:60}},hover:{scale:1.1,rotate:5,transition:{duration:.3}}},pe=()=>a.jsx(te,{initial:"initial",animate:"in",exit:"out",variants:le,children:a.jsxs(ae,{initial:"initial",animate:"in",variants:de,children:[a.jsx(i.h1,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.6,type:"spring",stiffness:100},children:"Sobre Mim"}),a.jsxs(re,{children:[a.jsx(ne,{children:a.jsx(i.img,{src:"/assets/joabe-profile-DUORhcjL.jpg",alt:"Joabe Alves",variants:ce,whileHover:"hover"})}),a.jsxs(oe,{children:[a.jsx(i.p,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3,type:"spring",stiffness:100},children:"Olá! Sou Joabe, um desenvolvedor apaixonado por transformar ideias em experiências digitais incríveis. Minha jornada no mundo da tecnologia começou não como um plano calculado, mas como uma aventura alimentada por curiosidade e uma sede de aprender."}),a.jsx(se,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.5,type:"spring",stiffness:100},children:'"Cada linha de código que escrevo é uma oportunidade de criar algo que pode mudar a vida de alguém. Não sou apenas um desenvolvedor, sou um artesão digital que transforma sonhos em realidade."'}),a.jsx(i.p,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.7,type:"spring",stiffness:100},children:"Comecei minha carreira com uma mistura de fascínio e desafio. Cada projeto não é apenas um trabalho, mas uma oportunidade de resolver problemas únicos e criar soluções que realmente fazem a diferença. Minha especialidade? Desenvolver websites que não são apenas bonitos, mas verdadeiramente funcionais e centrados no usuário."}),a.jsxs(i.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5,delay:.9,type:"spring",stiffness:100},children:[a.jsx("h3",{children:"Meus Valores"}),a.jsxs("ul",{children:[a.jsx("li",{children:" Inovação constante"}),a.jsx("li",{children:" Colaboração genuína"}),a.jsx("li",{children:" Aprendizado contínuo"}),a.jsx("li",{children:" Foco no impacto humano"})]})]}),a.jsx(i.p,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5,delay:1.1,type:"spring",stiffness:100},children:"Hoje, trabalho com uma missão clara: ajudar empreendedores e empresas a conquistarem o mundo digital. Cada projeto é uma parceria, onde sua visão se encontra com minha expertise para criar algo verdadeiramente extraordinário."}),a.jsxs(i.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:1.3,type:"spring",stiffness:100},children:[a.jsx("h3",{children:"Vamos Transformar Sua Ideia em Realidade?"}),a.jsx("p",{children:"Se você está buscando mais do que um desenvolvedor - mas um parceiro que realmente entende sua visão - estou pronto para embarcar nessa jornada com você. Vamos criar algo incrível juntos!"})]})]})]})]})}),me=e(i.div)`
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
`,xe=e(i.div)`
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
`,he=e.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,ge=e.h1`
  font-size: 2.2rem;
  color: #6a11cb;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.03em;
`,ue=e.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`,fe=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  color: #6a11cb;
  font-weight: 500;
  background-color: rgba(106, 17, 203, 0.1);
  padding: 1rem;
  border-radius: 10px;
`,be=e.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,ye=e.label`
  font-size: 0.9rem;
  color: #6a11cb;
  text-align: left;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`,ve=e.input`
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
`,je=e.textarea`
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
`,we=e(i.button)`
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
`,ze=e.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,ke=e.a`
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
`;e.div`
  color: #6a11cb;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`;const Fe={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.3,staggerChildren:.2}}},Ve={hidden:{opacity:0,scale:.9,y:50},visible:{opacity:1,scale:1,y:0,transition:{duration:.5,type:"spring",stiffness:120}}},Se={hover:{scale:1.05,rotate:1,boxShadow:"0 10px 20px rgba(106, 17, 203, 0.2)",transition:{duration:.1,type:"spring",stiffness:500}}},Ue=()=>{const[e,t]=d.useState(""),[r,n]=d.useState(""),[o,s]=d.useState("");return a.jsx(me,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:a.jsxs(xe,{as:i.div,variants:Fe,initial:"hidden",animate:"visible",children:[a.jsx(i.div,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:a.jsx(ge,{children:"Vamos Conversar"})}),a.jsx(ue,{children:"Tem um projeto em mente ou quer discutir uma ideia? Preencha o formulário abaixo e envie sua mensagem."}),a.jsx(ze,{children:a.jsxs(ke,{as:i.a,href:"https://wa.me/5527999159857",target:"_blank",rel:"noopener noreferrer",whileHover:Se.hover,children:[a.jsx(c,{})," WhatsApp"]})}),a.jsxs(fe,{children:[a.jsx("p",{children:" (27) 99915-9857"}),a.jsx("p",{children:" joabealves000@gmail.com"})]}),a.jsxs(he,{onSubmit:i=>{i.preventDefault();const t=`https://wa.me/5527999159857?text=${encodeURIComponent(`Olá Joabe! \nMeu nome é: ${e}\nMeu email é: ${r}\n\nMensagem:\n${o}`)}`;window.open(t,"_blank")},children:[a.jsx(i.div,{variants:Ve,children:a.jsxs(be,{children:[a.jsx(ye,{htmlFor:"name",children:"Nome"}),a.jsx(ve,{as:i.input,whileHover:Se.hover,type:"text",id:"name",value:e,onChange:e=>t(e.target.value),required:!0})]})}),a.jsx(i.div,{variants:Ve,children:a.jsxs(be,{children:[a.jsx(ye,{htmlFor:"email",children:"Email"}),a.jsx(ve,{as:i.input,whileHover:Se.hover,type:"email",id:"email",value:r,onChange:e=>n(e.target.value),required:!0})]})}),a.jsx(i.div,{variants:Ve,children:a.jsxs(be,{children:[a.jsx(ye,{htmlFor:"message",children:"Mensagem"}),a.jsx(je,{as:i.textarea,whileHover:Se.hover,id:"message",value:o,onChange:e=>s(e.target.value),required:!0})]})}),a.jsx(i.div,{variants:Ve,children:a.jsx(we,{as:i.button,type:"submit",whileHover:Se.hover,whileTap:{scale:.95},children:"Enviar Mensagem"})})]})]})})},Re=e(i.nav)`
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
`,Ze=e.div`
  width: 100%;
  max-width: 1400px;  
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ne=e(x)`
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
`,Ce=e.span`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
`,We=e(i.div)`
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
`,Me=e(h)`
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
`,Ee=e.button`
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
`,Qe=[{path:"/",label:"Início"},{path:"/servicos",label:"Serviços"},{path:"/sobre",label:"Sobre"},{path:"/contato",label:"Contato"}],$e=()=>{const[e,i]=d.useState(!1),t=()=>{i(!1)};return a.jsx(Re,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},children:a.jsxs(Ze,{children:[a.jsxs(Ne,{to:"/",onClick:t,children:[a.jsx(Ce,{children:"SF"}),"SiteForge"]}),a.jsx(Ee,{onClick:()=>{i(!e)},children:e?a.jsx(p,{}):a.jsx(m,{})}),a.jsx(We,{$isOpen:e,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delayChildren:.2,staggerChildren:.1},children:Qe.map(((e,i)=>a.jsx(Me,{to:e.path,onClick:t,className:({isActive:e})=>e?"active":"",children:e.label},i)))})]})})},He=e(i.footer)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: center;
  color: ${e=>e.theme.colors.text};
`,Te=e.p`
  font-weight: bold;
`,Be=()=>a.jsxs(He,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},children:[a.jsx(Te,{children:"Site Forge"}),a.jsx("p",{children:" 2024 SiteForge. Todos os direitos reservados."})]}),Je={colors:{primary:"#6a11cb",secondary:"#4a148c",background:"rgba(255,255,255,0.95)",text:"rgba(0,0,0,0.85)",gray:"rgba(0,0,0,0.6)"},typography:{fontFamily:"'Inter', sans-serif",fontSize:{small:"0.875rem",medium:"1rem",large:"1.25rem"}},spacing:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem"},borderRadius:{sm:"8px",md:"12px",lg:"16px"}},Ie=g`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  html, body {
    font-family: ${Je.typography.fontFamily};
    background-color: ${Je.colors.background};
    color: ${Je.colors.text};
    line-height: 1.6;
    scroll-behavior: smooth;
    overscroll-behavior-x: none;
  }

  a {
    text-decoration: none;
    color: ${Je.colors.primary};
    transition: color 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  input, textarea {
    font-family: ${Je.typography.fontFamily};
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${Je.colors.primary};
    border-radius: 4px;
  }
`,Oe=e.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,De=e.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`,qe=()=>a.jsxs(u,{theme:Je,children:[a.jsx(Ie,{}),a.jsx(f,{children:a.jsxs(Oe,{children:[a.jsx($e,{}),a.jsx(De,{children:a.jsx(d.Suspense,{fallback:a.jsx("div",{children:"Carregando..."}),children:a.jsx(b,{mode:"wait",children:a.jsxs(y,{children:[a.jsx(v,{path:"/",element:a.jsx(J,{})}),a.jsx(v,{path:"/servicos",element:a.jsx(ie,{})}),a.jsx(v,{path:"/sobre",element:a.jsx(pe,{})}),a.jsx(v,{path:"/contato",element:a.jsx(Ue,{})})]})})})}),a.jsx(Be,{})]})})]});j.createRoot(document.getElementById("root")).render(a.jsx(w.StrictMode,{children:a.jsx(u,{theme:Je,children:a.jsxs(a.Fragment,{children:[a.jsx(Ie,{}),a.jsx(qe,{})]})})}));
