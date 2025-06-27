const express = require("express")
const app = express()
const port = 3000

app.use(express.static("public"))




const posts = [
    {
        titolo: "Ciambellone",
        contenuto: "Torta rotonda",
        immagine: "public/img/ciambellone.jpeg",
        tags: ["mangiare", "dolce", "ricetta"]
    },
    {
        titolo: "Cracker alla barbabietola",
        contenuto: "Cracker colorati",
        immagine: "public/img/cracker_barbabietola.jpeg",
        tags:["mangiare", "dieta", "dolcicolorati"]
    },
    {
        titolo: "Pane fritto dolce",
        contenuto: "Pane dolce",
        immagine: "public/img/pane_fritto_dolce.jpeg",
        tags: ["pane", "cibo","dolce"]
    },
    {
        titolo: "Pasta alla barbabietola",
        contenuto: "Pasta colorata",
        immagine: "public/img/pasta_barbabietola.jpeg",
        tags: ["mangiare", "primo", "barbabietola"]
    },
    {
        titolo: "Torta paesana",
        contenuto: "Torta tipica",
        immagine: "public/img/torta_paesana.jpeg",
        tags: ["mangiare", "dolce", "ricetta"]
    }
]





app.get("/",(req, res) =>{
    res.send("<h1>Server del mio blog<h1>")
})

app.listen (port, ()=>{
    console.log(`The server is start and listening in http://localhost:${port}`)
})

app.get("/api/posts", (req, res) => {
    res.json(posts)
})