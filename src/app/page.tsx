'use client'

import { useState } from 'react'
import { User, Briefcase, DollarSign, History, Search, Filter, Clock, Star, Plus, Menu, Bell, Wallet, TrendingUp } from 'lucide-react'

type UserType = 'worker' | 'contractor' | null
type Screen = 'welcome' | 'dashboard' | 'tasks' | 'task-detail' | 'payment' | 'contractor-panel'

interface Task {
  id: string
  title: string
  description: string
  value: number
  estimatedTime: string
  type: 'survey' | 'typing' | 'audio' | 'photo' | 'registration'
  status: 'available' | 'in-progress' | 'completed'
  contractor: string
}

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Responda pesquisa sobre produtos locais',
    description: 'Pesquisa rápida sobre preferências de consumo na sua região',
    value: 2.50,
    estimatedTime: '3 min',
    type: 'survey',
    status: 'available',
    contractor: 'Empresa ABC'
  },
  {
    id: '2',
    title: 'Digite texto de 200 palavras',
    description: 'Transcreva o áudio fornecido em texto corrido',
    value: 5.00,
    estimatedTime: '8 min',
    type: 'typing',
    status: 'available',
    contractor: 'Digital Corp'
  },
  {
    id: '3',
    title: 'Grave áudio de 30 segundos',
    description: 'Leia o texto fornecido em voz alta e clara',
    value: 3.00,
    estimatedTime: '2 min',
    type: 'audio',
    status: 'available',
    contractor: 'Voice Tech'
  },
  {
    id: '4',
    title: 'Avalie produto online',
    description: 'Acesse o site e faça uma avaliação detalhada do produto',
    value: 4.50,
    estimatedTime: '5 min',
    type: 'survey',
    status: 'available',
    contractor: 'Review Plus'
  }
]

