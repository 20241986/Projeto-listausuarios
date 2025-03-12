import UsersImage from '../../assets/Users.png'
import { Background } from './styles'


function TopBackgrond() {

    return (
        <Background>
            <img src={UsersImage} alt='imagem-usuarios' />
        </Background>
    )
}
export default TopBackgrond