import ReactDOM from "react-dom/client";
import './my-sass.scss';

const Header = () => {
    return (
      <>
        <h1>Hello Style!</h1>
        <p>Add a little style!.</p>
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />);