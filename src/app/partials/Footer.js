import React from 'react';

export const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container center">
                © Copyright {new Date().getFullYear()} No Return Team
            </div>
        </footer>
    );
}