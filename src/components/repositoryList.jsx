import { RepositoryItem } from "./repositoryItem"

export function RepostitoryList(){
    return(
        <section className="repostory-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository="unform24541"/>
                <RepositoryItem />
                <RepositoryItem />
            </ul>

        </section>
    )
}