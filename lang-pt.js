////////////////////////////////////////////////////////////////////////////////////////////////

// This file contains string resources of the Jelastic dashboard, English version.            //

// Newly added strings for every new release are marked with the comment "Release: N.N.N".    //

// Please do not edit the keywords of the strings and also be attentive to the html encoding. //

////////////////////////////////////////////////////////////////////////////////////////////////



var GLocal = {



    //

    // Common.

    //



    LT_Common_Button_Apply						: "Aplicar",

    LT_Common_Button_Add						: "Adicionar",

    LT_Common_Button_Delete						: "Deletar",

    LT_Common_Button_Remove						: "Remover",

    LT_Common_Button_Edit						: "Editar",

    LT_Common_Button_Create                     : "Criar",

    LT_Common_Button_Rename                     : "Renomear",

    LT_Common_Button_Save						: "Salvar",

    LT_Common_Button_Cancel						: "Cancelar",

    LT_Common_Button_Yes						: "Sim",

    LT_Common_Button_No 						: "Não",

    LT_Common_Button_Settings					: "Configurações",

    LT_Common_Text_Notify						: "Notificar",

    LT_Common_Text_Confirm						: "Confirmar",

    LT_Common_Text_Refresh						: "Atualizar",

    LT_Common_Text_Error						: "Erro",

    LT_Common_Text_UnknownError					: "Erro desconhecido",

    LT_Common_Text_Yes							: "Sim",

    LT_Common_Text_No							: "Não",

    LT_Common_Text_Enable						: "Habilitar",

    LT_Common_Text_Disable						: "Desabilitar",

    LT_Common_Text_NextStep						: "Passo anterior",

    LT_Common_Text_PrevStep						: "Proximo passo",

    LT_Common_Text_Month_Jan                    : "Jan",

    LT_Common_Text_Month_Feb                    : "Fev",

    LT_Common_Text_Month_Mar                    : "Mar",

    LT_Common_Text_Month_Apr                    : "Abr",

    LT_Common_Text_Month_May                    : "Mai",

    LT_Common_Text_Month_Jun                    : "Jun",

    LT_Common_Text_Month_Jul                    : "Jul",

    LT_Common_Text_Month_Aug                    : "Ago",

    LT_Common_Text_Month_Sep                    : "Set",

    LT_Common_Text_Month_Oct                    : "Out",

    LT_Common_Text_Month_Nov                    : "Nov",

    LT_Common_Text_Month_Dec                    : "Dez",

    LT_Common_Text_All							: "tudo",

    LT_Common_Text_Node							: "instância",

    LT_Common_Text_Message						: "Mensagem",



    LT_Common_Text_RequiredField				: "Campo obrigatório",

    LT_Common_Text_EmailField					: "Este campo deve conter um endereço de email",



    LT_Common_Text_Email                        : "Email",



    //

    // Jelastic Application

    //



    LT_Application_Title                        : "Jelastic Cloud",

    LT_Application_Text_ProjectsEmpty           : "__vazio__",



    LT_Panel_Title_Environments                 : "Ambientes",

    LT_Environments_Column_Name                 : "Nome",

    LT_Environments_Column_Status               : "Status",

    LT_Environments_Column_Deployed             : "Implantado",

    LT_Environments_Column_Cloudlets            : "Cloudlets",

    LT_Environments_Column_Usage                : "Uso",

    LT_Environments_Text_NotDeployed            : "Não implantado",

    //LT_Environments_Text_Deployed               : "%(count) arquivos implantados",

    LT_Environments_Text_OneDeployed			: "1 arquivo implantado",

    LT_Environments_Status_Running              : "Correndo",

    LT_Environments_Status_Stopped              : "Parado",

    LT_Environments_Status_Unknown              : "desconhecido",

    LT_Environments_Confirm_DeleteContext		: "Deletar contexto %(sName)?",

//    LT_Environments_Confirm_ResetDBPassword		: "Redefinir a senha para %(sType)?",

//    LT_Environments_Confirm_RestartNode         : "Reiniciar %(sType)?",



    LT_Environments_Validation_InvalidName      : "Este nome contém caracteres que não são permitidos em nomes de domínio internet. Por favor, forneça um nome diferente.",

    LT_Environments_Validation_BusyDomain       : "Nome de domínio %(domain) já está em uso. Por favor, tente outro.",

    LT_Environments_Validation_CheckingDomain   : "Verificando domínio, aguarde por favor.",



    LT_Panel_Title_Tasks                        : "Tarefas",

    LT_Tasks_Column_Name                        : "Nome",

    LT_Tasks_Column_Status                      : "Status",



    //

    // Hive IDE.

    //



    LT_Tab_Title_Start							: "Iniciar",

    LT_Panel_Title_Messages						: "Menesagens",

    LT_Tab_Title_Services						: "Respostas",

    LT_Services_Column_Method					: "Método",

    LT_Services_Column_Address					: "Endereço método",

    LT_Services_Column_Time						: "Resposta [ms]",

    LT_Services_Column_CpuTime					: "CPU [ms]",

    LT_Services_Column_Result					: "Código de resposta",

    LT_Services_Column_Error					: "Description",

    LT_Services_Column_In						: "Dentro",

    LT_Services_Column_Out						: "Fora",



    LT_Menu_Toolbar_Help                        : "Ajuda",

    LT_Menu_Toolbar_Support						: "Suporte",

    LT_Menu_Toolbar_Docs						: "Documentos",

    LT_Menu_Toolbar_Video						: "Vídeo",

    LT_Menu_Toolbar_Features					: "Vote para Recursos",



    LT_Menu_Toolbar_Signout						: "Sair",



    // Menu panel.

    LT_Menu_Settings							: "Configurações",



    LT_Menu_CreateEnvironment                   : "Criar ambiente",

    LT_Menu_DeleteEnvironment                   : "Deletar ambiente",

    LT_Menu_CloneEnvironment                   	: "Clonar ambiente",

    LT_Menu_EditEnvironment                   	: "Mudar ambiente de topologia",

    LT_Menu_RunApplication                      : "Abra no navegador",

    LT_Menu_Start                               : "Iniciar",

    LT_Menu_Stop                                : "Parar",

    LT_Menu_Statistics                          : "Estatísticas",

    LT_Menu_Config                              : "Configuração",

    LT_Menu_Log                                 : "Log",

    LT_Menu_Info                                : "Informações",

    LT_Menu_ToRootNode                          : "Abra no navegador",

    LT_Menu_RestartNode                         : "Reiniciar node",

    LT_Menu_Additionally						: "Adicional",

    LT_Menu_ResetPassword						: "Trocar senha",

    LT_Menu_Solutions                           : "Soluções",



    //Settings tab

    LT_Settings_Title                         	: "%(sAppName) : configurações",

    LT_Settings_Label_Domains				  	: "Domínios personalizados",

    LT_Settings_Label_Accounts				  	: "Gerenciamento de Conta",

    LT_Settings_Title_DomainBinding			  	: "Domínio de ligação",

    LT_Settings_Title_SwapDomains			  	: "Domínio de troca",

    LT_Settings_Label_CName					  	: "1. Em seu painel de DNS, apontar seu domínio externo (exemplo seudominio.com) usando o CNAME para <b>%(sDomain)</b> (<u><a href='%(sDocUrl)' target='_blank'>mostre-me como</a></u>)",

    LT_Settings_Label_EnterDomain			  	: "2. Uma vez que as alterações de DNS foram propagadas, digite seu domínio aqui para ligá-lo ao ambiente",

    LT_Settings_Label_SwapDomains			  	: "Escolha o ambiente com o qual pretende trocar seus domínios e clique no botão Trocar",

    LT_Settings_Label_Bind					  	: "Vincular",

    LT_Settings_Label_Swap					  	: "Troca",

    LT_Settings_Confirm_SwapDomains             : "Troca de domínios entre ambientes %(envName) e %(targetName)?",



    LT_Settings_Text_UserExist					: "O usuário %(sUser) já existe.  Por favor, modificar as permissões existentes, em vez de adicionar um novo registro.",

    LT_Settings_Validator_Domain				: "Este campo deve ter um nome de domínio<br/>no formato: \"www.exemplo.com\"",



    //Deploy tab

    LT_Deploy_Title                             : "Gerenciador de implementação", // [%(sProjName)]",

    LT_Deploy_Label_DeployTo					: "Implantar em ...",

    LT_Deploy_Label_DeployConfirm				: "Implantar %(sArchive) arquivo para %(sAppName) ambiente",

    LT_Deploy_Column_Name                       : "Nome",

    LT_Deploy_Column_Comment                    : "Comentário",

    LT_Deploy_Column_UploadDate                 : "Data de envio",

    LT_Deploy_Column_Size                       : "Tamanho",

    LT_Deploy_Label_Error                       : "Erro de implantação, tente novamente.",

    LT_Deploy_Text_ChooseArchive                : "Escolha o arquivo do gerenciador de implementação.",

    LT_Deploy_Text_NotDeployed                  : "Não implementado",



    //Statistics tab

    LT_Statistics_Title                         : "%(sAppName) : %(sType) : estatísticas",

    LT_Statistics_Button_AutoRefresh            : "Atualzação Automática",

    LT_Statistics_Label_Time                    : "Tempo",

    LT_Statistics_Text_Interval                 : "Intervalo",

    LT_Statistics_Text_Duration                 : "Duração",

    LT_Statistics_Text_IntervalMin              : "minutos",

    LT_Statistics_Text_IntervalHour             : "hora",

    LT_Statistics_Text_IntervalHours            : "horas",

    LT_Statistics_Text_IntervalDay              : "dia",

    LT_Statistics_Text_IntervalWeek             : "semana",



    //Config tab

    LT_Config_Title                             : "%(sAppName) : %(sType) : configuração",

    LT_Config_Button_New                        : "Novo",

    LT_Config_Text_LoadingError                 : "Carregando erro: ",



    //Log tabs

    LT_Log_Title								: "%(sAppName) : %(sType) : log",

    LT_Log_Error								: "Solicitação de Log falhou: %(sError)",

    LT_ActionsLog_Title                         : "%(sAppName) : %(sType) : ações",

    LT_ActionsLog_Text_NodeId                   : "Node ID : %(sNode)",





    // Dialogs.

    LT_Signup_Label_Email 						: "Email",

    LT_Signup_Label_Password					: "Senha",

    LT_Signup_Label_Name						: "Nome",

    LT_Signup_Label_Info						: "Uma vez que a conta é criada, vamos enviar-lhe o link de ativação por e-mail. Por favor, verifique se ele não vai para a pasta de spam.",

    LT_Signup_Button_CreateAccount				: "Criar conta",

    LT_Signup_Title_Dialog						: "Nova conta",

    LT_Signin_Label_Email 						: "Email",

    LT_Signin_Label_Password					: "Senha",

    LT_Signin_Label_Info						: "Suporta contas Google [@gmail.com], Yahoo and Yandex sem registrar.",

    LT_Signin_Label_RememberMe                  : "Lembre-me",

    LT_Signin_Button_Enter						: "Entrar",

    LT_Signin_Title_Dialog						: "Autenticação do Desenvolvedor",

    LT_Signin_Label_ForgotPassword 				: "Esqueceu a senha?",

    LT_Signin_Label_Support 					: "Suporte",

    LT_Signin_Label_Signup 						: "Inscrever-se",

    LT_ChangePassword_Label_OldPassword			: "Senha atual",

    LT_ChangePassword_Label_NewPassword			: "Nova senha",

    LT_ChangePassword_Label_ConfirmPassword		: "Confirmar senha",

    LT_ChangePassword_Validation_Passwords		: "As senhas não correspondem.",

    LT_ChangePassword_Button_Change				: "Mudar senha",

    LT_ChangePassword_Title_Dialog				: "Mudar senha",

    LT_Upload_Title_Dialog						: "Enviando",

    LT_Upload_Label_Local_File					: "Arquivo local",

    LT_Upload_Button_Browse						: "Procurar...",

    LT_Upload_Button_Upload						: "Enviar",

    LT_Upload_Text_Invalid_Format				: "Por favor, só fazer upload de arquivos com extensões:  %(sFormats)",

    LT_UploadArchive_Title_Dialog				: "Enviar arquivo",

    LT_UploadArchive_Label_Empty_Text			: "Selecione um arquivo",

    LT_UploadFile_Title_Dialog                  : "Subir arquivo",

    LT_UploadFile_Label_Empty_Text			    : "Selecione um arquivo",

    LT_DeployArchive_Title_Dialog				: "Implantar em %(sAppName)",

    LT_DeployArchive_Button_Deploy				: "Implantar",

    LT_DeployArchive_Label_Context				: "Contexto",



    LT_EnvironmentSettings_Title_Dialog         : "Topologia de ambiente",

    LT_EnvironmentSettings_Label_WhatIsThis     : "Oque é isso?",

    LT_EnvironmentSettings_Label_Name           : "Nome do ambiente",

    LT_EnvironmentSettings_Label_ComputeStack   : "Compute stack",

    LT_EnvironmentSettings_Label_CloudletCount  : "Cloudlets por instância",

    LT_EnvironmentSettings_Label_DatabaseSQL    : "Banco de dados SQL",

    LT_EnvironmentSettings_Label_DatabaseNoSQL  : "Banco de Dados NoSQL",

    LT_EnvironmentSettings_Text_NotValidName    : "Não é um nome de ambiente válido.",

    LT_DeleteEnvironment_Title_Dialog           : "Excluir ambiente",

    LT_DeleteEnvironment_Label_Password		    : "Senha",



    LT_EnvironmentWizard_Label_HTTPRequests    	: "HTTP Requerido",

    LT_EnvironmentWizard_Label_Statics    		: "Estatísticas",

    LT_EnvironmentWizard_Label_Balancer    		: "Equilibrar",

    LT_EnvironmentWizard_Label_SQL		    	: "SQL",

    LT_EnvironmentWizard_Label_NoSQL	    	: "NoSQL",

    LT_EnvironmentWizard_Label_SQLTerms	    	: "Free 1 GB, 128 MB RAM",

    LT_EnvironmentWizard_Label_NoSQLTerms    	: "Free 1 GB, 128 MB RAM",

    LT_EnvironmentWizard_Label_Cloudlets	   	: "Cloudlet(s)",

    LT_EnvironmentWizard_Label_Count    		: "limite de contagem",

    LT_EnvironmentWizard_Label_PerInstance    	: "por servidor app",

    LT_EnvironmentWizard_Label_Memory	    	: "memória",

    LT_EnvironmentWizard_Label_Mb		    	: "MB",

    LT_EnvironmentWizard_Label_CPU		    	: "cpu",

    LT_EnvironmentWizard_Label_MHz		    	: "MHz",

    LT_EnvironmentWizard_Label_Databases    	: "Banco de Dados",

    LT_EnvironmentWizard_Label_SSL          	: "SSL",

    LT_EnvironmentWizard_Label_ApproxCost    	: "(custo mensal aproximado)",

    LT_EnvironmentWizard_Label_BetaTitle		: " Restrições beta-teste:",

    LT_EnvironmentWizard_Label_BetaRestrictions	: "4 instâncias de computação por ambiente<br/>16 cloudlets por instância de computação<br/>"+

        "1 GB HDD por instância de computação<br/>3 ambientes por conta<br/>",

    LT_EnvironmentWizard_Label_Name		    	: "Nome",



    LT_EnvironmentWizard_Hint_Instance			: 	"<p class=\"dfn\">Precisa de mais instâncias?</p>"+

        "<p>Durante os testes beta, estamos limitando o número de instâncias de computação para 2. Cada node fica automatizado escala vertical &mdash; deve o aumento de carga, mais CPU e memória RAM são automaticamente adicionados. Para auto dimensionamento de nodes, deve fornecer escalabilidade suficiente e de alta disponibilidade para a maioria das aplicações.</p>"+

        "<div class=\"horiz-scaling\">&nbsp;</div>"+

        "<p>Pretendemos fornecer a capacidade de executar mais instâncias e fornecer opções de escala mais horizontais em uma atualização futura.</p>"+

        "<p>Se você precisar dessa funcionalidade urgentemente &mdash; por favor <a href=\"http://support.jelastic.com\">contate-nos</a>. Nós gostaríamos de saber mais sobre a sua aplicação e ver se podemos ajudá-lo.</p>",



    LT_EnvironmentWizard_Hint_Databaces			:   "<div class=\"dfn\">MariaDB &mdash; uma oferta especial de MariaDB e Jelastic</div>"+

        "<p class=\"indent\">MariaDB é uma alternativa em substituição da MySQL. Para aplicações MySQL existente, nenhuma conversão de dados ou outras mudanças são necessárias, suas aplicações existentes será executado inalterado em MariaDB.</p>"+

        "<a href=\"http://mariadb.org/\" target=\"_blank\" class=\"logo\">%(logoImg)</a>"+

        "<p class=\"indent\">MariaDB foi desenvolvido pelos arquitetos originais do núcleo mysqld e é liderado por <a target=\"_blank\" href=\"http://en.wikipedia.org/wiki/Michael_Widenius\">Michael \"Monty\" Widenius</a>, o fundador do MySQL, MySQL Ab e Monty Program Ab.</p>"+

        "<p class=\"indent\">Jelastic irá fornecer suporte para seus bancos de dados MariaDB e MySQL, apoiados pelos desenvolvedores originais do MariaDB. Ao trabalhar com Jelastic, você pode ter certeza de que haverá suporte contínuo e desenvolvimento de MariaDB.</p>",





    LT_RecoverPassword_Title_Dialog	            : "Recuperar senha",

    LT_RecoverPassword_Button_Recover           : "Recuperar",

    LT_RecoverPassword_Label_Info               : "Se você esqueceu sua senha, podemos enviar uma nova senha para o endereço de e-mail registrado com a sua conta.",



    LT_ChangeCloudletsCount_Title_Dialog        : "Mudar limites de cloudlets",

    LT_ChangeCloudletsCount_Label_PerInst      	: "Por instância",

    LT_ChangeCloudletsCount_Label_Used        	: "Usado",

    LT_ChangeCloudletsCount_Label_Limit			: "Limite",

    LT_ChangeCloudletsCount_Label_TotalEnv		: "Ambiente total",

    LT_ChangeCloudletsCount_Label_Instance		: "intância",



    LT_Signout_Confirm_EnvironmenCreating		: "Ambiente está actualmente a ser criado. Você realmente deseja fazer logoff?",



    // Process messages.



    LT_Process_Label_Clone						: "Ð¡Clonando aplicação...",

    //LT_Process_Label_Creating					: "Criando %(sName)...",

    LT_Process_Label_Saving						: "Salvando...",

    LT_Process_Label_Removing					: "Removendo %(sName)...",

    LT_Process_Label_Waiting					: "Aguardando...",

    LT_Process_Label_Deploying 					: "%(sName) sendo implantado...",

    LT_Process_Label_CheckSign					: "A Conectando ao serviço de autenticação, por favor aguarde ...",



    LT_Process_Label_GetApps					: "Carregando seus dados, aguarde por favor...",

    LT_Process_Label_GenerateApp				: "Preparando o Ambiente para a sua aplicação, por favor aguarde...",

    LT_Process_Label_DeleteApp					: "Removendo a sua aplicação, por favor aguarde...",

    LT_Process_Label_RebuildApp					: "Reconstruindo a sua aplicação, por favor aguarde...",

    LT_Process_Label_RemoveField				: "Removendo campo %(sName)...",

    LT_Process_Label_DefineType					: "Criando o tipo %(sName)...",

    LT_Process_Label_UndefineType				: "Removendo tipo %(sName)...",

    LT_Process_Label_GetSolution				: "Carregando solução %(sAppid) ...",



    LT_Process_Label_Starting                   : "Iniciando...",

    LT_Process_Label_Restarting                 : "Reiniciando...",

    LT_Process_Label_Stopping                   : "Parando...",

    LT_Process_Label_UploadingStatus            : "%(sUploaded) KB do total %(sTotal) KB",

    LT_Process_Label_Loading                    : "Carregando...",

    LT_Process_Label_Deleting                   : "Deletando...",

    LT_Process_Label_Creating                   : "Criando...",

    LT_Process_Label_Renaming					: "Renomeando...",

    LT_Process_Label_DeployingText              : "Implantando...",

    LT_Process_Label_ResettingPass              : "Redefenindo senha...",

    LT_Process_Label_Cloning					: "Clonando...",



    // Notify messages.

    LT_Notify_Title_Info						: "Informação",

    LT_Notify_Label_NeedAppName					: "Por favor, especifique o nome do aplicativo em primeiro lugar.",

    LT_Notify_Label_NeedPassword  				: "Como medida de segurança, é necessário que você digite a senha da conta Jelastic antes de continuar.",

    LT_Notify_Label_AutoSaved					: "Salvar automaticamente em %(sTime)",

    LT_Notify_Label_CreateAccount				: "Registro foi bem sucedido. Por favor, verifique seu e-mail para o link de ativação."

        + "<hr />Verificar e-mail para <a href='%(sEmailUrl)'>%(sEmailUrl)</a>",

    LT_Notify_Label_RecoverPassword             : "Uma nova senha foi enviada para o endereço fornecido.",

    LT_Notify_Label_ChooseEnvironment           : "Escolha o ambiente no painel de ambientes.",

    LT_Notify_Label_SelectFolder                : "Por favor, selecione uma pasta.",

    LT_Notify_Label_SelectItem                  : "Por favor, selecione um item.",

    LT_Notify_Label_ContextExists               : "Contexto %(sContext) já está em uso.",

    LT_Notify_Label_FolderExists                : "Pasta com o nome especificado já existe.",

    LT_Notify_Label_FileExists                  : "Arquivo com o nome especificado já existe.",

    LT_Notify_Label_WaitDeploying               : "Por favor, aguarde até que a tarefa de implantação atual seja concluída.",

    LT_Notify_Label_WaitContext					: "Por favor, aguarde até que o contexto atual seja desbloqueado.",

    LT_Notify_Label_EnvironmenStopped           : "O ambiente %(envname) está parado. Executá-lo e tente novamente.",

    LT_Notify_Label_EnvironmenUnavailable       : "O ambiente %(envname) não está disponível. Por favor, tente novamente mais tarde",

    LT_Notify_Label_EnvironmenCreated			: "Ambiente foi criado com êxito. Informações detalhadas foi enviado para o seu e-mail.",

    LT_Notify_Label_EnvironmenLaunching			: "Criando o ambiente. Isso pode demorar alguns minutos para ser concluído.",

    LT_Notify_Label_EnvironmenCloning			: "Clonando ambiente '%(envName)'. Isso pode demorar alguns minutos para ser concluído.",

    LT_Notify_Label_EnvironmenCloned			: "Ambiente '%(envName)' clonado com sucesso. informações detalhadas foi enviado para o seu e-mail.",

    LT_Notify_Label_ResetDBPasswordSuccess		: "A sua senha para %(sType) foi reiniciada com sucesso."+

        "<hr />A nova senha foi enviada para o e-mail associado à sua conta",

    LT_Notify_Label_ResetDBPasswordFailed       : "Redefinição de senha para %(sType) falhou" +

        "<hr /> Por favor tente novamente ou entre em contato <a target='_blank' style='text-decoration:underline' href='http://support.jelastic.com'>suporte.</a>",

    LT_Notify_Label_DeleteEnvironment			: "Após o ambiente %(envname) ser deletado, todos os dados serão perdidos para sempre!",

    LT_Notify_Label_DomainBound					: "Estamos vinculando o seu domínio agora. Isso pode demorar alguns minutos para ser concluído.",

    LT_Notify_Label_DomainsSwap					: "Domínios %(envName) e %(targetName) estão a ser trocados. Isso pode demorar alguns minutos para ser concluído.",



    LT_Notify_Label_DeprecatedBrowser			: "<div class='title'>Seu navegador atual não é oficialmente suportado pelo Jelastic</div>"+

        "<div class='message'>Algumas das funções podem não funcionar corretamente dentro do seu browser. Recomendamos que você use um dos seguintes navegadores com Jelastic:</div>",



    // Tasks

    LT_Task_Status_Success                      : "Sucesso",

    LT_Task_Status_Failed                       : "Falhou",

    LT_Task_Status_NullResponse                 : "Resposta é nula",

    LT_Task_Status_UploadingSuccess             : "Sucesso [total %(sTotal) KB]",

    LT_Task_Status_ConfigurateNewProject        : "Configurar novo projeto",

    LT_Task_GetProjects                         : "Obter projetos.",

    LT_Task_DeployArchiveTo                     : "Implantar %(sArchive) arquivo para %(sAppName) ambiente",

    LT_Task_UploadingFile                       : "Enviando: %(file)",

    LT_Task_LoadArchives                        : "Carregando arquivos do projeto %(sProjectName)",

    LT_Task_DeployApplication                   : "Implantar %(sAppName) aplicação para %(sAppid)",

    LT_Task_CheckAuthentication                 : "Autenticação de verificação",

    LT_Task_CreateEnvironment                   : "Criar ambiente %(sAppName)",

    LT_Task_StartingEnvironment                 : "Iniciando ambiente %(sAppName)",

    LT_Task_StoppingEnvironment                 : "Parando ambiente %(sAppName)",

    LT_Task_RestartingEnvironment               : "Reiniciando ambiente %(sAppName)",

    LT_Task_DeleteApplication                   : "Excluir aplicação %(sAppName)",

    LT_Task_CloneApplication                   	: "Clonar aplicação %(sAppName)",

    LT_Task_CreateNewProject                    : "Criar novo projeto %(sProjectName)",

    LT_Task_ChangingCloudletsCount              : "Alterar limite de cloudlets do %(sAppName) de %(prevCount) para %(newCount)",

    LT_Task_RenameContext						: "Mudar o nome do contexto do %(sAppName) de %(oldContext) para %(newContext)",

    LT_Task_DeleteContext						: "Excluindo contexto %(sContext) de %(sAppName)",

    LT_Task_RemoveLib                           : "Remover %(sArchive) de %(sAppName) ambiente",

    LT_Task_ResetDBPassword                     : "Alterando a senha para %(sType)",



    // Error messages.

    LT_Error_Label_AutoSaved					: "Erro ao salvar %(sTime)",

    LT_Error_Label_AccessDenied					: "Essa ação não está disponível" +

        "<hr />Acesso negado.",



    //

    // Hivext Common error.

    //



    LT_E_Platform_0								: "Nenhum erro",

    LT_E_Platform_1								: "Serviço disponível",

    LT_E_Platform_2								: "Acesso negado",

    LT_E_Platform_3								: "Um ou mais parâmetros obrigatórios não especificados",

    LT_E_Platform_4								: "Entidade não encontrada",

    LT_E_Platform_5								: "Serviço não encontrado",

    LT_E_Platform_6								: "Método não encontrado",

    LT_E_Platform_7								: "O objeto não esta autenticado",

    LT_E_Platform_8								: "Permissão proibida",

    LT_E_Platform_9								: "Operação não permitida",

    LT_E_Platform_10 							: "Aplicações bloqueadas pelo sistema",

    LT_E_Platform_11 							: "A aplicação não existe no sistema",

    LT_E_Platform_14 							: "A aplicação não está presente no node",



    //

    // Hivext Service error.

    //



    LT_E_Platform_501 							: "Formato de endereço de e-mail inválido",

    LT_E_Platform_502 							: "Endereço de e-mail já está registrado no sistema",

    LT_E_Platform_503 							: "Endereço de email não existe",

    LT_E_Platform_504 							: "A senha contém caracteres que não são suportados",

    LT_E_Platform_505 							: "A chave de ativação não é válida. Está incorreta ou já foi usada para ativação.",

    LT_E_Platform_506 							: "O endereço de email não está registrado no Jelastic. Por favor, indique um e-mail registrado ou cadastre uma nova conta Jelastic.",

    LT_E_Platform_601 							: "O servidor de email não está disponível. Por favor tente mais tarde.",

    LT_E_Platform_701 							: "Erro de autenticação",

    LT_E_Platform_702 							: "Usuário não está autenticado",

    LT_E_Platform_704 							: "Usuário bloqueado",

    LT_E_Platform_707							: "O usuário especificado não existe no sistema.<br />Talvez você tenha digitado incorretamente o nome de usuário ou senha?",

    LT_E_Platform_801							: "Senha inválida!",

    LT_E_Platform_904							: "Você atingiu o número máximo de aplicações para um único desenvolvedor",

    LT_E_Platform_1001 							: "Tipo de dados não é compatível.",

    LT_E_Platform_1002 							: "Tipo de dados com o nome especificado já existe",

    LT_E_Platform_1003 							: "Tipo de dados com o nome especificado não existe",

    LT_E_Platform_1008 							: "O campo especificado está reservado",

    LT_E_Platform_1009 							: "O campo especificado não existe",

    LT_E_Platform_1203 							: "Tentativa de escrever uma função com um tipo especial de dados",

    LT_E_Platform_1708 							: "Esta anotação não é suportado. Por favor, verifique o registro.",

    LT_E_Platform_2007 							: "Caractere inválido em nome de arquivo.",



    LT_E_Platform_10001							: "O acesso é limitado a usuários beta e administradores",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Review date : 07.08.2011

    // TODO : Sort all constants below after next review

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_Environments_Confirm_StopEnv             : "Parar ambiente %(sName)?",

    LT_Menu_Packages                            : "Pacotes",

    LT_Log_Label_EmptyFile                      : "%(fileName) está vazio",



    //Packages tab

    LT_Package_Title			                : "%(sAppName) : %(sType) : pacotes",

    LT_Package_Text_Loading                     : "Carregando...",

    LT_Package_Label_Install                    : "Instalar",

    LT_Package_Label_Uninstall                  : "Desinstalar",

    LT_Package_Label_Sort                       : "Ordenar",



    LT_Upload_Label_UploadError 				: "Ocorreu um erro ao tentar carregar os arquivos",

    LT_Upload_Label_FilesCount                  : "O número total de arquivos não pode ultrapassar %(fileCount)",

    LT_Task_RestartingNode                      : "Reiniciando node %(sAppName) : %(sType)",

    LT_Environments_Status_Sleeping             : "Dormindo",



    // Notify messages.

    LT_Notify_Title_Warning                     : "Aviso",

    LT_Notify_Title_Error                       : "Erro",



    LT_EnvironmentSettings_E_NoRights           : "Você não tem permissão para alterar as configurações do %(envname)",

    LT_EnvironmentSettings_E_NoUser             : "Usuário %(sUser) inexistente.",



    LT_Error_Label_UserNoGroup 					: "Você precisa se registrar para o Jelastic beta." +

        "<br><br>Quando você clica em OK, você será redirecionado para a página inicial Jelastic. Por favor, insira seu endereço de e-mail lá e selecione Inscrever-se." +

        "<br><br>Depois de se inscrever para uma nova conta, nós lhe enviaremos um e-mail com as instruções de ativação beta.",



    LT_Task_Name_1	                            : "Obtendo informações sobre %(env)",

    LT_Task_Name_3	                            : "Excluindo ambiente %(env)",

    LT_Task_Name_4	                            : "Iniciando ambiente %(env)",

    LT_Task_Name_5	                            : "Parando ambiente %(env)",

    LT_Task_Name_6	                            : "Reiniciando ambiente %(env)",

    LT_Task_Name_7	                            : "Reiniciando node(s) %(name) do %(env)",

    LT_Task_Name_8	                            : "Definindo cloudlets para conta %(env)",

    LT_Task_Name_9	                            : "Implantando contexto %(context) para %(env)",

    LT_Task_Name_10	                            : "Removendo contexto %(context) de %(env)",

    LT_Task_Name_11	                            : "Mudar o nome do contexto de %(oldcontext) para %(newcontext)",

    LT_Task_Name_12	                            : "Adicionando %(name) node para %(env)",

    LT_Task_Name_13	                            : "Adicionando %(name) node para %(env)",

    LT_Task_Name_14	                            : "Adicionando %(name) node para %(env)",

    LT_Task_Name_15	                            : "Obtendo registros para %(env)",

    LT_Task_Name_16	                            : "Leitura dos Log de %(env)",

    LT_Task_Name_17	                            : "Conectando nodes em %(env)",

    LT_Task_Name_18	                            : "Replicando os nodes em %(env)",

    LT_Task_Name_19	                            : "Redefinição de senha para %(name) do %(env)",

    LT_Task_Name_20	                            : "Clonando env %(srcenv) para %(targetenv)",

    LT_Task_Name_21	                            : "Instalando pacotes %(pkg) para %(env)",

    LT_Task_Name_22	                            : "Desinstalando pacotes %(pkg) de %(env)",

    LT_Task_Name_23	                            : "Removendo logs de %(env)",

    LT_Task_Name_24	                            : "Removendo node %(name) de %(env)",

    LT_Task_Name_25	                            : "Adicionando %(count) computador(es) node(s) para %(env)",

    LT_Task_Name_26	                            : "Alterar as definições de %(env)",

    LT_Task_Name_27	                            : "Adicionando %(name) node para %(env)",

    LT_Task_Name_28	                            : "Construindo %(project) em %(env)",

    LT_Task_Name_29	                            : "Construindo %(project) em %(env)",

    LT_Task_Name_30	                            : "Terminar",

    LT_Task_Name_31	                            : "Adicionaa IP externo para %(name) em %(env)",

    LT_Task_Name_32	                            : "Construindo cluster em %(env)",

    LT_Task_Name_34	                            : "Adicionando %(name) node para %(env)",

    LT_Task_Name_36	                            : "Reiniciando node(s) %(name) do %(env)",

    LT_Task_Name_38	                            : "Adicionando %(name) node para %(env)",





    LT_Text_DatabaseInfo                        : "<p>Para trabalhar com o banco de dados, siga estes passos:<ol>"+

        "<li>Verifique se o seu e-mail para receber seu <b>login</b> e <b>senha</b> para usuário ROOT</li>"+

        "<li>Logar em<a target=_blank href='%(url)'>" +

        "página de administração</a> usando <b>login</b> e <b>senha</b> do usuário ROOT</li>" +

        "<li>Lá, você pode criar o seu próprio banco de dados</li>"+

        "<li>Em seguida, crie um novo usuário (set <b>nome_usuario</b> e <b>senha_usuario</b>)</li>"+

        "<li>Insira esse <b>nome_usuario</b> e <b>senha_usuario</b> na sequência de conexão para conectar o seu banco de dados a seu aplicativo</li></ol><p>",



    LT_Text_NodeInfo_MoreInfo                   : "<p>Para obter informações adicionais visite a nossa <a target=_blank href='%(url)'> página de documentação </a></p>",



    LT_Common_Button_Clear						: "Limpo",



    LT_Common_Button_FullScreen					: "Tela cheia",



    LT_Log_AlreadyEmpty                         :"%(file) já está vazio!",



    LT_Common_Text_Common					    : "Comum",



    LT_Menu_AdminPanel                          : "Painel de Administração",



    LT_EnvironmentWizard_Label_ApplyingSettings : "Aplicando configurações ...",



    LT_SolutionWizard_Title                     : "JavaAppStore - Instalando %(name)",



    LT_SolutionWizard_Error_SolutionNotExists   : "A solução não existe!",





    LT_ActivateCoupon_Title_Dialog              : "Cupom de ativação",



    LT_ActivateCoupon_Label_PromoCode           : "Código promocional",



    LT_ActivateCoupon_Label_Info                : "Digite o seu código promocional e obtenha até 4 GB de RAM para os seus servidores de aplicativos.",



    LT_ActivateCoupon_Button_Activate           : "Ativar",



    LT_ActivateCoupon_Error_Activate            : "Código promocional inválido!",



    LT_Proccess_Label_Activation                : "Ativando...",



    LT_Notify_Label_CouponActivated             : "Ativado com sucesso. <br />  Agora você pode obter até 4 GB de RAM para os seus servidores de aplicativos!",



    LT_BuildNode_Title_AddProject               : "Adicionar projeto",

    LT_BuildNode_Title_EditProject              : "Editar projeto",

    LT_BuildNode_Label_Build                    : "Construir",

    LT_BuildNode_Label_BuildDeploy              : "Construir e implantar",

    LT_BuildNode_Confirm_DeleteProject          : "Deletar projeto \"%(sName)\"?",

    LT_BuildNode_Confirm_BuildProject           : "Construir projeto \"%(sName)\"?",

    LT_BuildNode_Confirm_BuildAndProject        : "Construir e implantar projeto \"%(sName)\"?",

    LT_Proccess_Label_AddingProject             : "Adicionando projeto...",

    LT_Proccess_Label_ChangeProject             : "Alterando projeto ...",

    LT_Process_Label_Building                   : "Construindo...",

    LT_Process_Label_GettingProject             : "Obtendo projeto...",



    LT_Common_Text_Name                         : "Nome",

    //LT_Common_Text_Path                         : "URL",

    LT_Common_Text_Login                        : "Login",

    LT_Common_Text_Password                     : "Senha",

    LT_Common_Text_Environment                  : "Ambiente",

    LT_Common_Text_Context      				: "Contexto",

    LT_Common_Text_Repository					: "Repositório",



    // LT_Signin_Label_Registration				: "<b>Foi enviado um email com a senha</b> para a conta. Se você não tiver recebido o e-mail, por favor, verifique o endereço de e-mail e verifique a sua pasta de e-mail em massa/spam. Se você ainda não consegue acessar sua conta - entre em contato conosco <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a>",



    LT_Process_Label_Signing					: "Entrando...",

    LT_Process_Label_SigningOut					: "Assinando...",



    LT_Common_Label_Balance                     : "Usuário balanceado",

    LT_DeployArchive_InvalidContext             : "Nome de contexto inválido",



    LT_Billing_Title                            : "Histórico de faturamento",

    LT_Billing_Column_Env                       : "Ambiente",

    LT_Billing_Column_Event                     : "Nome do evento",

    LT_Billing_Column_Cost                      : "Custo",

    LT_Billing_Column_Usage                     : "Uso pago",

    LT_Billing_Label_OverallCost                : "Custo total",



    LT_Common_Text_StartDate            		: "Início",

    LT_Common_Text_EndDate            		    : "Fim",

    LT_Common_Text_Interval            		    : "Intervalo",

    LT_Common_Text_Close            		    : "Fechar",

    LT_Common_Text_Items                        : "item(s)",



    LT_Common_Text_Interval_3600                : "hora",

    LT_Common_Text_Interval_86400               : "dia",

    LT_Common_Text_Interval_604800              : "semana",

    LT_Common_Text_Interval_2592000             : "mês",



    LT_Environments_Validation_ErrorDomain      : "Ocorreu um erro ao verificar o domínio. Por favor, tente novamente mais tarde.",



    LT_Statistics_Label_UpdateData              : "Ocorreu um erro ao tentar atualizar os dados estatísticos do ambiente '%(envName)'",



    LT_E_Platform_99 							: "Um erro desconhecido ocorreu. Por favor, tente novamente mais tarde. Pedimos desculpas pela inconveniência.",

    LT_Error_Label_ServiceUnavailable           : "O serviço está indisponível. Por favor, tente novamente mais tarde. Pedimos desculpas pela inconveniência.",



    LT_ChangePwd_Error_WrongPassword            : "Senha incorreta!",

    LT_ChangePwd_Text_Success                   : "Senha foi alterada com sucesso.",

    LT_Menu_Toolbar_Coupon                      : "Ativar cupom",

    LT_Common_Text_Clone                        : "Clonar",

    LT_Common_Text_Prev                         : "Anterior",

    LT_Common_Text_Next                         : "Próximo",

    LT_Common_Text_URL                          : "URL",

    LT_Common_Text_Comment                      : "Comente",

    LT_BugReport_Title                          : "Reportar erro do Jelastic",

    LT_BugReport_Text_Intro                     : "Para nos ajudar a diagnosticar e corrigir o problema, você pode nos enviar um relatório de erros.",

    LT_BugReport_Text_SentSuccess               : "O relatório foi enviada com sucesso. Obrigado!",

    LT_GOut_Label_SendReport                    : "Enviar relatório",

    LT_Upload_Validation_URL                    : 'Este campo deve ter uma URL no formato<br/>'+

        '"http://www.examplo.com/",<br/>'+

        '"ftp://www.examplo.com/" or <br/>'+

        '"ftp://login:senha@www.examplo.com/"',

    LT_Upload_FileNotFound                      : "Arquivo não encontrado!",

    LT_Process_Label_Uploading					: "Enviando...",

    LT_Upload_EmptyURL                          : "http://... ou ftp://...",

    LT_BugReport_Label_Comment                  : "Comente",

    LT_BugReport_Label_Details                  : "Detalhes",

    LT_BugReport_Label_SendReport               : "Enviar relatório",

    LT_Common_Text_Install                      : "Instalar",

    LT_Common_Text_General                      : "Geral",

    LT_Common_Text_Topology                     : "Topologia",

    LT_Common_Text_Version                      : "Versão",

    LT_Common_Text_Category                     : "Categoria",

    LT_Common_Text_Updated                      : "Atualizada",

    LT_Common_Text_Price                        : "Preço",

    LT_Common_Text_Description                  : "Descrição",

    LT_Common_Text_Errors                       : "Erros",

    LT_Common_Text_FulScreen                    : "Tela cheia",

    LT_Common_Text_Branch                       : "Ramo",

    LT_Common_Text_Right                        : "Certo",

    LT_Common_Text_Summary                      : "Resumo",

    LT_RowEditor_CommitChangesText              : "Você precisa confirmar ou cancelar suas alterações",

    LT_DeployArchive_EmptyText                  : "Selecione um contexto",

    LT_ConfigManager_NewFolder                  : "Nova pasta",

    LT_ConfigManager_NewConfig                  : "NovoArquivo_",

    LT_ConfigManager_NewDir                     : "NovoDiretorio_",

    LT_Topology_Requests                        : "Pedidos",

    LT_EnvWizard_IPv4                           : "IPv4 Público",

    LT_EnvWizard_BuildNode                      : "Construir node",



    //LT_EnvWizard_AppLogic                       : "A lógica de aplicação",

    LT_EnvWizard_SqlDatabase                    : "SQL Database",

    LT_EnvWizard_NoSqlDatabase                  : "NoSQL Database",

    LT_EnvWizard_VScaling                       : "Escalada vertical",

    //LT_EnvWizard_CloudletsLimit                 : "Limite de Cloudlets",

    LT_EnvWizard_HA                             : "Alta disponibilidade",

    LT_EnvWizard_Software                       : "Software",

    LT_EnvWizard_JdkVersion                     : "Versão JDK",

    LT_EnvWizard_HScaling                       : "Escalada horizontal",

    LT_EnvWizard_Instances                      : "Instâncias",



    LT_Units_Kb                                 : "KB",

    LT_Units_Mb                                 : "MB",

    LT_Units_Gb                                 : "GB",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Added : 11.01.2012

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    LT_EnvWizard_Hint_Ssl                       : "Ativar SSL",

//    LT_EnvWizard_Hint_Balancer                  : "Balancear",

//    LT_EnvWizard_Hint_Compute                   : "REC - Tempo de Execução do Container",

//    LT_EnvWizard_Hint_HScaling                  : "Escalada horizontal",

//    LT_EnvWizard_Hint_AppServers                : "Servidores de aplicativos tipo e versão",

//    LT_EnvWizard_Hint_JDK                       : "Versão JDK",

//    LT_EnvWizard_Hint_PHP                       : "Versão PHP",

//    LT_EnvWizard_Hint_Build                     : "Construir  node",

//    LT_EnvWizard_Hint_Sql                       : "SQL Database",

//    LT_EnvWizard_Hint_NoSql                     : "NoSQL Database",



    LT_EnvWizard_Warning_Common                 : "<span class=\"attention\">Atenção!</span> A configuração atual de alguns componentes podem ser irreparáveis ou afetar o desempenho.",



    LT_EnvWizard_ApacheModule                   : "Módulo",



    LT_EnvironmentWizard_Hint_BuildNode			:   "<div class=\"dfn\"><span class=\"gray\"></span>Comprometer &mdash; Construir &mdash; Implantar Fluxo de Trabalho</div>" +

        "<img src=\"./jelastic/env/images/topology/build-process.png\" width=\"507\" height=\"133\">" +

        "<div class='labels'>" +

        "<div class='ide'><span>IDE</span><p>Comprometer-se a repositório</p></div>" +

        "<div class='svn'><span>Repositório</span><p>SVN ou Git</p></div>" +

        "<div class='build'><span>Construir node</span><p>Construir e implementar o ambiente</p></div>" +

        "<div class='env'><span>Ambiente</span><p>Aplicar código para todos os nodes</p></div>" +

        "</div>",



    LT_Common_Text_Language                     : "Língua",

    LT_Signin_Label_ResetPassword 				: "Trocar a senha",



    LT_Upload_Error_MaxSize                     : "O tamanho máximo de arquivo que você pode fazer upload de um computador local é %(size). Por favor, tente fazer o upload do arquivo de uma URL.",

    LT_Upload_Error_Upload   				    : "Ocorreu um erro ao tentar fazer upload dos arquivos: %(msg)",



    LT_BuildNode_Warning_NameExist              : "Projeto com nome atual já existe!",

    LT_BuildNode_Warning_InvalidName            : "Nome de projeto inválido",

    LT_Common_Text_InvalidData                  : "Dados inválidos",





    ////////////////////////////////////////////////////////////



    LT_Warning_Label_Browser_Title              : "Seu navegador atual não é oficialmente suportado pelo Jelastic",

    LT_Warning_Label_Browser_Message            : "Algumas das funções podem não funcionar corretamente. Recomendamos que você use um dos seguintes navegadores com Jelastic:",



    LT_DeployArchive_Label_SelectContext        : "Escolha um dos contextos existentes ou digite o novo.",

//    LT_DeployArchive_Label_SelectDeployment     : "Selecione w.",



    LT_ConfigManager_NewFile                    : "Novo arquivo",



    LT_EnvWizard_Label_GetTariffs               : "Obter tarifas...",

    LT_EnvWizard_Label_EnvName                  : "Nome do ambiente",



    LT_Tasks_Column_Date                        : "Data",



    LT_Units_ms                                 : "ms",

    LT_Statistics_Label_RAM                     : "Uso de RAM",

    LT_Statistics_Label_CPU                     : "Uso de CPU",

    LT_Statistics_Label_HDD                     : "Uso de Disco",



    LT_Statistics_Chart_Title                   : "%(label), [%(unit)]",



    LT_Menu_Toolbar_ConvertAccount              : "Atualizar %(groupName) conta",

    LT_Menu_Billing_ViewStat                    : "Ver estatísticas",

    LT_Menu_Billing_BillStat                    : "Faturamento / estatísticas",

    LT_Menu_Billing_RefillAccount               : "Recarregar saldo",



    LT_Error_Template                           : "Ocorreu um erro ao tentar %(action)",

    LT_Action_Deploy                            : "implantar arquivo",

    LT_Action_BindExtDomain                     : "vincular domínio externo",

    LT_Action_RemoveExtDomain                   : "remover domínio externo",

    LT_Action_SwapExtDomains                    : "trocar domínio externo",

    LT_Action_CreateEnv                         : "criar um ambiente",

    LT_Action_DeleteEnv                         : "deletar um ambiente",

    LT_Action_StartEnv                          : "começar ambiente",

    LT_Action_StopEnv                           : "parar ambiente",

    LT_Action_CloneEnv                          : "clonar ambiente",

    LT_Action_ResetDbPass                       : "trocar senha",

    LT_Action_SaveFile                          : "salvar arquivo",

    LT_Action_CreateDir                         : "criar diretório",

    LT_Action_CreateFile                        : "criar arquivo",

    LT_Action_RenameFile                        : "renomear arquivo",

    LT_Action_DeleteFile                        : "deletar arquivo",

    LT_Action_Upload                            : "enviar arquivo",

    LT_Action_UploadFiles                       : "enviar arquivo(s)",

    LT_Action_RenameContext                     : "renomear contexto",

    LT_Action_DeleteContext                     : "deletar context",

    LT_Action_RestartNode                       : "reiniciar node",

    LT_Action_Build                             : "construir projeto",

    LT_Action_GetLogs                           : "obter logs",

    LT_Action_ReadLog                           : "ler log",

    LT_Action_RemoveLog                         : "remover log",

    LT_Action_ClearLog                          : "limpar log",

    LT_Action_ResetPassword                     : "trocar a senha",

    LT_Action_ChangePassword                    : "mudar senha",

    LT_Action_ActivateCoupon                    : "ativar cupom",

    LT_Action_CreateSolution                    : "criar solução",

    LT_Action_ChangeTopology                    : "mudar topologia",

    LT_Action_AddProject                        : "adicionar projeto",

    LT_Action_EditProject                       : "editar projeto",

    LT_Action_LoadFiles                         : "arquivos de carga",



    LT_Config_NotSelected                       : "Por favor, selecione o arquivo no painel do lado esquerdo.",



    LT_Window_Title                             : "Painel de administração Jelastic",



    LT_Units_MHz                                 : "MHz",



    LT_EnvWizard_Btn_Refill                     : "Recarregar",



    LT_Error_NotBillingUser                     : "Houve um erro ao recuperar informações de sua conta. Entre em contato com nossa equipe de suporte.",



    LT_Menu_Billing_RefreshBalance              : "Atualizar saldo",



    //TODO: remove LT_Error_Label_UserNoGroup from all localization files!

    LT_Error_Label_UserHasNoHXGroups            : "Você precisa ser um usuário Jelastic registrado para fazer o login.",



    LT_Error_SuspendedAccount_Trial             : "O período de avaliação expirou e sua conta foi desativada. Atualize a sua conta se você gostaria de continuar usando Jelastic.",

    LT_Error_SuspendedAccount_Billing           : "A sua conta foi temporariamente desativado devido à falta de fundos. Por favor, recarregue a sua conta para continuar usando Jelastic.",



    LT_Menu_Toolbar_SendEmail	    			: "Enviar email",

    LT_Menu_Toolbar_SupportForum    			: "Contato com o suporte",



    LT_SendEmail_Title                          : "Enviar um email",

    LT_SendEmail_Text_SentSuccess               : "O e-mail foi enviado com sucesso. Obrigado!",



    LT_Common_Button_Send                       : "Enviar",

    LT_Billing_Label_ExternalIP                 : "IP externo",

    LT_BugReport_Text_YourComment               : "Descrever o que causou/criou este erro",



    LT_SignupDlg_Label_Signup                   : "Inscrever-se!",

    LT_SignupDlg_Label_Info                     : "<b>Registe-se gratuitamente!</b> A inscrição confirma que você leu e concorda com os <a href=\"%(sTermsUrl)\" target=\"_blank\">Termos de Serviços</a> e nossa <a href=\"%(sPolicyUrl)\" target=\"_blank\">política de privacidade</a>.",



    LT_Signin_Label_SignupFailed				: "<b>O registro da conta falhou</b>. Nós suspeitamos que isso é devido a problemas de rede - por favor, tente novamente em alguns minutos. Se a sua segunda tentativa fracassada envie um email para <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a> e nós vamos ajudá-lo.",

    //LT_Signin_Label_SuspendedAccount            : "A sua conta foi suspensa por violar os <a href=\"%(sTermsUrl)\" target=\"_blank\">Termos de Serviços</a>. Para obter informações adicionais, entre em contato conosco <a class=\"email\" href=\"mailto:%(sSupportEmail)\">%(sSupportEmail)</a>",

    LT_Signin_Label_SuspendedAccount            : "A sua conta foi suspensa. Entre em contato com o suporte via <a href=\"%(HOSTER_SUPPORT)\" target=\"_blank\">%(HOSTER_NAME) portal</a> para questões relacionadas a esta suspensão.",

    LT_Process_Label_SigningUp					: "Signing up...",



    LT_ResetPswdDlg_Label_ResetFailed	        : "Ocorreu um erro ao tentar redefinir sua senha. Nós suspeitamos que isso é devido a problemas de rede - por favor, tente novamente em alguns minutos. Se a sua segunda tentativa fracassada envie um email para <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a>",

    LT_ResetPswdDlg_Label_NotRegistered         : "O e-mail não está registado no sistema. Por favor verifique o endereço de e-mail ou <a action=\"signup\">inscrever-se</a> para uma nova conta.",

    LT_Error_Label_AuthFailed 					: "Endereço de e-mail ou senha incorreta. Você pode <a action=\"reset-password\">redefinir sua senha</a>.",



    //LT_Quotas_Title                             : "Quotas de Sistemas",

    LT_Quotas_Column_Quota                      : "Quota",

    LT_Quotas_Column_Trial                      : "Trial",

    //LT_Quotas_Column_Billing                    : "Faturamento",



//    LT_Quotas_Label_Activate                    : "Ativar",

//    LT_Quotas_Label_MaxEnvCount                 : "Numero máximo de ambientes",

//    LT_Quotas_Text_MaxEnvCount                  : "O número máximo de ambientes que podem ser criados.",

//    LT_Quotas_Label_MinBalance                  : "Saldo mínimo",

//    LT_Quotas_Text_MinBalance                   : "A quantidade mínima de crédito na conta, o que permite que você crie seu ambiente.",

//    LT_Quotas_Label_MaxCPRecCount               : "Número máximo de containers (REC)",

//    LT_Quotas_Text_MaxCPRecCount                : "O número máximo de containers que podem ser adicionados ao meio ambiente.",

//    LT_Quotas_Label_MaxCloudlets                : "Número máximo de cloudlets por container (REC)",

//    LT_Quotas_Text_MaxCloudlets                 : "O número máximo de cloudlets, que pode ser instalado em cada container (REC).",

//    LT_Quotas_Label_HA                          : "Alta disponibilidade",

//    LT_Quotas_Text_HA                           : "A capacidade de usar a alta disponibilidade.",

//    LT_Quotas_Label_ExternalIP                  : "IP externo",

//    LT_Quotas_Text_ExternalIP                   : "A capacidade de usar um endereço IP externo.",



    LT_Quotas_Label_Available                   : "Disponível",

    LT_Quotas_Label_NoLimit                     : "Ilimitado",

    LT_Quotas_Label_NotAvailable                : "Indisponível",



    LT_Pricing_Title                            : "Preços",

    LT_Pricing_Column_Containers                : "Containers",

//    LT_Pricing_Column_CldlPrice                 : "Preço por <b>1 cloudlet</b>",

//    LT_Pricing_Column_CapacityPrice             : "Preço por <b>1 armazenamento</b>",

    LT_Pricing_Column_Service                   : "Serviço",

    LT_Pricing_Column_MonthPrice                : "Preço por <b>1 hora</b>",



    LT_Menu_Billing_Quotas                      : "Quotas e preços",



    LT_Notify_Title_Question                    : "Questão",

    LT_Notify_Label_UserGroupChanged            : "O tipo de conta foi alterado para'%(sGroup)'. Você precisa atualizar a página para que as alterações entrem em vigor. Você quer fazer isso agora?",



    LT_Process_Label_Refreshing                 : "Atualizando...",



    LT_EnvWizard_AboutCurrency                  : "Os preços estão em%(currency)",



    LT_Menu_Billing_Balance_Total               : "Saldo",

    LT_Menu_Billing_Balance_Cash                : "Dinheiro",

    LT_Menu_Billing_Balance_Bonus               : "Bônus",



    LT_Notify_Label_NoFreeHardware              : "Nós não temos nenhum hardware disponível no momento. O novo hardware será adicionado em breve. Por favor, tente novamente dentro de algumas horas.",



    LT_Error_Account_Destroyed                  : "A sua conta foi desativada. Entre em contato com nossa equipe de suporte para reativá-lo.",



    LT_Environments_Column_ExternalIP           : "IP externo",



    LT_Common_Text_DoNotShowDialog              : "Não mostrar este diálogo novamente",



    LT_RefillDlg_Text_HowToRefill               : "Clique <b>Recarregar conta</b> para abrir sua conta com o seu provedor de hospedagem web. Use as credenciais que você recebeu por e-mail ao converter, fazer o login e recarregar a conta. %(sMoreInfo)",

    LT_RefillDlg_Label_MoreInfo                 : "Instruções detalhadas sobre como a recarregar a conta pode ser encontrado em <a href='%(sUrl)' target='_blank'>nossa página de documentação</a>.",



    LT_Menu_Toolbar_Community                   : "Ir para a comunidade",



    LT_Quotas_Label_EnvSleep                    : "Modo automático de hibernação",

    LT_Quotas_Text_EnvSleep                     : "A quantidade de horas durante as quais o meio ambiente não foi acessado e foi colocado em modo de hibernação automaticamente.",



    LT_SolutionDlg_Title                        : "Confirmar a instalação of %(name)",

    LT_SolutionDlg_WelcomeMsg                   : "Olá, %(email). É um prazer ver que você está interessado em nosso produto.",

    LT_SolutionDlg_MoreInfo                     : "Mais informações em",

    LT_SolutionDlg_JustClickInstall             : "Para isso basta clicar \"Instalar\"",

    LT_SolutionDlg_PleaseWait                   : "Pacote está sendo instalado, por favor aguarde ...",

    LT_SolutionDlg_Deploy                       : "Implantando",

    LT_SolutionDlg_Config                       : "Configurando ambiente",

    LT_SolutionDlg_ApplicationSettings          : "Aplicando configurações",

    LT_SolutionDlg_ChooseEnvironment            : "Escolha ambiente",



    LT_Error_Solution_LoadData                  : "Ocorreu um erro ao tentar obter dados de solução.",



    LT_Action_GetEnvs                           : "obter ambientes",



    LT_Units_GHz                                 : "GHz",



    LT_EnvWizard_Label_Mode_Basic               : "Básico",

    LT_EnvWizard_Label_Mode_Expert              : "Especialista",



    LT_EnvWizard_Cache                          : "Cache",

    LT_EnvWizard_VDS                            : "Elastic VPS",



    LT_EnvWizard_Label_Topology_Balancer        : "Saldar",

    LT_EnvWizard_Label_Topology_Compute         : "Servidores de Aplicação",

    LT_EnvWizard_Label_Topology_Cache           : "Cache",

    LT_EnvWizard_Label_Topology_Sql             : "SQL",

    LT_EnvWizard_Label_Topology_NoSql           : "NoSQL",

    LT_EnvWizard_Label_Topology_VDS             : "VPS",

    LT_EnvWizard_Label_Topology_Build           : "Construir",

    LT_EnvWizard_Label_Topology_SSL             : "SSL",



    LT_EnvWizard_Label_Topology_Addons          : "Add-ons",

    LT_EnvWizard_Label_Topology_Storage         : "Armazenamento",

    LT_EnvWizard_Label_Topology_Servers         : "Servidores",



    LT_EnvWizard_SSL_Jelastic                   : "Jelastic SSL",

    LT_EnvWizard_SSL_Custom                     : "SSL Personalizados",

    LT_EnvWizard_SSL_About_Custom               : "SSL SSL está atualmente disponível apenas para URLs Jelastic. SSL para domínios personalizados está atualmente em desenvolvimento e será adicionado em uma atualização futura.",



    LT_EnvWizard_Scaling                        : "Escalada",

    LT_EnvWizard_Scaling_Vertical               : "(Vertical)",

    LT_EnvWizard_Scaling_Vert_Horz              : "(Vertical & Horizontal)",

    LT_EnvWizard_Scaling_Nodes                  : "node(s)",

    LT_EnvWizard_CloudletsLimit                 : "Limite de Cloudlets",

    LT_EnvWizard_Engine                         : "SDK",



    LT_EnvWizard_Ballons_From                   : "A partir de",

    LT_EnvWizard_Ballons_AutoScaling            : "Dimensionamento automático",

    LT_EnvWizard_Ballons_Cloudlet               : "cloudlet",

    LT_EnvWizard_Ballons_Cloudlets              : "cloudlet(s)",

    LT_EnvWizard_Ballons_PerHour                : "por hora",

    LT_EnvWizard_Ballons_UpTo                   : "até",



    LT_EnvWizard_AppServers                     : "Servidores de aplicação",





//    LT_EnvWizard_W_MaxvInstances_Trial          : "Ambientes de teste estão limitados a %(count) instância de servidores de aplicação. <a action='upgrade' target='_blank'>Atualize agora</a> para remover esta limitação.",







    LT_EnvWizard_Warning_DeleteStorage          : "Após o armazenamento ser excluído, todos os dados serão perdidos para sempre!",





    LT_EnvWizard_Text_TrialPrices               : "*Gratuitamente para o período de testes.",

    LT_EnvWizard_Text_BetaPrices                : "*Gratuitamente para o período beta.",

    LT_EnvWizard_Label_WizardMode               : "Modo de assistente:",



    LT_EnvWizard_Hint_Balancer                  : "Distribui automaticamente o tráfego de entrada dos aplicativos em vários nodes.",

    LT_EnvWizard_Hint_Compute                   : "As máquinas virtuais para o qual você implantar seu aplicativo. Depois que o ambiente é criado, você pode configurar os servidores para carregar as bibliotecas ou alterar arquivos de configuração.",

    LT_EnvWizard_Hint_Cache                     : "Memcached - uma loja de key-value in-memory para pequenos pedaços de dados arbitrários (strings, objetos) de resultados de banco de dados, chamadas de API, ou renderização de páginas.",

    LT_EnvWizard_Hint_Sql                       : "Máquina virtual com banco SQL do tipo que você selecionar.",

    LT_EnvWizard_Hint_NoSql                     : "Máquina virtual com banco NoSQL do tipo que você selecionar.",

    LT_EnvWizard_Hint_Build                     : "Node Maven que pode construir seus projetos na nuvem. Depois de criar o ambiente, você pode configurar o node para adicionar seu GIT ou projeto SVN.",

    //LT_EnvWizard_Hint_SSL                       : "Certificado SSL para conexões HTTPS para o seu ambiente. Note-se que o acesso HTTPS para ambientes com domínios personalizados ainda não está disponível e está sendo adicionado em nosso próximo lançamento.",

    LT_EnvWizard_Hint_Pricing                   : "Clique para ver informação detalhada sobre quotas e preços.",



    LT_EnvironmentWizard_Hint_Cloudlets		    :

//        "Definir <i>a máxima</i> quantidade de recursos que você deseja que o servidor nunca receba. O <span class=\"dfn\">Cloudlet</span> &mdash; é uma quantidade pré-definida de memória e capacidade de processamento fornecida a um servidor."+

//        "%(illustration_1)"+

//        "<p>A Cloudlet é aproximadamente equivalente a 128 MB de RAM e 200 MHz núcleo da CPU. Cloudlet são atribuídos dinamicamente aos aplicativos, dependendo da carga a qualquer momento dentro dos limites especificados.</p>"+

//        "%(illustration_2)"+

        "<div class='dfn'>Você só paga pelo que usa.</div>" +

        "<p> Jelastic aloca automaticamente a quantidade adequada de cloudlets para cada aplicação, dependendo dos recursos que cada aplicativo precisa, mas não mais do que o número máximo que você especificar.</p>"+

        "%(illustration_3)",



    LT_Statistics_Label_NetInInt                : "In int. usage",

    LT_Statistics_Label_NetOutInt               : "Out int. usage",

    LT_Statistics_Label_NetInExt                : "In ext. usage",

    LT_Statistics_Label_NetOutExt               : "Out ext. usage",



    LT_Menu_Toolbar_AboutTrialLimitations       : "Aprender sobre as limitações dos testes",

    LT_Menu_Toolbar_AboutPricing                : "Saiba mais sobre preços",

    LT_Menu_Toolbar_ResourceUsage               : "Ver as estatísticas sobre o uso de recursos recente",



    LT_Quotas_Title                             : "Limites de conta",

    LT_Quotas_Column_Limitation                 : "Limitação",

    LT_Quotas_Column_Billing                    : "Conta completa",

    LT_Quotas_Label_Current                     : "Atual",



    LT_Quotas_Label_Activate                    : "Ativar",

    LT_Quotas_Text_MaxEnvCount                  : "O número máximo de ambientes que você pode criar.",

//    LT_Quotas_Text_MaxCPRecCount                : "O número máximo de servidores de aplicativos por ambiente.",

    LT_Quotas_Text_MaxCloudlets                 : "Tamanho máximo de um servidor Cloudlet (um Cloudlet é %(CLOUDLET_RAM) MB RAM, %(CLOUDLET_CPU) MHz CPU core).",

    LT_Quotas_Text_HA                           : "Opção para instalação de cluster de alta disponibilidade.",

    LT_Quotas_Text_ExternalIP                   : "Endereços de IP públicos.",



    LT_Pricing_Column_CldlPrice                 : "Preço para <b>1 cloudlet / hora</b>",

    LT_Pricing_Column_CapacityPrice             : "Preço para <b>1 GB de armazenamento / hora</b>",



    LT_Task_Name_33	                            : "Alterar arquivo de configuração no %(env)",

    LT_Task_Name_37	                            : "Desativação da replicação em %(env)",



    LT_Text_CacheInfo                           :

        "<p>Para trabalhar com o node memcached, use as seguintes informações:<ol>"+

        "<li>Verifique o seu e-mail para obter o URL do node memcached ou obtê-lo na seqüência a seguir:<br/>" +

        "- <a target=_blank href='%(url)'>%(url)</a><br/><br/></li>"+

        "<li>Você pode se conectar ao node memcached com a ajuda de um exemplo de código fornecido ou usando bibliotecas<br/>que pode encontrar nos locais listados abaixo:</li></ol></p>",



    LT_Text_CacheInfo_Links :

        "<p>- Clients Java memcached:<br/>"+

        "<a target=_blank href='http://code.google.com/p/spymemcached/'>http://code.google.com/p/spymemcached</a><br/>"+

        "<a target=_blank href='http://www.whalin.com/memcached'>http://www.whalin.com/memcached</a><br/>"+

        "<a target=_blank href='http://code.google.com/p/javamemcachedclient'>http://code.google.com/p/javamemcachedclient</a><br/>"+

        "<a target=_blank href='http://code.google.com/p/memcache-client-forjava'>http://code.google.com/p/memcache-client-forjava</a><br/>"+

        "<a target=_blank href='http://code.google.com/p/xmemcached'>http://code.google.com/p/xmemcached</a></p>" +

        "<p>- Integrations:<br/>" +

        "<a target=_blank href='http://code.google.com/p/simple-spring-memcached'>http://code.google.com/p/simple-spring-memcached</a><br/>"+

        "<a target=_blank href='http://code.google.com/p/memcached-session-manager'>http://code.google.com/p/memcached-session-manager</a><br/>"+

        "<a target=_blank href='http://code.google.com/p/memcached/wiki/Clients'>http://code.google.com/p/memcached/wiki/Clients</a></p>",





    LT_Balloons_Label_Have_Used                 : "Eu usei Jelastic antes",

    LT_Balloons_DeploySuccess_Text              : "Parabéns! Agora vamos abrir o seu aplicativo!",



    LT_Balloons_Tip_Close                       : "Feche esta dica",

    LT_Balloons_Tip_Stop                        : "Pare o tutorial",



    LT_Menu_Toolbar_Tutorial                    : "Mostrar o tutorial Jelastic",





    LT_Billing_Label_ForTrial                   : "(para testes)",



    LT_Common_Text_Traffic                      : "Tráfego",



    LT_BuildNode_Warning_HasNotCompute          : "Não é possível implantar no ambiente sem computador de node.",



    LT_Notify_Label_NoFreeIps                   : "Não há IPs públicos gratuitos no momento. Os novos IPs públicos estarão disponíveis em breve. Por favor, tente novamente mais tarde.",



    LT_Process_Label_LoadingUserData            : "Carregando dados do usuário",



    LT_CustomSSL_Label                          : "Custom SSL",

    LT_CustomSSL_Label_Download                 : "baixar",

    LT_CustomSSL_Label_ServerKey                : "Chave do servidor",

    LT_CustomSSL_Label_CACertificate            : "Certificado intermediário (CA)",

    LT_CustomSSL_Label_DomainCertificate        : "Certificado de domínio",

    LT_CustomSSL_Label_Certificates             : "Certificados",

    LT_CustomSSL_Label_Domains                  : "Domínios",



    LT_CustomSSL_Text_WrongEnv                  : "Este recurso pode não funcionar corretamente com a configuração atual do seu ambiente. <a action='configure'>Clique aqui para configurar seu ambiente</a>.",

    LT_CustomSSL_Text_EditMode                  : "Todos os servidores de aplicativos no ambiente atual serão reiniciados.",

    LT_CustomSSL_Text_WrongCerts                : "Ocorreu um erro ao tentar ativar o SSL personalizado. Por favor verifique os certificados atuais e tente novamente.",



    LT_CustomSSL_Error_GetState                 : "Ocorreu um erro ao tentar carregar SSL.",

    LT_CustomSSL_Error_Enable                   : "Ocorreu um erro ao tentar ativar o SSL personalizado.",

    LT_CustomSSL_Error_Disable                  : "Ocorreu um erro ao tentar desativar SSL personalizado.",



    LT_Common_Button_Configure                  : "Configurar",

    LT_Common_Button_Change                     : "Alterar",



    LT_Process_Label_Processing                 : "Em processamento...",



    //LT_EnvWizard_Hint_SSL                       : "Certificado SSL para conexões HTTPS para o seu ambiente. Note-se que o acesso HTTPS para ambientes com domínios personalizados ainda não está disponível e estará disponível no nosso próximo lançamento.",

    LT_EnvWizard_Hint_SSL                       : "Certificado SSL para conexões HTTPS para o seu ambiente.",



    //LT_EnvWizard_Label_EnvSettings              : "Configurações de ambiente",

    LT_EnvWizard_Text_SLL_Reqs                  : "Permitem a conexão SSL com sua aplicação usando certificado curinga SSL Jelastic. [link]Saiba mais[/link]",

    LT_EnvWizard_Text_CustomSLL_Reqs            : "Envie o certificado personalizado para o seu ambiente para permitir a conexão SSL. [link]Saiba mais[/link]",

    LT_EnvWizard_Label_Requirements             : "Requesitos:",

    LT_EnvWizard_AppServer                      : "Servidor de aplicação",

    LT_EnvWizard_Label_Adjust                   : "Ajustar",



    // LT_Task_EnableCustomSSL                     : "Configurando certificados SSL em %(env)",

    // LT_Task_DisableCustomSSL                    : "Removendo certificados SSL de %(env)",



    LT_EnvWizard_Label_BuySSLCertificate        : "Comprar certificado SSL",



    LT_Common_Text_Update                       : "Atualizar de %(type)",

    LT_Context_Confirm_UpdateProject            : "Atualizar projeto \"%(sName)\"?",



    LT_DeployArchive_Warning_VCSContext         : "Este contexto já está em uso por projeto SVN/GIT.",



    LT_Action_UpdateProject                     : "atualizar projeto",

    LT_Action_GetProject                        : "obter projeto",

    LT_Action_RemoveProject                     : "remover projeto",



    LT_Task_Name_39	                            : "Atualização de  contexto %(project) no %(env)",



    LT_Environments_Text_Deployed               : "%(count) projetos implantados",



    LT_Process_Label_Updating					: "Atualização...",



    LT_Common_Confirm_Delete                    : "Excluir %(name)?",

    LT_Common_Confirm_Save                      : "Salvar %(name)?",



    LT_CustomSSL_Text_ServerKey                 : "Uma chave servidor é uma chave criptografada / descriptografia  privada usada pelo servidor.",

    LT_CustomSSL_Text_CACertificate             : "Certificate Authority (CA) é uma entidade que emite certificados digitais, que irá verificar a propriedade de uma chave pública, chamado assunto do certificado.",

    LT_CustomSSL_Text_DomainCertificate         : "Um certificado de domínio é um documento eletrônico que é dada pela Autoridade de Certificação que verifica a permissão do candidato para usar um nome de domínio específico.",

    LT_CustomSSL_Label_UpTo                     : "até",



    LT_Common_Text_CheckoutNow                  : "Saindo agora",

    LT_Common_Text_UpdateNow                    : "Atualizar agora",



    LT_Error_UpdateVCSProject_AuthFailed        : "A autenticação falhou ao tentar atualizar %(project) projeto no %(env). Por favor verifique as configurações do projeto.",

    LT_Error_UpdateVCSProject_WrongConfig       : "Ocorreu um erro ao tentar atualizar %(project) projeto no %(env). Por favor verifique as configurações do projeto.",

    LT_Error_UpdateVCSProject_NotExist          : "Ocorreu um erro ao tentar atualizar %(project) projeto no %(env). O projeto não existe.",



    LT_Error_EditProject_Exist                  : "Projeto com o nome %(project) já existe.",

    LT_Error_EditProject_UnknownType            : "Projeto não processado, tipo não é suportado.",



    LT_Environments_Validation_Domain_Length    : "O tamanho do domínio deve ser inferior a%(maxLength).",



    LT_DeployArchive_InvalidPath                : "Nome do caminho inválido",



    LT_Environments_Status_0                    : "Desconhecido",

    LT_Environments_Status_1                    : "Executando",

    LT_Environments_Status_2                    : "Parado",

    LT_Environments_Status_3                    : "Iniciando...",

    LT_Environments_Status_4                    : "Hibernando",

    LT_Environments_Status_5                    : "Suspenso",

    LT_Environments_Status_6                    : "Criando...",

    LT_Environments_Status_7                    : "Clonando...",



    LT_Action_ReadFile                          : "ler o arquivo",



    LT_Menu_CloneEnvironment_NoRights           : "Você não tem permissões suficientes para clonar este ambiente.",

    LT_Menu_DeleteEnvironment_NoRights          : "Você não tem permissões suficientes para excluir este ambiente.",



    LT_Environments_Validation_ShortDomain      : "Tamanho do domínio deve ser mais do que 4 caracteres.",



    TrialToPaid_InvoiceTo                       : "Fatura para:",

    TrialToPaid_FirstName                       : "Primeiro nome",

    TrialToPaid_LastName                        : "Último nome",

    TrialToPaid_CompanyName                     : "Nome da empresa",

    TrialToPaid_VatNumber                       : "VAT Número",

    TrialToPaid_StreetAddress                   : "Endereço",

    TrialToPaid_City                            : "Cidade",

    TrialToPaid_Country                         : "País",

    TrialToPaid_State                           : "Estado",

    TrialToPaid_Zip                             : "CEP",

    TrialToPaid_Phone                           : "Telefone",

    TrialToPaid_PhoneCountry                    : "país",

    TrialToPaid_PhoneArea                       : "área",

    TrialToPaid_PhoneNumber                     : "número",



    TrialToPaid_AgreeCheck                      : "Eu li e concordo com o [link]Termos de Serviços[/link]",

    TrialToPaid_Next                            : "Próximo",

    TrialToPaid_GettingUserInfo                 : "Obtendo informações do usuário...",



    LT_Action_GetUserInfo                       : "obter informações do usuário",

    LT_Action_ConvertAccount                    : "converter conta",

    LT_Action_AddPaymentMethod                  : "adicionar novo método de pagamento",

    LT_Action_DelPaymentMethod                  : "deletar o método de pagamento",

    LT_Action_SetDefPayMethod                   : "selecionar método de pagamento padrão",

    LT_Action_DisableAutoRefill                 : "desativar auto-recarga",

    LT_Action_ViewInvoices                      : "ver faturas",



    Refill_FraudCheck                           : "Você precisa passar por verificações de segurança adicionais para efetuar o pagamento.",

    Refill_UnknownServicePlan                   : "Plano de serviço desconhecido!",

    Refill_SelectPaymentMethod                  : "Por favor, selecione o método de pagamento preferido",

    Refill_Confirm                              : "Reabastecer a sua conta com %(withTaxes) (%(pureAmount) + %(taxesSum) VAT) usando %(payMethod)?",

    Refill_ApprovedThank                        : "Obrigado por seu pagamento",

    Refill_ApprovedReceived                     : "Recebemos seu pagamento, e%(amount) foi adicionado ao seu saldo.",

    Refill_ApprovedEmailed                      : "A fatura correspondente será enviada para seus registros.",

    Refill_CreditDebit                          : "Cartão de Crédito / Débito",

    Refill_PayPal                               : "Pagamento PayPal",

    Refill_TransactionDeclined                  : "A transação foi recusada",

    Refill_ThankNotify                          : "Obrigado por seu pagamento! Vamos notificá-lo sobre o recebimento desse pagamento em breve.",

    Refill_SumAdjustment                        : "Ajustar total",

    Refill_SubmitPayment                        : "Enviar pagamento",

    Refill_PayOptions                           : "Opções de pagamento",

    Refill_TopUp                                : "Completar montante",

    Refill_PlusVat                              : "+ VAT em %(percento)%",

    Refill_TotalPayable                         : "Total a pagar:",

    Refill_Existing                             : "Use um dos métodos de pagamento existentes",



    PayManager_Title                            : "Métodos de Pagamento",

    PayManager_ChooseDefault                    : "Escolha o seu método de pagamento padrão",

    PayManager_ConfirmDelete                    : "Deletar %(name)?",

    PayManager_AddPayMethod                     : "Adicionar novo método de pagamento",

    PayManager_SubmitNew                        : "Você deve [link]enviar um pagamento[/link] para salvar novos detalhes de pagamento",

    PayManager_SetDefault                       : "Definir %(name) como método de pagamento padrão?",



    AutoRefill_Title                            : "Recarga automática",

    AutoRefill_Active                           : "Auto-recarga está ativa atualmente. " +

        "[link]Clique aqui para desativar auto-recarga[/link], ou editar as configurações abaixo se você quiser fazer alterações",



    AutoRefill_When                             : "Auto recarregar quando",

    AutoRefill_Weekly                           : "Semanal (toda segunda-feira)",

    AutoRefill_Monthly                          : "Mensal (1º de cada mês)",

    AutoRefill_LessThan                         : "Equilibrar a menos de %(currency)",

    AutoRefill_Confirm                          : "Recarregar automaticamente %(withTaxes) (%(pureAmount) + %(taxesSum) VAT) usando %(payMethod)?",

    AutoRefill_Disabled                         : "Recarga automática foi desativada com sucesso",

    AutoRefill_ConfirmDisable                   : "Desabilitar recarga automática?",



    BillingMenu_AutoRefill                      : "Configurar auto-recarga",

    BillingMenu_ViewInvoices                    : "Veja as faturas",



    SendMessage_From                            : "A partir de",

    SendMessage_To                              : "Para",

    SendMessage_Subject                         : "Assunto",



    LT_Error_UrlNotValid                        : "URL não é válida!",

    LT_Environments_Tooltip_Text_Deployed       : "Implantar seus pacotes WAR do painel gerenciador de implementação.",



    LT_SolutionDlg_Success                      : "Sua aplicação %(name) foi implantado com sucesso para Jelastic.",



    TrialToPaid_CreateAccount                  : "Atualizar",

    TrialToPaid_CreateAccountHint              : "Clique no botão Criar Conta para atualizar sua conta de teste Jelastic",

    TrialToPaid_Submit                         : "Enviar",



    //LT_Quotas_Label_MinBalance                  : "Saldo mínimo",

    LT_Quotas_Text_MinBalance                   : "A quantidade mínima de dinheiro na conta, o que permite que você crie ambiente.",

    LT_Quotas_Text_TrialPeriod                  : "O período durante o qual você pode usar sua conta de teste.",

    LT_Quotas_Text_TrialBonus                   : "Os bônus grátis que você recebe para o uso da conta de teste.",



    LT_Error_RecoverPass                        : "Endereço de e-mail incorreto",

    LT_Error_AuthFailed                         : "A autenticação falhou",

    LT_BuildNode_Warning_InvalidLogin           : "Login inválido",

    LT_BuildNode_Warning_InvalidPath            : "Caminho inválido",



    LT_EnvWizard_Label_FIXED                    : "Fixo",

    LT_EnvWizard_Label_FLEXIBLE                 : "Flexível",

    LT_EnvWizard_Label_HYBRID                   : "Híbrido",



    LT_EnvWizard_PriceSlider_Reserved           : "Cloudlets reservados",



    LT_EnvWizard_PriceSlider_Cloudlets_Now      : "Agora: %(value)",

    LT_EnvWizard_PriceSlider_Cloudlets_Next     : "Depois: %(value)",



    LT_EnvWizard_PriceSlider_Cloudlets          : "%(value) cloudlets",

    LT_EnvWizard_PriceSlider_CurrDiscount       : "O seu desconto: %(value)",

    LT_EnvWizard_PriceSlider_NextDiscount       : "Próximo desconto: %(value)",



    LT_EnvWizard_Pricing_From                   : "a partir de",

    LT_EnvWizard_Pricing_To                     : "para",

    LT_EnvWizard_Pricing_Price                  : "preço",



    LT_EnvWizard_Pricing_Resources              : "Recursos",

    LT_EnvWizard_Pricing_ResourcesClds          : "(cloudlets)",



    LT_EnvWizard_Pricing_TotalReserved          : "Total de Cloudlets reservados",

    LT_EnvWizard_Pricing_TotalDynamic           : "Total de Cloudlets dinâmicos",

    LT_EnvWizard_Pricing_PerMonth               : "por mês",



    LT_EnvWizard_Pricing_SavingReserved         : "Você está economizando %(value) usando Cloudlets reservados",

    LT_EnvWizard_Pricing_SavingDynamic          : "Você está economizando %(value) usando Cloudlets dinâmicos",

    LT_EnvWizard_Pricing_SaveRsvdByMonth        : "/mês",



    LT_EnvWizard_Pricing_ShowDetails            : "Detalhes de custo",

    //LT_EnvWizard_Pricing_DetailedInfo           : "Informações detalhadas sobre preços",





    LT_EnvWizard_Options                        : "Opções",



    LT_EnvWizard_Ballons_Reserved               : "Reservado",

    LT_EnvWizard_Ballons_Dynamic                : "Limite de escalonamento",



    LT_Error_Rename_Context                     : "Contexto não existe",

    LT_Incorrect_ItemName                       : "Nome do item incorreto",



    LT_Pricing_Label_Hour                       : "/hora",

    LT_Pricing_Label_Discount                   : "desconto",

    LT_Pricing_Label_ReservedRes                : "Cloudlets reservados",

    LT_Pricing_Label_DynamicRes                 : "Cloudlets dinâmicos",





    LT_EnvWizard_Ballons_Discount               : "Desconto",



//    LT_PackageDescription_ftp                   : "Suporte ao protocolo FTP/FTPS para implantar seus aplicativos para Jelastic.",

    LT_Pricing_Text_ReservedRes                 : "Estas cloudlets são reservados com antecedência (usando o assistente de topologia).<br />Você sempre pagar pelos cloudlets reservados configurados, mesmo se você usar menos recursos.<br />O nível de desconto é a soma total de todos cloudlets reservados por ambiente.",

    LT_Pricing_Tetx_DynamicRes                  : "Instantâneas recursos de dimensionamento dinâmico para sua aplicação. Você só paga por cloudlets dinâmicos em uso. Use o limite escalonado no assistente de topologia para definir o máximo permitido por servidor.<br />O nível de desconto é a soma total de todos cloudlets dinâmicos em uso por ambiente.",



    LT_Pricing_Discount_Title                   : "RAM / CPU",

    LT_SoftCost_Title                           : "Software",

    //LT_SoftCost_Text_Description                : "<p>O uso de pilhas de software é gratuito em Jelastic!</p><p>Você paga somente pelos recursos consumidos, mas não para a adição de software disponível para o seu ambiente.</p>",



    LT_Confirm_ResetFtpPassword                 : "Redefinição de senha para FTP?",

    LT_Confirm_UninstallApp                     : "Desinstalar aplicativo?",



    LT_Process_Label_Uninstalling       		: "Desinstalando...",



    LT_EnvWizard_Scaling_VerticalPerNode        : "A escala vertical por nodo",

    LT_EnvWizard_Scaling_Horizontal             : "Escala horizontal",



    LT_Addons_Title                             : "%(sAppName) : %(sType) : add-ons",

    LT_Menu_Addons                              : "Add-ons",



    LT_AddonShortDescription_ftp                : "Suporte ao protocolo FTP/FTPS para implantar seus aplicativos para Jelastic.",

    LT_AddonDescription_ftp                     : "<p>File Transfer Protocol (FTP) é um protocolo de rede padrão usado para transferir arquivos de um host para outro através de uma rede baseada em TCP.</p><p>FTP protegidos com SSL (FTPS), é utilizado para a transmissão segura que esconde o nome de usuário e senha e criptografar o conteúdo.</p>",

    LT_AddonWarning_externalip                  : "IPv4 público será adicionado ao seu ambiente automaticamente",



    LT_E_Platform_4071                          : "\"%(archive)\" arquivo não pode ser implantado para \"%(context)\" contexto, porque este arquivo está danificado. Por favor verifique o arquivo e tente novamente.",

    LT_E_Platform_4072                          : "\"%(archive)\" arquivo não pode ser implantado para \"%(context)\" contexto, porque este arquivo está vazio. Por favor verifique o arquivo e tente novamente.",



    LT_EnvWizard_JelasticSSL                    : "Jelastic SSL",

    LT_EnvWizard_Extra                          : "Extra",



    LT_SolutionDlg_AdditionalInfo               : "Confirme a instalação de %(name)<br />para começar a usá-lo.",



    LT_AddonFtp_InstallSuccess                  : "FTP foi instalado com sucesso. Seu login e senha foram enviadas para o seu e-mail.",

    LT_AddonFtp_ResetPassword                   : "Senha de FTP foi alterada com sucesso e enviado para o seu e-mail.",

    LT_AddonWarning_ConvertAcc                  : "Endereços IPv4 públicos estão disponíveis apenas para contas pagas. Por favor, atualize para remover este limite.",

    LT_AddonWarning_ContactSupport              : "Se os limites para a sua conta não permitem que você adicione IPv4 Público. Por favor contate o suporte para remover este limite.",



    LT_Task_FTP_ResetPassword                   : "A redefinição de senha para %(pkg) do %(env)",



    LT_Billing_Column_IntTraffic                : "Tráfego interno",



    AutoRefill_Checkbox                         : "Auto-recarga quando meu saldo<span class='min-threshold'>abaixo de %(minThreshold)</span>",



    LT_EnvWizard_Pricing_UseReserved            : "Você pode<span class='orange-text'>poupar seu dinheiro</span> usando Cloudlets reservados",



    LT_Pricing_Column_Discount                  : "Desconto",

    LT_Pricing_Column_PerHour                   : "Por hora",

    LT_Pricing_Column_CostPerReserved           : "Custo por Cloudlet Reservado",

    LT_Pricing_Column_CostPerDynamic            : "Custo por Cloudlet Dinâmico",

    LT_Pricing_Column_ReservedCloudlets         : "Cloudlets Reservados",

    LT_Pricing_Column_DynamicCloudlets          : "Cloudlets Dinâmicos",

    LT_Pricing_Label_Cloudlet                   : "cloudlet",



    LT_DiscCost_Title                           : "Espaço em disco",

    LT_DiscCost_Column_Storage                  : "Disco usado",



    LT_DiscCost_Text_Description                : "<dfn>Espaço em disco</dfn> é cobrado por hora por GB de espaço em disco utilizado em seu ambiente.",



    LT_NetworkCost_Title                        : "Tráfego",

    LT_NetworkCost_Column_ExtTraffic            : "Tráfego externo no mês passado",

    LT_NetworkCost_Text_Description             : "<dfn>Tráfego</dfn> uso é cobrado por hora. O nível de desconto é baseada na quantidade de tráfego externo usado por ambiente no mês anterior.",

    LT_NetworkCost_Text_InternalDesc            : "Tráfego interno é totalmente gratuito!",



    LT_OptionsCost_Title                        : "Opções",

    LT_OptionsCost_Column_Count                 : "Contagem",

    LT_OptionsCost_Label_IP                     : "IP Público",

    LT_OptionsCost_Text_IP_Desc                 : "Este é um endereço IP externo que é acessível diretamente a partir do lado de fora do cluster. A carga horária é tomada.",

    LT_OptionsCost_Label_JelasticSSL            : "Jelastic SSL",

    LT_OptionsCost_Text_JSSL_Desc               : "Este é um protocolo que estabelece uma conexão segura entre o cliente e seu ambiente Jelastic. A carga horária é tomada.",



    LT_Pricing_Label_PerMonth                   : "por mês",

    LT_Pricing_Label_Free                       : "GRÁTIS",

    LT_Pricing_Column_UnitHourPrice             : "Preço por %(sUnit) / hora",

    LT_Pricing_Column_UnitMonthPrice            : "Preço por %(sUnit) / mês*",

    LT_Pricing_Column_UnitMonthFree             : "Grátis / mês*",

    LT_Pricing_Column_UnitHourFree              : "Grátis / hora",

    LT_Pricing_Column_PricePerHour              : "Preço / hora",

    LT_Pricing_Column_PricePerMonth             : "Preço / mês*",

    LT_Pricing_Column_PricePer                  : "Preço por %(sUnit)",



    LT_DiscCost_Column_FreeTpl                  : "até %(value)",

    LT_NetworkCost_Column_FreeTpl               : "até %(value)",



    LT_Pricing_Text_MonthHours                  : "* Com base em um mês 730 horas.",



    LT_DetailsHint_Label_FreeRes                : "Recursos livres",



    LT_NotConnected                             : "<b>Não conectado.</b> Conectado em %(time)âŠ [link]Tente agora[/link]",



    TrialToPaid_MiddleName                      : "Nome do meio",

    TrialToPaid_RCR                             : "RCR",

    TrialToPaid_Type                            : "Tipo",

    TrialToPaid_CustomerPhysical                : "Pessoal",

    TrialToPaid_CustomerOrganization            : "Empresa",

    TrialToPaid_CustomerEntrepreneur            : "Empreendedor",



    TrialToPaid_Title                           : "Upgrade para conta paga",

    TrialToPaid_SelectPayType                   : "Selecione o método de pagamento:",



    TrialToPaid_SliderDescription               : "<p>O uso de recursos por hora é debitado de um saldo de conta pré-paga.</p><p>Use o controle deslizante para selecionar a quantidade de depósito:</p>",

    Refill_ContactUs                            : "[link]Entre em contato[/link] para discutir um método de pagamento alternativo",



    LT_ConfigManager_SaveOnInstance             : "Salvar apenas para a instância atual",

    LT_ConfigManager_Confirm_SaveOnInstance     : "Salvar %(name) apenas para %(instance)?",

    LT_ConfigManager_Confirm_SaveAll            : "Salvar %(name) para todas as instâncias?",



    LT_BuildNode_AutoUpdate                     : "Verifique e auto-implantar atualizações",

    LT_BuildNode_Interval                       : "Verifique todos os (min)",



    LT_SearchField_HowDoI                       : "Como é que eu..?",



    LT_Environments_Status_1001                 : "Excluindo...",



    LT_Common_Button_TryAgain					: "Tente novamente",



    LT_DeleteEnvironment_Error_Template         : "Ambiente %(envname) falha na exclusão: %(error).",

    LT_DeleteEnvironment_Error_WrongPswd        : "senha inválida",



    LT_DeleteEnvironment_Text_ResetPswd         : "Esqueceu sua senha?<br />Click <a action=\"reset-password\">trocar a senha</a> para obter uma nova.",



    LT_Task_Name_42	                            : "Obtendo a lista de arquivos para %(env)",

    LT_Task_Name_43	                            : "Criando arquivo em %(env)",

    LT_Task_Name_44	                            : "Excluindo arquivos em %(env)",

    LT_Task_Name_45	                            : "Mudando nome de arquivo em %(env)",

    LT_Task_Name_46	                            : "Copiando arquivo em %(env)",

    LT_Task_Name_47	                            : "Lendo arquivos em %(env)",

    LT_Task_Name_48	                            : "Salvando arquivos no %(env)",

    LT_Task_Name_49	                            : "Enviando arquivos para %(env)",





    LT_Config_Text_LoadingError_401             : "O arquivo é muito grande para ser lido.",

    LT_Config_Text_LoadingError_402             : "O arquivo binário não pode ser lido.",



    LT_Menu_Deployment  						: "Desenvolvimento",

    TrialToPaid_ProceedAccount                  : "Continuar",

    AutoRefill_NoPaymentMethods                 : "Não existem métodos de pagamento configurados. Por favor, configure um antes da criação de recarga automática.",



    LT_Deployment_AppDeploymentType             : "Tipo de implantação de aplicativos",



    LT_Process_Label_ChangingDT					: "Alterando tipo...",

    LT_DeployArchive_Label_DeployConfirm        : "Seu aplicativo estará disponível em %(environment), continuar?",

    LT_DeployArchive_Label_SelectDeployment     : "Selecione o tipo de implantação de Ruby para a sua aplicação",



    LT_ConfigManager_SaveForAllInstances        : "Salvar todas as instâncias",



    LT_Process_Label_Installing                 : "Instalando %(name)...",

    LT_Notify_Label_ApplicationInstalled    	: "Aplicativo foi instalado com sucesso. informações detalhadas foi enviado para o seu e-mail.",

    LT_Action_InstallApp                        : "instalar o aplicativo",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 1.9.3

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_Error_StartBlockedEnv                    : "Você não pode iniciar este ambiente como o proprietário, este ambiente é bloqueado.",

    LT_Error_NotEnoughDiskSpace                 : "Seu ambiente \"%(env)\" ficou sem espaço em disco.\n Por favor, [link]entre em contato com o suporte[/link] para que seja aumentado.",

    LT_Error_Platform_4078                      : "Não é possível baixar o arquivo \"%(archive)\" pela URL informada. Por favor verifique a URL e tente novamente.",





    LT_EnvSettings_Confirm_RemoveShare          : "Excluir %(sEmail) conta?",



    LT_Action_DeleteArchive                     : "deletar arquivo",

    PayManager_NoPaymentMethods                 : "Não há métodos de pagamento disponíveis",

    LT_Common_Text_DontAskNextTime              : "Não perguntar novamente",



    LT_Common_Error_LoadData                    : "Falha ao carregar os dados.",



    LT_Settings_Text_WrongEnv                   : "Para que esse recurso funcione corretamente, você precisa ter um nodo de computação ou balanceador de carga adicionado ao seu ambiente. <a action='configure'>Clique aqui para configurar seu ambiente</a>.",



    LT_Billing_Column_Name                      : "Nome",

    LT_Billing_Column_FixedCld                  : "Cloudlets Reservados",

    LT_Billing_Column_FlexibleCld               : "Cloudlets Dinâmicos",



    LT_Billing_Text_UnfundBonus                 : "Saldo de bonus foi cobrado.",

    LT_Billing_Text_UnfundBalance               : "Saldo principal foi cobrado.",



    LT_Task_Name_52	                            : "Colocar IP externo a partir de %(name) em %(env)",

    LT_Task_Name_53	                            : "Parando %(name) nodo(s) em %(env)",

    LT_Task_Name_54	                            : "Iniciando %(name) nodo(s) em %(env)",



    LT_Task_Name_55	                            : "Adicionando %(project) projeto para %(env)",

    LT_Task_Name_56	                            : "Editando %(project) projeto em %(env)",

    LT_Task_Name_57	                            : "Removendo %(project) projeto de %(env)",



    LT_Task_Name_58	                            : "Adicionando %(project) projeto para %(env)",

    LT_Task_Name_59	                            : "Removendo %(project) projeto de %(env)",

    LT_Task_Name_60	                            : "Editando %(oldproject) projeto em %(env)",



    LT_Task_Name_61                             : "Obrigatório %(extdomain) domínio de %(env)",



    LT_Task_Name_62                             : "Configurando certificados SSL em %(env)",

    LT_Task_Name_63                             : "Removendo certificados SSL de %(env)",



    LT_Task_Name_64                             : "Removendo %(extdomain) domínio de %(env)",

    LT_Task_Name_65                             : "Trocando domínio(s) entre %(env) e %(targetenv)",



    LT_Environments_Error_StatusIsSet           : "O status do <b>%(env)</b> meio ambiente não tem permissão para executar esta ação.",



    LT_Error_SuspendedAccount                   : "Sua conta foi desativada. Entre em contato com o suporte com perguntas relacionadas a esta desativação.",



    LT_ConfigManager_FileNotExists              : "O caminho para <b>%(path)</b> em %(env) ambiente não existe. A estrutura de diretório será atualizado.",

    LT_ConfigManager_UpdateDirectory            : "O caminho para <b>%(path)</b> em %(env) ambiente não existe. Por favor, atualize a estrutura de diretórios.",

    LT_Notify_ConnectionProblems                : "O servidor não pôde ser contatado. Este pode ser um erro temporário ou o servidor pode estar desligado. \n Fechar esta janela pop-up e atualize seu navegador",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 2.0.0

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_Menu_Toolbar_AccountSettings             : "Configurações",



    LT_AccountSettings_Title                    : "Configurações da conta",



    LT_SSH_Keys_List_Empty_Text                 : "Você não adicionou nenhum chaves públicas ainda.",



    LT_SSH_Keys_Editor_Field_Title              : "Título",

    LT_SSH_Keys_Editor_Field_Fingerprint        : "Impressão digital",

    LT_SSH_Keys_Editor_Field_PublicKey          : "Chave",

    LT_SSH_Keys_Editor_Button_Add               : "Adicionar chave",



    LT_SSH_Keys_Confirm_Delete                  : "Deletar %(title) chave?",



    LT_SSH_Keys_Error_GetKeys                   : "Ocorreu um erro ao tentar carregar uma chave SSH.",

    LT_SSH_Keys_Error_AddKey                    : "Ocorreu um erro ao tentar adicionar uma chave de SSH.",

    LT_SSH_Keys_Error_RemoveKey                 : "Ocorreu um erro ao tentar remover uma chave SSH.",



    LT_E_Platform_6001                          : "Esta chave pública SSH já existe. Por favor, tente outra.",

    LT_E_Platform_6002                          : "chave pública SSH com %(title) título já existe. Por favor, tente mais um título para sua chave.",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 2.1.0

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_EnvWizard_Info_FutureEngine              : "Em breve! Apoio a esta linguagem de programação serão adicionados em futuras atualizações.",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 2.2.0

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_Process_Label_ConfirmRelation            : "Confirmação de convite...",



    LT_UserSettings_Item_Collaboration          : "Colaboração",

    LT_UserSettings_Item_UserManagement         : "Gerenciamento de Contas",

    LT_UserSettings_Item_SharedWithMe           : "Compartilhou comigo",



    LT_UserMng_Button_Invite                    : "Convite",

    LT_UserMng_Button_Edit                      : "Editar",

    LT_UserMng_Button_Unlink                    : "Desligar",



    LT_UserMng_EnvsGrid_Title                   : "Ambientes compartilhados",

    LT_UserMng_Column_Env                       : "Ambiente",

    LT_UserMng_Column_Role                      : "Mudança de topologia / Acesso SSH",



    LT_UserMng_Label_AllEnvs                    : "todos os ambientes",



    LT_UserMng_Editor_Title                     : "Convidar Usuário",

    LT_UserMng_Editor_Title_Edit                : "Usuário conectado",

    LT_UserMng_Editor_Field_DisplayName         : "Mostrar nome",

    LT_UserMng_Editor_Field_Role                : "Permitir que o usuário possa criar novos ambientes",



    LT_UserMng_Info_SendInvite                  : "Convite para %(email) usuário foi enviado com sucesso.",

    LT_UserMng_Confirm_UnlinkUser               : "Todos os ambientes compartilhados náo seráo mais compartilhados de <b>%(name)</b> usuário. Desvincular usuário?",

    LT_UserMng_Confirm_UnshareEnv               : "Descompartilhar ambientes selecionados?",

    LT_UserMng_Warning_UserLinked               : "%(email) usuário já está ligada à sua conta.",

    LT_UserMng_Warning_InviteYourSelf           : "Você não pode convidar a si mesmo.",

    LT_UserMng_Error_GetUsers                   : "Ocorreu um erro ao tentar carregar a lista de usuários ligados.",

    LT_UserMng_Error_GetUserEnvs                : "Ocorreu um erro ao tentar carregar a lista de ambientes ligados de usuários.",

    LT_UserMng_Error_UnlinkUser                 : "Ocorreu um erro ao tentar desligar um usuário.",

    LT_UserMng_Error_SendInvite                 : "Ocorreu um erro ao tentar enviar um convite para usuário %(email).",

    LT_UserMng_Error_ChangeRole                 : "Ocorreu um erro ao tentar alterar os direitos para usuário %(email).",

    LT_UserMng_Error_ChangeDisplayName          : "Ocorreu um erro ao tentar mudar o nome para usuário %(email)",

    LT_UserMng_Error_SetPermission              : "Ocorreu um erro ao tentar atualizar a lista de ambientes compartilhados com usuário %(email).",

    LT_UserMng_Error_RemovePermission           : "Ocorreu um erro ao tentar remover o ambiente compartilhado(s) para usuário %(email) .",



    LT_UserMng_HelpTip                          : "Leia a [link]documentação[/link] para saber mais detalhes sobre a colaboração com outras contas.",



    LT_UserRelations_Column_Email               : "E-mail",

    LT_UserRelations_Column_DisplayName         : "Mostrar nome",

    LT_UserRelations_Column_Role                : "Permissão para criar ambientes",



    LT_UserRelations_Button_Edit                : "Editar nome",

    LT_UserRelations_Button_Leave               : "Sair",



    LT_UserRelations_Confirm_UnlinkUser         : "Você quer parar de colaborar com usuário <b>%(name)</b>?",

    LT_UserRelations_Error_UnlinkUser           : "Ocorreu um erro ao tentar parar de colaborar com usuário <b>%(name)</b>.",

    LT_UserRelations_Error_ConfirmInvite        : "Ocorreu um erro ao tentar confirmar convite.",



    LT_EnvOwnerSelector_Title                   : "Proprietário de Ambiente",

    LT_EnvOwnerSelector_Field_Owner             : "Proprietário",

    LT_EnvOwnerSelector_Label_Me                : "Eu",



    LT_EnvOwnerSelector_Button_Next             : "Próximo",



    LT_EnvOwnerSelector_Error_GetOwnerData      : "Ocorreu um erro ao tentar carregar dados do proprietário.",

    LT_EnvOwnerSelector_Error_OwnerMaxEnvsCount : "Usuário atingiu o número máximo de ambientes criados por padrão no Jelastic.",

    LT_EnvOwnerSelector_Error_InactiveOwner     : "Status atual do usuário não permite a criação de ambientes.",

    LT_EnvOwnerSelector_Error_NotAdmin          : "Restrições à sua conta não permitir que este usuário crie um ambiente.",

    LT_EnvOwnerSelector_Error_CreateOff         : "Você não tem permissão para criar ambiente devido às suas restrições de conta.",

    LT_EnvOwnerSelector_Error_MaxEnvsCount      : "Você alcançou o número máximo de ambientes criados por padrão no Jelastic.",



    LT_Process_Label_LoadingData                : "Carregando dados...",



    LT_Environments_Column_Owner                : "Proprietário",

    LT_Environments_Column_Owner_Text_Me        : "eu",



    LT_E_Platform_901                           : "O ambiente<b>%(envname)</b> não existe.",



    LT_Menu_NoRights                            : "Você não tem permissão para executar esta ação.",



    LT_EnvSharing_Column_User                   : "E-mail",

    LT_EnvSharing_Column_Role                   : "Mudança de topologia / Acesso SSH",



    LT_EnvSharing_HelpTip                       : "Use [settings]painel de configurações[/settings] para gerir colaboradores. Leia esta [link-docs]documentação[/link-docs] para saber mais detalhes sobre a colaboração com outras contas.",



    LT_EnvSharing_Warning_AlreadyShared         : "Este ambiente já está compartilhado para esta conta.",

    LT_EnvSharing_Error_GetUsers                : "Ocorreu um erro ao tentar carregar os usuários de ambiente %(envName).",

    LT_EnvSharing_Info_InvitationSend           : "Convite foi enviado com sucesso para usuário %(email).",

    LT_EnvSharing_Confirm_UnshareEnv            : "Descompartilhar ambiente atual de usuário(s) selecionado(s)?",

    LT_EnvSharing_Error_ChangeOwner             : "Você não pode definir permissões para o proprietário deste ambiente.",

    LT_EnvSharing_Error_SetPermission           : "Ocorreu um erro ao tentar atualizar as ações para ambiente %(envName)." ,



    LT_EnvWizard_Label_Owner                    : "Proprietário",



    LT_EnvWizard_Warning_NoRights               : "Você não tem permissão para editar a topologia desse ambiente.",



    LT_DeployArchive_Label_DeployInfo           : "Depois de implantar o aplicativo estará disponível em",



    LT_EnvSettings_Item_Info                    : "Informações",



    LT_EnvInfo_Title                            : "Ambiente: %(envName)",

    LT_EnvInfo_Field_Owner                      : "Proprietário",

    LT_EnvInfo_Field_Creator                    : "Criador",

    LT_EnvInfo_Field_CreateDate                 : "Data de criação",



    LT_Error_LoadEnvInfo                        : "Ocorreu um erro ao tentar carregar informações sobre o ambiente.",

    LT_Error_UserNoRights                       : "Você não tem permissões suficientes sobre o ambiente %(envName) para realizar esta ação.",

    LT_Error_OwnerCreateOff                     : "Você não tem permissão para criar ambiente para a conta %(userName) devido a suas restrições de conta.",

    LT_Error_EnvNotShared                       : "O ambiente <b>%(envName)</b> não é compartilhado com você.",



    LT_EnvWizard_BalancerRequired               : "Saldo",

    LT_DeployArchive_Warning_VCSSingleContext   : "Contexto Root já está em uso por projeto SVN/GIT.",

    LT_DeployArchive_Warning_EnvNotRunning      : "Ambiente não está em execução.",

    LT_DeployArchive_Warning_EnvIsBusy          : "Ambiente é ocupado por outro processo.",



//    LT_EnvWizard_W_MaxvInstances_TrialRegistered: "Ambientes são limitados a %(count) instância de servidores de aplicativos para a sua conta. Por favor <a action='refill' target='_blank'> recarregue seu saldo </a> para remover esta limitação.",





    LT_Menu_Applications                        : "Mercado",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 2.3.0

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_Process_Label_ConfirmEnvTransfer         : "Transferindo ambiente ...",



    LT_EnvSettings_Item_ChangeOwner             : "Alterar proprietário",



    LT_EnvTransfer_Title                        : "Transferir Ambiente: %(envName)",

    LT_EnvTransfer_Button_SendRequest           : "Enviar pedido",

    LT_EnvTransfer_Button_CancelRequest         : "Cancelar pedido",



    LT_EnvTransfer_HelpTip                      : "Leia esta [link]documentação[/link] para saber mais detalhes sobre a transferência de meio ambiente.",

    LT_EnvTransfer_HelpTip_NotOwner             : "Apenas o proprietário do ambiente pode executar uma ação de transferência. Leia esta [link] documentação [/link] para saber mais detalhes.",



    LT_EnvTransfer_Text_RequestSent             : "Um pedido de transferência foi enviado para usuário <b>%(email)</b> em %(date) solicitando a aprovação para tomar posse sobre este ambiente.",

    LT_EnvTransfer_Info_SendRequest             : "Pedido de transferência para o usuário <b>%(email)</b> foi enviada com sucesso.",

    LT_EnvTransfer_Error_SendRequest            : "Ocorreu um erro ao tentar enviar um pedido de transferência para usuário <b>%(email)</b>.",

    LT_EnvTransfer_Error_UserNotActive          : "A transferência de ambiente <b>%(envName)</b> não é permitida devido ao status da conta <b>%(email)</b>.",

    LT_EnvTransfer_Error_QuotaLimitReached      : "A transferência do ambiente <b>%(envName)</b> não é permitido devido a restrições da conta <b>%(email)</b>.",

    LT_EnvTransfer_Error_OnlyBilling            : "Ambiente só pode ser transferida para a conta de faturação.",

    LT_EnvTransfer_Error_AlreadyTransferring    : "O ambiente <b>%(envName)</b> está sendo transferido.",

    LT_EnvTransfer_Error_UserLimitReached       : "Transferência do ambiente não é permitida devido às suas restrições de conta.",

    LT_EnvTransfer_Error_UserQuotaEnvsCount     : "Transferência do ambiente não é permitida devido às suas restrições de conta: o número de ambientes excedeu o máximo.",

    LT_EnvTransfer_Error_UserQuotaNodeCount     : "Transferência do ambiente não é permitida devido às suas restrições de conta: o número de contentores por ambiente excedeu o máximo.",

    LT_EnvTransfer_Error_UserQuotaCloudlet      : "Transferência do ambiente não é permitida devido às suas restrições de conta: o número de cloudlets por contêiner excedeu o máximo.",

    LT_EnvTransfer_Error_UserQuotaHA            : "Transferência do ambiente não é permitida devido às suas restrições de conta: o uso de alta disponibilidade é restrita.",

    LT_EnvTransfer_Error_UserQuotaExtIp         : "Transferência do ambiente não é permitida devido às suas restrições de conta: o uso de IP externo é restrito.",

    LT_EnvTransfer_Error_UserQuotaVds           : "Transferência do ambiente não é permitida devido às suas restrições de conta: o uso de VPS é restrito.",



    LT_EnvTransfer_Info_SuccessTransfer         : "O <b>%(envName)</b> ambiente foi transferido com sucesso para sua conta.",

    LT_EnvTransfer_Error_ConfirmRequest         : "Ocorreu um erro ao tentar confirmar a solicitação de transferência do ambiente.",

    LT_EnvTransfer_Confirm_CancelRequest        : "Você deseja cancelar o pedido de transferência do ambiente <b>%(envName)</b> para usuário %(email)?",

    LT_EnvTransfer_Info_CancelRequest           : "Pedido de transferência para o ambiente <b>%(envName)</b> foi cancelada com sucesso.",

    LT_EnvTransfer_Error_CancelRequest          : "Ocorreu um erro ao tentar cancelar o pedido de transferência para o ambiente <b>%(envName)</b>.",



    LT_Warning_UseUserEmail                     : "Você não pode indicar o seu e-mail neste campo.",

    LT_Error_LoadData                           : "Ocorreu um erro ao tentar carregar os dados.",



    LT_Task_Name_69                             : "Pedido de transferência do ambiente <b>%(env)</b> para %(email)",

    LT_Task_Name_70                             : "O ambiente <b>%(env)</b> foi transferido com sucesso para a sua conta",



    LT_Info_EnvAdded                            : "O ambiente <b>%(envName)</b> foi adicionado à sua conta.",



    LT_E_Platform_703                           : "Usuário <b>%(email)</b> não existe.",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 2.4.0

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_Error_AddItem                            : "Ocorreu um erro ao tentar criar a item %(name).",

    LT_Error_EditItem                           : "Ocorreu um erro ao tentar alterar o item %(name).",

    LT_Error_RemoveItem                         : "Ocorreu um erro ao tentar remover o item %(name).",

    LT_Error_SaveItem                           : "Ocorreu um erro ao tentar salvar o item %(name).",

    LT_Error_ItemNotExist                       : "O item <b>%(name)</b> não existe.",

    LT_Error_NodeNotExist                       : "O nodo <b>%(node)</b> não existe no ambiente.",



    LT_Warning_RecheckData                      : "Alguns dados não são válidos, por favor, verifique suas entradas.",



    LT_Common_Confirm_DeleteItems               : "Remover os itens selecionados?",

    LT_Common_Confirm_SaveChanges               : "Salvar alterações?",



    LT_Common_Text_MultipleField                : "O valor deve ser um múltiplo de %(value)",

    LT_Common_Text_From                         : "De",

    LT_Common_Text_To                           : "para",

    LT_Common_Text_Interval_Custom              : "personalizadas...",



    LT_Common_Button_Enable                     : "Habilitar",

    LT_Common_Button_Disable                    : "Desabilitar",

    LT_Common_Button_UndoChanges                : "Desfazer mudanças",



    LT_HelpTip_Common                           : "Leia esta [link]documentação[/link] para saber mais detalhes.",

    LT_HelpTip_Access_AdminOwner                : "Apenas o administrador ou proprietário de um ambiente pode realizar esta ação. Leia [link]documentação[/link] para saber mais detalhes.",



    LT_EnvSettings_Item_Triggers                : "Monitoramento",

    LT_EnvSettings_Item_Alerts                  : "Alertas de Load",

    LT_EnvSettings_Item_HScaling                : "Escala horizontal automático",



    LT_EnvAlerts_HelpTip                        : "Os alertas são enviados para o proprietário do ambiente e para os usuários deste ambiente. Leia [link]documentação[/link] para saber mais detalhes.",



    LT_EnvAlerts_Column_Name                    : "Nome",

    LT_EnvAlerts_Column_Condition               : "Condição",



    LT_EnvAlerts_Field_Name                     : "Nome",

    LT_EnvAlerts_Field_Node                     : "Tipo de nodo",

    LT_EnvAlerts_Field_Type                     : "Sempre que",

    LT_EnvAlerts_Field_TypeCondition            : "É",

    LT_EnvAlerts_Field_TypeConditionUnits       : "%",

    LT_EnvAlerts_Field_Period                   : "Há pelo menos",

    LT_EnvAlerts_Field_PeriodUnits              : "minutos",



    LT_EnvAlerts_Text_Type_Cloudlets            : "Cloudlets (Memória, CPU)",

    LT_EnvAlerts_Text_Type_Memory               : "Memória",

    LT_EnvAlerts_Text_Type_CPU                  : "CPU",

    LT_EnvAlerts_Text_Type_Disk                 : "Armazenamento",

    LT_EnvAlerts_Text_Type_INodes               : "Inodes",



    LT_EnvAlerts_Editor_Title                   : "Adicionar Alerta",

    LT_EnvAlerts_Editor_Title_Edit              : "Editar Alerta",



    LT_EnvScaling_Label_CPU                     : "CPU",

    LT_EnvScaling_Label_Memory                  : "Memória",

    LT_EnvScaling_Label_RemoveNodes             : "Remover Nodos",

    LT_EnvScaling_Label_AddNodes                : "Adicionar Nodos",

    LT_EnvScaling_Label_UsageCPU                : "Uso do CPU",

    LT_EnvScaling_Label_UsageMemory             : "Uso de Memória",

    LT_EnvScaling_Label_Duration                : "Duração",



    LT_EnvScaling_Field_Enabled                 : "Voltado",

    LT_EnvScaling_Field_UpCondition             : "Sempre que o carregamento seja maior que: %(value)",

    LT_EnvScaling_Field_DownCondition           : "Sempre que o carregamento seja menor que: %(value)",



    LT_EnvScaling_Field_NodesBy                 : "nodos por",

    LT_EnvScaling_Field_Count                   : "contagem",

    LT_EnvScaling_Field_EmailNotification       : "Enviar notificação por email",



    LT_EnvScaling_Error_AlreadyExist            : "Escala Horizontal Automático já está configurado para o ambiente <b>%(envName)</b>. Por favor, atualizar os dados para ver as configurações atuais.",



    LT_EnvTrHistory_Field_Type                  : "Tipo",

    LT_EnvTrHistory_Field_Period                : "Período",



    LT_EnvTrHistory_Text_Type_Alerts            : "Alertas de carga",

    LT_EnvTrHistory_Text_Type_Scaling           : "Escala horizontal",



    LT_EnvTrHistory_Column_Date                 : "Data",

    LT_EnvTrHistory_Column_Action               : "Ação",

    LT_EnvTrHistory_Column_Name                 : "Nome",

    LT_EnvTrHistory_Column_Condition            : "Condição",

    LT_EnvTrHistory_Column_Result               : "Resultado",



    LT_EnvTrHistory_Title_Details               : "Detalhes",



    LT_EnvTrHistory_Label_Success               : "Successo",

    LT_EnvTrHistory_Label_Failed                : "Falhou",



    LT_EnvTrHistory_Label_AddNodes              : "Adicionar Nodos",

    LT_EnvTrHistory_Label_RemoveNodes           : "Remover Nodos",

    LT_EnvTrHistory_Label_Notification          : "Enviar Notificação",



    LT_EnvTrHistory_Label_LoadingValue          : "Carregando Valor",

    LT_EnvTrHistory_Label_Status                : "Status",

    LT_EnvTrHistory_Label_NodeCount             : "Contagem de nodos",

    LT_EnvTrHistory_Label_Error                 : "Erro",



    LT_Statistics_Button_AutoScaling            : "Escala horizontal automática",



    LT_SolutionDlg_ConfirmTitle               : "Confirmar instalação de %(name)",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 2.5.0

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_Quotas_Text_MaxEnvNodesCount             : "Número máximo de nodos por ambiente.",

    LT_Quotas_Text_MaxSameNodesCount            : "Número máximo de nodos para o mesmo ambiente.",







    LT_Environments_Confirm_RestartNode         : "Reiniciar o nodo %(sType) com ID %(sNodeId)?",

    LT_Environments_Confirm_RestartNodes        : "Reiniciar nodos %(sType)?",



    LT_Environments_Confirm_ResetNodePassword	: "Redefinir a senha para o nodo %(sType) com ID %(sNodeId)?",

    LT_Environments_Confirm_ResetNodesPassword  : "Redefinir a senha para os nodos %(sType)?",



    LT_Menu_RestartNodes                        : "Reiniciar nodos",



    LT_Task_Name_71	                            : "Redefinindo senha para %(name) ID %(nodeid) nodo de %(env)",

    LT_Task_Name_72	                            : "Reiniciando %(name) ID %(nodeid) nodo de %(env)",

    LT_Task_Name_73	                            : "Adicionando %(count) %(name) nodo(s) para %(env)",



    LT_Environments_Label_Contexts              : "Contextos",

    LT_Environments_Label_Projects              : "Projectos",

    LT_Environments_Label_NodeId                : "Nodo ID:",



    LT_InstanceSelector_Node                    : "Nodo",



    LT_Menu_ChangeDisplayName                   : "Definir Aliás",



    LT_Environments_Column_Usage_QTip           : "CPU: %(cpu)<br /> Mem: %(mem)<br /> HDD: %(disk)<br /> Net: %(net_in)/%(net_out) MB",



    LT_Common_Text_Domain                       : "Domínio",



    LT_Signin_Label_SignupRestrictedEmail	    : "<b>Registo falhou </ b>. Endereço %(restrictedEmail) e-mail não é permitido para registro. Por favor, use outro e-mail ou contacte-nos <a action='contact' href=\"%(HOSTER_TRIAL_SUPPORT)\" target='_blank'>%(text)</a> para a assistência.",

    LT_Error_RestrictedEmail                    : "E-mail <b>%(restrictedEmail)</b> não é permitido",



    LT_UserRelations_Error_NoRelation           : "Usuário %(email) foi desvinculada da sua conta.",



    LT_UserMng_Info_InviteConfirmed             : "Parabéns! Você se juntou com sucesso a colaboração.",



    LT_Menu_Toolbar_Api_Docs					: "API docs",



    LT_Signin_Label_Registration_Title        	: "<div class='title'>Sua senha foi enviada por e-mail para %(email)</div>" + "<div class='note'>Vá para a sua caixa de correio, copie a partir do e-mail de boas-vindas, e cole abaixo.</div>",



    LT_Signin_Label_Activation_Title        	: "<div class='title'>Foi enviado para o e-mail %(email) o link de activação</div>" + "<div class='note'>Vá para a sua caixa de correio e clique no link, a fim de concluir o registro.</div>",



    LT_Signin_Label_Registration				: "<div class='separator'></div><div class='steps-ct'>" +

        "Se você <b>não receber o e-mail de boas-vindas</b> dentro de alguns minutos, por favor:" +

        "<ol class='steps'>" +

        "<li>Verifique sua pasta E-mail Spam / Lixo Eletrônico,</li>" +

        "<li>Certifique-se de que o e-mail <b>%(email)</b> é válido. Se você cometeu um erro de digitação, <a action=\"sign up\">clique aqui</a> para se inscrever novamente,</li>" +

        "<li>Use o recurso de <a action=\"reset-password\">redefinir senha</a>,</li>" +

        "<li>Se você ainda não consegue acessar sua conta, entre em contato conosco <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a></li>" +

        "</ol></div>",



    LT_SolutionDlg_AddonSuccess                 : "%(name) foi instalado com sucesso.",



    LT_AppStoreCat_Blogs                         : "Blogs",

    LT_AppStoreCat_MicroBlogs                    : "Micro Blogs",

    LT_AppStoreCat_PortalsCMS                    : "Portals/CMS",

    LT_AppStoreCat_Forums                        : "Fóruns",

    LT_AppStoreCat_Galleries                     : "Galerias de imagem",

    LT_AppStoreCat_Wikis                         : "Wikis",

    LT_AppStoreCat_SocialNetworking              : "Rede social",

    LT_AppStoreCat_AdManagement                  : "Gerenciamento de anúncios",

    LT_AppStoreCat_Mails                         : "E-mails",

    LT_AppStoreCat_Polls                         : "Sondagens e enquetes",

    LT_AppStoreCat_ProjectManagement             : "Gerenciamento de Projetos",

    LT_AppStoreCat_ECommerce                     : "E-Commerce",

    LT_AppStoreCat_ERP                           : "ERP",

    LT_AppStoreCat_CustomerSupport               : "Suporte ao cliente",

    LT_AppStoreCat_Educational                   : "Educação",

    LT_AppStoreCat_Music                         : "Música",

    LT_AppStoreCat_Video                         : "Vídeo",

    LT_AppStoreCat_FileManagement                : "Gerenciamento de arquivos",

    LT_AppStoreCat_Others                        : "Outros",



    LT_SolutionDlg_Prepare                      : "Preparando ambiente",

    LT_AppStore_Action_ResetPassword            : "Trocar a senha",

    LT_AppStore_Action_Remove                   : "Remover",



    LT_AppStoreCat_Popular                       : "Popular",

    LT_AppStoreCat_CloudTools                    : "Ferramentas Cloud",

    LT_AppStoreCat_Accounting                    : "Contabilidade",

    LT_AppStoreCat_Analytics                     : "Analítica",

    LT_AppStoreCat_AppServer                     : "Servidor de aplicação",

    LT_AppStoreCat_BinRepository                 : "Repositório Binário",

    LT_AppStoreCat_BugTracking                   : "Rastreamento de erro",

    LT_AppStoreCat_Bundles                       : "Pacotes",

    LT_AppStoreCat_BusinessIntelligence          : "Negócios de inteligência",

    LT_AppStoreCat_CodeReview                    : "Revisão de código",

    LT_AppStoreCat_Collaboration                 : "Colaboração",

    LT_AppStoreCat_ContinuousIntegration         : "Integração contínua",

    LT_AppStoreCat_Crm                           : "CRM",

    LT_AppStoreCat_DevTools                      : "Ferramentas de desenvolvimento",

    LT_AppStoreCat_DocManagement                 : "Gerenciador de documento",

    LT_AppStoreCat_Ecm                           : "ECM",

    LT_AppStoreCat_MobileDev                     : "Desenvolvedor móvel",

    LT_AppStoreCat_NewsAggregator                : "Agregador de notícias",

    LT_AppStoreCat_Planning                      : "Planejamento",

    LT_AppStoreCat_TranslationTools              : "Ferramentas de tradução",

    LT_AppStoreCat_Vcs                           : "Controle de versão",

    LT_AppStoreCat_Games                         : "Jogos",

    LT_AppStoreCat_RSS                           : "RSS",

    LT_AppStoreCat_DBTools                       : "Ferramentas de banco de dados",

    LT_AppStoreCat_GuestBooks                    : "Livros de visitas",

    LT_AppStoreCat_Calendars                     : "Calendários",



    LT_Error_Label_UserNotActivated              : "O endereço de e-mail que você digitou não está ativado no sistema. Você pode <a action=\"resend-activation\">reenviar o e-mail de ativação</a>.",



    LT_SignupDlg_Label_ResendInfo                : "Se você não recebeu o e-mail de ativação, podemos enviar novamente para o endereço de e-mail da sua conta.",

    LT_SignupDlg_Label_Resend                    : "Reenviar",

    LT_Process_Label_ResendingActivation         : "Enviando e-mail de ativação...",

    LT_Notify_Label_ResendingActivation          : "Um novo link de ativação foi enviado para o endereço fornecido.",



    LT_Process_Label_Register			         : "Registrando uma nova conta...",

    LT_Process_Label_Signout			         : "Saindo...",

    LT_Process_Label_GetProjects                 : "Obtendo ambientes...",

    LT_Error_Label_UserExist                     : "O endereço de e-mail que você digitou já está registrado no sistema. Você pode <a action=\"reset-password\">redefinir sua senha</a>.",



    LT_EnvScaling_HelpTip                        : "Configurar os acionadores abaixo para adicionar automaticamente ou remover nodos de web/aplicação a partir de seu ambiente com base no consumo de recursos. Cada nodo tem as mesmas configurações de Cloudlet como os nodos web/aplicativos existentes. Leia este [link]documento[/link] para saber mais detalhes.",

    LT_EnvScaling_Error_QuotaReached             : "Restrições à sua conta não permitem salvar a configuração atual: o número de containers por ambiente excede o máximo.",

    LT_Error_WrongActivationKey                  : "A chave de confirmação não é mais válida.",

    LT_EnvTransfer_Error_NotValidKey             : "O pedido de transferência não é mais válido.",



    LT_EnvScaling_Field_ScaleUpTo                : "Escale até",

    LT_EnvScaling_Field_ScaleDownTo              : "Reduza a",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 3.0.0

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_SSH_Keys_Title                           : "SSH Keychain",

    LT_SSH_Key_Public                           : "Público",

    LT_SSH_Key_Private                          : "Privado",

    LT_SSH_Keys_Editor_Title_Public             : "Adicionar Chave Pública",

    LT_SSH_Keys_Editor_Title_Private            : "Adicionar Chave Privada",

    LT_SSH_Keys_Editor_Title_Preview            : "Chave SSH",

    LT_Use_Authentication                       : "Use a autenticação",

    LT_Common_Access_Type                       : "Tipo de acesso",

    LT_Common_Select_Key                        : "Selecionar chave",

    LT_Common_Type_Password                     : "Digitar senha",

    LT_SSH_Public_Keys_List_Title               : "Chaves SSH públicas",

    LT_SSH_Private_Keys_List_Title              : "Chaves SSH privadas",

    LT_SSH_Public_Keys_HelpTip                  : "Por favor, use o seu cliente SSH: [link-ssh-uri]ssh%(sshLogin)@%(sshDomain) -p %(sshPort)[/link-ssh-uri]<br/>As configurações SSH serão aplicadas à conta. Leia esta [link-docs]documentação[/link-docs] para descobrir mais detalhes sobre o acesso SSH para os seus ambientes.",

    LT_SSH_Private_Keys_HelpTip                 : "Chaves SSH privadas de acesso repositórios GIT.<br/> Leia esta [link-docs]documentação [/link-docs] para saber mais detalhes sobre como acessar seus projetos remotos via SSH.",

    LT_SSH_General_HelpTip                      : "<b>Protocolo SSH (Secure Shell Handler)</b> é usado para estabelecer a conexão segura entre o cliente e o servidor. <br/> Jelastic usa o componente de infra-estrutura [link-overview]SSH Gateway[/link-overview], a fim de fornecer essa possibilidade.<br/> de acordo com suas necessidades, você pode adicionar suas chaves SSH <b>pública</b> ou <b>privada</b>: <br/><ul><li> chaves privadas são necessárias para autenticação[/link-git-ssh] na sua conta GIT[/link-git-ssh] a fim de obter a capacidade de clonar e atualizar o projeto hospedado a partir do seu repositório remoto.</li><li>Chaves públicas são necessários para estabelecer a conexão SSH [link-docs]para a sua conta / um container separado [/link-docs] no ambiente. Nota-se que a disponibilidade de uso 'Chaves de SSH públicas depende das configurações do seu provedor de hospedagem. Entre em contato com [link-support]suporte[/link-support] para mais informações.</li></ul>",

    LT_Common_Text_Path                         : "Caminho",

    LT_BuildNode_Warning_InvalidUrl             : "URL inválida",

    LT_SSH_Keys_Access                          : "Acesso SSH",

    LT_SSH_Path_Example                         : "https://... git://... ftp://... examplo.com:repo...",

    LT_Task_Name_68                             : "Adicionando chave SSH %(title)",



    LT_EnvWizard_Label_Docker                   : "Container",

    LT_EnvWizard_Label_Topology_Docker          : "Docker containers",

    LT_EnvWizard_Label_Topology_Extra           : "Extra",

    LT_EnvWizard_Hint_Dockers                   : "",

    LT_EnvWizard_Button_SelectDocker            : "Selecionar Container",



    LT_Task_Name_74	                            : "Adicionando nodo %(displayname) a %(env)",

    LT_Task_Name_76	                            : "Definir a quantidade de cloudlets do nodo %(name) com ID %(nodeid) em %(env)",



    LT_AppStore_Auth_Title                      : "Autorização",



    LT_AppStore_Label_Custom                    : "personalizar",



    LT_Confirm_RemoveApp                        : "Remover aplicação?",

    LT_AppStore_Error_RemoveApp                 : "Ocorreu um erro ao tentar remover o aplicativo",

    LT_AppStore_Error_AddApp                    : "Ocorreu um erro ao tentar adicionar o aplicativo",



    LT_SolutionDlg_Label_Env                    : "Ambiente",

    LT_SolutionDlg_Label_EnvNew                 : "novo",

    LT_SolutionDlg_Label_EnvExisting            : "existir",



    LT_DockerRegistry_EmptyText                 : "[registry/]namespace/image",



    LT_DockerRegistry_W_NotFound                : "Não é possível encontrar a imagem especificada. Por favor, verifique as entradas e tente novamente.",

    LT_DockerRegistry_E_NotFound                : "Ocorreu um erro ao tentar obter os dados da imagem.",



    LT_Action_GetDockerTemplateTags             : "Obter templates de Docker container",

    LT_DockerSelector_Button_Select             : "Selecionar",



    LT_DockerSelector_Title_Selected            : "Selecionado (%(count))",



    LT_Common_Button_Submit                     : "Enviar",



    LT_E_Platform_4081                          : "A imagem selecionada não pôde ser executada. Entre em contato com o suporte para obter ajuda.",

    LT_E_Platform_2348                          : "Ocorreu um erro ao tentar instalar os pacotes de software para dentro do container.",



    LT_EnvWizard_Hint_VDS                       : "A escala de forma dinâmica e elástica Virtual Private Server com acesso root completo, capaz de hospedar e executar qualquer código. Você pode estabelecer uma conexão SSH para este servidor usando o endereço IP público ou um gateway SSH",

    LT_Text_VdsInfo                             :

        "<p>Para trabalhar com o nodo Elastic VPS <b>com o IP externo</b> em anexo, você precisa seguir os seguintes passos:<ol>"+

        "<li>Encontre o seu <b>login</b>, <b>senha</b> e <b>IP Público</b> em seu endereço de e-mail</li>"+

        "<li><a target=_blank href='%(url)'>Estabelecer a conexão SSH</a> para seu servidor</li>" +

        "<li>Especifique as credenciais necessárias no console aberto</li></ol><p>" +

        "<p>Para trabalhar com o nodo Elastic VPS <b>com o IP interno</b>, você precisa estabelecer a conexão SSH a ele através do <a href=\"%(Jelastic ASHGate)\"> Jelastic SSH gateway</a></p>",



    LT_Menu_Applications_Applications           : "Aplicações",



    LT_ExportEnv_Title                          : "Exportar",

    LT_ExportEnv_Export_Btn                     : "Exportar",

    LT_ExportEnv_List_Title                     : "Exportar cópias de ambites",

    LT_ExportEnv_List_Empty_Text                : "Você ainda não exportou quaisquer ambientes",

    LT_ExportEnv_Dlg_Title                      : "Exportar ambiente",

    LT_ExportEnv_Dlg_TopologySettings           : "Configurações de topologia",

    LT_ExportEnv_Dlg_PrivateData                : "Dados privados",

    LT_ExportEnv_Dlg_ConfigurationFiles         : "Arquivos de configuração",

    LT_ExportEnv_Dlg_TopologySettings_Tip       : "Configurações de topologia e nodos de ambiente, configurados dentro do assistente do ambiente.",

    LT_ExportEnv_Dlg_PrivateData_Tip            : "Diretórios com os arquivos do seu aplicativo implantado e dados armazenados dentro do seu servidor de DB(s)",

    LT_ExportEnv_Dlg_ConfigurationFiles_Tip     : "Os arquivos de configuração, acessível através do Gerenciador de configurações no seu painel e configurações projetos GIT/SVN (por exemplo, repositórios de links, credenciais, chaves SSH privadas em anexo)",

    LT_ExportEnv_Dlg_Warning_CompleteImport     : "Concluir a importação do exemplar ambiente exportado para a plataforma de destino, antes de excluir o original",

    LT_ExportEnv_Dlg_Warning_WhatNotExported    : "Perceba que atualmente Docker containers e nodos do Windows não podem ser exportados. Também recipientes Elastic VPS e Maven são exportados sem quaisquer dados dentro, então você precisará reconfigurá-los manualmente mais tarde.",

    LT_ExportEnv_Dlg_Description                : "Você estará exportando o ambiente <b>%(envName)</b>",

    LT_ExportEnv_Dlg_Select                     : "Escolha o que deve ser exportado:",

    LT_ExportEnv_Settings_DetailsTips           : "Leia esta [link-docs]documentação[/link-docs] para saber mais detalhes sobre a exportação de seus ambientes.<BR>" +

        "<b>Nota:</b>: todos os arquivos de ambiente exportadas são armazenadas em seu espaço em disco, que é cobrado de acordo com a tarifa de seus prestadores de serviços de hospedagem.",

    LT_ExportEnv_Error_GetEnvs                  : "Ocorreu um erro ao tentar obter a lista de ambientes exportados",

    LT_ExportEnv_Confirm_DeleteEnv              : "Excluir o arquivo exportado em %(date) para %(envName)?",

    LT_ExportEnv_Error_DeleteEnv                : "Ocorreu um erro ao tentar excluir o arquivo importado para %(envName)",

    LT_ExportEnv_LinkTip_DownloadManifest       : "Baixar manifesto",

    LT_ExportEnv_Error_DownloadManifest         : "Ocorreu um erro ao tentar baixar o manifesto",

    LT_Process_Label_Exporting                  : "Exportando...",

    LT_Task_Name_75                             : "Exportando env %(env)",

    LT_Task_Name_77                             : "Descompactando %(source) to %(env)",

    LT_Menu_ImportEnvironment                   : "Importar",

    LT_Environments_Status_9                    : "Exportando...",

    LT_Action_ExportEnv                         : "Exportação de ambiente",

    LT_Notify_Label_EnvironmentExported			: "O ambiente %(envName) foi exportado.",

    LT_ExportEnv_ViewFiles_Btn                  : "Ver arquivos",



    LT_Import_InstallDlg_Text                   : "Você está importando para o ambiente <b>%(envName)</b>, anteriormente exportado de %(oldHost). <BR> Data de exportação: %(date)",

    LT_Import_InstallDlg_MoreInfo               : "Mais informações em <a target='_blank' href='%(href)'>%(href)</a>",

    LT_Import_SuccessDlg_Title                  : "Seu ambiente '%(envName)' foi importado com êxito para Jelastic",

    LT_Import_SuccessDlg_Note                   : "<b>Nota:</b>: para funcionar corretamente, seu ambiente importado pode exigir a reconfiguração de acordo com as configurações do novo provedor de hospedagem (como IP público). <br/><br/><div class =\"more-info\">Mais informações em [link]%(href)[/link]</div>",

    LT_Build_Failed_Warning                     : "Ocorreu um erro ao tentar criar o projecto. Verifique se o seu tipo de projeto está correto.",

    LT_Menu_NewEnvironment                      : "Novo ambiente",

    LT_SolutionWizard_Error_ManifestIsCorrupted : "Ocorreu um erro ao tentar importar o ambiente. Certifique-se de que você escolheu o arquivo correto com os dados do ambiente exportado.",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 3.1

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_Auto_Resolve_Conflict                    : "Resolução de conflitos automática",

    LT_Environments_Validation_InvalidLength    : "Nome de domínio deve ter, pelo menos, %(nLength) caracteres.",



    LT_E_Platform_6000                          : "Chave SSH inválida. Por favor verifique a chave e tente novamente.",

    LT_Notify_Label_VPSQuotaMismatch            : "Criação do nodo Elastic VPS com tais parâmetros não é permitido devido às suas restrições de conta. Entre em contato no <a action='contact' href=\"%(HOSTER_SUPPORT)\" target='_blank'>%(HOSTER_NAME) portal</a> para obter ajuda.",



    LT_AppStore_Add_Custom_Docker               : "Adicionar nova Imagem",

    LT_AppStore_Add_Custom_Docker_HelpTip       : "Se a imagem desejada está presente dentro do Registro Hub, ignorar o nome do host de registro (por exemplo, <span class='highlighted'> Jelastic/tomcat8</span>). Caso contrário, especifique-o no início do identificador de imagem (por exemplo, <span class='highlighted'> server.com/images/image_name</span>).<br>A lista de todas as tags de imagem disponíveis é automaticamente forçado, assim você vai ser capaz de selecionar o necessário durante a instalação adicional.",



    LT_AppStore_SearchField_EmptyTx             : "Digitar nome da aplicação",

    LT_AppStore_SearchField_EmptyResults        : "Nenhum resultado encontrado",

    LT_AppStore_Search_W_EmptyResults           : "Nenhum resultado encontrado!<br>Tente pesquisar novamente com uma palavra-chave diferente",



    LT_EnvWizard_Config                         : "Configuração",



    LT_DockerSettings_Title                     : "Configuração do container Docker %(name)",



    LT_DockerSettings_Item_Links                : "Links",

    LT_DockerSettings_Item_EnvVars              : "Variáveis",

    LT_DockerSettings_Item_Ports                : "Portas",



    LT_DockerSettings_Links_Column_Node         : "Node",

    LT_DockerSettings_Links_Column_Alias        : "Alias",

    LT_DockerSettings_Links_HelpTip             : "Leia a [link]documentação[/link] para saber mais detalhes sobre a ligação de recipientes Docker's.",

    LT_DockerSettings_Links_Confirm_Remove      : "Remover os vínculos selecionados?",

    LT_DockerSettings_Links_W_NoNodes           : "Não há nodos para ligação. Por favor, adicione mais nodos para obter esta possibilidade.",

    LT_DockerSettings_Links_W_PropertyExists    : "Ligação com o alias atual já existe!",



    LT_DockerSettings_EnvVars_Column_Name       : "Nome",

    LT_DockerSettings_EnvVars_Column_Value      : "Valor",

    LT_DockerSettings_EnvVars_W_PropertyExists  : "Propriedade com o nome atual já existe!",

    LT_DockerSettings_EnvVars_E_GetVars         : "Ocorreu um erro ao tentar carregar variáveis de ambiente.",

    LT_DockerSettings_EnvVars_HelpTip           : "Leia [link]documentação[/link] para saber mais detalhes sobre variáveis de ambiente recipiente Docker.",

    LT_DockerSettings_EnvVars_Confirm_Remove    : "Remover as variáveis selecionadas?",



    LT_DockerSettings_RunArgs_E_GetArgs         : "Ocorreu um erro ao tentar carregar argumentos executados.",



    LT_DockersPanel_Item_QuickStart             : "Começo rápido",

    LT_DockersPanel_Item_Custom                 : "Personalizadas",



    LT_DockersPanel_Search_EmptyTx              : "Tipo de nome de imagem",

    LT_DockersPanel_Search_W_EmptyResults       : "Não foram encontrados resultados!<br>Tente novamente pesquisar com uma palavra-chave diferente",



    LT_SolutionDlg_Docker_PleaseWait            : "Container Docker está sendo instalado, por favor aguarde...",

    LT_SolutionDlg_Docker_Installing            : "Instalando %(name)",



    LT_W_Only_AlphaNum                          : "Este campo deve conter apenas letras e números.",

    LT_W_Only_AlphaNumDash                      : "Este campo deve conter apenas letras, números e _.",



    LT_AppStoreCat_ClusteredDBs                 : "Grupo de Bancos de Dados",

    LT_AppStore_Action_Uninstall                : "Desinstalar",



    LT_Menu_RDP                                 : "Área de trabalho remota",

    LT_Menu_RDPResetPassword                    : "Redefinir a senha de Área de trabalho remota",





    LT_EnvironmentWizard_Dialog_WinCloudletsChanged : "Nodo baseado em Windows será reiniciado devido à alteração da quantidade de cloudlets. Você realmente deseja aplicar as mudanças?",



    LT_HelpTip_Env_Required                     : "Você precisa ter pelo menos um nodo (exceto recipientes Docker) adicionado ao seu ambiente para que esse recurso funcione corretamente. [link]Clique aqui para configurar seu ambiente[/link].",

    LT_EnvScaling_Tip                           : "Leia esta [link]documentação[/link] para saber como configurar a escala horizontal automática para qualquer outro nodo, ao lado de um computador ou de um balanceador.",



    LT_EnvWizard_Licences                       : "Licenças",



    LT_LicencesCost_Text_Description            : "O custo para o uso pilhas de software depende de tarifas do seu provedor de serviço de hospedagem.<br>Se uma pilha é marcada como livre, você paga somente pelos recursos consumidos, mas não para a adição deste software ao seu ambiente.",



    LT_Billing_Label_SoftwareCost               : "Licença %(nodeName)",



    LT_Notify_Label_MaxEnvCount                 : "Você alcançou o número máximo de ambientes para o seu tipo de conta.",

    LT_Notify_Label_EnvCreateRestricted         : "Você não tem a possibilidade de criar esse tipo de ambiente. Entre em contato com o suporte para obter mais informações.",

    LT_NodeMission_Cp                           : "Servidores App.",

    LT_NodeMission_Bl                           : "Equilibrando",

    LT_NodeMission_Sqldb                        : "Banco de Dados SQL",

    LT_NodeMission_Nosqldb                      : "Banco de Dados NoSQL",

    LT_NodeMission_Cache                        : "Cache",

    LT_NodeMission_Build                        : "Construir",

    LT_NodeMission_Docker                       : "Containers Docker",

    LT_NodeMission_Vds                          : "VPS",



    LT_W_NotAllowedChars                        : "Este campo contém caracteres que não são permitidos [%(chars)].",



    LT_HelpTip_Env_CPRequired                   : "Você precisa ter um nodo de computação adicionado ao seu ambiente para que esse recurso funcione corretamente. [link]Clique aqui para configurar seu ambiente[/link].",

    LT_HelpTip_Docker_FeatureComingSoon         : "Este recurso estará disponível para containers Docker em breve. Leia [link]documentação[/link] para saber mais detalhes.",



    LT_EnvScaling_Tip_RestrictedNodes           : "Suas restrições de conta não permitem que você adicione mais de um nodo semelhante (mesmo tipo) dentro de um ambiente, ao passo que esta função requer pelo menos dois desses nodos para funcionar corretamente. Por favor, [link-support]entre em contato com o suporte[/link-support] para remover esta limitação.",



    LT_Text_RDPInfo                             : "<p>Para se conectar ao nodo via RDP, siga estes passos:</p><ol>"+

        "<li>Verifique se o seu e-mail recebeu a nodeâs <b>endereço do host</b> e seu acesso <b>credenciais</b></li>"+

        "<li>Abra em seu desktop <b>cliente RDP</b>:<br>" +

        "  <ol style=\"list-style: none; margin-left: 10px;\"><li>para Linux: KRDC, Remina </li>" +

        "  <li>para Windows: Desktop Remoto</li>" +

        "  <li>para Mac OS X: Microsoft Remote Desktop</li>" +

        "</ol></li>" +

        "<li> Estabelecer a conexão com o servidor (%(rdpLink)), utilizando o login de acesso RDP e senha recebida </li></ol>" +

        "<p>Para mais detalhes, consulte a nossa [link]documentação[/link]</p>",



    LT_CustomSSL_Text_ActiveState               : "O SSL personalizado está ativo atualmente. <a action='disable'>Clique aqui para desativar o SSL personalizado</a>, ou editar as configurações abaixo se você quiser fazer mudanças.",

    LT_CustomSSL_Text_InactiveState             : "O SSL personalizado é atualmente inativo. <a action='enable'>Clique aqui para ativar o SSL personalizado </a>, ou editar as configurações abaixo se você quiser fazer mudanças.",



    LT_Environments_Confirm_RestartContainer    : "Reiniciar container %(sType) com ID %(sNodeId)?",

    LT_Environments_Confirm_RestartContainers   : "Reiniciar containers %(sType)?",



    LT_Menu_RestartContainer                    : "Reiniciar container",

    LT_Menu_RestartContainers                   : "Reiniciar containers",



    LT_EnvWizard_Button_EditDockerConfig         : "Editar",



    LT_Text_WinDeployInfo                       :"<p> Você pode implantar seu projeto diretamente do Visual Studio IDE usando a ferramenta de implantação da Web:</p><ol>" +

        "<li>Crie seu perfil de publicação</li>" +

        "<li>Especificar os seguintes dados na guia Conexão:<ol>" +

        "  <li style=\"list-style: none; margin-left: 10px;\"> Publicar Método: Web Deploy</li>"+

        "  <li style=\"list-style: none; margin-left: 10px;\">URL de serviço - %(deployLink)</li>" +

        "  <li style=\"list-style: none; margin-left: 10px;\">Site/applicação - Site Padrão/{name_of_your_app}</li>" +

        "  <li style=\"list-style: none; margin-left: 10px;\">Nome de usuário - obtê-lo de e-mail</li>" +

        "  <li style=\"list-style: none; margin-left: 10px;\">Senha - obtê-la de e-mail</li></ol></li>" +

        "<li>Clique em Publicar!</li></ol>" +

        "<p>Para mais detalhes, consulte o nosso [link]documentação[/link]</p>",



    LT_Menu_WinDeploy                           : "Publicar informações",



    LT_Windows_Confirm_DeployToRoot_Msg      	: "Este aplicativo será instalado em \"Site Padrão\". <br> "+

         "A maioria dos aplicativos são normalmente instalados em uma pasta <br> abaixo da raiz, como \"Site Padrão/Blog\". <br>Tem certeza?",

    LT_Windows_Confirm_RootUndeploy_Msg         : "Todos os projetos implantados serão removidos em caso de exclusão do contexto de raiz. Você tem certeza?",



    LT_SSH_Keys_List_Private_Empty_Text         : "Você não adicionou nenhuma chave privada ainda.",



    LT_Task_Name_35	                            : "Redefinição de senha para %(name) ID %(nodeid) nodo de %(env)",

    LT_Task_Name_79                             : "Redefinição de senha para %(name) ou %(env)",



    LT_SolutionWizard_Error_FilesNotAvailable   : " Ocorreu um erro ao tentar importar o ambiente. Por favor, verifique o ambiente original se ainda existe a fonte de dados necessário e tentar importar a cópia recém-exportado deste ambiente",



    LT_SolutionWizard_Error_EnvTypeNotAllowed   : "Ocorreu um erro ao tentar configurar o ambiente com as configurações necessárias: os tipos desejados de nodos não são suportados na plataforma atual ou seu uso é restrito para o seu tipo de conta",



    LT_Process_Label_GettingSolution            : "Recuperando dados...",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 3.3

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_EnvWizard_Confirm_IgnoreChanges          : "Todas as mudanças que você fez serão perdidas, continuar?",

    LT_EnvWizard_Action_Migrate                 : "Migrar...",



    LT_QuotasPricing_Title                      : "Quotas e Preços",

    LT_QuotasPricing_Item_Regions               : "Regiões",

    LT_QuotasPricing_Item_Pricing               : "Preços",



    LT_EnvRegions_HelpTip                       : "Leia a [link]documentação[/link] para saber mais detalhes sobre as regiões do ambiente.",



    LT_EnvRegionSelector_Item_Info              : "Mais detalhes...",

    // type "[link]Mais detalhes...[/link]" na seqüência acima, se você gostaria deste item da lista drop-down para a topologia referindo-se ao link "DOCS_ENV_REGIONS" em vez de abrir as Quotas e Preços



    LT_EnvMigration_Title                       : "Migrar o ambiente: %(envName)",

    LT_EnvMigration_Field_CurrentRegion         : "Região atual",

    LT_EnvMigration_Field_TargetRegion          : "Região de destino",

    LT_EnvMigration_Field_TargetRegion_EmptyText: "Selecione uma região...",

    LT_EnvMigration_Button_Submit               : "Verificar e Migrar",



    LT_EnvMigration_Error_NoHardware            : "Nós não temos nenhum hardware disponível na região <b>%(region)</b> no momento. Por favor, tente outra região.",

    LT_EnvMigration_Error_NoFreeIps             : "Não há IPs público gratuito na região <b>%(region)</b> no momento. Por favor, tente outra região.",

    LT_EnvMigration_Error_Failed                : "Ocorreu um erro ao tentar migrar o ambiente <b>%(envName)</b> para a região <b>%(region)</b>.",

    LT_EnvMigration_Info_Success                : "O Ambiente <b>%(envName)</b> foi migrado com sucesso para região %(region).",



    LT_EnvMigration_HelpTip                     : "Leia a [link]documentação[/link] para saber mais detalhes sobre a migração de ambientes.",

    LT_EnvMigration_HelpTip_NoRegions           : "Atualmente não há regiões disponíveis para a migração. Por favor contato com o Suporte para obter mais informações.",



    LT_Action_ValidateRegion                    : "validar região %(region)",



    LT_EnvSettings_Item_Migration               : "Migração",



    LT_Environments_Status_10                   : "Migrando...",

    LT_Environments_Status_11                   : "Quebrado",



    LT_Task_Name_83                             : "Migrando ambiente %(env) para região %(hngroupname)",



    LT_HelpTip_Access_Owner                     : "Somente o proprietário de um ambiente pode realizar esta ação. Leia a [link]documentação[/link] para saber mais detalhes.",



    LT_SolutionDlg_Label_EnvRegion              : "Região",

    LT_SolutionDlg_Label_Environment            : "Ambiente",



    LT_Import_InstallDlg_ConfirmTitle           : "Confirmar importação do ambiente %(envName)",

    LT_Import_InstallDlg_Button_Import          : "Importar",



    LT_Common_Text_Region						: "Região",



    LT_Task_Name_2	                            : "Criação do ambiente %(env)",

    // adicionar o espaço reservado %(hngroupname) para a seqüência acima, se você gostaria de mostrar as informações sobre uma região na tarefa correspondente



    LT_Notify_Label_HardwareOnMaintenance       : "Seu hardware está em manutenção no momento.",

    LT_Notify_Label_RegionOnMaintenance         : "A região <b>%(region)</b> está passando por manutenção no momento. Por favor, tente outra região.",



    LT_Region_Tip_Maintenance                   : "O hardware da região está passando por manutenção.",



    //"LT_Region_DisplayName_default_hn_group"    : "Região padrão",

    "LT_Region_ShortDescription_default_hn_group": "Este conjunto de hardware é fornecido por padrão.",

    "LT_Region_Description_default_hn_group"    : "<p>Este conjunto de hardware é fornecido por padrão e tem os seguintes parâmetros:</p><ul><li>Domínio: %(domain)</li><li>Capacidade de armazenamento: ilimitado</li></ul><p>Características disponíveis:</p><ul data-type=\"check\"><li>Containers Docker</li><li>Hospedgaem Windows</li></ul>",





    LT_Settings_Label_Endpoints				  	: "Endpoints",

    LT_EnvEndpoints_Column_Name                 : "Nome",

    LT_EnvEndpoints_Column_Node                 : "Nodo",

    LT_EnvEndpoints_Column_PublicPort           : "Porta Publica",

    LT_EnvEndpoints_Column_PrivatePort          : "Porta Privada",

    LT_EnvEndpoints_Column_Protocol             : "Protocolo",

    LT_EnvEndpoints_Column_AccessUrl            : "URL de acesso",

    LT_EnvEndpoints_Settings_DetailsTips        : "Aqui você pode adicionar e gerenciar os endpoints, que podem ser usados por outros recursos para a comunicação com os seus containers",

    LT_EnvEndpoints_AddEndpoint_Error 	        : "Ocorreu um erro ao tentar adicionar o endpoint %(name)",

    LT_EnvEndpoints_RemoveEndpoint_Error 	    : "Ocorreu um erro ao tentar remover oendpoint %(name)",

    LT_EnvEndpoints_GetEndpoints_Error 	        : "Ocorreu um erro ao tentar obter a lista de endpoints",

    LT_EnvEndpoints_Confirm_RemoveEndpoint      : "Deletar o endpoint %(name)?",

    LT_EnvEndpoints_EditEndpoint_Error          : "Ocorreu um erro durante a tentativa de editar o endpoint %(name)",

    LT_EnvEndpoints_PortValidationHint          : "Esta porta está ocupada",

    LT_EnvEndpoints_NameValidationHint          : "Este nome está ocupado",

    LT_EnvEndpoints_Editor_Title                : "Aicionar Endpoint",

    LT_EnvEndpoints_Editor_Title_Edit           : "Editar Endpoint",

    LT_EnvEndpoints_NameNotValid                : "O nome não é válido",

    LT_Task_Name_80                             : "Adicionando endpoint %(endpoint)",

    LT_Task_Name_81                             : "Editando endpoint %(name)",

    LT_Task_Name_82                             : "Deletando endpoint",

    LT_EnvEndpoints_NameEmptyText               : "Digite ou selecione o nome...",

    LT_EnvEndpoints_PublicPortEmptyText         : "Será definido automaticamente",

    LT_EnvEndpoints_AccessUrlEmptyText          : "%(url):{public_port}",

    LT_EnvEndpoints_NameDisabledQtipText        : "Você alcançou o valor máximo de portas mapeadas permitido para este nodo",





    LT_Statistics_Label_NetLimit                : "Ext. limite de tráfego",

    LT_Statistics_Label_DiskLimit               : "Limite de disco",

    LT_Statistics_Label_DiskCommonLimit         : "Limite",

    LT_Statistics_Label_IopsLimit               : "Limite IOPS",

    LT_Statistics_Label_CpuLimit                : "Limite de CPU",

    LT_Statistics_Label_RamLimit                : "Limite de RAM",

    LT_Statistics_Label_Iops                    : "Uso de IOPS",



    LT_ExportEnv_Error_EnvDeleted               : "Os arquivos não podem ser exibidos - o ambiente foi excluído",

    LT_Notify_Label_EnvExportRestricted         : "Você não pode exportar o ambiente <b>%(envName)</b>. Por favor contato com o Suporte para obter mais informações.",



    LT_EnvMigration_Confirm_Migration           : "Por favor, confirme que você deseja migrar o ambiente <b>%(envname)</b> para a região <b>%(region)</b>.",

    LT_EnvMigration_Field_OnlineMigration       : "Migração ao vivo",

    LT_EnvMigration_Mark_OnlineMigration        : "LM",

    LT_EnvMigration_Field_OnlineMigration_Tip   : "A migração ao vivo permite mudar os seus projectos sem reiniciar os containers e ajuda a evitar qualquer tempo de inatividade durante esta operação. [link]Mais detalhes... [/link]",

    LT_EnvMigration_Field_OnlineMigration_NA    : "Não disponível entre as regiões selecionadas",

    LT_EnvMigration_Warning_EnvDowntime         : "Os recipientes serão reiniciados e o ambiente não estará disponível durante a migração",

    LT_EnvMigration_Warning_IpChanged           : "O endereço IP será alterado",



    LT_EnvMigration_Info_OnlineNotAvailable     : "A migração ao vivo entre as regiões atuais não está disponível.",

    LT_EnvMigration_Field_TargetRegion_Pricing  : "<a action=\"pricing\">Preços</a> pode ser diferente na região de destino",



    LT_Action_LoadDockerManifest                : "carregar dados de imagem",

    LT_Use_ZDTModule                            : "Habilitar [link-docs]implantação de tempo de inatividade zero[/link-docs]",

    LT_ExportEnv_Settings_ErrorDetailsTips      : "Este recurso não está disponível para containers baseados em Windows e Docker. Leia esta [link-docs]documentação [/link-docs] para saber mais detalhes sobre a exportação de seus ambientes",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 4.0

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_BillingHistory_GroupByNode_Label         : "Grupo de nodos",

    LT_Statistics_ShortName_RAM                 : "RAM",

    LT_Statistics_ShortName_CPU                 : "CPU",

    LT_Statistics_ShortName_Network             : "Rede",

    LT_Statistics_ShortName_HDD                 : "Disco",

    LT_Statistics_ShortName_IOPS                : "IOPS",

    LT_Statistics_ShortName_NetInInt            : "In int.",

    LT_Statistics_ShortName_NetOutInt           : "Out int.",

    LT_Statistics_ShortName_NetInExt            : "In ext.",

    LT_Statistics_ShortName_NetOutExt           : "Out ext.",

    LT_Units_K                                  : "K",

    LT_Units_M                                  : "M",





    LT_NodeMission_Default                      : "Extra",



    LT_EnvWizard_Balancer                       : "Equilibrando",

    LT_EnvWizard_ChangeDockerImg                : "Alterar imagem",

    LT_EnvWizard_ChangeDockerTag                : "Alterar tag",

    LT_EnvWizard_Confirm_DockerImgReplace       : "Por favor, confirme que você deseja substituir a imagem <b>%(current)</b>.",

    LT_EnvWizard_Info_UnusedExtra               : "Por favor, use o bloco adicional inserido anteriormente em primeiro lugar.",





    LT_EnvWizard_CustomSLL_EntryPoint           : "Servidor de App. ou Balancer",



    LT_DockerSelector_Title                     : "Selecione Container",

    LT_DockerSelector_Button_Next               : "Próximo",



    LT_DockerSettings_Item_More                 : "Mais",

    LT_DockerSettings_Item_Volumes              : "Volumes",

    LT_DockerSettings_Item_RunArgs              : "Executar Configuração",

    LT_DockerSettings_Field_EntryPoint          : "Ponto de entrada",

    LT_DockerSettings_Field_RunArgs             : "Comando de execução",

    LT_DockerSettings_Field_EmptyText           : "(não definido por padrão)",

    LT_DockerSettings_Tip_ResetToDefault        : "Restaurar ao padrão",

    LT_DockerSettings_Vols_HelpTip              : "Leia a [link]documentação[/link] para descobrir mais detalhes sobre o volume de container Docker.",

    LT_DockerSettings_Vols_W_Empty              : "Não há volumes de dados predefinidos ligados.",

    LT_DockerSettings_RunArgs_HelpTip           : "Leia a [link]documentação[/link] para saber mais detalhes sobre opções de execução de container Docker.",



    LT_DockerSettings_Vols_Column_Path          : "Caminho",

    LT_DockerSettings_Vols_Column_StoragePath   : "Caminho de destino",

    LT_DockerSettings_Vols_EmptyPath            : "(para ser calculado)",

    LT_DockerSettings_Vols_W_PathExists         : "Volume com o caminho atual já existe!",



    LT_DockersPanel_QuickStart_W_Empty          : "Nenhum item para apresentar",

    LT_DockersPanel_Item_Search                 : "Pesquisa",

    LT_DockersPanel_Search_Label_Hub            : "Docker Hub",

    LT_DockersPanel_Search_HelpTip              : "<p>Use as guias abaixo para saber como gerenciar containers Docker em Jelastic: </p> <ul><li>[link-manage]adicionar container[/link-manage]ao ambiente </li><li>conjunto básico [link-config]configurações[/link-config]</li><li>[link-ssh]acessar container[/link-ssh] via SSH</li><li>[link-redeploy]atualizar o imagem implantada[/link-redeploy]com outra tag</li></ul>",

    LT_DockersPanel_Custom_HelpTip              : "Aqui você pode armazenar suas imagens personalizadas do Docker, colocadas em um registro privado ou Registry Hub, para ser facilmente acessado. [link]Mais detalhes[/link]",

    LT_DockerSettings_Ports_HelpTip             : "Graças à tecnologia de virtualização baseada em container avançado, alavancado pelo Jelastic, você não precisa expor as portas em containers Docker - a porta necessária pode ser ligada diretamente para o endereço IP interno ou externo com que o container foi provisionado.<br><br>Você pode mapear a porta necessária via [link-endpoints]endpoint[/link-endpoints] (por ser acessível através LB Shared) ou anexar [link-docs-pubip]IP externo[/link-docs-pubip] dirigirá ao container apropriado. Então, dependendo do caminho escolhido, basta ligar o seu serviço (app ouvinte) para o endereço interno ou externo recebido.<br><br> Leia a [link-docs]documentação[/link-docs] para descobrir mais detalhes sobre o gerenciamento portas de container Docker.",



    LT_AppStore_Auth_Label_Name                 : "Nome de usuário",



    LT_AppStore_Field_Tag                       : "Tag",

    LT_AppStore_Label_More                      : "Mais detalhes",

    LT_AppStore_Text_CustomItemDesc             : "Registro: %(registry)",

    LT_AppStore_Text_CustomItemDefaultDesc      : "Hub Registry",



    LT_Menu_RedeployContainer                   : "Implantar container",

    LT_Menu_RedeployContainers                  : "Implantar containers",



    LT_Environments_Status_12                   : "Implantando...",



    LT_RedeployContainer_Title                  : "Reimplantar containers %(nodeName)",

    LT_RedeployContainer_Column_Node            : "Nodo",

    LT_RedeployContainer_Column_Tag             : "Tag",

    LT_RedeployContainer_Field_DeployType       : "Implantação seqüencial",

    LT_RedeployContainer_Field_DeployType_Tip   : "Se ativado, os containers serão implantados um a um, garantindo a disponibilidade do serviço. Caso contrário, todas elas serão atualizadas simultaneamente, fazendo com que ocorrerá inatividade temporária.",

    LT_RedeployContainer_Button_Submit          : "Reimplantar",

    LT_RedeployContainer_HelpTip                : "A persistente dentro de volumes de dados é salva e permanece disponível após a reimplantação. [link]Saiba mais[/link]",

    LT_RedeployContainer_Confirm_Redeploy       : "Por favor, confirme que você deseja implementar o(s) container(s) <b>%(nodeName)</b> para a tag <b>%(tag)</b>.",

    LT_RedeployContainer_Info_Success           : "Containers no ambiente <b>%(envName)</b> foram implantados com sucesso para tag <b>%(tag)</b>.",

    LT_RedeployContainer_Error_Failed           : "Ocorreu um erro durante a tentativa de implantar containers no ambiente <b>%(envName)</b> para a tag <b>%(tag)</b>.",

    LT_RedeployContainer_Logs_Title             : "%(sAppName) : reimplantar",



    LT_Task_Name_92	                            : "Reiniciando os nodos %(name) de %(env)",

    LT_Task_Name_93	                            : "Redefinindo a senha para %(name) em %(env)",

    LT_Task_Name_94                             : "Implantando o nodo %(name) e ID %(nodeid) de %(env) a tag %(tag)",

    LT_Task_Name_95                             : "A implantação de containers %(name) de %(env) para a tag %(tag)",

    LT_Task_Name_96	                            : "Ligando os nodos de %(targetnodename) e ID %(targetnodeid) e %(sourcenodename) e ID %(sourcenodeid) com o alias %(alias) em %(env)",

    LT_Task_Name_97	                            : "Desligando os nodos de %(targetnodename) e ID %(targetnodeid) e %(sourcenodename) e ID %(sourcenodeid) com o alias %(alias) em %(env)",

    LT_Task_Name_98	                            : "Definir variáveis para o nodo %(name) de ID %(nodeid) em %(env)",

    LT_Task_Name_99	                            : "Definir comando de partida para o nodo %(name) de ID %(nodeid) em %(env)",

    LT_Task_Name_100                            : "Definir ponto de entrada para o nodo %(name) de ID %(nodeid) em %(env)",

    LT_Task_Name_101                            : "Definir montante de cloudlets para %(name) em %(env)",



    LT_Common_Text_EmptyList                    : "Nenhum item para exibir",

    LT_Common_Button_ShowLogs                   : "Mostrar Logs",



    LT_Error_AddVCSProject_InvalidPath          : "URL do projeto inválido. Por favor verifique a URL e tente novamente",

    LT_AppStoreCat_ManagementAndMonitoring      : "Administração e Monitoramento",



    LT_Common_Text_Reinstall                    : "Reinstalar",

    LT_Addon_Confirm_Reinstall                  : "O add-on será reinstalado, continuar?",

    LT_Addon_Env_Install_Not_Allowed            : "O ambiente selecionado não tem nodos adequados para a instalação add-on",

    LT_Addon_Disabled_Node_Qtip                 : "A instalação do Add-on não é permitida para este nodo",

    LT_Addon_EnvNodes_Name_Field                : "Nodos",

    LT_Addon_Disabled_Env_Qtip                  : "A instalação do Add-on não é permitida para este ambiente",



    LT_ManifestImp_EmptyURL                     : "http://...",

    LT_ManifestImp_BtnImport                    : "Importar",

    LT_ManifestImp_DialogTitle                  : "Importar",

    LT_ManifestImp_SelectFile                   : "Selecione um arquivo",

    LT_ManifestImp_TabURL                       : "URL",

    LT_ManifestImp_TabFile                      : "Arquivo local",

    LT_ManifestImp_ManifestDesc                 : "Carregar arquivos .json com descrição do ambiente de cloud necessária e detalhes sobre sua topologia, configurações e aplicativos a serem implantados aqui",

    LT_ManifestImp_MoreInfo                     : "Mais informações em <a target='_blank' href='%(href)'>%(href)</a>",



    LT_Process_Label_CheckAuthentication        : "Autenticação...",

    LT_Process_Label_ConnectingToCloud          : "Conectando com o cloud...",



    LT_AppStoreCat_Applications                 : "Apps",

    LT_AppStoreCat_Addons                       : "Add-ons",

    LT_AppStoreCat_Dockers                      : "Containers",

    LT_AppStore_SearchField_AddonEmptyTx        : "Digite o nome do add-on",





    LT_Task_Name_102	                        : "Adicionar volume %(path) para o nodo %(name) de ID %(nodeid) em %(env)",

    LT_Task_Name_103	                        : "Remover volume %(path) para o nodo %(name) de ID %(nodeid) em %(env)",

    LT_DockerSettings_Vols_ConfirmDelete        : "Remover o volume %(path)?",

    LT_DockerSettings_Vols_LockedFiles_Title    : "%(name) : arquivos bloqueados",

    LT_DockerSettings_Vols_W_PathRestricted     : "Adicionando volume com tal caminho não é permitido!",



    LT_Menu_Toolbar_CLI					        : "Jelastic CLI",



    LT_Log_NoSelected                           : "Por favor, selecione o item no painel do lado esquerdo para ver o log.",

    LT_EnvSettings_Item_History                 : "Histórico de Eventos",

    LT_Log_Archive_CannotBeRead                 : "O arquivo não pode ser visualizado. Para ver o seu conteúdo, por favor, conecte-se a seu container via SSH e baixe este arquivo.",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 4.1

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_Notify_FileRenameNotPermitted            : "O item não tem permissão para ser renomeado",

    LT_Notify_ContainerIsNotRunning             : "O comando não pode ser executado. O container não está em execução",

    LT_Notify_FileDeleteNotPermitted            : "O item não tem permissão para ser apagado",



    LT_Notify_CommandCantBeExecuted             : "A operação não pode ser realizada. Provavelmente, um dos diretórios do sistema foi excluído ou renomeado. Entre em contato com o suporte para a assistência.",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 4.5

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_AppStoreCat_Favorites                    : "Favoritos",

    LT_AppStoreCat_DevAdminTools                : "Ferramentas de Admin e Dev",

    LT_AppStoreCat_Clusters                     : "Clusters",

    LT_AppStoreCat_ContentManagement            : "Gerenciamento de conteúdo",

    LT_AppStoreCat_SalesMarketing               : "Vendas e Marketing",

    LT_AppStoreCat_FileManager                  : "Gerenciador de arquivos",

    LT_AppStoreCat_Entertainment                : "Entretenimento",

    LT_AppStoreCat_Other                        : "Outros",



    LT_DockersPanel_Item_Favorites              : "Favoritos",

    LT_AppStore_Action_Add2Favorites            : "Adicionar aos Favoritos",

    LT_AppStore_Action_RemoveFavorites          : "Remover dos Favoritos",



    LT_AppStore_Favorites_Text_EmptyList        : "Marque as soluções mais utilizadas como favoritos para acessá-los facilmente dentro deste guia.",



    LT_TutorSlider_Text_Welcome                 : "Bem vindo ao PaaS %(logo)",

    LT_TutorSlider_Text_PrAdvantages            : "Preço de Vantagem do Jelastic Public Cloud",

    LT_TutorSlider_Text_OtherVendors            : "Outros fornecedores de Cloud",

    LT_TutorSlider_Label_Time                   : "Tempo",

    LT_TutorSlider_Label_Resources              : "Recursos",

    LT_TutorSlider_Label_Server                 : "Seu Servidor",

    LT_TutorSlider_Text_VS                      : "VS",



    LT_TutorSlider_Text_Containers              : "CONTAINERS",

    LT_TutorSlider_Text_LB                      : "Balanceador de carga",

    LT_TutorSlider_Text_CP                      : "Servidor de aplicação",

    LT_TutorSlider_Text_DB                      : "Servidor de banco de dados",

    LT_TutorSlider_Ballons_Reserved             : "Reservado",

    LT_TutorSlider_Ballons_Limited              : "Limite de escalonamento",

    LT_TutorSlider_Label_UpTo                   : "até ",

    LT_TutorSlider_Label_Cloudlets	   	        : "cloudlet(s)",

    LT_TutorSlider_Month        	   	        : "mês",

    LT_TutorSlider_Day          	   	        : "dia",

    LT_TutorSlider_Hour          	   	        : "hora",

    LT_TutorSlider_Descr_Other    	   	        : "Em outros Clouds você sempre pagará por limite de escalonamento",

    LT_TutorSlider_Cloudlet    	   	            : "cloudlet",

    LT_TutorSlider_Title_Limit                  : "Limite",



    LT_TutorSlider_Title_Benefits    	   	    : "Os benefícios de DevOps Platform",

    LT_TutorSlider_Title_SaveMoney    	   	    : "Poupe dinheiro com Smart Pricing",

    LT_TutorSlider_Label_Reserve  	   	        : "Cloudlets reservados",

    LT_TutorSlider_Label_ScaleLimit  	   	    : "Limite de escalonamento",



    LT_TutorSlider_Feature_LANGS 	   	        : "Plataforma multilingue com suporte Docker",

    LT_TutorSlider_Feature_SCALING 	   	        : "Escala horizontal e vertical automáticas",

    LT_TutorSlider_Feature_BALANCER 	   	    : "Alta disponibilidade e balanceamento de carga",

    LT_TutorSlider_Feature_SSH 	   	            : "Acesso SSH e API aberta",

    LT_TutorSlider_Feature_COLLABORATION 	   	: "Conta de colaboradores com diferentes níveis de acesso",

    LT_TutorSlider_Feature_CLOUD 	   	        : "Cloud híbrido dentro de vários data centers",

    LT_TutorSlider_Feature_CICD 	   	        : "Integração e entrega contínuas",

    LT_TutorSlider_Feature_MARKETPLACE 	   	    : "Marketplace com aplicações e add-ons",



    LT_EnvWizard_Label_MonthlyCost	    	    : "Custo mensal",

    LT_EnvWizard_Label_DailyCost	    	    : "Custo diário",

    LT_EnvWizard_Label_Hourly	    	        : "Custo por hora",



    LT_Balloons_Wizard_Text                     : "Selecione as pilhas necessárias e clique em <b>Criar</b> ambiente.",

    LT_Balloons_TasksPanel_Text                 : "O ambiente está sendo criado. Veja o progresso no <b>Painel de Tarefas</b>.",

    LT_Balloons_EnvCreated_Text                 : "<b>Parabéns!</b> O seu ambiente está pronto! Agora vamos implantar um aplicativo. Basta clicar em <b>Implantar</b> e selecione seu ambiente dentro da lista drop-down.",

    LT_Balloons_DeployDialog_Text               : "Clique em <b>Implantar</b> para lançar o seu aplicativo.",

    LT_Balloons_Deploying_Text                  : "A implantação será concluída em poucos segundos.",



    LT_EnvWizard_Pricing_MaxLimit_Descr         : "O custo máximo possível para o período escolhido (ou seja, se todos os nodos no ambiente consumir todos os recursos, alocados para cada servidor via limite de escala).",



    LT_EnvScaling_Label_Net                     : "Rede",

    LT_EnvScaling_Label_DiskIO                  : "Disco I/O",

    LT_EnvScaling_Label_DiskIOPS                : "Disco IOPS",

    LT_EnvAlerts_Label_Type_NetExt              : "Rede",

    LT_EnvAlerts_Label_Type_DiskIO              : "Disco I/O",

    LT_EnvAlerts_Label_Type_DiskIOPS            : "Disco IOPS",

    LT_EnvAlerts_Text_Type_NetExt               : "Rede",

    LT_EnvAlerts_Text_Type_DiskIO               : "Disco I/O",

    LT_EnvAlerts_Text_Type_DiskIOPS             : "Disco IOPS",

    LT_Statistics_Label_ExtNet                  : "Tráfego externo",



    LT_EnvScaling_Field_UpCondition_Text        : "Sempre que o carregamento for maior",

    LT_EnvScaling_Field_DownCondition_Text      : "Sempre que o carregamento for menor",

    LT_Units_kBps                               : "KB/s",

    LT_Units_Hz                                 : "Hz",

    LT_Statistics_Label_IoLimit                 : "Limite de I/O",

    LT_Statistics_Label_Io                      : "I/O",



    LT_EnvScaling_Tip_DiskIOPS                  : "Taxa de entrada/saída de Disco (em operações por segundo)",

    LT_EnvScaling_Tip_DiskIO                    : "Taxa de entrada/saída de disco (em bytes)",

    LT_EnvScaling_Tip_NetExt                    : "Uso de tráfego de rede externa (saída/entrada, em bytes)",

    LT_EnvScaling_Tip_CPU                       : "Uso de CPU (em Hz)",

    LT_EnvScaling_Tip_RAM                       : "Uso de RAM(em bytes)",

    LT_EnvScaling_Label_Operations              : "Operações",

    LT_EnvScaling_Label_Bytes                   : "Bytes",



    LT_EnvAlerts_Field_Group                    : "Nodos",

    LT_EnvAlerts_Column_Node                    : "Nodos",

    LT_EnvTrHistory_Column_Node                 : "Nodos",



    LT_Task_Name_104	                        : "Adicionando gatilho para %(env)",

    LT_Task_Name_105	                        : "Editando configurações de gatilhos em %(env)",

    LT_Task_Name_106	                        : "Alterar o estado de gatilhos em %(env)" ,

    LT_Task_Name_107	                        : "Excluindo gatilho de %(env)",



    LT_EnvAlerts_Label_Notification_Frequency   : "Frequência de notificação",

    LT_EnvAlerts_Hours                          : "hora(s)",



    LT_EnvWizard_Warning_UpgradeAccount         : "Você atingiu os limites padrões. Entre em contato conosco para aumentar os limites.",

    LT_EnvWizard_Warning_HA_Off                 : "O recurso de alta disponibilidade será desativado, pois requer um nodo balanceador de carga NGINX, para ser adicionado ao seu ambiente para que funcione corretamente.",

    LT_EnvWizard_Warning_OwnerLimits            : "O proprietário atingiu os limites de conta padrão.",

    LT_EnvWizard_Warning_Cloudlets              : "A quantidade mínima de cloudlets recomendada para <b>%(node)</b> é <b><i>%(count)</i></b>.",

    LT_EnvWizard_Warning_HA_Usage               : "Você precisa ter um nodo NGINX balanceador de carga adicionado ao seu ambiente, para que o recurso de cluster de alta disponibilidade trabalhe corretamente",

    LT_EnvWizard_Warning_FTP_Off                : "Você precisa de IP público para acessar o nodo via FTP. <a action='ftp_off'>Leia mais</a>",

    LT_EnvWizard_Warning_On_ExternalIP_Off      : "SSL personalizado ficará indisponível. <a action='custom_ssl_off'>Leia mais</a>.",

    LT_EnvWizard_Warning_CreateOff              : "Você não tem permissão para criar mais ambientes devido às suas restrições de conta. Por favor, entre em contato conosco para alterar os limites de sua conta.",

    LT_EnvWizard_Warning_MaxResources           : "Você alcançou o limite de recursos para a sua conta. Por favor, entre em contato conosco para solicitar recursos adicionais.",

    LT_EnvWizard_Warning_MinBalance             : "O saldo da conta Jelastic ficou sem valores. Por favor, recarregue sua conta para criar um ambiente.",

    LT_EnvWizard_Warning_MaxEnvsCount           : "Você atingiu o número máximo de ambientes permitidos, definidos por padrão. Por favor, entre em contato conosco para aumentar os limites de sua conta.",



    LT_EnvWizard_W_HA_SingleBalancer            : "O seu ambiente deve conter um único nodo balanceador para o cluster de alta disponibilidade para trabalhar corretamente.",

    LT_EnvWizard_W_NodeNotValid                 : "<b>%(node)</b> não pode ser criado. Por favor tente novamente ou contacte-nos se esta falha continuar.",

    LT_EnvWizard_W_TariffMinCld                 : "De acordo com o seu plano tarifário, o tamanho mínimo do servidor deve ser %(count) cloudlet(s).",

    LT_EnvWizard_Warning_Demo_LockedCompute     : "Para o propósito desta demonstração, nós adicionamos uma instância de servidor de aplicativo para o seu ambiente.",

    LT_Menu_CloneEnvironment_Disabled           : "Você atingiu o número máximo de ambientes permitidos. Por favor, entre em contato conosco para aumentar os limites de sua conta.",

    LT_EnvWizard_Warning_EditOff                : "A configuração do ambiente pedida excede seus limites de conta. Por favor, entre em contato conosco se você gostaria de aumentar os limites de sua conta.",

    LT_EnvWizard_Warning_CustomSSL_Off          : "SSL personalizado ficarão indisponíveis.",

    LT_EnvWizard_Hint_HA                        : "O número máximo de instâncias é igual a %(nTotal) (%(nGroupsCount)x2HA).",



    LT_EnvWizard_Warning_MaxResources_Trial     : "A configuração pedida excede os limites de conta de teste. Por favor, atualize agora para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_Warning_MinBalance_Trial       : "O saldo da sua conta de teste foi esgotado. Por favor, atualize agora para adicionar fundos para a conta e continuar a utilizar Jelastic.",

    LT_EnvWizard_Warning_MaxEnvsCount_Trial     : "Você atingiu o número máximo permitido de ambientes para a conta de teste. Por favor, atualize agora para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_Warning_UpgradeAccount_Trial   : "A configuração pedida excede os limites de conta teste. Por favor, atualize agora para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_MaxCloudlets_Trial           : "O tamanho do servidor para contas de avaliação é limitado a %(count) cloudlet(s). Atualize agora para aumentar este limite.",

    LT_EnvWizard_W_ExtIp_Trial                  : "Os endereços IP públicos não estão disponíveis para contas de avaliação. Atualize agora para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_HA_Trial                     : "O agrupamento de alta disponibilidade não está disponível para contas de avaliação. Atualize agora para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_Enabled_Trial                : "Elastic Virtual Private Servers estão disponíveis apenas para contas pagas. Por favor, atualize agora para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_MaxEnvNodes_Trial            : "O número total de instâncias dos servidores é limitado a %(count) para ambientes de teste. Atualize agora para remover esta limitação.",

    LT_EnvWizard_W_MaxSameNodes_Trial           : "O número de nodos dentro de uma camada ambiente individual é limitado a %(count) para ambientes de teste. Atualize agora para remover esta limitação.",



    LT_EnvWizard_W_MaxResources_TrialRegistered : "A configuração pedida excede os limites de conta teste. Por favor, preencha seu saldo para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_MaxEnvsCount_TrialRegistered : "Você atingiu o número máximo permitido de ambientes para a sua conta. Por favor, preencha seu saldo para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_MaxCloudlets_TrialRegistered : "tamanho do servidor é limitada a %(count) cloudlet(s). Por favor, preencha seu saldo para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_Enabled_TrialRegistered      : "Elastic Virtual Private Servers não estão disponíveis para sua conta. Por favor, preencha seu saldo para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_FillAcc_TrialRegistered      : "A configuração pedida excede os limites de conta teste. Por favor, preencha seu saldo para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_HA_TrialRegistered           : "O agrupamento de alta disponibilidade não está disponível para sua conta. Por favor, preencha seu saldo para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_ExtIp_TrialRegistered        : "Os endereços de IP públicos não estão disponíveis para sua conta. Por favor, preencha seu saldo para remover esta <a action='limits'>limitação</a>.",

    LT_EnvWizard_W_MinBalance_TrialRegistered   : "O saldo da conta foi esgotado. Por favor, preencha seu saldo para continuar usando Jelastic.",

    LT_EnvWizard_W_MaxEnvNodes_TrialRegistered  : "O número total de servidores instâncias por ambiente é limitada a %(count) para a sua conta. Por favor, preencha seu saldo para remover esta limitação.",

    LT_EnvWizard_W_MaxSameNodes_TrialRegistered : "O número de nodos dentro de uma camada ambiente é limitada a %(count) para a sua conta. Por favor, preencha seu saldo para remover esta limitação.",



    LT_EnvWizard_Warning_Btn_ContactUs          : "Contate-nos",

    LT_EnvWizard_Warning_Btn_Refill             : "Recarregar",

    LT_EnvWizard_Warning_Btn_Upgrade            : "Upgrade",



    LT_EnvWizard_Status_FetchingTags            : "Buscando tags",



    LT_E_Platform_4095                          : "A autorização falhou ao tentar obter dados de imagem <b>%(image)</b> do registro. Por favor, verifique os dados especificados e tente novamente.",

    LT_E_Platform_4098                          : "A imagem <b>%(image)</b> não pode ser obtida devido a problemas técnicos temporários. Por favor, tente novamente mais tarde ou entre em contato com o suporte.",



    LT_AppStore_Field_Tag_W_TagNotExist         : "O tag <b>%(tag)</b> não existe. Por favor, selecione outra tag.",



    LT_Task_Name_108	                        : "Iniciando %(name) no container ID %(nodeid) de %(env)",



    LT_W_DockerImagesNotFound                   : "Não existem imagens no repositório %(repository). Por favor verifique suas entradas.",



    LT_Notify_Label_ItemExists                  : "Item <b>%(name)</b> já existe.",



    LT_EnvAlerts_Label_Type_Cloudlets           : "Cloudlets",

    LT_EnvAlerts_Label_Type_Memory              : "Memória",

    LT_EnvAlerts_Label_Type_CPU                 : "CPU",

    LT_EnvAlerts_Label_Type_Disk                : "Armazenamento",

    LT_EnvAlerts_Label_Type_INodes              : "Inodes",

    

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 4.6

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_EnvWizard_Pricing_Cloudlet               : "cloudlet",

    LT_EnvWizard_PriceSlider_Cloudlets_Total    : "Total",

    LT_EnvWizard_PriceSlider_Cloudlets_From     : "De",

    LT_EnvWizard_PriceSlider_Cloudlets_To       : "Para",

    LT_EnvWizard_PriceSlider_ScalingLimit       : "Limite de escalonamento",

    LT_EnvWizard_PriceSlider_Discount           : "Desconto:",



    LT_EnvWizard_Period_Hour                    : "hora",

    LT_EnvWizard_Period_Month                   : "mês",

    LT_EnvWizard_Period_Day                     : "dia",



    LT_Billing_Column_Storage                   : "Armazenamento pago",

    LT_Billing_Column_ExtTraffic                : "Tráfego pago",



    LT_EnvironmentWizard_Label_TotalHourly	    : "Custo total por hora",

    LT_EnvironmentWizard_Label_TotalMonthly	    : "Custo total por mês",

    LT_EnvironmentWizard_Label_TotalDaily	    : "Custo total por dia",

    LT_SolutionWizard_Error_Cant_Download_File  : "Não é possível baixar o arquivo da URL. Por favor verifique a URL e tente novamente.",



    LT_TutorSlider_Text_PayForUse               : "Pagar pelo consumido",

    LT_TutorSlider_Text_UsePaid                 : "Pagar pelos limites configurados",



    LT_UserMng_Warning_UserInviteNotAllowed     : "A conta <b>%(email)</b> não pode ser convidado para a colaboração",

    LT_EnvTransfer_Error_UserTransferNotAllowed : "A transferência do ambiente <b>%(envName)</b> para a conta <b>%(email)</b> não é permitida.",



    LT_TutorSlider_EstimatedCost                : "Custo estimado:",



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Release: 4.6.1

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    LT_EnvWizard_PriceSlider_Dynamic            : "Limite de escalonamento:",

    LT_EnvWizard_PriceSlider_Reserved           : "Cloudlets Reservados:",



    LT_EnvWizard_PriceSlider_EstimatedCost      : "Custo estimado:",



    LT_EnvWizard_Label_MonthlyCost	    	    : "por mês",

    LT_EnvWizard_Label_DailyCost	    	    : "por dia",

    LT_EnvWizard_Label_Hourly	    	        : "por hora",



    LT_EnvWizard_Descr_Total    	   	        : "Custo total <span class=\"marked\">100%</span> de carga em <span class=\"marked\">TODOS</span> os containers",

    LT_EnvWizard_Descr_UsagePay  	   	        : "Você não paga por recursos não utilizados",

    LT_EnvWizard_Descr_TotalReserved    	   	: "Você paga o preço fixo para os recursos reservados",



    LT_EnvWizard_PriceBalloon_From              : "DE",

    LT_EnvWizard_PriceBalloon_To                : "PARA",

    LT_EnvWizard_PriceBalloon_Fixed             : "PREÇO FIXO",



    LT_EnvWizard_Hint_ReservedCloudlets		    : "<div class='dfn'>Cloudlets Reservados</div>" +

        "<p>Reserve os cloudlets para pagar um preço fixo. Quanto mais você reservar, maior o desconto é!</p>%(illustration)",



    LT_EnvWizard_Hint_DynamicCloudlets		    : "<div class='dfn'>Limite de escalonamento</div>" +

        "<p>Definir a quantidade máxima de recursos para a escala vertical automática com base em mudanças de carga</p>%(illustration)",



    LT_EnvWizard_Scaling_VerticalPerNode        : "A escala vertical por Nodo",

    LT_EnvWizard_Scaling_Horizontal             : "Escala horizontal",

    LT_EnvWizard_HA                             : "Alta disponibilidade",



    LT_EnvWizard_Price_Quotas                   : "Quotas e Preços",



    LT_EnvWizard_Label_EnvName                  : "Nome do Ambiente",

    LT_Marketplace_Label_EnvName                : "Nome do ambiente",



    LT_DetailsHint_Label_FreeRes                : "Recursos livres",

    LT_DetailsHint_Label_FreeResPrice           : "LIVRE",

    LT_EnvWizard_Pricing_PricingDocs            : "Como Funcionam os Preços",

    LT_EnvWizard_Pricing_DisabledClds           : "Desativado",



    LT_EnvWizard_Hint_PricingDoc                : "Mais detalhes sobre preços podem ser encontradas na documentação",



    LT_EnvWizard_PricingDetails_ReservedClds    : "Cloudlets Reservados",

    LT_EnvWizard_PricingDetails_ScalingLimit    : "Limite de escalonamento",

    LT_EnvWizard_PricingDetails_Clds            : "Cloudlets",



    LT_EnvWizard_PricingFixed_Resources         :  "{0} RAM + {1} CPU",



    LT_EnvWizard_PricingDetails_Price           : "Preço",

    LT_EnvWizard_PricingDetails_Save            : "Salvar",

    LT_EnvWizard_PricingDetails_PayHourly       : "Pagar por Hora",

    LT_EnvWizard_PricingDetails_PayDaily        : "Pagar por Dia",

    LT_EnvWizard_PricingDetails_PayMonthly      : "Pagar por Mês",

    LT_EnvWizard_PricingDetails_Discount        : "Desconto",

    LT_EnvWizard_PricingDetails_Total           : "Total",



    LT_EnvWizard_PricingDetails_RestRes         : "[link-storage]Armazenamento[/link-storage] e [link-traffic]Tráfego[/link-traffic] são cobrados separadamente com base no consumo",

    LT_EnvWizard_Text_TrialPrices               : "*Gratuitamente durante o período de testes",

    LT_EnvWizard_Text_BetaPrices                : "*Gratuitamente para o período beta",



    LT_EnvWizard_Link_PricingVideo              : "Como controlar seus gastos?",



    LT_TutorSlider_Descr_Total    	   	        : "Custo total <span class=\"red\">100%</span> de carga em <span class=\"red\">TODOS</span> os containers",

    LT_TutorSlider_Label_From  	   	            : "De",

    LT_TutorSlider_Label_To  	   	            : "Para",



    LT_TutorSlider_Cloudlet    	   	            : "1 {0} = {1} + {2}",



    LT_EnvWizard_Hint_Pricing                   : "Clique para ver informações detalhadas sobre quotas e preços",



    LT_EnvWizard_Pricing_TotalCost              : "total",



    LT_EnvWizard_Pricing_Cloudlet_Sum           : "1 {0} = {1} + {2}",

    LT_EnvWizard_Pricing_RAMTip                 : "RAM",

    LT_EnvWizard_Pricing_CPUTip                 : "CPU",

    LT_Quotas_Cloudlet_Sum                      : "1 {0} = {1} RAM + {2} CPU",



    LT_EnvironmentWizard_Label_Databases    	: "Bancos de Dados",



    LT_NodeMission_Vds                          : "Elastic VPS",

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.7
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Common_Button_ContactUs                  : "Contato",
    LT_Common_Button_Refill                     : "Recarregar",
    LT_Common_Button_Upgrade                    : "Upgrade",
    LT_Common_Button_LearnMore                  : "Aprenda mais",
    LT_Common_Button_EnvSettings                : "Configura&ccedil;&otilde;es de ambiente",
    LT_Common_Button_IncreaseLimits             : "Aumentar limites",
    LT_SolutionDlg_Docker_PleaseWait            : "Docker está sendo instalado.<br>Por favor, aguarde...",

    TEXT_CONTACT_SUPPORT                        : "[ACTION_HOSTER_SUPPORT]Entre em contato[/ACTION_HOSTER_SUPPORT] para ajuda.",

    // system detects the required increase limit method and returns one of the placeholders [TEXT_INCREASE_LIMITS_SUPPORT, TEXT_INCREASE_LIMITS_UPGRADE, TEXT_INCREASE_LIMITS_REFILL]
    //TEXT_INCREASE_LIMITS                      : "",

    TEXT_INCREASE_LIMITS_SUPPORT                : "[ACTION_HOSTER_SUPPORT]Entre em contato[/ACTION_HOSTER_SUPPORT] para aumentar os [ACTION_ACCOUNT_LIMITS]limites[/ACTION_ACCOUNT_LIMITS].",
    TEXT_INCREASE_LIMITS_UPGRADE                : "[ACTION_UPGRADE_ACCOUNT]Atualize agora[/ACTION_UPGRADE_ACCOUNT] para aumentar os [ACTION_ACCOUNT_LIMITS]limites[/ACTION_ACCOUNT_LIMITS].",
    TEXT_INCREASE_LIMITS_REFILL                 : "[ACTION_REFILL_ACCOUNT]Recarregue seu saldo[/ACTION_REFILL_ACCOUNT] para aumentar os [ACTION_ACCOUNT_LIMITS]limites[/ACTION_ACCOUNT_LIMITS].",

    LT_EnvWizard_Warning_CreateOff              : "Voc&ecirc; n&atilde;o tem permiss&atilde;o para criar mais ambientes devido &agrave;s suas restri&ccedil;&otilde;es de conta. [TEXT_INCREASE_LIMITS_SUPPORT/]",
    LT_Notify_Label_VPSQuotaMismatch            : "Cria&ccedil;&atilde;o de node Elastic VPS com esses par&acirc;metros n&atilde;o est&atilde;o dispon&iacute;veis devido &agrave;s suas restri&ccedil;&otilde;es de conta. [TEXT_INCREASE_LIMITS_SUPPORT/]",

    // ENVIRONMENT_QUOTA_LIMIT_REACHED
    LT_E_Platform_2338                          : "A configura&#231;&#227;o pedida excede seus limites de conta. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_MAX_ENVS_REACHED
    LT_E_Platform_2360                          : "O n&#250;mero de ambientes &#233; limitado a <b>(%(USER_QUOTA_ENV_COUNT))</b> por conta.<br> [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_OVER_CHUNKS
    LT_E_Platform_2361                          : "Tamanho do servidor &#233; limitado a <b>%(USER_QUOTA_ENV_CLOUDLETS)</b> cloudlets. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_HA_NOT_ALLOWED
    LT_E_Platform_2362                          : "O agrupamento de alta disponibilidade n&#227;o est&#225; dispon&#237;vel para sua conta. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_EXT_IP_NOT_ALLOWED
    LT_E_Platform_2363                          : "Endere&#231;os IP externos n&#227;o est&#227;o dispon&#237;veis para sua conta. [TEXT_INCREASE_LIMITS/]",

    //ENVIRONMENT_VDS_NOT_ALLOWED
    LT_E_Platform_2364                          : "Elastic VPS (Virtual Private Server) n&#227;o est&#225; dispon&#237;vel para sua conta. [TEXT_INCREASE_LIMITS/]",

    //ENVIRONMENT_MAX_NODES_REACHED
    LT_E_Platform_2365                          : "O n&#250;mero total de ocorr&#234;ncias 'servidores por meio est&#225; limitada a <b>%(USER_QUOTA_ENV_NODES)</b> para a sua conta. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_MAX_SAME_NODES_REACHED
    LT_E_Platform_2366                          : "O n&#250;mero de nodes dentro de um ambiente est&#225; limitado a <b>%(USER_QUOTA_ENV_NODEGROUP_NODES)</b> para a sua conta. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_EXPORT_IMPORT_NOT_ALLOWED
    LT_E_Platform_2369                          : "Exporta&#231;&#227;o de ambientes n&#227;o est&#225; dispon&#237;vel para a sua conta. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_NODE_TYPE_NOT_ALLOWED, ENVIRONMENT_TYPE_NOT_SUPPORTED
    LT_E_Platform_2372                          : "O tipo de node requerido n&#227;o &#233; suportado na plataforma atual ou n&#227;o est&#225; dispon&#237;vel para sua conta. [TEXT_CONTACT_SUPPORT/]",

    // ENVIRONMENT_MIGRATION_NOT_ALLOWED
    LT_E_Platform_2373                          : "A op&#231;&#227;o de migra&#231;&#227;o de ambiente n&#227;o est&#225; dispon&#237;vel para sua conta. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_ENDPOINT_NOT_ALLOWED
    LT_E_Platform_2378                          : "Adicionando endpoints para nodes n&#227;o est&#225; dispon&#237;vel para sua conta. [TEXT_INCREASE_LIMITS/]",

    LT_EnvProgress_Create_Title_Success         : "Ambiente <b>%(name)</b> foi criado com sucesso. As informa&#231;&#245;es detalhadas foi enviado para o seu e-mail.",
    LT_EnvProgress_Create_Title_Failed          : "Cria&#231;&#227;o do ambiente <b>%(name)</b> falhou.",
    LT_EnvProgress_Create_SuccessText           : "<b>Qual &#233; o pr&#243;ximo?</b>" +
    "<ul>" +
    "   <li>[URL_DOCS_DEPLOYMENT_GUIDE]Guia de implanta&#231;&#227;o[/URL_DOCS_DEPLOYMENT_GUIDE]</li>" +
    "   <li>[URL_DOCS_APP_CONFIGURATION]Configura&#231;&#227;o de Aplicativos[/URL_DOCS_APP_CONFIGURATION]</li>" +
    "   <li>[URL_DOCS_ENV_ALERTS]Monitoramento de aplicativos[/URL_DOCS_ENV_ALERTS]</li>" +
    "   <li>[URL_DOCS_AUTO_HORIZONTAL_SCALING]Escala horizontal autom&#225;tica[/URL_DOCS_AUTO_HORIZONTAL_SCALING]</li>" +
    "</ul>",

    LT_EnvProgress_Create_SuccessText_Docker    : "<b>Qual &#233; o pr&#243;ximo?</b>" +
    "<ul>" +
    "   <li>[URL_DOCS_DOCKER_CONFIG]Configura&#231;&#227;o do Docker[/URL_DOCS_DOCKER_CONFIG]</li>" +
    "   <li>[URL_DOCS_DOCKER_SSH_ACCESS]Acesso SSH ao Docker [/URL_DOCS_DOCKER_SSH_ACCESS]</li>" +
    "   <li>[URL_DOCS_DOCKER_REDEPLOY]Reimplantar o Docker [/URL_DOCS_DOCKER_REDEPLOY]</li>" +
    "   <li>[URL_DOCS_ENV_ENDPOINTS]Endpoints[/URL_DOCS_ENV_ENDPOINTS]</li>" +
    "   <li>[URL_DOCS_AUTO_HORIZONTAL_SCALING]Escala horizontal autom&#225;tica[/URL_DOCS_AUTO_HORIZONTAL_SCALING]</li>" +
    "</ul>",

    LT_EnvProgress_Edit_Title_Success           : "Configura&#231;&#227;o do ambiente <b>%(name)</b> foi atualizada com sucesso.",
    LT_EnvProgress_Edit_Title_Failed            : "Reconfigura&#231;&#227;o do <b>%(name)</b> ambiente falhou.",

    LT_Notify_Label_RegionNoFreeHardware        : "N&#227;o temos nenhum hardware dispon&#237;vel na regi&#227;o <b>%(region)</b> no momento. Selecione outra regi&#227;o ou tente novamente em algumas horas.",

    LT_EnvWizard_Confirm_CloseAndIgnoreChanges  : "Topologia de ambiente para o ambiente <b>%(envName)</b> ser&#225; fechada e todas as altera&#231;&#245;es ser&#227;o descartadas, continuar?",

    LT_EnvironmentWizard_Label_TotalHourly	    : "Custo total por hora",
    LT_EnvironmentWizard_Label_TotalMonthly	    : "Custo total por m&#234;s",
    LT_EnvironmentWizard_Label_TotalDaily	    : "Custo total por dia",

    LT_Quotas_Text_Network_Limit                : "Largura de banda de rede externa",
    LT_Units_Mbps                               : "Mbps",
    
    LT_Task_Name_111                            : "Adicionando a chave SSH privada %(title)",
    LT_Task_Name_112                            : "Adicionando a chave SSH p&#250;blica %(title)",

    LT_EnvWizard_PricingDetails_Count           : "Contagem",
    LT_EnvWizard_PricingDetails_Containers      : "Containers",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Shared Storage
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Task_Name_84	                            : "Montando diret&#243;rio %(path) a partir do %(name) de ID %(nodeId) no ambiente %(env)",
    LT_Task_Name_85	                            : "Desmontando diret&#243;rio %(path) a partir do node %(name) de ID %(nodeId) no ambiente %(env)",
    LT_Task_Name_86	                            : "Montando diret&#243;rio %(path) para o recipiente %(name) de %(env)",
    LT_Task_Name_87	                            : "Desmontando diret&#243;rio %(path) para o recipiente %(name) de %(env)",
    LT_Task_Name_88	                            : "Configurando volumes para o recipiente %(name) de %(env)",
    LT_Task_Name_89	                            : "Adicionando node %(name) para o ambiente %(env)",
    LT_Task_Name_90	                            : "Unmounting the %(name) %(path) directory within %(env) environment from the %(clientPath) directory of node with ID %(clientNodeId)",
    LT_Task_Name_91	                            : "Definir pontos de montagem para a identifica&#231;&#227;o de %(name) node %(nodeId) de %(env)",
    LT_Task_Name_113                            : "Adicionando volume %(path) para o node %(name) no %(env)",
    LT_Task_Name_114                            : "Removendo volume %(path) para o node %(name) no %(env))",

    LT_E_Platform_2030                          : "O caminho %(path)j&#225; est&#225; montado.",
    LT_E_Platform_FOLDER_MOUNT_FAILED           : "Cria&#231;&#227;o de ponto de montagem em %(path) falharam. Por favor, verifique a disponibilidade adequada do servidor, a conformidade de permiss&#245;es e configura&#231;&#245;es de firewall.",
    LT_E_Platform_NFS_SERVER_NOT_SUPPORTED      : "O escolhido <b>%(node)</b> container n&#227;o suporta a capacidade de ser tratado como um servidor NFS para armazenar dados. Tente o modelo padr&#227;o de Jelastic Storage.",
    LT_E_Platform_FILE_MANAGER_PERMISSION_DENIDED : "Acesso negado! Por favor, verifique as permiss&#245;es para o diret&#243;rio apropriado.",
    LT_E_Platform_FILE_EXPORT_OF_MOUNTED_DIRECTORY : "Exporta&#231;&#227;o do diret&#243;rio <b>%(path)</b> j&#225; montado &#233; proibida.",
    LT_E_Platform_FILE_MOUNT_OF_EXPORTED_DIRECTORY : "&#201; proibido adicionar ponto de montagem para o diret&#243;rio exportado.",
    LT_E_Platform_NFS_SERVER_INCORRECT_CONFIG_FILE : "O arquivo de configura&#231;&#227;o do NFS Server <b>%(path)</b> n&#227;o &#233; v&#225;lido. Por favor, verifique a configura&#231;&#227;o.",

    LT_W_MaxFileNameLength                      : "O tamanho m&#225;ximo de nome de arquivo/pasta &#233; %(length)",

    LT_Action_MountDirectory                    : "montar diret&#243;rio",
    LT_Action_UnmountDirectory                  : "desmontar diret&#243;rio",

    LT_Units_Bytes                              : "B",
    LT_Units_Tb                                 : "TB",

    // FILE_CROSS_MOUNT_IS_FORBIDDEN
    LT_E_Platform_2032                          : "Cross-mounts s&#227;o proibidas!",

    LT_Warning_RestrictedPathNames              : "Nome do caminho n&#227;o pode ser igual a [%(names)]",
    LT_Warning_RestrictedPaths                  : "O caminho n&#227;o pode come&#231;ar com [%(startsWith)] e ser igual a - [%(equals)]",
    LT_Warning_RestrictedPath                   : "O uso do caminho especificado n&#227;o &#233; permitido",
    LT_Common_Confirm_ReloadNotSaved            : "O conte&#250;do n&#227;o foi salvo, recarregar?",
    LT_Process_Label_CheckingDependencies       : "Verificando depend&#234;ncias...",

    LT_Environments_Confirm_StartEnv            : "Iniciando ambiente %(sName)",
    LT_Environments_Confirm_StopEnv             : "Parando ambiente %(sName)",

    LT_EnvDependencies_Title_Details            : "Detalhes",
    LT_EnvDependencies_Title                    : "Depend&#234;ncias de %(env)",
    LT_EnvDependencies_Text_EnvDepend           : "Os nodes no ambiente dependem dos seguintes componentes:",
    LT_EnvDependencies_Text_CmpDepend           : "Os seguintes componentes dependem dos ambiente nodes atual:",
    LT_EnvDependencies_Column_Component         : "Componente",
    LT_EnvDependencies_Column_EnvNode           : "Node",
    LT_EnvDependencies_Column_Server            : "Servidor",
    LT_EnvDependencies_EmptyText                : "N&#227;o foram encontradas depend&#234;ncias",

    LT_Confirm_IgnoreDependenciesCheck          : "N&#227;o foi poss&#237;vel verificar as depend&#234;ncias de ambiente. Continuar mesmo assim?",
    LT_Common_Text_AffectDependentCmp           : "As defini&#231;&#245;es utilizadas podem afetar um trabalho adequado dos componentes, os quais dependem do nodo ambiente atual.",
    LT_Common_Text_EnvDependOn                  : "Nodo ambiente atual depende de alguns componentes externos e pode não funcionar corretamente sem eles sendo executados.",

    // uses like 'action' placeholder in LT_Common_Text_AffectDependentCmp
    LT_Confirm_ApplyChanges                     : "Aplicar mudan&#231;as?",

    LT_EnvMigration_Warning_HasDependencies     : "O processo de migra&#231;&#227;o pode afetar a [ACTION_SHOW_DEPENDENCIES]disponibilidade dos componentes[/ACTION_SHOW_DEPENDENCIES] que dependem do nodo ambiente atual.",

    LT_EnvClone_Field_KeepMounts                : "Manter montagens externas",
    LT_EnvClone_Field_KeepMounts_Tip            : "Se ativado, todos os pontos de montagem para servidores em outros ambientes ser&#227;o replicadas dentro de recipientes clonados.",

    LT_RedeployContainer_Field_KeepVols         : "Manter dados relativos aos volumes",
    LT_RedeployContainer_Field_KeepVols_Tip     : "Se ativado, todos os dados dentro de volumes de containers, ser&#227;o salvos e permanecem dispon&#237;veis ap&#243;s a sua reorienta&#231;&#227;o.",
    //TODO: ????? ???????????? ? ????? ? ??????????? ????? ????? "Manter dados relativos aos volumes"
    LT_RedeployContainer_HelpTip                : "Aqui voc&#234; pode atualizar os Docker container(s) escolhidos para outro tag sem perder seus dados e configura&#231;&#245;es personalizadas.  [URL_DOCS_DOCKER_REDEPLOY]%(LT_Common_Button_LearnMore)[/URL_DOCS_DOCKER_REDEPLOY]",

    LT_UploadFiles_Title_Dialog                 : "Fazer upload de arquivos",
    LT_UploadFiles_Label_Empty_Text			    : "Selecionar arquivo(s)",

    LT_NodeMission_Storage                      : "Container de armazenamento",

    //LT_EnvWizard_Storage                        : "Armazenamento",
    LT_EnvWizard_Field_StorageLimits            : "Limite de armazenamento",
    LT_EnvWizard_Field_StorageLimits_Tip        : "Ver limites",
    LT_EnvWizard_Hint_Storage                   : "Tipo de container especial para armazenar dados.",

    //TODO: ????? ???????????? - ????? ??????????? ?? ??? ??????, ?????? ?????: "O n&#250;mero m&#225;ximo de nodos para o mesmo ambiente.",
    LT_Quotas_Text_MaxSameNodesCount            : "O n&#250;mero m&#225;ximo de nodo por grupo de nodos (camada).",
    LT_Quotas_Text_MaxCloudlets                 : "Tamanho m&#225;ximo do servidor em cloudlets.",
    LT_Quotas_Text_MaxDiskSpacePerNode          : "Espa&#231;o m&#225;ximo dispon&#237;vel em disco por nodo.",
    LT_Quotas_Text_MaxDiskSpacePerStorageNode   : "Espaço máximo disponível em disco por nodo de armazenamento.",

    //LT_DockerSettings_Text_PredefinedValue      : "Item pr&#233;-definido em imagem.",
    //LT_DockerSettings_Text_UserValue            : "",

    LT_DockerSettings_Vols_Column_Server        : "Dados de localiza&#231;&#227;o",
    LT_DockerSettings_Vols_Column_ServerPath    : "Caminho remoto",
    LT_DockerSettings_Vols_Column_Permission    : "Permiss&#227;o",
    LT_DockerSettings_Vols_Label_UmountPath     : "Desmontar caminho",
    LT_DockerSettings_Vols_Label_VolFrom        : "Volumes de",
    LT_DockerSettings_Vols_Label_NoVolumes      : "Nenhum volume",
    LT_DockerSettings_Vols_Label_From           : "a partir de:",
    LT_DockerSettings_Vols_W_AlreadyMounted     : "O volume %(path) j&#225; est&#225; montado.",
    LT_DockerSettings_Vols_W_Predefined         : "Volumes predefinidos n&#227;o podem ser exclu&#237;dos.",
    LT_DockerSettings_Vols_W_AddDublicate       : "Volume com tal caminho j&#225; est&#225; <br> presente na lista!",
    LT_DockerSettings_Vols_W_AddAlreadyMounted  : "O volume j&#225; est&#225; montado e vai ser remontado para o <br> container de dados seleccionado.",

    LT_Common_Label_Right_ReadWrite             : "rw",
    LT_Common_Label_Right_ReadWrite_Tip         : "Permiss&#227;o de leitura/grava&#231;&#227;o",
    LT_Common_Label_Right_ReadOnly              : "ro",
    LT_Common_Label_Right_ReadOnly_Tip          : "Permiss&#227;o somente de leitura",


    LT_VolFrom_Field_SourceNode                 : "Node",
    LT_VolFrom_Field_SourceNode_EmptyText       : "Por favor seleccione um container",
    LT_VolFrom_Field_Volumes                    : "Volumes",

    LT_EnvNodesCombo_Label_CurrentEnv           : "%(envName) (atual)",
    LT_EnvNodesCombo_EmptyStoreText             : "Sem nodes",

    // LT_Common_Text_MoreDetails                  : "Mais detalhes...",

    //TODO: VK - %(LT_Common_Button_LearnMore)
    LT_EnvMounts_Editor_HelpTip                 : "Aqui voc&#234; pode [URL_DOCS_ENV_MOUNTS]adicionar um ponto de montagem [/URL_DOCS_ENV_MOUNTS] - diret&#243;rio no sistema de arquivos do container, que est&#225; ligado ao servidor de armazenamento remoto para a utiliza&#231;&#227;o de dados a partir dele.",

    //LT_EnvMounts_Editor_HelpTip                 : "Leia a [link]documenta&#231;&#227;o[/link] para saber mais detalhes sobre pontos de montagem.",

    LT_EnvMounts_Editor_Title                   : "Adicionar Ponto de Montagem",
    LT_EnvMounts_Editor_Field_Server            : "NFS Server",
    LT_EnvMounts_Editor_Field_Server_EmptyText  : "Servidor de dom&#237;nio ou IP",
    LT_EnvMounts_Editor_Field_Path              : "Caminho remoto",
    LT_EnvMounts_Editor_Field_MountPoint        : "Ponto de montagem",
    //LT_EnvMounts_Editor_Field_MountPoint_Tip    : "Ponto de montagem &#233; o diret&#243;rio no sistema de arquivos do container com o armazenamento de dados adicional a ser montado a partir do local remoto.",
    LT_EnvMounts_Editor_Field_MountType         : "Fonte",
    LT_EnvMounts_Editor_Field_AllNodes          : "Montar a todos os nodes",
    LT_EnvMounts_Editor_Field_AllNodes_Tip      : "Se ativado, o novo ponto de montagem ser&#225; adicionado a todos os recipientes do grupo nodes atual (camada).",
    LT_EnvMounts_Editor_Field_ReadOnly          : "Somente leitura",

    LT_EnvMounts_Type_LocalFS                   : "Sistema de arquivos local",
    LT_EnvMounts_Type_DataContainer             : "Container de Dados",
    LT_EnvMounts_Type_MasterContainer           : "Container Principal",
    LT_EnvMounts_Type_External                  : "Servidor Externo",

    LT_EnvMounts_Type_LocalFS_HelpTip           : "Todos os dados ser&#227;o armazenados dentro do container [link]sistema de arquivos local[link] atual e continuam presentes ap&#243;s o seu rein&#237;cio ou reimplanta&#231;&#227;o.",
    LT_EnvMounts_Type_DataContainer_HelpTip     : "Escolha de um [link]container separado[/link] dentro de qualquer um dos seus ambientes para os dados serem armazenados.",
    LT_EnvMounts_Type_MasterContainer_HelpTip   : "Todos os nodos dentro da camada, incluindo os mais adicionados, ser&#227;o montados ao [link]recipiente principal[/link] (ou seja. O nodo criado inicialmente de uma camada).",
    LT_EnvMounts_Type_External_HelpTip          : "Todos os nodos no interior da camada ser&#227;o montados para um [link]servidor externo[/link], destinado a armazenar os dados. Note-se que, neste caso, &#233; fortemente recomendado o uso de endere&#231;o IP externo para os nodos, a fim de evitar quaisquer problemas de seguran&#231;a.",
    LT_EnvMounts_Type_VolumesFrom_HelpTip       : "Selecione o nodo que voc&#234; gostaria de copiar os ajustes de volumes a partir de modo a mont&#225;-los no recipiente atual.",

    // volume editor
    // LT_Volume_Editor_Field_Mount                : "Montar NFS",
    // LT_Volume_Editor_Field_Mount_Tip            : "Conecte o diret&#243;rio de armazenamento remoto para um local espec&#237;fico no sistema de arquivos do recipiente. [URL_DOCS_ENV_MOUNTS]%(LT_Common_Button_LearnMore)[/URL_DOCS_ENV_MOUNTS]",
    LT_Volume_Editor_Field_Path                 : "Caminho Local",
    LT_Volume_Editor_Confirm_KeepMount          : "O caminho %(path) j&#225; foi montado. Mantenha-o presente?",

    LT_EnvMounts_Editor_W_EnvNotRunning         : "Ambiente n&#227;o est&#225; em execu&#231;&#227;o.",
    LT_EnvMounts_Info_MountSuccess              : "O caminho %(path) foi montado com êxito.",

    // file manager
    LT_ConfigManager_Item_Root                  : "Root",
    LT_ConfigManager_Item_Favorite              : "Favoritos",
    LT_ConfigManager_Item_Mounted               : "Pontos de montagem",
    LT_ConfigManager_Item_Exported              : "Exportar",
    LT_ConfigManager_Label_Directories          : "Diret&#243;rios",

    LT_ConfigManager_Column_Name                : "Nome",
    LT_ConfigManager_Column_Server              : "Servidor",
    LT_ConfigManager_Column_ServerPath          : "Caminho Remoto",
    LT_ConfigManager_Column_Size                : "Tamanho",
    LT_ConfigManager_Column_Modified            : "&#218;ltima Modifica&#231;&#227;o",
    LT_ConfigManager_Column_FileType            : "Tipo",
    LT_ConfigManager_Column_ClientPath          : "Caminho cliente",
    LT_ConfigManager_Column_Permission          : "Permiss&#227;o",

    LT_ConfigManager_Button_OpenDirectory       : "Navegue at&#233; o diret&#243;rio",
    LT_ConfigManager_Button_Mount               : "Montar",
    LT_ConfigManager_Button_UnMount             : "Desmontar",
    LT_ConfigManager_Button_EditExportsConfig   : "Configura&#231;&#227;o",

    LT_ConfigManager_Button_Add2Favorites       : "Adicionar aos favoritos",
    LT_ConfigManager_Button_RemoveFavorites     : "Remover dos favoritos",
    LT_ConfigManager_Button_Add2Volumes         : "Adicionar aos Volumes",
    LT_ConfigManager_Button_RemoveVolumes       : "Remover de Volumes",
    LT_ConfigManager_Button_DirectoryActions    : "A&#231;&#245;es para o diret&#243;rio atual",
    LT_ConfigManager_Button_Open                : "Aberto",

    LT_ConfigManager_Field_Path_Tip             : "Clique para inserir o caminho",
    LT_ConfigManager_Label_SaveForAll           : "Salvar para todas as inst&#226;ncias",
    LT_ConfigManager_Label_UnMountFromAll       : "Desmonte de todas as inst&#226;ncias",

    LT_ConfigManager_Confirm_Unmount            : "Desmontar o diret&#243;rio <b>%(name)</b>?",
    LT_ConfigManager_Confirm_UnmountFromClient  : "Desmontar o diret&#243;rio <b>%(name)</b> do nodo <b>%(client)</b>?",
    LT_ConfigManager_Confirm_RenameMountExport  : "Mudar o nome da pasta montada/exportados podem afetar uma obra adequada dos recipientes dependentes. Renomear <b>%(path)</b> para <b>%(newPath)</b> afinal?",
    LT_ConfigManager_Confirm_DeleteMountExport  : "Exclus&#227;o da pasta/export montado pode afetar uma obra adequada dos recipientes dependentes. %(action)",

    LT_ConfigManager_Exports_EmptyText          : "As pastas ser&#227;o automaticamente adicionadas a essa lista depois de serem montadas em outros recipientes.[URL_DOCS_ENV_EXPORTS]%(LT_Common_Button_LearnMore)[/URL_DOCS_ENV_EXPORTS]",
    LT_ConfigManager_Favorites_EmptyList        : "Marque os arquivos e diret&#243;rios mais utilizados como favoritos para acess&#225;-los facilmente dentro deste painel.",

    LT_ConfigManager_FileType_File              : "Arquivo regular",
    LT_ConfigManager_FileType_Directory         : "diret&#243;rio",
    LT_ConfigManager_FileType_Pipe              : "Pipe nomeado",
    LT_ConfigManager_FileType_Socket            : "socket",
    LT_ConfigManager_FileType_CharacterDevice   : "dispositivo de caractere",
    LT_ConfigManager_FileType_BlockDevice       : "dispositivo de bloco",

    LT_Units_Kbit                               : "Kb",
    LT_Units_Mbit                               : "Mb",
    LT_Units_Gbit                               : "Gb",
    LT_Units_Kbps                               : "kb/s",
    LT_EnvScaling_Label_Bits                    : "Bits",
    LT_EnvScaling_Tip_NetExtOut                 : "Uso de tr&#225;fego de rede externa (sa&#237;da &#250;nica, em bits)",
    LT_EnvAlerts_Text_Type_NetExt               : "Network (fora ext. + dentro ext.)",
    LT_EnvAlerts_Label_Type_NetExt              : "Network (fora ext. + dentro ext.)",
    LT_EnvAlerts_Label_Type_NetExtOut           : "Network (fora ext.)",
    LT_EnvAlerts_Text_Type_NetExtOut            : "Network (fora ext.)",


    LT_Task_Name_104	                        : "Adicionando gatilho %(triggerName) para %(env)",
    LT_Task_Name_105	                        : "Editando configura&#231;&#245;es de gatilho %(triggerName) para %(env)",
    LT_Task_Name_106	                        : "Alterar estado do gatilho %(triggerName) para %(env)",
    LT_Task_Name_107	                        : "Excluindo gatilho %(triggerName) de %(env)",
    LT_Task_Name_109                            : "Execu&#231;&#227;o de comando no ID %(nodeid) do conteiner %(name) de %(env)",

    LT_Common_Button_Search						: "Pesquisa",
    
    LT_CodeEditor_Previous                      : "Combina&#231;&#227;o anterior",
    LT_CodeEditor_Next                          : "Pr&#243;xima combina&#231;&#227;o",
    LT_CodeEditor_MatchCase                     : "Caso de compatibilidade",
    LT_CodeEditor_Regex                         : "Regex",
    LT_CodeEditor_Search_Mathces                : "%(count) combina&#231;&#227;o(es)",
    LT_CodeEditor_Search_NoMathces              : "Sem combina&#231;&#245;es",

    LT_Log_Button_Tail                          : "Tail",
    LT_Log_Button_Pages                         : "P&#225;ginas",
    LT_Log_File_Truncated                       : "O arquivo %(file) foi corrompido",

    LT_Settings_Label_EnterDomain			  	: "1. Digite seu dom&#237;nio externo (por exemplo meudominio.com) no campo abaixo para lig&#225;-lo ao ambiente",
    LT_Settings_Label_CName					  	: "2. Em seu painel de DNS, adicionar um registro CNAME para o domínio especificado, e apontar para o endereço <b>%(sDomain)</b> (<u><a href='%(sDocUrl)' target='_blank'>mostre-me como</a></u>)",

    LT_Units_KiB                                : "KiB",
    LT_Units_MiB                                : "MiB",
    LT_Units_GiB                                : "GiB",
    LT_Units_TiB                                : "TiB",

    LT_EnvEndpoints_Settings_DetailsTips        : "Aqui você pode [link]adicionar e gerenciar endpoints[/link], que podem ser usados por outros recursos para a comunicação com os seus containers",

    LT_Environments_Status_13                   : "Parando...",
    LT_Environments_Status_14                   : "Colocando para dormir...",

    LT_Process_Label_WaitFewMinutes             : "O processo pode demorar alguns minutos...",

    LT_E_Platform_DOCKER_DAEMON_FAILED          : "A imagem <b>%(image)</b> n&#227;o pode ser obtida devido a problemas t&#233;cnicos tempor&#225;rios. Por favor, tente novamente mais tarde ou [ACTION_HOSTER_SUPPORT]contate o suporte[/ACTION_HOSTER_SUPPORT].",
    LT_E_Platform_COULD_NOT_DETECT_OS           : "A imagem <b>%(image)</b> e baseada em modelo de OS não-suportado . [TEXT_CONTACT_SUPPORT/]",
    LT_E_Platform_COULD_NOT_FIND_DOCKER_IMAGE   : "A imagem <b>%(image)</b> n&#227;o p&#244;de ser encontrada. Por favor verifique suas entradas.",

    LT_Common_Button_Docs 						: "Docs",

    LT_ExportEnv_Dlg_Warning_WhatNotExported    : "Perceba que, atualmente, containers Docker e nodos do Windows n&#227;o podem ser exportados. Tamb&#233;m conteiners de armazenamento, Elastic VPS e Maven s&#227;o exportados sem quaisquer dados dentro, ent&#227;o voc&#234; precisar&#225; reconfigur&#225;-los manualmente mais tarde.",
    LT_ExportEnv_Settings_Error_EmptyNodesList  : "N&#227;o h&#225; recipientes que possam ser exportados. [URL_DOCS_ENV_EXPORT]%(LT_Common_Button_LearnMore)[/URL_DOCS_ENV_EXPORT]",

    LT_Environments_Column_Usage_QTip           : "CPU: %(cpu)<br /> Mem: %(mem)<br /> HDD: %(disk)<br /> Net: %(net_in)/%(net_out) Mb",
    LT_RestartContainer_Info_Success            : "Containers no ambiente <b>%(envName)</b> foram reiniciados com sucesso.",

    LT_DockerSettings_Title                     : "configura&#231;&#245;es de camadas Docker %(name)",

    LT_EnvScaling_ThresholdDiff_Tip             : "A diferen&#231;a m&#237;nima permitida entre os limites de gatilhos &#233; %(diff)%",

    LT_E_Platform_PLATFORM_LICENSE_EXPIRED      : "Parece que existe um problema de licen�a neste cluster. Fa�a login no OPS Panel como administrador para corrigi-lo.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.8
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_ManifestImp_TabJSON_Beautify_Tip         : "Apply proper JSON formatting with indentations and line feeds",
    LT_ManifestImp_TabJSON_WordWrap_Tip         : "Wrap lines",
    LT_EnvWizard_Info_AvailableForBillingAcc    : "This engine support is provided for billing accounts only. [ACTION_UPGRADE_ACCOUNT]Upgrade[/ACTION_UPGRADE_ACCOUNT] your account or [ACTION_HOSTER_SUPPORT]contact us[/ACTION_HOSTER_SUPPORT] to remove this limitation.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Disabled price
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvMounts_Editor_Title_Export            : "Export Path From",
    LT_EnvMounts_Editor_Tab_Title_Export        : "Export Directory",
    LT_EnvMounts_Editor_Field_SourceServer      : "From NFS",
    LT_ConfigManager_Button_Export              : "Export",
    LT_EnvMounts_Editor_Field_TargetServer      : "To Container(s)",
    LT_EnvMounts_Type_Export_HelpTip            : "Choose source and target containers to share the data across.",

    LT_EnvWizard_Baloon_CPU_Resources           : "%(cpu) CPU",
    LT_EnvWizard_Baloon_RAM_Resources           : "%(ram) RAM",
    LT_EnvWizard_Pricing_Label_TrafficLimit     : "Traffic Limit per Node",
    LT_EnvWizard_Pricing_ViewLimits_Tip         : "View limits",
    LT_Menu_OpenExtBillingPanel                 : "Billing portal",
    LT_EnvWizard_PriceSlider_TotalResources     : "Total Resources",
    LT_QuotasWindow_Title                       : "Quotas",
    LT_EnvMigration_Text_TargetRegion_Pricing   : "Prices can differ in target region",

    LT_RedeployContainer_Field_RedeployDelay    : "Redeploy delay",
    LT_RedeployContainer_Field_Delay_Unit       : "seconds",
    LT_RedeployContainer_Field_Delay_Hint       : "Time frame between redeployment of two containers in nodes layer",

    LT_Common_Text_Id                           : "ID",

    LT_Environments_Validation_InvalidName      : "The name is invalid. Please specify a different name.",
    LT_Environments_Validation_ForbiddenSymbols : "The name contains characters, which are not allowed for being used in Internet domain names. Please specify a different name.",

    LT_Upload_FileExists                        : "The %(folder) folder already contains such file(s): %(files). Overwrite?",
    LT_Task_Name_43	                            : "Creating file %(fileName) at %(env)",
    LT_Task_Name_44	                            : "Deleting file %(fileName) from %(env)",
    LT_Task_Name_45	                            : "Renaming %(oldFileName) file to %(newFileName) in %(env)",
    LT_Task_Name_47	                            : "Reading file %(fileName) on %(env)",
    LT_Task_Name_48	                            : "Saving file %(fileName) on %(env)",

    LT_W_ContainBeginEndSpaces                  : "File name can't begin or end with a whitespace",
    LT_E_Platform_FILE_MOUNT_NO_INTERNAL_ROUTE  : "Mounting between the chosen nodes is not available due to the internal IP address absence at one of them.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.9
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Common_Text_Unit_Seconds                 : "seconds",
    LT_Common_Button_Restart                    : "Restart",
    LT_RestartNodes_Field_SequentialRestartDelay: "Sequential restart delay",
    LT_RestartNodes_Field_Delay_Hint            : "Time frame (in seconds) between restart of two containers within one layer",
    LT_RestartNodes_Info                        : "All containers within the layer will be restarted one by one. Use the spinner below to set the delay between these restart operations in order to avoid service downtime.",
    LT_Context_Sequential_Deploy_Hint           : "Time frame between redeployment of two nodes (containers) in one node group (layer)",
    LT_Context_Sequential_Delay                 : "Sequential deployment delay",
    LT_Upload_FtpLoginFailed                    : "FTP login failed! Please, recheck specified FTP credentials and try again.",

    LT_Quotas_Days                              : "%(count) day(s)",

    LT_Common_Button_ViewLogs                   : "View logs",
    LT_Import_ViewLogs_Tip                      : "View logs",

    LT_Quotas_Text_SSL                          : "%(PLATFORM_VENDOR_NAME) SSL",
    LT_Quotas_Error_SSL                         : "%(PLATFORM_VENDOR_NAME) SSL is not enabled for your account. [TEXT_INCREASE_LIMITS/]",

    LT_EnvScaling_Field_ScaleUpTo               : "Scale out to",
    LT_EnvScaling_Field_ScaleDownTo             : "Scale in to",
    LT_EnvScaling_Column_Nodes                  : "Nodes",
    LT_EnvScaling_Column_AddCondition           : "Scale Out",
    LT_EnvScaling_Column_RemoveCondition        : "Scale In",
    LT_EnvScaling_W_TriggerExist                : "Trigger for this resource type already exists",
    LT_EnvScaling_W_NodeMaxTriggerCountReached  : "You've reached the maximum available number of triggers.",
    LT_EnvScaling_W_BuildNode                   : "This feature is not available for the build-node environment layer.",
    // LT_EnvScaling_W_CPRequired                  : "Within non-Docker environments, this option is available for web/application nodes only.",
    // LT_EnvScaling_HelpTip_CPRequired            : "You need to have a web/application node for this feature to work properly. [link]Click here to configure your environment[/link].",
    LT_EnvScaling_HelpTip                       : "Configure the triggers below to automatically add and remove nodes from your environment based on resources consumption. Cloudlet settings for each added node will be copied from the existing instance(s). Read this [link]documentation[/link] to find out more details.",
    LT_Docs_ZDTModule                           : "Read more about [link-docs]zero-downtime deployment[/link-docs] options.",
    LT_Wizard_Warning_Restart_Group             : "Container(s) within this layer will be restarted in a sequence with predefined delay.",
    LT_ExtDomains_Error_Quota                   : "Custom domains binding is not available for your account. [TEXT_INCREASE_LIMITS/]",
    LT_Quotas_Text_ExtDomains                   : "Custom domains",
    LT_Context_Sequential_Deploy_VCS_Hint       : "Time frame (in seconds) between redeployment of two nodes within one node group (layer)",
    LT_SequentialMavenDeploy_Info               : "All containers within the node group (layer) will be redeployed one by one. Use the spinner below to set the delay between these deployment operations in order to avoid service downtime.",

    LT_Context_Sequential_Update_Delay          : "Sequential update delay",
    LT_SequentialVcsUpdate_Info                 : "All containers within the layer will be updated one by one. Use the spinner below to set the delay between these update operations in order to avoid service downtime.",
    LT_Common_Button_SequentialUpdate           : "Update",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.9.5
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_TaskManager_Status_NoTasks               : "No active tasks",
    LT_TaskManager_Status_ActiveTasks           : "%(count) active task(s)",
    LT_Import_Link_Examples                     : "Examples",
    LT_Tasks_Column_Performer                   : "User",
    LT_EnvWizard_Label_Topology_Docker          : "Docker Containers",
    LT_Notify_Label_NoFreeInternalIps           : "There are no free IP addresses at the moment. Please, [ACTION_HOSTER_SUPPORT]contact support[/ACTION_HOSTER_SUPPORT] to negotiate their addition.",
    LT_ExportEnv_Dlg_Warning_WhatNotExported    : "Note that currently Windows nodes, Storage, Elastic VPS, Maven and Docker containers are exported without any data inside, so you’ll need to transfer the required files and configurations manually afterwards.",

    LT_E_Platform_4060                          : "Deploy failed. Please, check logs to find out more details.",
    LT_BuildUpload_Failed_Warning               : "An error occurred while trying to build the project",

    LT_TrialToPaid_WelcomeDlg_Title             : "Welcome!",
    LT_TrialToPaid_WelcomeDlg_Text              : "Thank you for your interest in our product. You are just one step away to create your account and get the full access to the platform.",
    LT_TrialToPaid_WelcomeDlg_Button_Continue   : "Continue",

    LT_Process_Label_Waiting4Conversion         : "Waiting for conversion...",

    LT_Error_SuspendedAccount_Trial             : "Your trial period has expired and your account has been deactivated. Please [ACTION_UPGRADE_ACCOUNT]upgrade your account[/ACTION_UPGRADE_ACCOUNT] if you'd like to continue using the service.",
    LT_Error_Account_Destroyed                  : "Your account has been destroyed. [TEXT_CONTACT_SUPPORT/]",

    LT_CustomSSL_Text_NotImplemented            : "Custom SSL for %(nodeName) is not supported. Consider using load balancer node as an SSL-proxy.",

    LT_ConfigManager_Button_CopyPath            : "Copy Path",
    LT_ConfigManager_OldBrowser_Info            : "Press Cmd/Ctrl+C to copy",

    LT_Task_Name_110                            : "Executing command for %(name) in %(env)",
    AutoRefill_ConfirmEdit                      : "Change sum of auto-refill payment from %(currentAmount) to %(pureAmount)?",

    LT_Error_EnvironmentClone_Timeout           : "An error occurred while trying to clone the node",

    LT_AppStoreCat_Dockers                      : "Docker Containers",

    // FILE_MANAGER_DOWNLOAD_NOT_EXISTS
    LT_E_Platform_2050                          : "File not exists.",

    // FILE_MANAGER_DOWNLOAD_FILE_SIZE_LIMIT
    LT_Error_MaximumFileSize                    : "File is too large. Download file size limit is %(size)",

    LT_Action_DownloadFile                      : "download file",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.10
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Units_sec                                : "sec",
    LT_NodeMission_Storage                      : "Storage Containers",
    LT_EnvWizard_Field_StorageLimits            : "Disk Limit",
    LT_EnvWizard_Pricing_Label_StorageLimit     : "Disk Limit per Node",

    LT_EnvWizard_PricingFixed_Resources         : "{0} RAM + {1} CPU + {2} Disk",
    LT_EnvWizard_PricingDetails_Clds            : "Cloudlets (RAM, CPU)",
    LT_EnvWizard_PricingDetails_Reserved        : "Reserved",
    LT_EnvWizard_PricingDetails_Disk            : "Disk Space",
    LT_EnvWizard_Link_PricingVideo              : "[URL_VIDEO_PRICING_MODEL]How to track your spendings?[/URL_VIDEO_PRICING_MODEL]",

    LT_Task_Name_115                            : "Setting disk size for the %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_116                            : "Setting disk size for %(name) nodes in %(env)",

    LT_EnvWizard_Warning_Cloudlets              : "The minimum cloudlet number for <b>%(node)</b> is <b><i>%(count)</b></i>.",
    LT_E_Platform_ENV_NODE_DISK_MIN_LIMIT       : "The minimum allowed disk size is <b>%(USER_QUOTA_NODE_DISK_MIN_LIMIT)</b>.",
    LT_E_Platform_ENV_NODE_DISK_MAX_LIMIT       : "The maximum available disk size per server is <b>%(USER_QUOTA_NODE_DISK_MAX_LIMIT)</b>. [TEXT_INCREASE_LIMITS/]",
    LT_E_Platform_ENV_STORAGE_NODE_DISK_MAX_LIMIT : "The maximum available disk size per Storage server is <b>%(USER_QUOTA_STORAGE_NODE_DISK_MAX_LIMIT)</b>. [TEXT_INCREASE_LIMITS/]",

    LT_Window_Title                             : "%(HOSTER_NAME) Dashboard",

    LT_Error_Install_Support                    : "Please, contact support to enable this possibility.",
    LT_Error_Install_Upgrade                    : "Please, upgrade your account to enable this possibility.",
    LT_Error_Solution_Docker_Enable             : "Custom Docker containers are not enabled for your account. [TEXT_INCREASE_LIMITS/]",
    LT_Error_Vds_Int_Ip_Disabled                : "Private IP address for VPS is not enabled for your account. [TEXT_INCREASE_LIMITS/]",
    LT_EnvEndpoints_NameNoInternalIpText        : "Unavailable for nodes without private IP address",

    LT_Menu_Toolbar_Tutorial                    : "Tutorial",
    LT_Menu_Toolbar_Api_Docs					: "API",

    LT_Common_Text_Manage                       : "Manage",

    LT_Menu_CreateEnvironment                   : "New environment",
    LT_Environments_Column_Tags                 : "Tags",
    LT_Environments_Owner_HelpTip               : "Owner: %(email)",
    LT_Environments_EnvGroupsBtn_Edit_HelpTip   : "Edit Env Groups",
    LT_Environments_EnvGroupsBtn_Add_Text       : "+ Add to Env Group",

    LT_Environments_NavItem_Root                : "Env Groups",
    LT_Environments_NavItem_Region              : "Region",
    LT_Environments_NavItem_SharedEnvs          : "Shared with Me",

    LT_Common_Button_CreateNew                  : "Create New",
    // LT_Environments_NavItem_EditGroup           : "Edit",
    // LT_Environments_NavItem_RemoveGroup         : "Remove",
    LT_Environments_NavItem_CreateSubGroup      : "Add Child",
    // LT_Environments_NavItem_ManageGroups        : "Manage..."

    LT_EnvGroups_Panel_Title                    :  "Environment Groups",
    LT_EnvGroups_Dlg_Title_Add                  :  "Add Group",
    LT_EnvGroups_Dlg_Title_Edit                 :  "Edit Group: %(name)",
    LT_EnvGroups_Dlg_Field_Parent               :  "Parent Group",
    LT_EnvGroups_Dlg_Field_Parent_EmptyText     :  "Type a name for new or select the existing",
    LT_EnvGroups_Dlg_Field_Environments         :  "Environments",
    LT_EnvGroups_Dlg_Field_Groups               :  "Groups",
    LT_EnvGroups_Selector_Title                 :  "Environment Groups: %(name)",
    LT_EnvGroups_W_NestingCharacter             :  "The \"%(separator)\" character should be only used to define Env Groups nesting.",

    LT_CustomSSL_Label_UpTo                     : "till",
    LT_CustomSSL_Label_Certificates             : "Valid",

    LT_Import_Code_Mode_Json                    : "JSON",
    LT_Import_Code_Mode_Yaml                    : "YAML",
    LT_ManifestImp_TabManifest                  : "JPS",
    LT_ManifestImp_TabManifest_Editor_EmptyText : "Input your JSON or YAML code here...",

    LT_E_Platform_DOWNLOAD_COUNT_LIMIT_REACHED  : "The maximum number of concurrent downloads has been reached. Please wait until the current downloads are finished to add new ones.",
    LT_E_Platform_SERVICE_INTERNAL_ERROR        : "An internal service error has occurred. [TEXT_CONTACT_SUPPORT/]",

    LT_ManifestImp_ManifestDesc                 : "Specify JSON or YAML manifest to automatically deploy the appropriate JPS package into environment with predefined topology and configurations.<br>Use <a target='_blank' href='%(href)'>%(PLATFORM_VENDOR_NAME) JPS Collection</a> to find the ready-to-go solution you need.",


    LT_EnvAlerts_Text_Type_OOMKiller            : "Out of memory (OOM) kill occurs",
    LT_EnvAlerts_Text_Type_OOMKillerCondition   : "OOM kill",
    LT_EnvTrHistory_Field_NodeGroup             : "Node group",
    LT_EnvTrHistory_Field_ResourceType          : "Trigger",
    LT_EnvTrHistory_Condition_OOM               : "Killed",
    LT_EnvTrHistory_OOM_Condition               : "OOM kill",
    LT_EnvTrHistory_Header_ProcessName          : "Process Name",
    LT_EnvTrHistory_Header_ProcessId            : "Process ID",
    LT_EnvTrHistory_Header_ProcessNodeId        : "Node ID",
    LT_EnvTrHistory_Details_Table_Title         : "Killed processes:",
    LT_EnvTrHistory_Filters_Title               : "Filters",
    LT_EnvAlerts_Notify_Immediately             : "Immediately",
    LT_EnvTrHistory_Column_Result               : "Info",

    LT_EnvMigration_TargetRegion_Validation     :  "Selected region is not available for migration",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.0.5
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Task_Name_117                            : "Switching engine for %(name) node(s) in %(env)",
    LT_ManifestImp_TabURL_UntrustedSource       : "Please ensure the manifest source is trusted to avoid malefactors impact",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.0.6
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvWizard_Tip_ChangeVersion              : "Change version",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.1
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvGroups_Dlg_Text_EmptyList             : "No items to display. To create a new group, type name for it and press Enter.",

    // actions: ACTION_SHOW_ENV_WIZARD, ACTION_SHOW_COLLABORATION_PANEL, ACTION_SHOW_MARKETPLACE
    LT_Environments_EmptyText                   : "<p>Let's get started!</p>[ACTION_SHOW_ENV_WIZARD]Create New Environment[/ACTION_SHOW_ENV_WIZARD] [ACTION_SHOW_COLLABORATION_PANEL]Collaborate on<br> Shared Environment[/ACTION_SHOW_COLLABORATION_PANEL] [ACTION_SHOW_MARKETPLACE]Deploy Solution<br> from Marketplace[/ACTION_SHOW_MARKETPLACE]",
    // actions: ACTION_SHOW_ENV_WIZARD, ACTION_ATTACH_ENVS_TO_GROUP
    LT_Environments_EnvGroup_EmptyText          : "<p>Start using this group now!</p> [ACTION_SHOW_ENV_WIZARD]Create New Environment[/ACTION_SHOW_ENV_WIZARD] [ACTION_ATTACH_ENVS_TO_GROUP]Add Environment<br> to This Group[/ACTION_ATTACH_ENVS_TO_GROUP] [ACTION_SHOW_MARKETPLACE]Deploy Solution<br> from Marketplace[/ACTION_SHOW_MARKETPLACE]",

    LT_BillingHistory_ExportToFile              : "Download CSV",
    LT_ErrorBillingHistory_ExportToFile         : "An error occurred while trying to download the file",
    LT_BillingHistory_IntervalNotValid          : "This interval can be used only for %(value) period",

    LT_Common_Text_Interval_Days                : "days",
    LT_Common_Text_Interval_Weeks               : "weeks",
    LT_Common_Text_Interval_Year                : "year",
    LT_Common_Text_Interval_Years               : "years",

    LT_Config_Tab_Title                         : "%(sType) : config",
    LT_Log_Tab_Title							: "%(sType) : log",
    LT_Statistics_Tab_Title                     : "%(sType) : statistics",
    LT_RedeployContainer_Logs_Tab_Title         : "%(sType) : redeploy",

    LT_Settings_Tab_Title                       : "Settings",
    LT_Tasks_Tab_Title                         	: "Tasks",


    LT_Menu_DeployToEnvironment_NoRights        : "Deployment to this environment is not available due to the limited collaboration permissions.",

    LT_AppStore_Error_ManifestIsCorrupted       : "An error occurred while trying to retrieve application data. Please ensure you've chosen the proper JPS file",

    LT_DockerSettings_Ports_HelpTip_Top         : "Ports %(ports) are opened by default. <br><br>Use [link-endpoints]Endpoints[/link-endpoints] to open any other port outside via Shared Load Balancer or use [link-docs-pubip]Public IP[/link-docs-pubip] to have direct access to all ports of your container." ,
    LT_DockerSettings_Ports_SchemeCaption       : "Environment Network",
    LT_DockerSettings_Ports_SchemeLegend_1      : "Open port by default",
    LT_DockerSettings_Ports_SchemeLegend_2      : "<span class='text-box'>Endpoint</span>&nbsp;randomly assigned port",
    LT_DockerSettings_Ports_SchemeLegend_3      : "Dead (closed) port by default",
    LT_DockerSettings_Ports_SchemeLegend_4      : "Shared Load Balancer",
    LT_DockerSettings_Ports_HelpTip_Bottom      : "Read [link-docs]documentation[/link-docs] to find out more details on managing Docker container ports.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.2
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Task_Name_122                            : "Setting variables for %(name) node(s) in %(env)",
    LT_Menu_Toolbar_ConvertAccount              : "Upgrade account",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.3
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Log_Button_Download                      : "Download",
    LT_Log_Archive_CannotBeRead                 : "Archive files cannot be viewed. To see such file content, either download or open it via SSH.",
    LT_Deploy_VCS_Panel_Title                   : "Git / SVN",
    LT_Deploy_VCS_Panel_Archive                 : "Archive",
    LT_Deploy_VCS_Column_Name                   : "Name",
    LT_Deploy_VCS_Column_Url                    : "URL",
    LT_Deploy_VCS_Btn_Add_Project               : "Add Project",
    LT_Title_Git                                : "Git",
    LT_Title_SVN                                : "SVN",
    LT_Deploy_VCS_SSH_Empty_Text                : "Select...",
    LT_Deploy_VCS_Dlg_Deploy_Title              : "Deploy %(name)",
    LT_Common_Button_Deploy                     : "Deploy",
    LT_Common_Button_AddDeploy                  : "Add and Deploy",
    LT_AddBuild_Option_Existing                 : "Use the existing node",
    LT_AddBuild_Option_New                      : "Add a new node",
    LT_AddBuild_Option_New_Tip                  : "A new node will be added to the selected environment",
    LT_Deploy_VCS_Add_Dlg_Success               : "The project %(name) was successfully added.<br> Now you can deploy it",
    LT_Deploy_Grid_Empty_Text                   : "There are no projects to display",
    LT_Common_Button_BuildDeploy                : "Build and Deploy",
    LT_Deploy_Require_Maven_Text                : "A Maven node is required to build & deploy your project",
    LT_Deploy_Maven_AutoAdd_Text                : "A Maven node is required to build & deploy your project. It will be automatically added to the selected environment.",
    LT_Deploy_Title                             : "Deployment Manager",
    LT_Deploy_VCS_Title_AddProject              : "Add Git / SVN Project",
    LT_Deploy_VCS_Title_EditProject             : "Edit Git / SVN Project",
    LT_Deploy_VCS_Title_DeployProject           : "Deploy from Git / SVN",
    LT_Deploy_Archive_Title_DeployProject       : "Deploy archive",
    LT_Deploy_URL_Title_DeployProject           : "Deploy from URL",
    LT_Deploy_VCS_Post_Deploy_Hook              : "Post-Deploy Hook",
    LT_Deploy_VCS_Post_Deploy_Hook_Empty_Text   : "Enter your script",
    LT_Deploy_VCS_Confirm_Delete                : "Delete <b>%(name)</b> project?",
    LT_Deploy_VCS_Remove_Project_Error          : "An error occurred while trying to remove the project",
    LT_Deploy_VCS_Add_Project_Error             : "An error occurred while trying to add the project",
    LT_Deploy_VCS_Edit_Project_Error            : "An error occurred while trying to edit the project",
    LT_Deploy_VCS_Deploy_Project_Error          : "An error occurred while trying to deploy the project",
    LT_Task_Name_128                            : "Deploying %(projectName) project to %(env)",
    LT_Process_Label_Removing_Item              : "Removing...",
    LT_Deploy_Tip_AddProject                    : "Add a project",
    LT_Deploy_Tip_AddDeployProject              : "Add and Deploy a project",
    LT_Deploy_Tip_ApplyDeployProject            : "Apply changes and Deploy the project",
    LT_Deploy_Tip_ApplyProject                  : "Apply changed project settings",
    LT_Common_Button_Back                       : "Back",
    LT_Environments_Label_Deployments           : "Deployments",
    LT_Common_Title_Deploy                      : "Deploy",
    LT_Common_Text_Project						: "Project",
    LT_Common_Combo_SelectOrAdd_Text            : "Select existing or add a new one",
    LT_Deploy_AddNewProject_Rec                 : "Add new project",
    LT_Common_Label_SelectOrTypeNew             : "Select existing or type a new one",
    LT_UpdateProject_Interval                   : "Check and auto-deploy updates every",

    // LT_Common_Text_Action_Unavailable           : "This action is unavailable at the moment. Please wait until the current actions are finished.",

    LT_Pricing_Column_UnitHourPrice             : "%(sUnit) / hour",
    LT_Pricing_Column_UnitMonthPrice            : "%(sUnit) / month*",

    LT_Quotas_Text_ExternalIP                   : "Public IPv4 addresses.",
    LT_Quotas_Text_ExternalIPv6                 : "Public IPv6 addresses.",

    LT_Quotas_Text_ExtIPv4MaxCount              : "Maximum number of Public IPv4 addresses per environment.",
    LT_Quotas_Text_ExtIPv6MaxCount              : "Maximum number of Public IPv6 addresses per environment.",

    LT_Quotas_Text_ExtIPv4MaxCountPerNode       : "Maximum number of Public IPv4 addresses per node.",
    LT_Quotas_Text_ExtIPv6MaxCountPerNode       : "Maximum number of Public IPv6 addresses per node.",

    LT_OptionsCost_Text_IPv6_Desc               : "This is an external IPv6 address which is directly accessible from outside of the cluster. The charge is taken hourly.",

    LT_Common_Text_ExtIP                        : "Public IP",
    LT_Common_Text_ExtIPv4                      : "Public IPv4",
    LT_Common_Text_ExtIPv6                      : "Public IPv6",

    LT_EnvNodeSettings_Label_ExtIPv4            : "Number of attached Public IPv4 addresses",
    LT_EnvNodeSettings_Label_ExtIPv6            : "Number of attached Public IPv6 addresses",

    LT_Menu_AttachDetachIP                      : "Attach/Detach IP(s)",
    LT_Menu_DetachIP                            : "Detach IP",
    LT_Menu_DetachPrimaryIPRestricted           : "Primary IP should be detached last",

    LT_Confirm_DetachIP                         : "Detach <b>%(ip)</b> IP?",
    LT_Confirm_DetachIPs                        : "Detach all Public IPs from current node?",

    LT_Common_Title_NodeSettings    		    : "Node %(nodeId) Settings",

    LT_Common_Label_Copy2Clipboard              : "Copy to clipboard",
    LT_Common_Label_Copied                      : "Copied!",
    LT_Common_Label_Copy4OldBrowser             : "%(LT_ConfigManager_OldBrowser_Info)",

    LT_Task_Name_31	                            : "Attaching Public IP for %(name) to %(env)",
    LT_Task_Name_52	                            : "Detaching %(ip) Public IP from %(name) in %(env)",
    LT_Task_Name_127                            : "Setting the amount of Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] addresses to %(count) for %(name) node with ID %(nodeid) in %(env)",

    LT_Info_ExtIPCountUpdated                   : "Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] amount for <b>%(node)</b> node has been successfully updated.",
    LT_Info_ExtIPDetached                       : "Public IP %(ip) has been successfully detached from <b>%(node)</b> node.",
    LT_Info_ExtIPsDetached                      : "Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] has been successfully detached from <b>%(node)</b> node.",

    LT_Action_DetachIP                          : "detach IP %(ip) from %(node) node",
    LT_Action_DetachIPs                         : "detach IPs from %(node) node",
    LT_Action_SetExtIPCount                     : "update the amount of Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] for %(node) node",

    LT_AddonWarning_ConvertAcc                  : "Public IP addresses are available for billing users only. Please upgrade your account to use Public IP.",
    LT_AddonWarning_ContactSupport              : "You are not allowed to use Public IP address(es) due to your account restrictions. Please contact our support team to remove this limitation.",
    LT_AddonWarning_externalip                  : "Public IP will be added to your environment automatically.",

    LT_E_Platform_ENV_EXT_IP_REQUIRED           : "Public IP is required for the <b>%(node)</b> node.",

    LT_Common_Text_ExtIPNotAllowed              : "Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] addresses usage is  not allowed for your account.",
    LT_E_Platform_ENV_EXT_IPV4_NOT_ALLOWED      : "[TPL]LT_Common_Text_ExtIPNotAllowed, {type: 'EXT_IP_TYPE_V4'}[/TPL]",
    LT_E_Platform_ENV_EXT_IPV6_NOT_ALLOWED      : "[TPL]LT_Common_Text_ExtIPNotAllowed, {type: 'EXT_IP_TYPE_V6'}[/TPL]",

    LT_Common_Text_MaxExtIPPerEnv               : "The maximum amount of Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] addresses per environment is <b>%(maxcount)</b>. [TEXT_INCREASE_LIMITS/].",
    LT_E_Platform_ENV_EXT_IPV4_MAXCOUNT         : "[TPL]LT_Common_Text_MaxExtIPPerEnv, {type: 'EXT_IP_TYPE_V4', maxcount: 'QUOTA_ENV_EXT_IPV4_MAXCOUNT'}[/TPL]",
    LT_E_Platform_ENV_EXT_IPV6_MAXCOUNT         : "[TPL]LT_Common_Text_MaxExtIPPerEnv, {type: 'EXT_IP_TYPE_V6', maxcount: 'QUOTA_ENV_EXT_IPV6_MAXCOUNT'}[/TPL]",

    LT_Common_Text_MaxExtIPPerNode              : "The maximum amount of Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] addresses per server is <b>%(maxcount)</b>. [TEXT_INCREASE_LIMITS/].",
    LT_E_Platform_ENV_NODE_EXT_IPV4_MAXCOUNT    : "[TPL]LT_Common_Text_MaxExtIPPerNode, {type: 'EXT_IP_TYPE_V4', maxcount: 'QUOTA_ENV_NODE_EXT_IPV4_MAXCOUNT'}[/TPL]",
    LT_E_Platform_ENV_NODE_EXT_IPV6_MAXCOUNT    : "[TPL]LT_Common_Text_MaxExtIPPerNode, {type: 'EXT_IP_TYPE_V6', maxcount: 'QUOTA_ENV_NODE_EXT_IPV6_MAXCOUNT'}[/TPL]",

    LT_EnvMigration_Error_Title                 : "Environment %(envName) migration",

    TEXT_ENV_NODE_IP_CONTACT_SUPPORT            : "New IP addresses will be available soon. Please try again later or [ACTION_HOSTER_SUPPORT]contact support[/ACTION_HOSTER_SUPPORT].",
    TEXT_ENV_MIGRATION_CONTACT_SUPPORT          : "Please select another region or [ACTION_HOSTER_SUPPORT]contact support[/ACTION_HOSTER_SUPPORT].",

    LT_Common_Text_NoFreeIntIP                  : "There are no free IP addresses in the <b>%(region)</b> region at the moment.",
    LT_E_Platform_ENV_NO_FREE_INTERNAL_IP       : "%(LT_Common_Text_NoFreeIntIP) [TEXT_ENV_NODE_IP_CONTACT_SUPPORT/]",
    LT_E_EnvMigration_ENV_NO_FREE_INTERNAL_IP   : "%(LT_Common_Text_NoFreeIntIP) [TEXT_ENV_MIGRATION_CONTACT_SUPPORT/]",

    LT_Common_Text_NoFreeExtIP                  : "There are no free Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] in the <b>%(region)</b> region at the moment.",
    LT_E_Platform_ENV_NO_FREE_EXT_IPV4          : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V4'}[/TPL] [TEXT_ENV_NODE_IP_CONTACT_SUPPORT/]",
    LT_E_Platform_ENV_NO_FREE_EXT_IPV6          : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V6'}[/TPL] [TEXT_ENV_NODE_IP_CONTACT_SUPPORT/]",
    LT_E_EnvMigration_ENV_NO_FREE_EXT_IPV4      : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V4'}[/TPL] [TEXT_ENV_MIGRATION_CONTACT_SUPPORT/]",
    LT_E_EnvMigration_ENV_NO_FREE_EXT_IPV6      : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V6'}[/TPL] [TEXT_ENV_MIGRATION_CONTACT_SUPPORT/]",

    LT_E_Platform_ENV_EXT_IP_PRIMARY_DETACH_RESTRICTED : "Primary IP should be detached last",

    LT_EnvProgress_Clone_Title_Failed			: "Cloning of the <b>%(name)</b> environment has failed.",

    LT_DockerSettings_EnvVars_HelpTip           : "Read [URL_DOCS_DOCKER_ENV_VARS]documentation[/URL_DOCS_DOCKER_ENV_VARS] to find out more details on Docker container environment variables.",
    LT_DockerSettings_Links_HelpTip             : "Read [URL_DOCS_DOCKER_LINKS]documentation[/URL_DOCS_DOCKER_LINKS] to find out more details on Docker containers' linking.",
    LT_DockerSettings_Vols_HelpTip              : "Read [URL_DOCS_DOCKER_VOLUMES]documentation[/URL_DOCS_DOCKER_VOLUMES] to find out more details on Docker container volumes.",
    LT_DockerSettings_RunArgs_HelpTip           : "Read [URL_DOCS_DOCKER_RUN_ARGS]documentation[/URL_DOCS_DOCKER_RUN_ARGS] to find out more details on Docker container run options.",

    LT_TutorSlider_Text_PrAdvantages            : "Enjoy Pricing Advantages",

    LT_TutorSlider_Title_Benefits    	   	    : "The Benefits of %(PLATFORM_VENDOR_NAME) PaaS",
    LT_TutorSlider_Title_SaveMoney    	   	    : "Tune Your Resource Consumption",
    LT_TutorSlider_Title_Build    	   	        : "Build Your Application Topology",

    LT_TutorSlider_Build_Left_Container 	   	: "Container",
    LT_TutorSlider_Build_Left_Layer 	   	    : "Layer",
    LT_TutorSlider_Build_Left_Environment 	   	: "Environment",
    LT_TutorSlider_Build_Left_Application 	   	: "Application",

    LT_TutorSlider_Build_Right_Balancer 	   	: "Balancer (BL)",
    LT_TutorSlider_Build_Right_Compute 	   	    : "Compute (CP)",
    LT_TutorSlider_Build_Right_Database 	   	: "Database (DB)",
    LT_TutorSlider_Build_Right_Storage 	   	    : "Storage (ST)",

    LT_E_Platform_ENV_EXT_DOMAIN_NOT_ALLOWED    : "%(LT_ExtDomains_Error_Quota)",

    LT_Menu_Billing_Btn_Billing                 : "Billing",

    LT_EnvWizard_PricingDetails_RestRes         : "[link-storage]Disk Space[/link-storage] and [link-traffic]Traffic[/link-traffic] are charged based on consumption.",

    LT_Task_Name_133                            : "Swapping Public IPv4 between %(name) node with ID %(nodeid) in %(env) and %(targetNodeid)",

    LT_Pricing_Text_MonthHours                  : "* Based on a %(count)-hour month.",

    LT_Warning_Install_Note                     : "<b>Note:</b> The environment will be created with less resources than intended due to your account limits, thus its proper operability cannot be guaranteed.",
    
    LT_ConfigManager_FileAlreadyExists          : "The path <b>%(path)</b> already exists in the %(env) environment. The directory structure will be updated.",

    LT_Config_Text_LoadingError_402             : "The binary file cannot be viewed. To see such file content, either download or open it via SSH.",

    LT_Process_Label_AttachingIPs               : "Attaching IPs...",
    LT_Process_Label_DetachingIPs               : "Detaching IPs...",
    LT_Process_Label_UpdatingIPs                : "Updating the amount...",

    LT_Task_Name_118_NodeGroup	                : "Restarting node(s) %(name) of %(env)",
    LT_Task_Name_118_NodeId	                    : "Restarting %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_119_NodeGroup	                : "Resetting password for %(name) of %(env)",
    LT_Task_Name_119_NodeId	                    : "Resetting password for %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_120_NodeGroup	                : "Resetting password for %(name) of %(env)",
    LT_Task_Name_120_NodeId	                    : "Resetting password for %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_121_NodeGroup	                : "Restarting node(s) %(name) of %(env)",
    LT_Task_Name_121_NodeId	                    : "Restarting %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_123_NodeGroup                  : "Adding variables for %(name) node(s) in %(env)",
    LT_Task_Name_123_NodeId                     : "Adding variables for %(name) ID %(nodeid) node in %(env)",
    LT_Task_Name_124_NodeGroup                  : "Removing variables from %(name) node(s) in %(env)",
    LT_Task_Name_124_NodeId                     : "Removing variables from %(name) ID %(nodeid) node in %(env)",

    LT_Task_Name_129                            : "Creating scheduled account task using the %(script) script",
    LT_Task_Name_130                            : "Creating scheduled task for %(env) environment using the %(script) script",
    LT_Task_Name_131                            : "Removing scheduled task(s)",
    LT_Task_Name_132                            : "Editing scheduled task(s)",

    LT_Process_Label_WaitingAnotherProcess      : "Waiting for another process to complete...",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // LT_EmptyItem field is used for internal system purposes. Please do not edit it and leave as is.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EmptyItem                                : ""
};






