import React from 'react'
import ReactDOM from 'react-dom/client';

import { MainLayout } from './layouts';
import { GlobalProvider } from './providers';
import { ErrorBoundary } from './components';
import './index.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <GlobalProvider>
                <MainLayout />
            </GlobalProvider>
        </ErrorBoundary>
    </React.StrictMode>
);

