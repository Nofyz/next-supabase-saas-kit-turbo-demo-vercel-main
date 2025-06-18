# Product Requirements Document (PRD)
## SwipeBuilder.io - Plataforma Completa (Webpage + Extensão Chrome)

---

### 1. Visão Geral do Produto

**Produto:** SwipeBuilder.io
**Componentes:** Webapp principal + Extensão Chrome
**Tipo:** Plataforma SaaS para criação e otimização de anúncios publicitários
**Missão:** Capacitar marketers e empreendedores a "swipear" anúncios vencedores e recriar campanhas através de IA baseada em direct response marketing

### 2. Objetivos do Produto

#### 2.1 Objetivos Primários
- **Swipe permanente** de anúncios de todas as principais plataformas publicitárias
- **Reescrita inteligente** via IA especializada em direct response marketing
- **Organização robusta** de swipe files com sistema de pastas e boards
- **Colaboração em equipe** com comentários e compartilhamento
- **Análise de dados ocultos** das plataformas publicitárias

#### 2.2 Objetivos Secundários
- Transcrição automática de vídeos publicitários e VSLs
- Captura automática de landing pages
- Integração com ferramentas de criação de conteúdo (UGC, legendas)
- Discovery de anúncios através de comunidade e crawlers

### 3. Público-Alvo

#### 3.1 Usuário Primário
- **Marketers de Direct Response:** Profissionais focados em conversão e ROI
- **Agências de Marketing Digital:** Equipes que gerenciam múltiplas contas
- **Empreendedores Solo:** Pessoas que precisam criar anúncios eficazes com recursos limitados

#### 3.2 Usuário Secundário
- **Copywriters:** Profissionais que criam textos publicitários
- **Social Media Managers:** Gestores de redes sociais
- **E-commerce:** Proprietários de lojas online
- **UGC Creators:** Criadores de conteúdo gerado pelo usuário

### 4. Arquitetura da Solução

#### 4.1 Componentes Principais
- **Webapp Principal (swipebuilder.io):** Dashboard, IA, organização, colaboração
- **Extensão Chrome:** Captura de anúncios diretamente das plataformas
- **Backend API:** Processamento, armazenamento, IA
- **Banco de Dados:** Metadados (PostgreSQL) + Assets (S3/CDN)

### 5. Funcionalidades Detalhadas

---

## 5.1 EXTENSÃO CHROME - Funcionalidades Core

### 5.1.1 Instalação e Autenticação
- **Download:** Chrome Web Store (ID: kijioimmiokpchjbblhnkmoejefhaadn)
- **Login obrigatório:** Mesmas credenciais da webapp
- **Pré-requisito:** Extensão deve ser instalada antes de usar qualquer funcionalidade

### 5.1.2 Plataformas Suportadas para Swipe

**Meta (Facebook/Instagram)**
- Facebook Ad Library (ads.facebook.com)
- Salvamento permanente mesmo se anúncios forem deletados
- Download direto dos anúncios
- Botão "Swipe" aparece automaticamente nos anúncios

**TikTok**
- TikTok Creative Center (ads.tiktok.com)
- TikTok Feed Orgânico (tiktok.com)
- Salvamento de qualquer vídeo do feed
- Analytics coletados: views, likes, shares, comentários
- Botão aparece após clicar no anúncio específico (carregamento 1-2 segundos)

**Google/YouTube**
- Google Ads Transparency Center (adstransparency.google.com)
- YouTube Ads (quando aparecem em vídeos)
- Filtro obrigatório por "vídeos" no Transparency Center
- Analytics ocultos: views de vídeos unlisted do YouTube
- Botão aparece na parte inferior do criativo

**Wistia VSLs**
- Detecção automática de VSLs hospedados no Wistia
- Botão aparece no canto do player
- Funciona 99% das vezes (refresh se não aparecer)
- Transcrição automática incluída

**Outras Plataformas (Mencionadas para futuro)**
- Pinterest (posts e ads)
- LinkedIn Ads
- Twitter/X Ads
- YouTube in-stream ads

### 5.1.3 Funcionalidades da Extensão
- **Navegação rápida:** Links diretos para as plataformas suportadas
- **Auto-detecção:** Identifica automaticamente anúncios swipeáveis
- **Salvamento instant:** Um clique para salvar permanentemente
- **Refresh inteligente:** Botão reaparece após refresh se não carregar
- **Status sync:** Sincronização automática com webapp