/*!

 * Ext JS Library 3.3.1

 * Copyright(c) 2006-2010 Sencha Inc.

 * licensing@sencha.com

 * http://www.sencha.com/license

 */

/**

 * List compiled by mystix on the extjs.com forums.

 * Thank you Mystix!

 *

 * English Translations

 * updated to 2.2 by Condor (8 Aug 2008)

 */



Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Carregando...</div>';



if(Ext.data.Types){

    Ext.data.Types.stripRe = /[\$,%]/g;

}



if(Ext.DataView){

    Ext.DataView.prototype.emptyText = "";

}



if(Ext.grid.GridPanel){

    Ext.grid.GridPanel.prototype.ddText = "{0} selected row{1}";

}



if(Ext.LoadMask){

    Ext.LoadMask.prototype.msg = "Carregando...";

}



Date.monthNames = [

    "Janeiro",

    "Fevereiro",

    "Março",

    "Abril",

    "Maio",

    "Junho",

    "Julho",

    "Agosto",

    "Setembro",

    "Outubro",

    "Novembro",

    "Dezembro"

];



Date.getShortMonthName = function (month) {

    var sMonthName = Date.monthNames[month];



    if (sMonthName) {

        return sMonthName.substring(0, 3);

    }

};



Date.monthNumbers = {

    Jan : 0,

    Fev : 1,

    Mar : 2,

    Abr : 3,

    Mai : 4,

    Jun : 5,

    Jul : 6,

    Ago : 7,

    Set : 8,

    Out : 9,

    Nov : 10,

    Dez : 11

};



