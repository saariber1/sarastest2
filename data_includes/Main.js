

//Sequence("Trial", "start",randomize("item"), SendResults(), "final") //esse commando estabelesse a sequencia em que as partes do experimento devem aparecer
// o pcibex não aceita acentos
// para usar acentos deve-se usar codificação html

PennController.ResetPrefix(null);// Initiates PennController
PennController.DebugOff(); //Retire esse comando na fase de teste do script para poder visualizar erros de digitação e codificação

Sequence("Instruction", "Screen1", "Screen2", "Training", "Screen3", "Trial", randomize("item"), SendResults(), "final") 

newTrial("Instruction",
    
    defaultText
        .print()
    ,
    newText("<p>Bem-vindo/Bem-vinda!</p>")
     .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Este experimento consiste em ler algumas senten&ccedil;as e assimil&aacute-las a imagens.")
     .css("font-size","1.2em")
    .print()
    ,
    newText("<p><strong>ATEN&Ccedil;&Atilde;O</strong>: Este experimento s&oacute; funciona corretamente se realizado em um <strong>computador</strong>.</p>")
    .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Antes de prosseguir, preencha os dados pessoais a seguir:<p>")
     .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo.</p>")
     .css("font-size","1.2em")
    .print()
    ,
    newTextInput("Nome")
    .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Por favor, escreva seu E-MAIL na caixa abaixo.</p>")
     .css("font-size","1.2em")
    .print()
    ,
    newTextInput("Email")
    .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Escreva sua IDADE na caixa abaixo.</p>")
    .css("font-size","1.2em")
    .print()
    ,
    newTextInput("Idade")
    .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Agora selecione sua ESCOLARIDADE na caixa abaixo e aperte &quot;Iniciar&quot; para come&ccedil;ar!</p>")
    .css("font-size","1.2em")
    ,
    newDropDown("Escolaridade")
    .settings.add( "Ensino M&eacute;dio Completo" , "Ensino Superior Incompleto" , "Ensino Superior em Curso" , "Ensino Superior Completo", "Especializa&ccedil;&atilde;o", "Mestrado" , "Doutorado") 
    .print()
    ,
    newButton("Iniciar")
    .css("font-size","1.2em")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("Nome") )
    ,
    newVar("EMAIL")
        .global()
        .set( getTextInput("Email") )
    ,
    newVar("AGE")
        .global()
        .set( getTextInput("Idade") )
    ,   
    newVar("SCHOOL")
        .global()
        .set( getDropDown("Escolaridade") )
    
)
    .log( "ID" , getVar("ID") )
    .log( "EMAIL" , getVar("EMAIL") )
    .log( "AGE" , getVar("AGE") )
    .log( "SCHOOL" , getVar("SCHOOL") );
// os comandos de “log”devem estar fora dos parênteses do “newTrial” e são necessários para registrar as respostas do participante nos resultados.  

newTrial("Screen1",
    defaultText
        .css("font-size","1.2em")
        .center()
        .print(),
        
    newText("Termo de Consentimento Livre e Esclarecido </p>"),
    
    newText("Esta pesquisa est&aacute sendo desenvolvida pela aluna do curso de Doutorado em Lingu&iacutestica da UFRJ Sara Ribeiro, sob a orienta&ccedil&atildeo do professor Marcus Maia.</p> A finalidade deste trabalho &eacute contribuir com a ci&ecircncia.</p> Solicitamos sua autoriza&ccedil&atildeo para utilizar seus dados em eventos da &aacuterea e publica&ccedil&otildees posteriores.</p> Basta voc&ecirc escrever EU CONCORDO na caixa de texto abaixo. "),
    
    newTextInput("tcle")
        .css("font-size","1.2em")
        .center()
        .print()
        .log(),
        
    newButton("Start")
        .css("font-size","1.2em")
        .center()
        .print()
        .wait()
)

