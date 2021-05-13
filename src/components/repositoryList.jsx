import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'foodfy',
    description: 'Recipes',
    link: 'https://github.com/thalesantana/foodfy' 
}

export function RepostitoryList(){
    return(
        <section className="repostory-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
            </ul>

        </section>
    )
}