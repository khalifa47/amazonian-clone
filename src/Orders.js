import './Orders.css';
import { db } from './firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useStateValue } from './StateProvider';
import { useEffect, useState } from 'react';
import Order from './Order';

const Orders = () => {
    const [{ basket }, user] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            const q = query(collection(db, `users/${user?.uid}/orders`), orderBy('created', 'desc'));

            onSnapshot(q, (snapshot) => {
                setOrders(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })));
            });
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className="orders">
            <h1>Your orders</h1>

            <div className="orders_order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    );
}

export default Orders;