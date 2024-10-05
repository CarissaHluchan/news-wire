import { useParams } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage({ error }) {
    const { code } = useParams();

    const errorCode = error || code;

    return (
        <section className='error-section'>
            <div className='error-wrapper'>
                <h2 className='error-message'>{`${errorCode}: We are so sorry, there has been an error! Please try again later.`}</h2>
            </div>
        </section>
    );
}

export default ErrorPage;