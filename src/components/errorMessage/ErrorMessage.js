import gif from './error.gif'

const ErrorMessage = () => {
    return (
        // src={process.env.PUBLIC_URL + '/error.gif'} - IF IMPORT FROM PUBLIC!!!!!
        <img 
            src={gif} 
            alt='ERROR'
            style={{ display: "block", width: 250, height: 250, objectFit: "contain", margin: "0 auto" }}
        />
    );
}

export default ErrorMessage;