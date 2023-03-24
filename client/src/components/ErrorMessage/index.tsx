// styling
import './_ErrorMessage.scss';

// interface definition
interface IErrorMessage {
  message: String;
};

// main component definition
const ErrorMessage = ({
  message
}: IErrorMessage) => {
  return (
    <div className="message-error">
      { message }
    </div>
  );
};

export default ErrorMessage;