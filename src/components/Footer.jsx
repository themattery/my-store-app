import React from "react";

function Footer() {

    return (
        <footer>
            <div className="footerLeft">
                <div className="footerMenu">
                    <h1 className="fMenuTitle">Sobre Nós</h1>
                    <ul className="fList">
                        <li className="fListItem">Empresa</li>
                        <li className="fListItem">Contato</li>
                        <li className="fListItem">Afiliados</li>
                        <li className="fListItem">Lojas</li>
                    </ul>
                </div>
                <div className="footerMenu">
                    <h1 className="fMenuTitle">Outros Links</h1>
                    <ul className="fList">
                        <li className="fListItem">Suporte</li>
                        <li className="fListItem">Contato</li>
                        <li className="fListItem">Devoluções</li>
                        <li className="fListItem">FAQ</li>
                        <li className="fListItem">Feedback</li>
                    </ul>
                </div>
                <div className="footerMenu">
                    <h1 className="fMenuTitle">Produtos</h1>
                    <ul className="fList">
                        <li className="fListItem">Air Jordan</li>
                        <li className="fListItem">Air Force</li>
                        <li className="fListItem">Hippie</li>
                        <li className="fListItem">Blazer</li>
                        <li className="fListItem">Crater</li>
                    </ul>
                </div>
            </div>
            <div className="footerRight">
                <div className="footerRightMenu">
                    <h1 className="fMenuTitle">Inscreva-se no nosso newsletter</h1>
                    <div className="fMail">
                        <input type="text" placeholder="exemplo@email.com" className="fInput" />
                        <button className="fButton">Juntar-se</button>
                    </div>
                </div>
                <div className="footerRightMenu">
                    <h1 className="fMenuTitle">Siga-nos</h1>
                    <div className="fIcons">
                        <i className="fab fa-facebook fIcon"></i>
                        <i className="fab fa-twitter fIcon"></i>
                        <i className="fab fa-instagram fIcon"></i>
                        <i className="fab fa-whatsapp fIcon"></i>
                    </div>
                </div>
                <div className="footerRightMenu">
                    <span className="copyright">Copyright @ 2025</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;