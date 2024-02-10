import './App.css';
import './css/bootstrap.min.css'
import './css/font-awesome.min.css'
import './css/nouislider.min.css'
import './css/slick.css'
import './css/slick-theme.css'
import './css/style.css'
import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";
import Navigation from "./components/Base/Navigation";
import Collections from "./components/Base/Collections";

function App() {
    return (
        <div>
            <Header/>
            <Navigation/>
            <Footer/>
        </div>
    );
}

export default App;
