"use client"

import { useState } from "react"

export default function CETOPreview() {
  const [currentPage, setCurrentPage] = useState("home")
  const [activeTab, setActiveTab] = useState("dashboard")
  const [workflowTab, setWorkflowTab] = useState("waiting")
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState("")

  // Dados simulados
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Maria Silva Santos",
      age: 45,
      cpf: "123.456.789-00",
      phone: "(41) 99999-1234",
      email: "maria.silva@email.com",
      reason: "Reabilitação pós-AVC",
      specialty: "Neurologia Adulto",
      status: "waiting",
      statusLabel: "Aguardando",
      inscriptionDate: "15/05/2025",
      hasOtherTO: "Não",
      timePreference: "Manhã",
      diagnosis: "AVC",
      difficulties: "Dificuldades motoras no lado direito, problemas de coordenação",
      timeWithCondition: "3-6-meses",
    },
    {
      id: 2,
      name: "João Santos Oliveira",
      age: 7,
      cpf: "987.654.321-00",
      phone: "(41) 99999-5678",
      email: "joao.santos@email.com",
      reason: "Dificuldades de interação social",
      specialty: "Desenvolvimento Infantil TEA",
      status: "evaluation",
      statusLabel: "Em Avaliação",
      inscriptionDate: "18/05/2025",
      hasOtherTO: "Sim",
      timePreference: "Tarde",
      diagnosis: "TEA",
      difficulties: "Dificuldades de comunicação e interação social",
      timeWithCondition: "desde-nascimento",
    },
    {
      id: 3,
      name: "Ana Beatriz Mendes",
      age: 32,
      cpf: "456.789.123-00",
      phone: "(41) 99999-9012",
      email: "ana.mendes@email.com",
      reason: "Dificuldades motoras",
      specialty: "Neurologia Adulto",
      status: "contract",
      statusLabel: "Contrato Assinado",
      inscriptionDate: "20/05/2025",
      hasOtherTO: "Não",
      timePreference: "Manhã, Tarde",
      diagnosis: "Lesão medular",
      difficulties: "Perda de mobilidade em membros inferiores",
      timeWithCondition: "1-3-meses",
    },
  ])

  const renderHomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="w-15 h-15 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                UFPR
              </div>
              <div>
                <h1 className="text-lg font-bold text-blue-800">CETO/UFPR</h1>
                <p className="text-sm text-gray-600">Clínica-Escola de Terapia Ocupacional</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600">
                Início
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600">
                Sobre
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600">
                Serviços
              </a>
              <a href="#inscricao" className="text-gray-700 hover:text-blue-600">
                Inscrição
              </a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600">
                Contato
              </a>
              <button onClick={() => setCurrentPage("login")} className="text-blue-600 font-bold hover:text-blue-800">
                Admin
              </button>
            </nav>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage("form")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                📝 Fazer Inscrição
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
                UFPR - Universidade Federal do Paraná
              </div>
              <h1 className="text-5xl font-bold text-blue-800 mb-4 leading-tight">
                Clínica-Escola de Terapia Ocupacional
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Oferecemos atendimento especializado em Terapia Ocupacional para a comunidade, com foco em neurologia,
                desenvolvimento infantil e saúde mental.
              </p>
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setCurrentPage("form")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 text-lg"
                >
                  📝 Fazer Inscrição
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2 text-lg">
                  📱 WhatsApp
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Atendimento gratuito</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Profissionais qualificados</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Cuidado humanizado</span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center border-4 border-white shadow-xl">
                <span className="text-gray-500">🏥 Imagem da Clínica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-800 mb-4">Sobre a CETO</h2>
              <p className="text-gray-600 mb-4">
                A Clínica-Escola de Terapia Ocupacional da UFPR é um serviço de extensão universitária que oferece
                atendimento gratuito à comunidade nas áreas de neurologia adulto e infantil, desenvolvimento infantil e
                saúde mental.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa equipe é formada por professores, terapeutas ocupacionais e estudantes em formação, proporcionando
                um atendimento de qualidade baseado em evidências científicas.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                <span>📍</span>
                <span>Av. Prefeito Lothário Meissner, 632 - Jardim Botânico, Curitiba - PR</span>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center border-4 border-white shadow-xl">
                <span className="text-gray-500">🏢 Instalações da CETO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600">
              Oferecemos atendimento especializado em diferentes áreas da Terapia Ocupacional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧠",
                title: "Neurologia Adulto",
                description:
                  "Atendimento para adultos com condições neurológicas como AVC, traumatismo cranioencefálico, doenças neurodegenerativas e outras condições que afetam o sistema nervoso.",
                items: [
                  "Reabilitação cognitiva",
                  "Treino de atividades de vida diária",
                  "Adaptações e tecnologia assistiva",
                  "Orientação familiar",
                ],
              },
              {
                icon: "👶",
                title: "Neurologia Infantil",
                description:
                  "Atendimento especializado para crianças com condições neurológicas, visando o desenvolvimento de habilidades motoras, cognitivas e sociais.",
                items: [
                  "Estimulação do desenvolvimento",
                  "Integração sensorial",
                  "Habilidades motoras finas",
                  "Preparação escolar",
                ],
              },
              {
                icon: "🧩",
                title: "Desenvolvimento Infantil TEA",
                description:
                  "Atendimento especializado para crianças com Transtorno do Espectro Autista, focando no desenvolvimento de habilidades sociais e comunicativas.",
                items: [
                  "Habilidades sociais",
                  "Comunicação alternativa",
                  "Regulação sensorial",
                  "Autonomia e independência",
                ],
              },
              {
                icon: "❤️",
                title: "Saúde Mental",
                description:
                  "Atendimento para pessoas com transtornos mentais, promovendo a reabilitação psicossocial e a melhoria da qualidade de vida.",
                items: [
                  "Reabilitação psicossocial",
                  "Habilidades de vida independente",
                  "Inserção social e laboral",
                  "Grupos terapêuticos",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-colors h-full"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inscrição Section */}
      <section id="inscricao" className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Como se inscrever</h2>
          <p className="text-lg text-gray-600 mb-12">
            O processo de inscrição é simples e gratuito. Siga os passos abaixo para se cadastrar em nossa lista de
            espera.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200 hover:border-blue-300 transition-colors">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl text-blue-600">📝</span>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">1. Preencha o Formulário</h3>
            <p className="text-gray-600 mb-6">
              Complete o formulário de inscrição com todas as informações solicitadas. É importante fornecer dados
              precisos para que possamos entrar em contato.
            </p>
            <button
              onClick={() => setCurrentPage("form")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 mx-auto"
            >
              📝 Preencher Formulário
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 text-left border border-gray-200">
            <h4 className="font-bold text-blue-800 mb-3">📋 Informações importantes:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• O preenchimento do formulário não garante vaga imediata</li>
              <li>• Você será incluído em nossa lista de espera</li>
              <li>• Entraremos em contato quando houver disponibilidade</li>
              <li>• O atendimento é totalmente gratuito</li>
              <li>• Atendemos pessoas de todas as idades</li>
              <li>
                • <strong>Precisa de ajuda para preencher?</strong> Entre em contato conosco!
              </li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-3">💡 Dica:</h4>
            <p className="text-yellow-700">
              Se você tiver dúvidas sobre o preenchimento do formulário ou precisar de ajuda, entre em contato conosco
              pelo telefone <strong>(41) 3361-3742</strong> ou WhatsApp. Nossa equipe está pronta para ajudar!
            </p>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600">
              Estamos aqui para esclarecer suas dúvidas e fornecer mais informações sobre nossos serviços.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-blue-600">📞</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Telefone/WhatsApp</h4>
                    <p className="text-gray-600">(41) 3361-3742</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-blue-600">✉️</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">E-mail</h4>
                    <p className="text-gray-600">ceto.ufpr@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-blue-600">🕐</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 7h às 13h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-blue-600">📍</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Prefeito Lothário Meissner, 632
                      <br />
                      Bloco Didático II - Térreo
                      <br />
                      Jardim Botânico - Curitiba - PR
                      <br />
                      CEP: 80210-170
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center border-4 border-white shadow-xl">
                <span className="text-gray-500">🗺️ Localização da CETO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded text-blue-800 flex items-center justify-center font-bold">
                  UFPR
                </div>
                <h3 className="font-bold">CETO/UFPR</h3>
              </div>
              <p className="text-blue-200 text-sm">
                Clínica-Escola de Terapia Ocupacional da Universidade Federal do Paraná
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Serviços</h3>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>Neurologia Adulto</li>
                <li>Neurologia Infantil</li>
                <li>Desenvolvimento Infantil TEA</li>
                <li>Saúde Mental</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>Telefone: (41) 3361-3742</li>
                <li>E-mail: ceto.ufpr@gmail.com</li>
                <li>Horário: 7h às 13h</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Localização</h3>
              <p className="text-blue-200 text-sm">
                Av. Prefeito Lothário Meissner, 632
                <br />
                Jardim Botânico - Curitiba - PR
                <br />
                CEP: 80210-170
              </p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-6 text-center">
            <p className="text-blue-200 text-sm">&copy; 2025 CETO/UFPR - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  )

  const renderLoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-5">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md border-2 border-blue-200">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-blue-600">🔐</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-800 mb-2">Acesso Administrativo</h1>
          <p className="text-gray-600 text-sm">Entre com suas credenciais para acessar o painel</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            const username = e.target.username.value
            const password = e.target.password.value
            if (username === "admin" && password === "admin123") {
              setCurrentPage("admin")
            } else {
              alert("Usuário ou senha incorretos")
            }
          }}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usuário</label>
              <input
                name="username"
                type="text"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite seu usuário"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <input
                name="password"
                type="password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite sua senha"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 font-medium"
            >
              🔓 Entrar
            </button>
          </div>
        </form>

        <div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 text-xs text-center">
            <strong>Credenciais de demonstração:</strong> admin / admin123
          </p>
        </div>

        <button
          onClick={() => setCurrentPage("home")}
          className="mt-4 w-full text-gray-600 hover:text-gray-800 flex items-center justify-center gap-2"
        >
          ← Voltar ao site
        </button>
      </div>
    </div>
  )

  const renderFormPage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-5">
          <div className="flex items-center h-20">
            <button
              onClick={() => setCurrentPage("home")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mr-4"
            >
              ← Voltar
            </button>
            <div className="flex items-center gap-4">
              <div className="w-15 h-15 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                UFPR
              </div>
              <div>
                <h1 className="text-lg font-bold text-blue-800">CETO/UFPR</h1>
                <p className="text-sm text-gray-600">Formulário de Inscrição</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-5 py-10">
        <div className="text-center mb-10">
          <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">
            Inscrição CETO/UFPR
          </div>
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Formulário de Cadastro</h1>
          <p className="text-gray-600">
            Preencha todos os campos obrigatórios (*) para se inscrever na lista de espera da CETO/UFPR
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            setCurrentPage("success")
          }}
        >
          {/* Dados Pessoais */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center gap-2">👤 Dados Pessoais</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nome da pessoa que precisa do atendimento"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CPF *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="000.000.000-00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data de Nascimento</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Idade em anos"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do(s) cuidador(es) ou responsável(is) (se preciso)
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nome do responsável ou cuidador"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone Celular (com DDD)</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
            </div>
          </div>

          {/* Informações Clínicas */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center gap-2">🩺 Informações Clínicas</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Área de atendimento desejada:</label>
                <div className="space-y-3">
                  {["Neurologia adulto", "Neurologia infantil", "Saúde Mental", "Desenvolvimento Infantil TEA"].map(
                    (option, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-200"
                      >
                        <div className="relative">
                          <input type="radio" name="area" className="sr-only" />
                          <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100"></div>
                          </div>
                        </div>
                        <span>{option}</span>
                      </label>
                    ),
                  )}
                  <label className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-200">
                    <div className="relative">
                      <input type="radio" name="area" className="sr-only" />
                      <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100"></div>
                      </div>
                    </div>
                    <span>Outro:</span>
                    <input
                      type="text"
                      placeholder="Especifique"
                      className="ml-2 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Diagnóstico da pessoa que necessita de atendimento (se houver):
                </label>
                <div className="space-y-3">
                  {[
                    "Acidente Vascular Cerebral (AVC)",
                    "Paralisia Cerebral (PC)",
                    "Transtorno do Espectro Autista (TEA)",
                    "Não possui/ não sei",
                  ].map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-200"
                    >
                      <div className="relative">
                        <input type="radio" name="diagnostico" className="sr-only" />
                        <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100"></div>
                        </div>
                      </div>
                      <span>{option}</span>
                    </label>
                  ))}
                  <label className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-200">
                    <div className="relative">
                      <input type="radio" name="diagnostico" className="sr-only" />
                      <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100"></div>
                      </div>
                    </div>
                    <span>Outro:</span>
                    <input
                      type="text"
                      placeholder="Especifique"
                      className="ml-2 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dificuldades apresentadas (descrever brevemente):
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Descreva brevemente as principais dificuldades apresentadas"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Há quanto tempo apresenta a demanda?
                </label>
                <p className="text-sm text-gray-500 mb-3">Tempo de diagnóstico ou lesão, por exemplo.</p>
                <div className="space-y-3">
                  {[
                    "1 a 3 meses",
                    "3 a 6 meses",
                    "6 meses a 1 ano",
                    "Até 3 anos",
                    "Mais de 3 anos",
                    "Desde o nascimento",
                    "Não aplicável (não apresenta lesões)",
                  ].map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-200"
                    >
                      <div className="relative">
                        <input type="radio" name="tempoDemanda" className="sr-only" />
                        <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100"></div>
                        </div>
                      </div>
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Realiza atendimento de Terapia Ocupacional em outro serviço atualmente?
                </label>
                <div className="space-y-3">
                  {["Sim", "Não"].map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-200"
                    >
                      <div className="relative">
                        <input type="radio" name="fazTerapiaOutroLocal" className="sr-only" />
                        <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100"></div>
                        </div>
                      </div>
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center gap-2">ℹ️ Informações Adicionais</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Como conheceu a CETO?</label>
                <div className="space-y-3">
                  {[
                    "Pesquisei na internet",
                    "Recomendação de uma pessoa que já foi ou é atendida pela CETO",
                    "Indicação de um profissional de saúde",
                    "Indicação da Unidade de Saúde",
                    "Indicação do hospital em que fui atendido",
                  ].map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-200"
                    >
                      <div className="relative">
                        <input type="radio" name="comoConheceu" className="sr-only" />
                        <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 peer-checked:opacity-100"></div>
                        </div>
                      </div>
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Preferência de turno para atendimento:
                </label>
                <p className="text-sm text-gray-500 mb-3">É possível selecionar mais de uma opção.</p>
                <div className="space-y-3">
                  {["Manhã", "Tarde", "Noite"].map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-200"
                    >
                      <div className="relative">
                        <input type="checkbox" name="preferenciaTurno" className="sr-only" />
                        <div className="w-4 h-4 border-2 border-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs opacity-0 peer-checked:opacity-100">✓</span>
                        </div>
                      </div>
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Termos */}
          <div className="bg-orange-50 rounded-xl shadow-lg p-8 mb-6 border border-orange-200">
            <div className="flex gap-4">
              <div className="text-2xl text-orange-600">⚠️</div>
              <div>
                <h3 className="text-lg font-bold text-orange-800 mb-3">Termo de Consentimento</h3>
                <p className="text-orange-700 mb-4 text-sm leading-relaxed">
                  Estou ciente que este é um cadastro em fila de espera para avaliação, e que não garante uma vaga para
                  atendimento. A disponibilidade de vagas depende dos projetos ofertados e da ordem de cadastro, sendo
                  um serviço aberto à comunidade, sem distinção de vínculo com a UFPR ou com servidor. A data do
                  primeiro cadastro será respeitada, sendo esta apenas uma atualização dos meus dados.
                </p>
                <div className="space-y-3">
                  {["Ciente e de acordo", "Não concordo (neste caso o seu cadastro é invalidado)"].map(
                    (option, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 p-3 hover:bg-orange-100 rounded-lg cursor-pointer border border-orange-300"
                      >
                        <div className="relative">
                          <input type="radio" name="concordaTermos" required className="sr-only" />
                          <div className="w-4 h-4 border-2 border-orange-600 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-orange-600 rounded-full opacity-0 peer-checked:opacity-100"></div>
                          </div>
                        </div>
                        <span className="text-orange-800">{option}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 mx-auto text-lg"
            >
              📤 Enviar Formulário
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  const renderSuccessPage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-md mx-5 border-2 border-green-300">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl text-green-600">✓</span>
        </div>
        <h1 className="text-2xl font-bold text-green-700 mb-4">Inscrição Realizada com Sucesso!</h1>
        <div className="text-gray-600 mb-8">
          <p className="mb-4">
            Obrigado por se inscrever na CETO/UFPR. Sua solicitação foi recebida e você foi incluído em nossa lista de
            espera.
          </p>
          <p className="font-semibold">O que acontece agora?</p>
          <ul className="text-left mt-4 space-y-2">
            <li>• Sua inscrição será analisada por nossa equipe</li>
            <li>• Você será contatado quando houver disponibilidade de vaga</li>
            <li>• O tempo de espera varia conforme a demanda e especialidade</li>
            <li>• Mantenha seus dados de contato sempre atualizados</li>
          </ul>
          <p className="mt-4 font-semibold text-blue-800">
            Importante: Esta inscrição não garante vaga imediata, mas você está agora em nossa lista de espera oficial.
          </p>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => setCurrentPage("home")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            🏠 Voltar ao Início
          </button>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
            📱 Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  )

  const openModal = (type, patient = null) => {
    setModalType(type)
    setSelectedPatient(patient)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedPatient(null)
    setModalType("")
  }

  const updatePatientStatus = (patientId, newStatus, newStatusLabel) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === patientId ? { ...p, status: newStatus, statusLabel: newStatusLabel } : p)),
    )
    closeModal()
  }

  const renderModal = () => {
    if (!showModal) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-xl font-bold text-blue-800">
              {modalType === "triagem" && "📋 Ficha de Triagem"}
              {modalType === "evaluation" && "✅ Avaliação"}
              {modalType === "contract" && "📄 Contrato Terapêutico"}
              {modalType === "record" && "📁 Prontuário"}
              {modalType === "evolution" && "📝 Evolução"}
            </h3>
            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl">
              ×
            </button>
          </div>

          <div className="p-6">
            {modalType === "triagem" && selectedPatient && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">📋 Dados do Paciente</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Nome:</strong> {selectedPatient.name}
                      </p>
                      <p>
                        <strong>Idade:</strong> {selectedPatient.age} anos
                      </p>
                      <p>
                        <strong>CPF:</strong> {selectedPatient.cpf}
                      </p>
                      <p>
                        <strong>Telefone:</strong> {selectedPatient.phone}
                      </p>
                      <p>
                        <strong>E-mail:</strong> {selectedPatient.email}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">🩺 Informações Clínicas</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Especialidade:</strong> {selectedPatient.specialty}
                      </p>
                      <p>
                        <strong>Diagnóstico:</strong> {selectedPatient.diagnosis}
                      </p>
                      <p>
                        <strong>Tempo com a condição:</strong> {selectedPatient.timeWithCondition}
                      </p>
                      <p>
                        <strong>Faz TO em outro lugar:</strong> {selectedPatient.hasOtherTO}
                      </p>
                      <p>
                        <strong>Preferência de horário:</strong> {selectedPatient.timePreference}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">📝 Dificuldades Apresentadas</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedPatient.difficulties}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3">🎯 Decisão da Triagem</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="radio" name="decision" className="text-blue-600" />
                      <span>✅ Incluir no serviço - Agendar avaliação</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="radio" name="decision" className="text-blue-600" />
                      <span>❌ Não incluir - Encaminhar para outro serviço</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="radio" name="decision" className="text-blue-600" />
                      <span>⏳ Manter na lista de espera</span>
                    </label>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Observações:</label>
                    <textarea
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Observações sobre a triagem..."
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => updatePatientStatus(selectedPatient.id, "evaluation", "Em Avaliação")}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    ✅ Aprovar para Avaliação
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    💾 Salvar Triagem
                  </button>
                </div>
              </div>
            )}

            {modalType === "evaluation" && selectedPatient && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">👤 Identificação</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Nome:</strong> {selectedPatient.name}
                      </p>
                      <p>
                        <strong>Idade:</strong> {selectedPatient.age} anos
                      </p>
                      <p>
                        <strong>Data da Avaliação:</strong> <input type="date" className="border rounded px-2 py-1" />
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">👨‍⚕️ Profissional</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Terapeuta:</strong>{" "}
                        <input type="text" className="border rounded px-2 py-1" placeholder="Nome do terapeuta" />
                      </p>
                      <p>
                        <strong>Estagiário:</strong>{" "}
                        <input type="text" className="border rounded px-2 py-1" placeholder="Nome do estagiário" />
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">🎯 Objetivos da Avaliação</h4>
                  <textarea
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Descreva os objetivos da avaliação..."
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">📊 Instrumentos Utilizados</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "COPM (Canadian Occupational Performance Measure)",
                      "DASH (Disabilities of Arm, Shoulder and Hand)",
                      "Avaliação Cognitiva",
                      "Avaliação Motora",
                      "Avaliação Sensorial",
                      "Observação Clínica",
                    ].map((instrument, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="text-blue-600" />
                        <span className="text-sm">{instrument}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">📝 Resultados da Avaliação</h4>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Descreva os resultados encontrados na avaliação..."
                  />
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3">🎯 Conclusão</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="radio" name="conclusion" className="text-green-600" />
                      <span>✅ Incluído no serviço - Elaborar contrato terapêutico</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="radio" name="conclusion" className="text-green-600" />
                      <span>❌ Não incluído - Encaminhamento externo</span>
                    </label>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Justificativa:</label>
                    <textarea
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Justificativa da decisão..."
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => updatePatientStatus(selectedPatient.id, "contract", "Contrato Assinado")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    📄 Criar Contrato
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    💾 Salvar Avaliação
                  </button>
                </div>
              </div>
            )}

            {modalType === "contract" && selectedPatient && (
              <div className="space-y-6">
                <div className="text-center border-b pb-4">
                  <h4 className="text-lg font-bold text-blue-800">CONTRATO TERAPÊUTICO</h4>
                  <p className="text-sm text-gray-600">CETO - Clínica-Escola de Terapia Ocupacional - UFPR</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">👤 Dados do Paciente</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Nome:</label>
                        <input
                          type="text"
                          defaultValue={selectedPatient.name}
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Data de Nascimento:</label>
                        <input type="date" className="w-full border rounded px-3 py-2" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">CPF:</label>
                        <input
                          type="text"
                          defaultValue={selectedPatient.cpf}
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">👨‍⚕️ Dados do Terapeuta</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Nome do Terapeuta:</label>
                        <input type="text" className="w-full border rounded px-3 py-2" placeholder="Nome completo" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">CREFITO 8:</label>
                        <input
                          type="text"
                          className="w-full border rounded px-3 py-2"
                          placeholder="Número do CREFITO"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">📅 Dados do Atendimento</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Ano:</label>
                      <input type="number" defaultValue="2025" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Semestre:</label>
                      <input type="text" defaultValue="1º semestre" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Horário:</label>
                      <input type="time" className="w-full border rounded px-3 py-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">📋 Dias da Semana</h4>
                  <div className="grid grid-cols-5 gap-3">
                    {["Segunda", "Terça", "Quarta", "Quinta", "Sexta"].map((day, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="text-blue-600" />
                        <span className="text-sm">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">⚙️ Modalidade</h4>
                  <div className="space-y-2">
                    {["Presencial", "Remoto", "Híbrido"].map((mode, index) => (
                      <label key={index} className="flex items-center gap-3">
                        <input type="radio" name="modalidade" className="text-blue-600" />
                        <span>{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3">📋 Resumo do Contrato</h4>
                  <p className="text-sm text-blue-700">
                    Este contrato estabelece os termos e condições para o atendimento de Terapia Ocupacional na
                    CETO/UFPR. O paciente se compromete a comparecer nos horários agendados e seguir as orientações
                    terapêuticas.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => updatePatientStatus(selectedPatient.id, "active", "Em Atendimento")}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    ✅ Assinar Contrato
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">🖨️ Imprimir</button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    💾 Salvar
                  </button>
                </div>
              </div>
            )}

            {modalType === "record" && selectedPatient && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">📋 Dados do Prontuário</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Prontuário Nº:</strong> CETO-{selectedPatient.id.toString().padStart(4, "0")}
                      </p>
                      <p>
                        <strong>Nome:</strong> {selectedPatient.name}
                      </p>
                      <p>
                        <strong>Data de Abertura:</strong> {selectedPatient.inscriptionDate}
                      </p>
                      <p>
                        <strong>Especialidade:</strong> {selectedPatient.specialty}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">📊 Estatísticas</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Total de Sessões:</strong> 12
                      </p>
                      <p>
                        <strong>Faltas:</strong> 2
                      </p>
                      <p>
                        <strong>Última Sessão:</strong> 25/05/2025
                      </p>
                      <p>
                        <strong>Próxima Sessão:</strong> 01/06/2025
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">📝 Histórico de Evoluções</h4>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {[
                      {
                        date: "25/05/2025",
                        session: 12,
                        type: "ICM",
                        performance: "Satisfatório",
                        notes: "Paciente demonstrou melhora significativa na coordenação motora fina.",
                      },
                      {
                        date: "22/05/2025",
                        session: 11,
                        type: "Treino AVD",
                        performance: "Satisfatório",
                        notes: "Treino de atividades de vida diária com foco em alimentação.",
                      },
                      {
                        date: "18/05/2025",
                        session: 10,
                        type: "ICM",
                        performance: "Não satisfatório",
                        notes: "Paciente apresentou dificuldades de concentração durante a sessão.",
                      },
                    ].map((evolution, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg border">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium text-sm">
                              Sessão {evolution.session} - {evolution.date}
                            </p>
                            <p className="text-xs text-gray-600">{evolution.type}</p>
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              evolution.performance === "Satisfatório"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {evolution.performance}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{evolution.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => openModal("evolution", selectedPatient)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    ➕ Nova Evolução
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    📄 Gerar Relatório
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    📁 Fechar Prontuário
                  </button>
                </div>
              </div>
            )}

            {modalType === "evolution" && selectedPatient && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Data:</label>
                    <input
                      type="date"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sessão Nº:</label>
                    <input type="number" defaultValue="13" className="w-full border rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Modalidade:</label>
                    <select className="w-full border rounded px-3 py-2">
                      <option>Presencial</option>
                      <option>Remoto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">👥 Presença</h4>
                  <div className="space-y-2">
                    {["Compareceu", "Falta", "Falta justificada"].map((option, index) => (
                      <label key={index} className="flex items-center gap-3">
                        <input type="radio" name="presenca" className="text-blue-600" defaultChecked={index === 0} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">🎯 Tipo de Intervenção</h4>
                  <div className="space-y-2">
                    {["ICM", "Prática mental", "Prática Específica", "Treino de AVDs/Ocupações", "Outro"].map(
                      (option, index) => (
                        <label key={index} className="flex items-center gap-3">
                          <input type="radio" name="tipoIntervencao" className="text-blue-600" />
                          <span>{option}</span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Objetos utilizados:</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Ex: bolas, blocos, jogos..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Métodos/Recursos/Estratégias:</label>
                  <textarea
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Descreva os métodos e estratégias utilizados..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comentários sobre o atendimento:
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Descreva o atendimento, observações e comentários relevantes..."
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">📊 Desempenho</h4>
                  <div className="space-y-2">
                    {["Satisfatório", "Não satisfatório"].map((option, index) => (
                      <label key={index} className="flex items-center gap-3">
                        <input type="radio" name="desempenho" className="text-blue-600" />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estagiário(a):</label>
                    <input type="text" className="w-full border rounded px-3 py-2" placeholder="Nome do estagiário" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Terapeuta Ocupacional:</label>
                    <input type="text" className="w-full border rounded px-3 py-2" placeholder="Nome do terapeuta" />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={closeModal}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    💾 Salvar Evolução
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    ❌ Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  const renderAdminPage = () => (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-5">
        <div className="border-b border-blue-700 pb-5 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white rounded text-blue-800 flex items-center justify-center font-bold">
              UFPR
            </div>
            <h2 className="text-lg font-bold">CETO Admin</h2>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-blue-700 rounded-lg mb-5">
          <div className="w-9 h-9 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold">
            A
          </div>
          <div>
            <h3 className="text-sm font-medium">Administrador</h3>
            <p className="text-xs text-blue-200">Coordenador</p>
          </div>
        </div>

        <nav className="space-y-1">
          {[
            { id: "dashboard", icon: "📊", label: "Dashboard" },
            { id: "patients", icon: "👥", label: "Pacientes" },
            { id: "workflow", icon: "🔄", label: "Fluxo de Atendimento" },
            { id: "schedule", icon: "📅", label: "Agendamentos" },
            { id: "reports", icon: "📈", label: "Relatórios" },
            { id: "settings", icon: "⚙️", label: "Configurações" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                activeTab === item.id ? "bg-blue-700 text-white" : "text-blue-200 hover:bg-blue-700 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-8 pt-4 border-t border-blue-700">
          <button
            onClick={() => setCurrentPage("home")}
            className="w-full flex items-center gap-3 p-3 rounded-lg text-blue-200 hover:bg-blue-700 hover:text-white transition-colors"
          >
            <span>🏠</span>
            <span>Voltar ao Site</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h1 className="text-2xl font-bold text-blue-800">Painel Administrativo</h1>
            <p className="text-gray-600">Bem-vindo ao sistema de gerenciamento da CETO/UFPR</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
            📥 Exportar Dados
          </button>
        </div>

        {activeTab === "dashboard" && (
          <div>
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-5 mb-5">
              {[
                { title: "Total de Pacientes", value: patients.length.toString(), icon: "👥", color: "blue" },
                {
                  title: "Em Atendimento",
                  value: patients.filter((p) => p.status === "active").length.toString(),
                  icon: "👨‍⚕️",
                  color: "green",
                },
                {
                  title: "Lista de Espera",
                  value: patients.filter((p) => p.status === "waiting").length.toString(),
                  icon: "⏰",
                  color: "yellow",
                },
                {
                  title: "Em Avaliação",
                  value: patients.filter((p) => p.status === "evaluation").length.toString(),
                  icon: "📋",
                  color: "purple",
                },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm text-gray-600">{stat.title}</h3>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        stat.color === "blue"
                          ? "bg-blue-100"
                          : stat.color === "green"
                            ? "bg-green-100"
                            : stat.color === "yellow"
                              ? "bg-yellow-100"
                              : "bg-purple-100"
                      }`}
                    >
                      <span>{stat.icon}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-xs text-gray-500">Pacientes registrados</p>
                </div>
              ))}
            </div>

            {/* Recent Patients */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-bold text-blue-800">Pacientes Recentes</h3>
                <button
                  onClick={() => setActiveTab("patients")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Ver Todos
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-3 text-left text-sm font-medium text-gray-700">Nome</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700">Área</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700">Data de Inscrição</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700">Status</th>
                      <th className="p-3 text-left text-sm font-medium text-gray-700">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.slice(0, 3).map((patient, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-3 text-sm text-gray-600">{patient.name}</td>
                        <td className="p-3 text-sm text-gray-600">{patient.specialty}</td>
                        <td className="p-3 text-sm text-gray-600">{patient.inscriptionDate}</td>
                        <td className="p-3">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              patient.status === "waiting"
                                ? "bg-yellow-100 text-yellow-800"
                                : patient.status === "evaluation"
                                  ? "bg-blue-100 text-blue-800"
                                  : patient.status === "contract"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-green-100 text-green-800"
                            }`}
                          >
                            {patient.statusLabel}
                          </span>
                        </td>
                        <td className="p-3">
                          <button
                            onClick={() => openModal("triagem", patient)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 mr-1"
                          >
                            👁️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "workflow" && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-5 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-bold text-blue-800">Fluxo de Atendimento Interno</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                📥 Exportar Dados
              </button>
            </div>
            <div className="p-5">
              {/* Workflow Tabs */}
              <div className="flex gap-2 mb-5 overflow-x-auto pb-2">
                {[
                  { id: "waiting", icon: "📋", label: "Triagem / Fila de Espera" },
                  { id: "evaluation", icon: "✅", label: "Avaliação" },
                  { id: "contract", icon: "📄", label: "Contrato Terapêutico" },
                  { id: "records", icon: "📁", label: "Prontuário" },
                  { id: "reports", icon: "📊", label: "Relatórios" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setWorkflowTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      workflowTab === tab.id ? "bg-blue-100 text-blue-600 shadow" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span className="text-sm">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Workflow Content */}
              {workflowTab === "waiting" && (
                <div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Fila de Espera</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Gerenciamento de pacientes aguardando atendimento. Os dados do formulário entram automaticamente
                      nesta lista.
                    </p>

                    <div className="flex gap-4 mb-5">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Buscar por nome ou especialidade..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                      </div>
                      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>Todos os status</option>
                        <option>Aguardando</option>
                        <option>Agendado para Avaliação</option>
                        <option>Encerrado</option>
                      </select>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Nome</th>
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Idade</th>
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Motivo da Procura</th>
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Especialidade</th>
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Situação</th>
                          <th className="p-3 text-left text-sm font-medium text-gray-700">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patients.map((patient, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="p-3 text-sm text-gray-600">{patient.name}</td>
                            <td className="p-3 text-sm text-gray-600">{patient.age}</td>
                            <td className="p-3 text-sm text-gray-600">{patient.reason}</td>
                            <td className="p-3 text-sm text-gray-600">{patient.specialty}</td>
                            <td className="p-3">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                  patient.status === "waiting"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : patient.status === "evaluation"
                                      ? "bg-blue-100 text-blue-800"
                                      : patient.status === "contract"
                                        ? "bg-purple-100 text-purple-800"
                                        : "bg-green-100 text-green-800"
                                }`}
                              >
                                {patient.statusLabel}
                              </span>
                            </td>
                            <td className="p-3">
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openModal("triagem", patient)}
                                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                                  title="Ver Triagem"
                                >
                                  📋
                                </button>
                                <button
                                  onClick={() => openModal("evaluation", patient)}
                                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                                  title="Avaliação"
                                >
                                  ✅
                                </button>
                                <button
                                  onClick={() => openModal("contract", patient)}
                                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                                  title="Contrato"
                                >
                                  📄
                                </button>
                                <button
                                  onClick={() => openModal("record", patient)}
                                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                                  title="Prontuário"
                                >
                                  📁
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                      ➕ Adicionar Paciente
                    </button>
                  </div>
                </div>
              )}

              {workflowTab === "evaluation" && (
                <div className="text-center py-10">
                  <span className="text-4xl mb-4 block">✅</span>
                  <h4 className="text-lg font-semibold mb-2">Avaliação de Pacientes</h4>
                  <p className="text-gray-600">Gerenciamento de avaliações agendadas e resultados.</p>
                  <div className="mt-6">
                    <button
                      onClick={() => openModal("evaluation", patients[0])}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      📋 Ver Exemplo de Avaliação
                    </button>
                  </div>
                </div>
              )}

              {workflowTab === "contract" && (
                <div className="text-center py-10">
                  <span className="text-4xl mb-4 block">📄</span>
                  <h4 className="text-lg font-semibold mb-2">Contratos Terapêuticos</h4>
                  <p className="text-gray-600">Gerenciamento de contratos terapêuticos por paciente.</p>
                  <div className="mt-6">
                    <button
                      onClick={() => openModal("contract", patients[0])}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      📄 Ver Exemplo de Contrato
                    </button>
                  </div>
                </div>
              )}

              {workflowTab === "records" && (
                <div className="text-center py-10">
                  <span className="text-4xl mb-4 block">📁</span>
                  <h4 className="text-lg font-semibold mb-2">Prontuários</h4>
                  <p className="text-gray-600">Gerenciamento de prontuários dos pacientes.</p>
                  <div className="mt-6">
                    <button
                      onClick={() => openModal("record", patients[0])}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      📁 Ver Exemplo de Prontuário
                    </button>
                  </div>
                </div>
              )}

              {workflowTab === "reports" && (
                <div className="text-center py-10">
                  <span className="text-4xl mb-4 block">📊</span>
                  <h4 className="text-lg font-semibold mb-2">Relatórios de Atendimento</h4>
                  <p className="text-gray-600">Estatísticas e relatórios de atendimentos.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "patients" && (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">👥</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Lista de Pacientes</h2>
            <p className="text-gray-600">Gerenciamento completo de pacientes cadastrados</p>
          </div>
        )}

        {activeTab === "schedule" && (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">📅</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Agendamentos</h2>
            <p className="text-gray-600">Sistema de agendamento de consultas e atendimentos</p>
          </div>
        )}

        {activeTab === "reports" && (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">📈</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Relatórios</h2>
            <p className="text-gray-600">Relatórios e estatísticas do sistema</p>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">⚙️</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Configurações</h2>
            <p className="text-gray-600">Configurações do sistema e preferências</p>
          </div>
        )}
      </div>

      {renderModal()}
    </div>
  )

  return (
    <div className="w-full">
      {currentPage === "home" && renderHomePage()}
      {currentPage === "login" && renderLoginPage()}
      {currentPage === "form" && renderFormPage()}
      {currentPage === "success" && renderSuccessPage()}
      {currentPage === "admin" && renderAdminPage()}
    </div>
  )
}
