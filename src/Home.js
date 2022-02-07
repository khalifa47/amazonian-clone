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
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                        rating={5}
                    />
                    <Product
                        id={35684348}
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={759434864}
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                        rating={5}
                    />
                    <Product
                        id={239814785}
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                        rating={5}
                    />
                    <Product
                        id={463768834}
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={798437284}
                        title='The lean startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;