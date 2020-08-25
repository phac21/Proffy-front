const proffys = [
  { name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "61991815981", 
    bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma   das minhas explosões.", 
    subject: "Química",
     cost: "R$ 20,00", 
     weekday: [0],
     time_from: [720],
     time_too: [1220],
  },
  { name: "Pedro Henrique",
    avatar: "https://avatars0.githubusercontent.com/u/45366019?s=460&u=39288558a39db70eb0d8fdad37702108137cee30&v=4", 
    whatsapp: "61991007198", 
    bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma   das minhas explosões.", 
    subject: "Química",
     cost: "R$ 20,00", 
     weekday: [0],
     time_from: [720],
     time_too: [1220],
  }
]
const subjects = [
  
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Sexta-feira",
  "Sábado"
]

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1
  return subjects[position]
}

function pageLanding(req, res) {
  return res.render("index.html")
}
function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res) {
  const data = req.query

  //confere se há dados (data)
  const isNotEmpty = Object.keys(data).length > 0
  
  if (isNotEmpty) {
    data.subject = getSubject(data.subject)
    //adicionar data a lista proffys
    proffys.push(data)

    return res.redirect("/study")
  }
  return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// configurando arquivos estáticos (css, imagens, scripts)
server.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)