Date.getMonthNumber = function(name) {

    return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];

};



Date.dayNames = [

    "Domingo",

    "Segunda",

    "Terça",

    "Quarta",

    "Quinta",

    "Sexta",

    "Sabado"

];



Date.getShortDayName = function(day) {

    return Date.dayNames[day].substring(0, 3);

};



Date.parseCodes.S.s = "(?:st|nd|rd|th)";



if(Ext.MessageBox){

    Ext.MessageBox.buttonText = {

        ok     : "OK",

        cancel : "Cancelar",

        yes    : "Sim",

        no     : "Não"

    };

}



if(Ext.util.Format){

    Ext.util.Format.date = function(v, format){

        if(!v) return "";

        if(!(v instanceof Date)) v = new Date(Date.parse(v));

        return v.dateFormat(format || "m/d/Y");

    };

}



if(Ext.DatePicker){

    Ext.apply(Ext.DatePicker.prototype, {

        todayText         : "Hoje",

        minText           : "Esta data é anterior à data mínima",

        maxText           : "Esta data é posterior à data máxima",

        disabledDaysText  : "",

        disabledDatesText : "",

        monthNames        : Date.monthNames,

        dayNames          : Date.dayNames,

        nextText          : 'Próximo mês (Control+Right)',

        prevText          : 'Mês anterior (Control+Left)',

        monthYearText     : 'Escolha um mês (Control+Up/Down para alterar anos)',

        todayTip          : "{0} (Spacebar)",

        format            : "m/d/y",

        okText            : "&#160;OK&#160;",

        cancelText        : "Cancelar",

        startDay          : 0

    });

}



