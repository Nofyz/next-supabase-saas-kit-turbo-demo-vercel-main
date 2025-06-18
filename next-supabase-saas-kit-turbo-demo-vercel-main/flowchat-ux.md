flowchart TD
    A[Usuário acessa swipebuilder.io] --> B{Já possui conta?}
    
    B -->|Não| C[Cadastro/Registro]
    B -->|Sim| D[Login]
    
    C --> E[Verificação de Email]
    E --> F[Onboarding Tutorial]
    D --> G{Extensão instalada?}
    
    F --> H[Download Extensão Chrome OBRIGATÓRIO]
    G -->|Não| H
    G -->|Sim| I[Dashboard Principal]
    
    H --> I1[Instalar Extensão]
    I1 --> I2[Login na Extensão]
    I2 --> I3[Sync com Webapp]
    I3 --> I
    
    I --> J{Ação do usuário}
    
    %% SWIPE FLOW
    J -->|Swipear Ads| K[Navegar para Plataforma via Extensão]
    K --> L{Escolher Plataforma}
    
    L -->|Facebook| M1[Facebook Ad Library]
    L -->|TikTok| M2[TikTok Creative Center/Feed]
    L -->|Google| M3[Google Transparency Center]
    L -->|Wistia| M4[VSL em Landing Page]
    
    M1 --> N1[Localizar Anúncio Interessante]
    M2 --> N2[Localizar Vídeo/Ad Interessante]
    M3 --> N3[Filtrar por Vídeos + Localizar]
    M4 --> N4[Encontrar VSL em Página]
    
    N1 --> O1[Botão Swipe Aparece]
    N2 --> O2[Botão Swipe Aparece]
    N3 --> O3[Botão Swipe Aparece]
    N4 --> O4[Botão Swipe Aparece]
    
    O1 --> P[Clique no Swipe]
    O2 --> P
    O3 --> P
    O4 --> P
    
    P --> Q[Processamento Automático]
    Q --> Q1[Download do Creative]
    Q1 --> Q2[Screenshot da Landing Page]
    Q2 --> Q3[Transcrição se Vídeo]
    Q3 --> Q4[Extração de Metadados]
    Q4 --> R[Swipe Salvo no Dashboard]
    
    %% ORGANIZAÇÃO FLOW
    J -->|Organizar Swipes| S[Área de Organização]
    S --> T{Tipo de Organização}
    
    T -->|Pastas| U1[Criar/Editar Pastas]
    T -->|Tags| U2[Adicionar Tags]
    T -->|Boards| U3[Criar Board]
    
    U1 --> V1[Mover Swipes para Pastas]
    U2 --> V2[Categorizar por Tags]
    U3 --> V3[Adicionar Swipes ao Board]
    
    V1 --> W[Visualização Organizada]
    V2 --> W
    V3 --> X[Board Configurado]
    
    X --> X1{Compartilhar Board?}
    X1 -->|Sim| X2[Gerar Link Público]
    X1 -->|Não| W
    X2 --> X3[Convidar Membros]
    X3 --> X4[Definir Permissões]
    X4 --> W
    
    %% AI COPYWRITER FLOW
    J -->|Usar IA Copywriter| Y[Selecionar Swipe Inspiração]
    Y --> Z[Abrir AI Copywriter]
    Z --> AA[Preencher Formulário]
    AA --> AA1[Título]
    AA1 --> AA2[Information Dump]
    AA2 --> AA3[Produto/Audiência]
    AA3 --> AA4[Contexto Adicional]
    AA4 --> BB{Usar URL Transcribe?}
    
    BB -->|Sim| CC[app.swipebuilder.io/url-transcribe]
    CC --> DD[Inserir URL do Produto]
    DD --> EE[Extrair Dados Automaticamente]
    EE --> FF[Copiar para Information Dump]
    FF --> GG[Continuar Formulário]
    
    BB -->|Não| GG
    GG --> HH[Escolher Tipo de Copy]
    HH --> II[Selecionar Tom/Estilo]
    II --> JJ[Gerar Copy com IA]
    JJ --> KK[Aguardar Processamento]
    KK --> LL[Receber Copy Gerada]
    LL --> MM{Satisfeito com resultado?}
    
    MM -->|Não| NN[Ajustar Parâmetros]
    NN --> JJ
    MM -->|Sim| OO[Salvar Copy]
    OO --> PP[Usar Copy em Campanha]
    
    %% DISCOVERY FLOW
    J -->|Explorar Discovery| QQ[Seção Discovery]
    QQ --> RR[Visualizar Ads Curados]
    RR --> SS[Filtrar por Categoria]
    SS --> TT[Filtrar por Plataforma]
    TT --> UU{Anúncio Interessante?}
    
    UU -->|Sim| VV[Salvar para Swipe File]
    UU -->|Não| RR
    VV --> R
    
    %% COLABORAÇÃO FLOW
    J -->|Colaborar| WW[Acessar Board Compartilhado]
    WW --> XX{Tipo de Ação}
    
    XX -->|Comentar| YY[Adicionar Comentário]
    XX -->|Editar| ZZ[Editar Board]
    XX -->|Visualizar| AAA[Modo Visualização]
    
    YY --> BBB[Notificar Membros]
    ZZ --> CCC[Salvar Alterações]
    AAA --> DDD[Navegar Conteúdo]
    
    BBB --> EEE[Board Atualizado]
    CCC --> EEE
    DDD --> EEE
    
    %% ANALYTICS FLOW
    J -->|Ver Analytics| FFF[Dashboard Analytics]
    FFF --> GGG[Métricas Pessoais]
    GGG --> HHH[Swipes por Mês]
    HHH --> III[Plataformas Mais Usadas]
    III --> JJJ[Performance dos Swipes]
    JJJ --> KKK[Analytics Ocultos]
    KKK --> LLL[Relatórios Detalhados]
    
    %% CONFIGURAÇÕES FLOW
    J -->|Configurações| MMM[Área de Configurações]
    MMM --> NNN{Tipo Config}
    
    NNN -->|Perfil| OOO[Editar Perfil]
    NNN -->|Plano| PPP[Gerenciar Assinatura]
    NNN -->|Equipe| QQQ[Convidar Membros]
    NNN -->|Integrações| RRR[Configurar APIs]
    
    OOO --> SSS[Salvar Alterações]
    PPP --> TTT[Upgrade/Downgrade]
    QQQ --> UUU[Enviar Convites]
    RRR --> VVV[Conectar Serviços]
    
    %% VOLTAR AO DASHBOARD
    R --> I
    W --> I
    PP --> I
    EEE --> I
    LLL --> I
    SSS --> I
    TTT --> I
    UUU --> I
    VVV --> I
    
    %% STYLING
    classDef startEnd fill:#e1f5fe
    classDef process fill:#f3e5f5
    classDef decision fill:#fff3e0
    classDef action fill:#e8f5e8
    classDef ai fill:#fce4ec
    classDef integration fill:#f1f8e9
    
    class A,I startEnd
    class B,G,J,L,T,X1,BB,MM,UU,XX,NNN decision
    class C,D,E,F,H,K,S,Y,Z,QQ,WW,MMM process
    class P,Q,Q1,Q2,Q3,Q4,R action
    class AA,AA1,AA2,AA3,AA4,GG,HH,II,JJ ai
    class I1,I2,I3,CC,DD,EE integration