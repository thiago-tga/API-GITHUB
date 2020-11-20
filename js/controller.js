class Controller
{
    lookUser(userName)
    {
        let model = new UserModel
        model.userSearch(userName)
        
        let view = new UserView
        view.showUser(userName)
    }

    lookRepository(userName)
    {
        let modelR = new UserModel
        modelR.repositorySearch(userName)

        let viewR = new UserView
        viewR.showRepositories(userName)
    }
}
