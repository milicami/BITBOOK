import React from 'react';
import { authService } from '../../../services/authService';

export const WelcomeHeader = () => {



    return (
        <header id={`${authService.isUserLogged() ? 'welcome-header' : ''}`}>
            <nav>
                <div className="nav-wrapper">
                    <div className='container'>
                        <span className='center bitbook'>BitBook</span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

