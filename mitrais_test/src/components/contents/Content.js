import React from 'react';
import Register from './Register/Register';
import { Footer } from './Footer/Footer';

export class Content extends React.Component {
    render() {
        return (
            <div>
                <Register />
                <Footer />
            </div>
        );
    }
}