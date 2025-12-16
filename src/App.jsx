import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppContext from './context/appContext';
import RouteContext from './context/routeContext';
import OrderContext from './context/orderContext';
import PayContext from './context/payContext';
import { initialAppState } from './utils/initialAppState';
import { initialOrderState } from './utils/initialOrderState';
import { initialPayState } from './utils/initialPayState';
import { initialRouteState } from './utils/initialRouteState';
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';
import SeatsPage from './pages/SeatsPage/SeatsPage';
import PassengersPage from './pages/PassengersPage/PassengersPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ConfirmPage from './pages/ConfirmPage/ConfirmPage';
import FinishPage from './pages/FinishPage/FinishPage';
import './App.css';

function App() {
  const [appState, setAppState] = useState(initialAppState);
  const [orderState, setOrderState] = useState(initialOrderState);
  const [payState, setPayState] = useState(initialPayState);
  const [routeState, setRouteState] = useState(initialRouteState);

 return (
   <div className="app">
      <AppContext.Provider value={{ appState, setAppState }}>
        <RouteContext.Provider value={{ routeState, setRouteState }}>
          <OrderContext.Provider value={{ orderState, setOrderState }}>
            <PayContext.Provider value={{ payState, setPayState }}>
              <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/order/seats" element={<SeatsPage />} />
                <Route path="/order/passengers" element={<PassengersPage />} />
                <Route path="/order/payment" element={<PaymentPage />} />
                <Route path="/order/confirm" element={<ConfirmPage />} />
                <Route path="/finish" element={<FinishPage />} />
              </Routes>
            </PayContext.Provider>
          </OrderContext.Provider>
        </RouteContext.Provider>
      </AppContext.Provider>
   </div>
 )
}

export default App;