if(Ext.PagingToolbar){

    Ext.apply(Ext.PagingToolbar.prototype, {

        beforePageText : "Página",

        afterPageText  : "de {0}",

        firstText      : "Primeira página",

        prevText       : "Página anterior",

        nextText       : "Próxima página",

        lastText       : "Última página",

        refreshText    : "Atualizar",

        displayMsg     : "Exibindo {0} - {1} de {2}",

        emptyMsg       : 'Sem dados para mostrar'

    });

}



if(Ext.form.BasicForm){

    Ext.form.BasicForm.prototype.waitTitle = "Por favor, espere..."

}



if(Ext.form.Field){

    Ext.form.Field.prototype.invalidText = "O valor deste campo é inválido";

}



if(Ext.form.TextField){

    Ext.apply(Ext.form.TextField.prototype, {

        minLengthText : "O comprimento mínimo para este campo é {0}",

        maxLengthText : "O comprimento máximo para este campo está {0}",

        blankText     : "Este campo é obrigatório",

        regexText     : "",

        emptyText     : null

    });

}



if(Ext.form.NumberField){

    Ext.apply(Ext.form.NumberField.prototype, {

        decimalSeparator : ".",

        decimalPrecision : 2,

        minText : "O valor mínimo para este campo é {0}",

        maxText : "O valor máximo para este campo é {0}",

        nanText : "{0} não é um número válido"

    });

}



if(Ext.form.DateField){

    Ext.apply(Ext.form.DateField.prototype, {

        disabledDaysText  : "Desativado",

        disabledDatesText : "Desativado",

        minText           : "A data neste campo deve ser posterior a {0}",

        maxText           : "A data neste campo deve ser anterior a {0}",

        invalidText       : "{0} não é uma data válida - deve estar no formato {1}",

        format            : "m/d/y",

        altFormats        : "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d",

        startDay          : 0

    });

}



if(Ext.form.ComboBox){

    Ext.apply(Ext.form.ComboBox.prototype, {

        loadingText       : "Carregando...",

        valueNotFoundText : undefined

    });

}



if(Ext.form.VTypes){

    Ext.apply(Ext.form.VTypes, {

        emailText    : 'Este campo deve ser um endereço de e-mail no formato "usuario@examplo.com"',

        urlText      : 'Este campo deve ser um URL no formato "http:/'+'/www.examplo.com"',

        alphaText    : 'Este campo deve conter apenas letras e _',

        alphanumText : 'Este campo deve conter apenas letras, números e _'

    });

}



if(Ext.form.HtmlEditor){

    Ext.apply(Ext.form.HtmlEditor.prototype, {

        createLinkText : 'Digite o URL para o link:',

        buttonTips : {

            bold : {

                title: 'Negrito (Ctrl+B)',

                text: 'Colocar o texto selecionado em negrito.',

                cls: 'x-html-editor-tip'

            },

            italic : {

                title: 'Itálico (Ctrl+I)',

                text: 'Colocar o texto selecionado em itálico.',

                cls: 'x-html-editor-tip'

            },

            underline : {

                title: 'Sublinhado (Ctrl+U)',

                text: 'Sublinhar o texto selecionado.',

                cls: 'x-html-editor-tip'

            },

            increasefontsize : {

                title: 'Aumentar texto',

                text: 'Aumentar o tamanho da fonte.',

                cls: 'x-html-editor-tip'

            },

            decreasefontsize : {

                title: 'Diminuir Texto',

                text: 'Diminuir o tamanho da fonte.',

                cls: 'x-html-editor-tip'

            },

            backcolor : {

                title: 'Destacar Cor do texto',

                text: 'Alterar a cor do fundo do texto selecionado.',

                cls: 'x-html-editor-tip'

            },

            forecolor : {

                title: 'Cor da fonte',

                text: 'Alterar a cor do texto selecionado.',

                cls: 'x-html-editor-tip'

            },

            justifyleft : {

                title: 'Alinhar texto à esquerda',

                text: 'Alinhar o texto à esquerda.',

                cls: 'x-html-editor-tip'

            },

            justifycenter : {

                title: 'Centralizar texto',

                text: 'Centralizar o texto no editor.',

                cls: 'x-html-editor-tip'

            },

            justifyright : {

                title: 'Alinhar o texto à direita',

                text: 'Alinhar o texto à direita.',

                cls: 'x-html-editor-tip'

            },

            insertunorderedlist : {

                title: 'Lista de marcadores',

                text: 'Criar uma lista com marcadores.',

                cls: 'x-html-editor-tip'

            },

            insertorderedlist : {

                title: 'Lista numerada',

                text: 'Criar uma lista numerada.',

                cls: 'x-html-editor-tip'

            },

            createlink : {

                title: 'Hyperlink',

                text: 'Colocar um hiperlink no texto selecionado.',

                cls: 'x-html-editor-tip'

            },

            sourceedit : {

                title: 'Editar fonte',

                text: 'Alternar para o modo de edição de origem.',

                cls: 'x-html-editor-tip'

            }

        }

    });

}



