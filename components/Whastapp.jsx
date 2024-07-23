import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/5519992871493"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500/40 backdrop-blur-md p-3 rounded-full text-white flex items-center justify-center hover:bg-green-500 transition-colors"
            style={{ zIndex: 1000 }}
        >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
    );
}
