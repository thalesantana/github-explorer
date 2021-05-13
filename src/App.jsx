import { Counter } from './components/Contador';
import { RepostitoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App(){
    return (
        <>
        <RepostitoryList />
        <Counter />
        </>
    )
}