if(Ext.grid.GridView){

    Ext.apply(Ext.grid.GridView.prototype, {

        sortAscText  : "Ordenação ascendente",

        sortDescText : "Ordenação descendente",

        columnsText  : "Colunas"

    });

}



if(Ext.grid.GroupingView){

    Ext.apply(Ext.grid.GroupingView.prototype, {

        emptyGroupText : '(None)',

        groupByText    : 'Grupo por este campo',

        showGroupsText : 'Mostrar em grupos'

    });

}



if(Ext.grid.PropertyColumnModel){

    Ext.apply(Ext.grid.PropertyColumnModel.prototype, {

        nameText   : "Nome",

        valueText  : "Valor",

        dateFormat : "m/j/Y",

        trueText: "verdadeiro",

        falseText: "falso"

    });

}



if(Ext.grid.BooleanColumn){

    Ext.apply(Ext.grid.BooleanColumn.prototype, {

        trueText  : "verdadeiro",

        falseText : "falso",

        undefinedText: '&#160;'

    });

}



if(Ext.grid.NumberColumn){

    Ext.apply(Ext.grid.NumberColumn.prototype, {

        format : '0,000.00'

    });

}



if(Ext.grid.DateColumn){

    Ext.apply(Ext.grid.DateColumn.prototype, {

        format : 'm/d/Y'

    });

}



if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){

    Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {

        splitTip            : "Arraste para redimensionar.",

        collapsibleSplitTip : "Arraste para redimensionar. Dê um duplo clique para esconder."

    });

}



if(Ext.form.TimeField){

    Ext.apply(Ext.form.TimeField.prototype, {

        minText : "O horário neste campo deve ser igual a ou depois de {0}",

        maxText : "O horário nesse campo deve ser igual ou antes de {0}",

        invalidText : "{0} não é uma hora válida",

        format : "g:i A",

        altFormats : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"

    });

}



if(Ext.form.CheckboxGroup){

    Ext.apply(Ext.form.CheckboxGroup.prototype, {

        blankText : "Você deve selecionar pelo menos um item neste grupo"

    });

}



if(Ext.form.RadioGroup){

    Ext.apply(Ext.form.RadioGroup.prototype, {

        blankText : "Você deve selecionar um item nesse grupo"

    });

}


