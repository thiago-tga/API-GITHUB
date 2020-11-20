class UserView
{   
    showUser(data)
    {

        let Name = document.querySelector('#Name')
        Name.textContent = data.getName()

        let userName = document.querySelector('#userName')
        userName.textContent = data.getUserName()

        let userAvatar = document.querySelector('#userAvatar')
        userAvatar.src = data.getUserAvatar()

    }

    showRepositories(dados)
    {   
        let data1 = new UserModel()
        let repositoriesHTML = document.querySelector('#repositoriesInfo')
        let repositoriesData = data1.repositories
        for (let el in repositoriesData)
        {
            let createDiv = document.createElement('div')
            createDiv.class = "DivResitories"

            let createA = document.createElement('a')
            createA.href = el.html_url
            createA.textContent = el.name
            createDiv.appendChild(createA)

            let createP = document.createElement('p')
            createP.textContent = el.language 
            createDiv.appendChild(createA)

            repositoriesHTML.appendChild(createDiv)
        }
    }
}