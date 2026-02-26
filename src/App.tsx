import React, { useState } from 'react';
import { Phone, Check, MapPin, Star, ChevronRight, X, Calendar, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Data Configuration
const EXPERT = {
  name: "SorriClinic",
  role: "Dentista | Implantes, Estética e Prótese",
  city: "Pouso Alegre, MG",
  whatsapp: "https://api.whatsapp.com/send/?phone=553530225988&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20primeira%20consulta%20gratuita.&type=phone_number&app_absent=0",
  instagram: "https://www.instagram.com/sorriclinic.pa/",
  images: {
    hero: "https://i.imgur.com/XQ8HwvU.png",
    authority: "https://i.imgur.com/JA0XrjA.jpg",
    beforeAfter: [
      "https://i.imgur.com/lRsCuL1.png",
      "https://i.imgur.com/VSPJdAd.png",
      "https://i.imgur.com/9fjREQV.png",
      "https://i.imgur.com/0h8CxID.png"
    ],
    testimonials: [
      "https://i.imgur.com/uIfZv3m.png",
      "https://i.imgur.com/GzEcQDT.png",
      "https://i.imgur.com/8lVtEMa.png",
      "https://i.imgur.com/gxCQCRd.png"
    ]
  }
};

// Components

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const WhatsAppButton = ({ className = "", text = "Agendar Consulta Gratuita", icon = "phone" }: { className?: string, text?: string, icon?: "phone" | "whatsapp" }) => (
  <a
    href={EXPERT.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 ${className}`}
  >
    {icon === "whatsapp" ? (
      <WhatsAppIcon className="w-6 h-6" />
    ) : (
      <Phone className="w-5 h-5 fill-current" />
    )}
    <span>{text}</span>
  </a>
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto ${className}`}>
    {children}
  </section>
);

const Lightbox = ({ src, isOpen, onClose }: { src: string, isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white p-2">
          <X size={32} />
        </button>
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          src={src}
          alt="Zoom"
          className="max-h-[90vh] max-w-full object-contain rounded-lg"
        />
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* 1. HERO */}
      <header className="relative bg-gradient-to-b from-sky-50 to-white overflow-hidden">
        <div className="max-w-md mx-auto pt-8 pb-12 px-6 text-center md:max-w-4xl md:flex md:items-center md:text-left md:gap-12">
          <div className="md:w-1/2 md:order-2 mb-8 md:mb-0">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-sky-200 rounded-full blur-2xl opacity-50 transform translate-y-4"></div>
              <img
                src={EXPERT.images.hero}
                alt="Dra. SorriClinic"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:order-1">
            <div className="inline-flex items-center gap-1 bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Star className="w-3 h-3 fill-sky-800" />
              <span>Referência em Pouso Alegre</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Recupere sua autoestima e volte a sorrir com confiança
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Somos especialistas em transformar sorrisos. Tratamentos modernos, sem dor e com resultados naturais.
            </p>
            <div className="flex flex-col items-center md:items-start gap-3">
              <WhatsAppButton className="w-full md:w-auto text-lg" />
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Resposta rápida • Sem compromisso
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. QUEM SOU EU */}
      <Section className="bg-white">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={EXPERT.images.authority}
              alt="No consultório"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Muito prazer, eu sou a SorriClinic
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Minha missão é oferecer um atendimento humano e acolhedor, onde você se sinta seguro e confortável.
              Não sou apenas uma clínica, sou sua parceira na busca pelo sorriso perfeito.
              Utilizo as técnicas mais avançadas para garantir que seu tratamento seja eficiente e duradouro.
            </p>
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-xl">🦷</span> Procedimentos Odontológicos
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                "LIMPEZA",
                "RESTAURAÇÃO",
                "ENDODONTIA",
                "EXODONTIA",
                "IMPLANTES",
                "PRÓTESES",
                "FACETAS",
                "ORTODONTIA",
                "ODONTOPEDIATRIA"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                  <div className="bg-sky-100 p-1 rounded-full flex-shrink-0">
                    <Check className="w-3 h-3 text-sky-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section className="bg-slate-50">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Resultados que falam por si</h2>
          <p className="text-slate-600">Veja algumas transformações realizadas no consultório</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {EXPERT.images.beforeAfter.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="cursor-zoom-in relative group overflow-hidden rounded-xl shadow-md bg-white aspect-square"
              onClick={() => setLightboxImage(img)}
            >
              <img
                src={img}
                alt={`Resultado ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-6 italic">
          * Resultados podem variar de pessoa para pessoa. Imagens ilustrativas de casos reais.
        </p>
      </Section>

      {/* 4. POR QUE CONFIAR */}
      <Section className="bg-white">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
          Por que agendar comigo?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Avaliação Honesta", desc: "Transparência total sobre o que você realmente precisa." },
            { icon: Star, title: "Foco no Resultado", desc: "Busco a excelência estética e funcional em cada detalhe." },
            { icon: Clock, title: "Sem Esperas Longas", desc: "Respeito seu tempo com agendamentos organizados." },
            { icon: Calendar, title: "Flexibilidade", desc: "Horários que se adaptam à sua rotina." },
            { 
              icon: MapPin, 
              title: "Localização Fácil", 
              desc: "Consultório acessível em Pouso Alegre.",
              link: "https://maps.app.goo.gl/3J8CBHHpUG9dAVJJ6",
              linkText: "Ver no Google Maps"
            },
            { icon: Phone, title: "Suporte Direto", desc: "Tire dúvidas diretamente pelo WhatsApp." }
          ].map((card: any, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-sky-200 transition-colors flex flex-col h-full">
              <card.icon className="w-8 h-8 text-sky-500 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow">{card.desc}</p>
              {card.link && (
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-sky-600 hover:border-sky-200 font-medium py-2 px-4 rounded-lg transition-all shadow-sm w-full group"
                >
                  <MapPin className="w-4 h-4 text-red-500 group-hover:text-red-600" />
                  {card.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="relative py-20 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/KtDkylE.png" 
            alt="Consultório Moderno" 
            className="w-full h-full object-cover object-center"
          />
          
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Não deixe para depois o sorriso que você merece hoje
          </h2>
          <p className="text-sky-100 mb-8 text-lg">
            A avaliação inicial é gratuita e sem compromisso. Vamos conversar?
          </p>
          <WhatsAppButton 
            className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl" 
            text="Quero agendar agora" 
            icon="whatsapp"
          />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <Section className="bg-white">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
          Como funciona a primeira consulta
        </h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10 transform -translate-y-1/2" />

          {[
            { step: "1", title: "Envie uma mensagem", desc: "Clique no botão do WhatsApp e fale com nossa equipe." },
            { step: "2", title: "Agendamento", desc: "Escolha o melhor dia e horário para sua visita." },
            { step: "3", title: "Avaliação Gratuita", desc: "Venha ao consultório para analisarmos seu caso." }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white">
              <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg ring-4 ring-white">
                {item.step}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. DEPOIMENTOS (MAIS PROVAS) */}
      <Section className="bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
          O que dizem meus pacientes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {EXPERT.images.testimonials.map((img, index) => (
            <div key={index} className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">
              <img
                src={img}
                alt={`Depoimento ${index + 1}`}
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <section className="py-20 px-4 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Pronto para transformar seu sorriso?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Garanta seu horário agora mesmo. A primeira consulta é por nossa conta.
          </p>
          <div className="flex flex-col items-center gap-4">
            <WhatsAppButton className="w-full md:w-auto px-12 py-5 text-xl shadow-sky-200/50" />
            <p className="text-sm text-slate-500">
              Vagas limitadas para esta semana
            </p>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-white font-bold text-xl mb-2">{EXPERT.name}</h3>
          <p className="mb-6">{EXPERT.role} • {EXPERT.city}</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href={EXPERT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href={EXPERT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp
            </a>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-xs">
            <p>&copy; {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          src={lightboxImage}
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}
