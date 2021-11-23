import { Container } from "./styles";
import seteImg from '../../assets/sete.jpg'
import leilaoImg from '../../assets/leilao.jpg'

export function Dashboard() {
    return (
        <Container>

            <div>

                <img src={ seteImg } alt="sete" />
                <header>
                    <p>Passeata 7 de setembro</p>
                </header>
                <strong>Local: Praça Brasil</strong>
                <strong>Quarta-Feira às 18:00 horas</strong>
                    <button type="button" className="delete">
                        Excluir
                    </button>

                    <button type="button" className="like">
                        Like
                    </button>

                    <button type="button" className="dislike">
                        Dislike
                    </button>
            </div>

            <div>

                <img src={ leilaoImg } alt="leilao" />
                <header>
                    <p>Leilão de carros beneficiente</p>
                </header>
                <strong>Local: Clube Umuarama</strong>
                <strong>Sábado às 15:00 horas</strong>

                    <button type="button" className="delete">
                        Excluir
                    </button>

                    <button type="button" className="like">
                        Like
                    </button>

                    <button type="button" className="dislike">
                        Dislike
                    </button>

            </div>

        </Container>
    )
}