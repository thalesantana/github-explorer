export function RepositoryItem(props){
    return(
        <li>
            <strong>unform</strong>
            <p>{props.repository ?? 'Default'}</p>

            <a href="">
                Acessar Repositório
            </a>
        </li>
    )
}