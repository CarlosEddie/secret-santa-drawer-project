import { useParticipantsList } from "../state/hook/useParticipantsList"

const Footer = () => {
    const participants = useParticipantsList()

    return (
        <footer>
            <button disabled={participants.length < 3}>
                Start Game
            </button>
        </footer>
    )
}

export default Footer