import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center">
                <img
                    src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif" 
                    alt="Not Found"
                    className="mb-8 w-full max-w-4xl h-auto"
                />
                
                <Link
                    to="/"
                    className="text-blue-400 hover:underline text-lg"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;


// https://i0.wp.com/www.silocreativo.com/en/wp-content/uploads/2017/11/diseno-web-404-CSS.gif?resize=600%2C323&quality=100&strip=all&ssl=1