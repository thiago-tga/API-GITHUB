class UserModel
{
    constructor(userName)
    {
        this.name = ""
        this.userName = ""
        this.userAvatar = ""
        this.repositories = ""
        
    }
    userSearch(userName)
    {
        let request = new XMLHttpRequest();
        request.addEventListener('load', ()=>
        {
            if (request.status == 200 && request.readyState == 4)
            {
                let UserData = JSON.parse(request.responseText)
                this.atualiza(UserData)
                
            }
        })
        request.open('GET', `https://api.github.com/users/${userName}`, false)
        
        request.send()
    }
    repositorySearch(userName)
    {
        let request = XMLHttpRequest();
        request.addEventListener('load', ()=>
        {
            if (request.status == 200 && request.readyState == 4)
            {
                let repositoryData = JSON.parse(request.responseText)
                this.repositories = repositoryData
                
            }
        })
        request.open('GET', `https://api.github.com/users/${userName}/repos`, false)
        
        request.send()
    }
    atualiza(UserData)
    {
                this.name = UserData.name
                console.log(this.name)
                this.userAvatar = UserData.avatar_url
                console.log(this.userAvatar)
    }
    getName()
    {   if(true){
        return this.name
        }
    }
    getUserName()
    {
        return this.userName
    }
    
    getUserAvatar()
    {
        return this.userAvatar
    }

    getRepositories()
    {
        return this.repositories
    }

    
}   
