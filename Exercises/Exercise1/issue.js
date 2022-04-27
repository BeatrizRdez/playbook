const issue = {
    title: "Dudas: Live 1 Semana 4",
    repositoryNameAssociated: "Playbook",
    status: "Finalizado",
    numberOfComment: "50 comentarios",
    labels: "Dudas, Semana 4",
    author: "@BeatrizRdez",
    dateCreated:"Viernes 22 de abril",
    lastUpdated: "Lunes 25 de abril por cambio de fecha",

    getTitle: function(){
        return this.title
    },

    getAuthor: function(){
        return this.author
    },

    getGeneralInformation: function(){
        return `El issue ${this.title} lo creó ${this.author} 
        en su repositorio ${this.repositoryNameAssociated} el día ${this.dateCreated}`
    },
}

console.log("Nombre del issue:" + issue.title)
console.log ("Autor del issue:" + issue.author)
console.log("Información General:" + issue.getGeneralInformation())