---

## 5.2 WEBAPP PRINCIPAL - Dashboard e Organização

### 5.2.1 Interface Principal
- **Grid view:** Visualização em cards dos anúncios salvos
- **Preview integrado:** Visualização direta sem sair da plataforma
- **Filtros avançados:** Por plataforma, data, tipo, performance
- **Busca semântica:** Encontrar anúncios por conteúdo/conceito

### 5.2.2 Sistema de Organização

**Swipe File Pessoal**
- Todos os anúncios salvos privadamente por padrão
- Sistema robusto de pastas hierárquicas
- Tags personalizadas e categorizações
- "Nunca perca o controle de onde estão seus swipes"

**Boards Compartilháveis**
- Criação de boards temáticos
- Compartilhamento via link público
- Comentários diretos nos anúncios
- Colaboração em tempo real com equipes
- Permissões de visualização/edição

**Discovery Section**
- Coleção curada pela comunidade e crawlers
- "Maior coleção de anúncios de direct response"
- Anúncios de Meta, TikTok, YouTube, Pinterest, LinkedIn
- Filtros por rede, vertical, performance
- Feed em tempo real de novos anúncios (+4.000/dia)

### 5.2.3 Análise e Insights

**Metadados Automáticos**
- **Landing pages:** Screenshot automático de todas as páginas
- **Copy completo:** Texto do anúncio salvo
- **Call-to-action:** Tipo de CTA identificado
- **Formato:** Imagem, vídeo, carrossel, etc.
- **Timestamp:** Data de criação/descoberta

**Analytics Ocultos**
- **YouTube:** Views de anúncios e vídeos unlisted
- **VSL Analytics:** Quantas pessoas assistiram VSLs
- **Engagement data:** Métricas não públicas das plataformas
- **Performance indicators:** Indicadores de alta performance

---

## 5.3 IA COPYWRITER - Reescrita e Criação

### 5.3.1 Core da IA
- **Base:** Princípios hardcore de direct response marketing
- **Especialização:** Construída por direct response marketers
- **Diferencial:** Não é um copy.ai genérico, é específica para ads

### 5.3.2 Funcionalidades da IA

**Reescrita Inteligente**
- Adapta anúncios swiped para diferentes produtos/ofertas
- Mantém estrutura e princípios que fazem o anúncio funcionar
- Ajuste automático de tom conforme a marca
- Preserva calls-to-action eficazes

**Geração de Scripts**
- **Formulário detalhado:** Título, information dump, produto, audiência
- **Campos opcionais:** Todos incentivados para melhores resultados
- **Inspiração baseada:** Usa swipes salvos como referência
- **Output rápido:** Geração em segundos

**URL Transcribe (Ferramenta Auxiliar)**
- **Endpoint:** app.swipebuilder.io/url-transcribe
- **Função:** Extrai informações de produtos de websites
- **Uso:** Gera "information dump" para alimentar a IA
- **Integração:** Facilita preenchimento do formulário da IA

### 5.3.3 Tipos de Copy Gerados
- **Ad Scripts:** Para Facebook, TikTok, Google
- **Email Copy:** Campanhas de email marketing
- **Advertorial Copy:** Artigos publicitários
- **VSL Scripts:** Video Sales Letters
- **Landing Page Copy:** Textos para páginas de conversão

---

## 5.4 TRANSCRIÇÃO E PROCESSAMENTO

### 5.4.1 Transcrição Automática
- **Vídeo Ads:** Transcrição automática de narração
- **VSLs:** Texto completo extraído
- **Pré-requisito:** Vídeo deve ter narração/áudio
- **Disclaimer:** Não funciona para vídeos mudos

### 5.4.2 Processamento de Conteúdo
- **Landing Pages:** Screenshot automático quando anúncio é salvo
- **Backup permanente:** Acesso mesmo se página original for deletada
- **Text Overlay:** Extração de textos sobrepostos em vídeos
- **Metadata extraction:** Informações técnicas dos arquivos

---

## 5.5 RECURSOS DE COLABORAÇÃO

### 5.5.1 Compartilhamento
- **Links públicos:** Geração de URLs compartilháveis
- **Boards de equipe:** Organização por projetos/clientes
- **Comentários inline:** Feedback direto nos anúncios
- **Notificações:** Atualizações de atividade da equipe

