import React from 'react';
// import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


export const books = [
    { title: 'WordPress 5', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'React.Js', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'Node.Js', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'MySql', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'JavaScript', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'Bootstrap', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'Html5', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    { title: 'Css3', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
    // { title: 'Express.Js', subtitle: 'Un CMS pour créer et gérer blogs et sites web', author: 'Christophe AUBRY', price: '39.92' },
];



const booksList = books.map((book) =>
    <li className="col-10 col-sm-6 col-md-4 col-lg-3">
        <div className="card border-success mb-3">
            <div className="card-header">
                <span className="">${book.price}</span>

                <a href="/" className="float-right">
                    <i className="fa fa-shopping-cart float-right"></i>
                </a>
                <a href="/" className="float-right mr-3">
                    <i className="fa fa-heart float-left"></i>
                </a>
            </div>
            <div className="card-body">
                <div className="text-primary mb-2">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.subtitle}</p>
                </div>
                <hr />
                <div className="">
                    <span className="card-text"><small>Auteur: {book.author}</small></span><br />
                    <span className="card-text"><small>isbn: {book.isbn}</small></span>
                </div>
            </div>
        </div>
    </li>
)

const Products = (props) => {
    return (
        <ul className="row" style={{ listStyleType: "none" }}>

            {booksList}

        </ul>
    );
};

export default Products;
