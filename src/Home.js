import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://www.artanddesignpta.org/wp-content/uploads/2020/09/Amazon-Homepage-Banner.jpg"
                    alt="banner"
                />
                <div className="home_row">
                    <Product
                        id={47324872}
                        title='AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor'
                        price={349.99}
                        image='https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SX679_.jpg'
                        rating={5}
                    />
                    <Product
                        id={35684348}
                        title='Dune (4K Ultra HD + Blu-ray + Digital)'
                        price={29.96}
                        image='https://m.media-amazon.com/images/I/71A-7pprAdL._SX385_.jpg'
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={759434864}
                        title='Fitness Tracker,Smart Watch,Heart Rate Monitor IP67 Waterproof Activity Tracker Pedometer'
                        price={49.95}
                        image='https://m.media-amazon.com/images/I/61l6d5MQRpL._AC_SL1500_.jpg'
                        rating={5}
                    />
                    <Product
                        id={239814785}
                        title='Google Nest Learning Thermostat - Programmable Smart Thermostat for Home'
                        price={226.30}
                        image='https://m.media-amazon.com/images/I/71GIRQHecXL._AC_SL1500_.jpg'
                        rating={5}
                    />
                    <Product
                        id={463768834}
                        title='Nintendo Switch Pro Controller'
                        price={69.00}
                        image='https://m.media-amazon.com/images/I/61drpi3cYUL._SL1258_.jpg'
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={798437284}
                        title='Sceptre 32 inch Full 1080p LED HDTV HDMI USB MHL VGA with Clear QAM, Machine Black'
                        price={277.00}
                        image='https://m.media-amazon.com/images/I/51JDqzzdi8L._AC_.jpg'
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;