### 5.5.2 Gestão de Equipes
- **Multi-usuário:** Suporte para agências e grandes equipes
- **Permissões:** Controle de acesso por usuário
- **Workflows:** Processos de aprovação e revisão
- **White-label:** Customização para agências

---

## 5.6 INTEGRAÇÕES E PARTNERSHIPS

### 5.6.1 UGC Creator Hub
- **Conexão direta:** Envio de scripts para creators
- **Workflow integrado:** Do script à produção
- **Rede de creators:** Acesso a criadores verificados

### 5.6.2 Ferramentas de Edição
- **Hormozi Style Subtitles:** Legendas no estilo Alex Hormozi
- **Voice Over:** Conversão de scripts em locuções
- **Subtitle Generator:** Criação automática de legendas

### 5.6.3 Outras Integrações
- **Facebook Ads Manager:** Integração para criação direta
- **Google Ads:** Conexão com campanhas
- **TikTok Ads Manager:** Sincronização com plataforma
- **Wistia:** Processamento nativo de VSLs

---

## 6. Jornada Completa do Usuário

### 6.1 Onboarding
1. **Cadastro** na webapp swipebuilder.io
2. **Download obrigatório** da extensão Chrome
3. **Login** na extensão com mesmas credenciais
4. **Tutorial guiado** sobre como swipear

### 6.2 Workflow Principal
1. **Descoberta:** Encontra anúncio interessante na plataforma
2. **Swipe:** Usa extensão para salvar (1 clique)
3. **Organização:** Categoriza em pastas/boards na webapp
4. **Análise:** Revisa metadados, landing page, transcrição
5. **Adaptação:** Usa IA para reescrever para sua marca
6. **Colaboração:** Compartilha com equipe para feedback
7. **Produção:** Implementa nova campanha baseada no swipe

### 6.3 Casos de Uso Específicos
- **Research competitivo:** Monitorar anúncios de concorrentes
- **Trend spotting:** Identificar padrões emergentes
- **A/B Testing:** Criar variações de anúncios vencedores
- **Team alignment:** Alinhar equipes com exemplos visuais
- **Client presentation:** Mostrar referências para clientes

---

## 7. Especificações Técnicas

### 7.1 Extensão Chrome
- **Manifest V3:** Versão mais recente do Chrome Extensions
- **Permissions:** Acesso a domínios específicos das plataformas
- **Storage:** Local storage para cache temporário
- **Communication:** API calls para backend SwipeBuilder
- **Cross-platform:** Funciona em Chrome, Edge, Brave

### 7.2 Webapp Principal
- **Frontend:** React/Vue.js responsivo
- **Backend:** Node.js/Python para processamento
- **Database:** PostgreSQL para metadados
- **Storage:** AWS S3/CloudFlare para assets
- **CDN:** Entrega global de conteúdo
- **Security:** Criptografia end-to-end para dados sensíveis

### 7.3 IA e ML
- **LLM Integration:** OpenAI/Anthropic para copywriting
- **Custom Models:** Treinamento específico para direct response
- **Transcription:** Whisper API para processamento de áudio
- **Image Processing:** OCR para extração de texto de imagens

---

## 8. Estratégia de Monetização

### 8.1 Planos de Preço (Confirmados)
- **Free Trial:** 7 dias risk-free para todos os planos
- **Starter ($39/mês anual, $49/mês):** Recursos básicos
- **Pro:** Recursos completos + IA
- **Agency ($149/mês):** Multi-usuários + features avançadas
- **Enterprise:** Pricing customizado

### 8.2 Features por Plano
- **Free Trial:** Todas as funcionalidades por 7 dias
- **Paid Plans:** Swipes ilimitados, IA, colaboração
- **Agency:** White-label, analytics avançados, suporte prioritário
- **Enterprise:** Custom integrations, dedicated support

---

## 9. Compliance e Considerações Legais

### 9.1 Terms of Service
- **Respeito aos ToS** das plataformas suportadas
- **Uso ético:** Guidelines para não cópia literal
- **Fair use:** Educação sobre princípios, não cópia direta
- **Attribution:** Transparência sobre origem dos anúncios

### 9.2 Dados e Privacidade
- **LGPD/GDPR compliance:** Proteção de dados pessoais
- **Ads como dados públicos:** Anúncios são informações públicas
- **User privacy:** Dados do usuário protegidos
- **Data retention:** Políticas claras de retenção

---

## 10. Roadmap e Futuras Funcionalidades

### 10.1 Próximas Plataformas
- **Instagram/Facebook Feed:** Swipe direto do mobile
- **Twitter/X Ads:** Integração completa
- **Pinterest:** Posts e ads orgânicos
- **LinkedIn Ads:** Ambiente B2B
- **YouTube In-Stream:** Anúncios durante vídeos

### 10.2 Features em Desenvolvimento
- **Mobile App:** Versão iOS/Android
- **AI Voice Over:** Conversão script → locução
- **Advanced Analytics:** Métricas de performance
- **API Pública:** Integrações third-party
- **Template Marketplace:** Biblioteca de templates

### 10.3 Melhorias Técnicas
- **Faster Processing:** Otimização de velocidade
- **Better OCR:** Reconhecimento de texto melhorado
- **Smart Categorization:** IA para categorização automática
- **Predictive Analytics:** Previsão de performance de anúncios

---

## 11. Métricas de Sucesso

### 11.1 KPIs de Produto
- **Adoption Rate:** % de usuários que instalam extensão
- **Swipe Volume:** Número médio de swipes por usuário/mês
- **AI Usage:** Frequência de uso do copywriter
- **Retention:** % de usuários ativos após 30/90 dias

### 11.2 KPIs de Negócio
- **Conversion Rate:** Trial → Paid conversion
- **Revenue Growth:** MRR/ARR growth
- **Customer Satisfaction:** NPS score
- **Churn Rate:** Taxa de cancelamento mensal

### 11.3 KPIs Técnicos
- **Extension Performance:** Tempo de carregamento do botão swipe
- **API Response Time:** Velocidade de processamento
- **Uptime:** Disponibilidade da plataforma
- **Error Rate:** Taxa de falhas na captura

---

## 12. Riscos e Mitigações

### 12.1 Riscos Técnicos
- **Mudanças nas plataformas:** APIs ou interfaces alteradas
  - *Mitigação:* Múltiplos métodos de captura, monitoramento constante
- **Rate limiting:** Bloqueios por uso excessivo
  - *Mitigação:* Implementar delays inteligentes e proxies
- **Quality degradation:** IA produzindo copy de baixa qualidade
  - *Mitigação:* Continuous training e feedback loops

### 12.2 Riscos de Negócio
- **Concorrência:** Ferramentas similares (Foreplay, Swipekit)
  - *Mitigação:* Foco na qualidade da IA e UX superior
- **Dependência das plataformas:** Mudanças nos ToS
  - *Mitigação:* Diversificação de fontes e compliance rigoroso
- **Saturação do mercado:** Muitas ferramentas similares
  - *Mitigação:* Especialização em direct response e features únicas

---

## 13. Diferenciadores Competitivos

### 13.1 Vantagens Únicas
- **IA especializada:** Focada em direct response, não genérica
- **Builders background:** Criada por profissionais da área
- **Analytics ocultos:** Métricas não disponíveis em outras ferramentas
- **Multi-platform:** Maior cobertura de plataformas
- **Permanent storage:** Links nunca expiram

### 13.2 vs. Competidores
- **vs. Foreplay:** Melhor IA, mais plataformas, analytics únicos
- **vs. Copy.ai:** Especialização em ads, não genérico
- **vs. AdSpy:** Mais organized, melhor UX, colaboração

---

## 14. Conclusão

O SwipeBuilder.io é uma plataforma completa que combina uma extensão Chrome poderosa com uma webapp intuitiva, oferecendo uma solução end-to-end para profissionais de marketing digital que trabalham com direct response.

A combinação de **swipe permanente**, **IA especializada**, **organização robusta** e **colaboração em equipe** cria um produto único no mercado, especialmente valorizado pela qualidade da IA que foi construída especificamente para direct response marketing, diferente de ferramentas genéricas.

O sucesso continuará dependendo da execução técnica de qualidade, experiência do usuário intuitiva e, principalmente, da capacidade da IA de entregar value real através de copy que realmente converte, justificando o investimento dos usuários e criando um ciclo virtuoso de crescimento.

---

**Documento:** PRD Completo SwipeBuilder.io  
**Inclui:** Todas as funcionalidades da Webapp + Extensão Chrome  
**Versão:** 2.0 (Revisão Completa)  
**Data:** 14 de Junho de 2025