newTrial("Screen2",
    defaultText
        .css("font-size","1.2em")
        .print()
        .log,
    
    newText("<p>Neste experimento, voc&ecirc; ler&aacute; uma sequ&ecirc;ncia de trechos que formam uma senten&ccedil;a.</p>")
    ,
    newText ("<p>Antes de começar cada frase, voc&ecirc; ver&aacute sempre um sinal de <strong>+</strong> indicando que uma nova frase se iniciar&aacute.</p>")
    ,
    newText("<p>Para ler cada trecho da frase, voc&ecirc; deve apertar a tecla <strong>ESPA&Ccedil;O</strong> no TECLADO do seu computador.</p>")
    ,
    newText("<p>Leia no seu ritmo natural de leitura.</p>")
    ,
    newText("<p>Ap&oacute;s ler a frase, voc&ecirc; dever&aacute decidir se os eventos nas images est&atilde;o ordenados conforme sua interpreta&ccedil;&atilde;o da frase.</p>") 
    ,
    newText("<p>Se achar que <strong>SIM</strong>, aperte a tecla <strong>S</strong> ou se achar que <strong>N&Atilde;O</strong>, aperte a tecla  <strong>N</strong> do seu TECLADO.</p>")
    ,
    newText("<p>Antes de come&ccedil;armos o experimento, vamos fazer um treinamento para que voc&ecirc; se familiarize com a tarefa.</p>")
    ,
    newText("<p>Clique no bot&atilde;o abaixo para iniciar o treinamento.</p>")
    ,
     
    newButton("Iniciar")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
)

Template("Training.csv",
    variable => newTrial( "Training",

        newText("pleasewait", "+")
            .css("font-size","3em")
            .print(),
            
        newTimer("wait", 1000)
            .start()
            .wait(),
           
        getText("pleasewait")
            .remove(),

        newController("DashedSentence", {s: variable.Sentence} )
            .css("font-size","1.4em")
            .print()
            .log()
            .wait()
            .remove(),

        newImage("id1",variable.Image1)
            .size(400,400),
        newImage("id2",variable.Image2)
            .size(400,400),

        newText("idSim",  "")
            .css("font-size","1.4em"),
        newText("idNao", "")
            .css("font-size","1.4em"),

        newCanvas(1200, 600)
            .add(190, 0, getImage("id1"))
            .add(610, 0, getImage("id2"))
            .print()

            .add(550, 420, getText("idSim"))
            .add(600, 420, getText("idNao"))
            .print(),
        newSelector()
            .add( getText("idSim") , getText("idNao") )
            .keys("S", "N")
            .log()
            .wait()
    )
    .log("Group", variable.Group)
    .log("Item", variable.Item)
    )
    newTrial("Screen3",
    defaultText
    .css("font-size","1.2em")
    .print()
    ,
       newText("<p>Agora que voc&ecirc j&aacute; praticou vamos iniciar o experimento. </p>")
        ,
        newText("<p>Clique em &quot;Iniciar&quot; quando estiver pronto para come&ccedil;ar.</p>")
        ,
        newButton("Iniciar")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            )

Template("Version1.csv",
    variable => newTrial( "Trial",

        newText("pleasewait", "+")
            .css("font-size","3em")
            .print(),
        newTimer("wait", 1000)
            .start()
            .wait(),
       
        getText("pleasewait")
            .remove(),

        newController("DashedSentence", {s: variable.Sentence} )
            .css("font-size","1.4em")
            .print()
            .log()
            .wait()
            .remove(),

        newImage("id1",variable.Image1)
            .size(400,400),
        newImage("id2",variable.Image2)
            .size(400,400),

        newText("idSim",  "")
            .css("font-size","1.4em"),
        newText("idNao", "")
            .css("font-size","1.4em"),

        newCanvas(1200, 600)
            .add(190, 0, getImage("id1"))
            .add(610, 0, getImage("id2"))
            .print()

            .add(550, 420, getText("idSim"))
            .add(600, 420, getText("idNao"))
            .print(),
        newSelector()
            .add( getText("idSim") , getText("idNao") )
            .keys("S", "N")
            .log()
            .wait()
    )
        .log("Group", variable.Group)
        .log("Item", variable.Item)
)

// esse comando salva automaticamente as respostas do participante no fim do experimento    
PennController.SendResults
   
newTrial( "final" ,
    newText("<p> Obrigada pela participa&ccedil;&atilde;o!</p>")
        .css("font-size","1.2em")
        .print(),
    
    newText("<p> Aperte &quot;Salvar&quot; para gravar suas respostas!</p>")
        .css("font-size","1.2em")
        .print(),
        
    newButton("Salvar")
        .css("font-size","1.2em")
        .print()
        .wait()
)    
// o botão salvar pode ser substituído por uma botão de sair já que os resultados já foram salvos com o comando “SendResults”


