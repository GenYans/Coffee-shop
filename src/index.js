import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* service = new Service();

updateChar = () => {
    const id = 1;
    this.service
        .getCoffee(id)
        .then(res => {
            this.setState({
                name: res.data[0].name,
                country: res.data[0].country,
                description: res.data[0].description,
                price: res.data[0].price,
                img: res.data[0].img,
                id: res.data[0].id
            })
        })
} */