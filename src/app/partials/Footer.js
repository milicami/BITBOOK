import React from 'react';

export const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container team-name">
                © Copyright {new Date().getFullYear()} No Return Team
            </div>
        </footer>
    );
}