export default function RendaMaisApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome')
  const [userType, setUserType] = useState<UserType>(null)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [balance, setBalance] = useState(47.80)
  const [completedTasks, setCompletedTasks] = useState(23)
  const [filterType, setFilterType] = useState<string>('all')

  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <DollarSign className="w-12 h-12 text-green-700" />
          <Plus className="w-6 h-6 text-green-700 -ml-2 -mt-2" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">Renda+</h1>
        <p className="text-green-100 text-lg px-4">
          Ganhe por cada tarefa.<br />
          Simples, rápido e direto no Pix.
        </p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <button
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full bg-white text-green-600 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Entrar
        </button>
        
        <button
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full bg-yellow-400 text-green-700 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Criar Conta
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-green-100 text-sm mb-4">Escolha seu perfil:</p>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setUserType('worker')
              setCurrentScreen('dashboard')
            }}
            className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all"
          >
            👷 Trabalhador
          </button>
          <button
            onClick={() => {
              setUserType('contractor')
              setCurrentScreen('contractor-panel')
            }}
            className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all"
          >
            🏢 Contratante
          </button>
        </div>
      </div>
    </div>
  )

  const DashboardScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <h2 className="text-white font-semibold">Olá, João!</h2>
              <p className="text-green-100 text-sm">Bem-vindo de volta</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-white/20 rounded-lg">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 bg-white/20 rounded-lg">
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Saldo Disponível</p>
              <p className="text-3xl font-bold text-green-600">R$ {balance.toFixed(2)}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Wallet className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">{completedTasks}</p>
              <p className="text-xs text-gray-600">Tarefas Concluídas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">4.8</p>
              <p className="text-xs text-gray-600">Avaliação</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">R$ 127</p>
              <p className="text-xs text-gray-600">Este Mês</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6 -mt-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setCurrentScreen('tasks')}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
            <p className="font-semibold text-gray-800">Ver Tarefas</p>
            <p className="text-sm text-gray-600">12 disponíveis</p>
          </button>

          <button
            onClick={() => setCurrentScreen('payment')}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <History className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="font-semibold text-gray-800">Histórico</p>
            <p className="text-sm text-gray-600">Pagamentos</p>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="font-semibold text-gray-800 mb-4">Atividade Recente</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Tarefa concluída</p>
                  <p className="text-sm text-gray-600">Pesquisa sobre produtos</p>
                </div>
              </div>
              <p className="font-semibold text-green-600">+R$ 2,50</p>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Saque realizado</p>
                  <p className="text-sm text-gray-600">Pix enviado</p>
                </div>
              </div>
              <p className="font-semibold text-blue-600">-R$ 25,00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )

  const TasksScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Tarefas Disponíveis</h1>
          <button className="p-2 bg-gray-100 rounded-lg">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar tarefas..."
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['all', 'survey', 'typing', 'audio', 'photo'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filterType === type
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {type === 'all' ? 'Todas' : 
               type === 'survey' ? 'Pesquisas' :
               type === 'typing' ? 'Digitação' :
               type === 'audio' ? 'Áudio' : 'Fotos'}
            </button>
          ))}
        </div>
      </div>

      {/* Tasks List */}
      <div className="p-6 space-y-4">
        {mockTasks.map((task) => (
          <div
            key={task.id}
            onClick={() => {
              setSelectedTask(task)
              setCurrentScreen('task-detail')
            }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">{task.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{task.description}</p>
                <p className="text-xs text-gray-500">Por {task.contractor}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">R$ {task.value.toFixed(2)}</p>
                <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                  <Clock className="w-4 h-4" />
                  <span>{task.estimatedTime}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  task.type === 'survey' ? 'bg-blue-100 text-blue-700' :
                  task.type === 'typing' ? 'bg-purple-100 text-purple-700' :
                  task.type === 'audio' ? 'bg-orange-100 text-orange-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {task.type === 'survey' ? '📊 Pesquisa' :
                   task.type === 'typing' ? '⌨️ Digitação' :
                   task.type === 'audio' ? '🎤 Áudio' : '📷 Foto'}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.8</span>
                </div>
              </div>
              
              <button className="bg-green-500 text-white px-6 py-2 rounded-xl font-medium hover:bg-green-600 transition-colors">
                Aceitar
              </button>
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation />
    </div>
  )

  const TaskDetailScreen = () => {
    if (!selectedTask) return null

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
          <button
            onClick={() => setCurrentScreen('tasks')}
            className="mb-4 p-2 bg-white/20 rounded-lg"
          >
            ←
          </button>
          <h1 className="text-xl font-bold mb-2">{selectedTask.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">R$ {selectedTask.value.toFixed(2)}</p>
                <p className="text-sm text-green-100">Valor da tarefa</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{selectedTask.estimatedTime}</p>
                <p className="text-sm text-green-100">Tempo estimado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Task Content */}
        <div className="p-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <h2 className="font-semibold text-gray-800 mb-3">Instruções</h2>
            <p className="text-gray-600 mb-4">{selectedTask.description}</p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
              <h3 className="font-medium text-yellow-800 mb-2">📋 Passos para completar:</h3>
              <ol className="text-sm text-yellow-700 space-y-1">
                <li>1. Leia atentamente as instruções</li>
                <li>2. Execute a tarefa conforme solicitado</li>
                <li>3. Envie o resultado usando o botão abaixo</li>
                <li>4. Aguarde a validação automática</li>
              </ol>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-4">Envie seu resultado aqui</p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors">
                Escolher Arquivo
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setCurrentScreen('tasks')}
              className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-300 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                setBalance(prev => prev + selectedTask.value)
                setCompletedTasks(prev => prev + 1)
                setCurrentScreen('dashboard')
              }}
              className="flex-1 bg-green-500 text-white py-4 rounded-xl font-medium hover:bg-green-600 transition-colors"
            >
              Enviar Resultado
            </button>
          </div>
        </div>
      </div>
    )
  }

  const PaymentScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Pagamentos</h1>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
          <div className="text-center mb-4">
            <p className="text-green-100 text-sm">Saldo Total</p>
            <p className="text-3xl font-bold">R$ {balance.toFixed(2)}</p>
          </div>
          
          <button className="w-full bg-yellow-400 text-green-700 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-colors">
            Sacar via Pix (Mín. R$ 5,00)
          </button>
        </div>
      </div>

      {/* Payment History */}
      <div className="p-6">
        <h2 className="font-semibold text-gray-800 mb-4">Histórico de Transações</h2>
        
        <div className="space-y-3">
          {[
            { type: 'earning', description: 'Pesquisa sobre produtos locais', amount: 2.50, date: 'Hoje, 14:30' },
            { type: 'earning', description: 'Digitação de texto', amount: 5.00, date: 'Hoje, 12:15' },
            { type: 'withdrawal', description: 'Saque via Pix', amount: -25.00, date: 'Ontem, 16:45' },
            { type: 'earning', description: 'Gravação de áudio', amount: 3.00, date: 'Ontem, 10:20' },
            { type: 'earning', description: 'Avaliação de produto', amount: 4.50, date: '2 dias atrás' },
          ].map((transaction, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'earning' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    {transaction.type === 'earning' ? 
                      <DollarSign className="w-5 h-5 text-green-600" /> :
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    }
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{transaction.description}</p>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                </div>
                <p className={`font-semibold ${
                  transaction.type === 'earning' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  )

  const ContractorPanel = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Painel do Contratante</h1>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-blue-100">Tarefas Ativas</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">156</p>
            <p className="text-sm text-blue-100">Concluídas</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6">
        <button className="w-full bg-green-500 text-white p-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-6">
          + Criar Nova Tarefa
        </button>

        {/* Active Tasks */}
        <h2 className="font-semibold text-gray-800 mb-4">Suas Tarefas</h2>
        
        <div className="space-y-4">
          {[
            { title: 'Pesquisa sobre produtos locais', status: 'Ativa', completed: 12, total: 50, value: 2.50 },
            { title: 'Digitação de textos', status: 'Pausada', completed: 8, total: 20, value: 5.00 },
            { title: 'Avaliação de serviços', status: 'Concluída', completed: 30, total: 30, value: 4.50 },
          ].map((task, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">{task.title}</h3>
                  <p className="text-sm text-gray-600">R$ {task.value.toFixed(2)} por tarefa</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  task.status === 'Ativa' ? 'bg-green-100 text-green-700' :
                  task.status === 'Pausada' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {task.status}
                </span>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progresso</span>
                  <span>{task.completed}/{task.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(task.completed / task.total) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  Ver Detalhes
                </button>
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                  Gerenciar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const BottomNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex justify-around">
        <button
          onClick={() => setCurrentScreen('dashboard')}
          className={`flex flex-col items-center gap-1 ${
            currentScreen === 'dashboard' ? 'text-green-600' : 'text-gray-400'
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Início</span>
        </button>
        
        <button
          onClick={() => setCurrentScreen('tasks')}
          className={`flex flex-col items-center gap-1 ${
            currentScreen === 'tasks' ? 'text-green-600' : 'text-gray-400'
          }`}
        >
          <Briefcase className="w-6 h-6" />
          <span className="text-xs">Tarefas</span>
        </button>
        
        <button
          onClick={() => setCurrentScreen('payment')}
          className={`flex flex-col items-center gap-1 ${
            currentScreen === 'payment' ? 'text-green-600' : 'text-gray-400'
          }`}
        >
          <DollarSign className="w-6 h-6" />
          <span className="text-xs">Saldo</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <User className="w-6 h-6" />
          <span className="text-xs">Perfil</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className="font-inter">
      {currentScreen === 'welcome' && <WelcomeScreen />}
      {currentScreen === 'dashboard' && <DashboardScreen />}
      {currentScreen === 'tasks' && <TasksScreen />}
      {currentScreen === 'task-detail' && <TaskDetailScreen />}
      {currentScreen === 'payment' && <PaymentScreen />}
      {currentScreen === 'contractor-panel' && <ContractorPanel />}
    </div>
  )
}