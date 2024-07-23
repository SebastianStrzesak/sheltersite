import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Aktualnosci } from './Pages/aktualnosci/aktualnosciPage.jsx';
import { Hotel } from './Pages/hotel/hotelPage.jsx';
import { Koty } from './Pages/przegladZwierzakow/kotyPage.jsx';
import { Psy } from './Pages/przegladZwierzakow/psyPage.jsx';
import { Darowizny } from './Pages/wsparcieSchroniska/darowiznyPage.jsx';
import { Dary } from './Pages/wsparcieSchroniska/daryPage.jsx';
import { Wolontariat } from './Pages/wsparcieSchroniska/wolontariatPage.jsx';
import { Wspolpraca } from './Pages/wspolpraca/wspolpracaPage.jsx';
import { Zagubione } from './Pages/zgubilemZwierzaka/zagubionePage.jsx';
import { Znalezione } from './Pages/znalazlemZwierzaka/znalezionePage.jsx';
import { Layout } from './layout/layout.jsx';
import NotFound from './Pages/NotFound.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/aktualnosci' element={<Layout />}>
                    <Route index element={<Aktualnosci />} />
                </Route>
                <Route path='/hotel' element={<Layout />}>
                    <Route index element={<Hotel />} />
                </Route>
                <Route path='/koty' element={<Layout />}>
                    <Route index element={<Koty />} />
                </Route>
                <Route path='/psy' element={<Layout />}>
                    <Route index element={<Psy />} />
                </Route>
                <Route path='/darowizny' element={<Layout />}>
                    <Route index element={<Darowizny />} />
                </Route>
                <Route path='/dary' element={<Layout />}>
                    <Route index element={<Dary />} />
                </Route>
                <Route path='/wolontariat' element={<Layout />}>
                    <Route index element={<Wolontariat />} />
                </Route>
                <Route path='/wspolpraca' element={<Layout />}>
                    <Route index element={<Wspolpraca />} />
                </Route>
                <Route path='/zagubione' element={<Layout />}>
                    <Route index element={<Zagubione />} />
                </Route>
                <Route path='/znalezione' element={<Layout />}>
                    <Route index element={<Znalezione />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
