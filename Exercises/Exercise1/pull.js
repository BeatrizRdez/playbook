const pRequest = {
    title: "Update links",
    branchName: "Main",
    dateCreated: "23 de abril de 2022",
    status: "Approved",
    repositoryNameAssociated: "Playbook",
    author: "@BeatrizRdez",

    getStatus: function(){
        return this.status
    },

    getTitle: function(){
        return this.title
    },

    getAuthor: function(){
        return this.author
    },
}

console.log("Nombre del Pull Request:" + pRequest.title)
console.log ("Autor del Pull Request:" + pRequest.author)
console.log ("Status:" + pRequest.status)
