// const NoPage = () => {
    
//     return (
//         <div className="text-3xl font-bold flex justify-center items-center">
//             No Page
//         </div>
        
//     );
// }

// export default NoPage;

import { useNavigate } from 'react-router-dom';

const NoPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <div className="text-3xl font-bold flex flex-col justify-center items-center h-screen">
            <p>No Page Found</p>
            <button 
                onClick={handleNavigate} 
                className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
                Go to Home
            </button>
        </div>
    );
}

export default NoPage;
