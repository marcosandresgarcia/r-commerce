import React, {useEffect, useState} from 'react'
import { fetchCompanyData } from './funtions/companys'

function Footer() {

    const [company, setCompany] = useState({});

    useEffect(() => {
        fetchCompanyData(setCompany);
    }, []);

    return (
        <footer id="footer">

            <div className="section">

                <div className="container">

                    <div className="row">
                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Sobre nosotros</h3>
                                {company.about_us && <p>{company.about_us}</p>}
                                <ul className="footer-links">
                                    <li><a href="#"><i className="fa fa-map-marker"></i>{company.address}</a></li>
                                    <li><a href="#"><i className="fa fa-phone"></i>{company.telephone}</a></li>
                                    <li><a href="#"><i className="fa fa-envelope-o"></i>{company.email}</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Categorias</h3>
                                <ul className="footer-links">
                                    <li><a href="#">Hot deals</a></li>
                                    <li><a href="#">Laptops</a></li>
                                    <li><a href="#">Smartphones</a></li>
                                    <li><a href="#">Cameras</a></li>
                                    <li><a href="#">Accessories</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="clearfix visible-xs"></div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Informacion</h3>
                                <ul className="footer-links">
                                    <li><a href="#">Sobre nosotros</a></li>
                                    <li><a href="#">Contactenos</a></li>
                                    <li><a href="#">Politicas de privacidad</a></li>
                                    <li><a href="#">Ordenes</a></li>
                                    <li><a href="#">Terminos y Condiciones</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Servicio</h3>
                                <ul className="footer-links">
                                    <li><a href="#">Mi cuenta</a></li>
                                    <li><a href="#">Carrito de compras</a></li>
                                    <li><a href="#">Lista de deseos</a></li>
                                    <li><a href="#">Ayuda</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div id="bottom-footer" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="footer-payments">
                                <li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
                                <li><a href="#"><i className="fa fa-credit-card"></i></a></li>
                                <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
                                <li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
                                <li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
                                <li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
                            </ul>
                            <span className="copyright">

                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i
                                className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com"
                                                                                        target="_blank">Colorlib</a>
							</span>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer