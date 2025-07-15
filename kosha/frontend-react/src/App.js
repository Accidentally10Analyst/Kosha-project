import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth } from './firebase';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Events from './pages/Events';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import FAQs from './pages/FAQs';
import CustomerService from './pages/CustomerService';
import OurHeritage from './pages/OurHeritage';
import Coffeehouse from './pages/Coffeehouse';
import OurCompany from './pages/OurCompany';
import Responsibility from './pages/Responsibility';
import Diversity from './pages/Diversity';
import Community from './pages/Community';
import EthicalSourcing from './pages/EthicalSourcing';
import EnvironmentalStewardship from './pages/EnvironmentalStewardship';
import LearnMore from './pages/LearnMore';
import WebAccessibility from './pages/WebAccessibility';
import PrivacyStatement from './pages/PrivacyStatement';
import TermsOfUse from './pages/TermsOfUse';
import AyurvedicCoffeeBlend1 from './pages/AyurvedicCoffeeBlend1';
import AyurvedicCoffeeBlend2 from './pages/AyurvedicCoffeeBlend2';
import AyurvedicHerbalSalad from './pages/AyurvedicHerbalSalad';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import KoshaRewards from './pages/KoshaRewards';
import Orders from './pages/Orders';
import MyEvents from './pages/MyEvents';
import KoshaPay from './pages/KoshaPay';
import PaymentModes from './pages/PaymentModes';
import MyAddresses from './pages/MyAddresses';
import HelpCenter from './pages/HelpCenter';
import SavedArticles from './pages/SavedArticles';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (item) => {
    setCart(prev => {
      const count = prev[item.id] ? prev[item.id].count + 1 : 1;
      return { ...prev, [item.id]: { ...item, count } };
    });
  };

  const removeItemFromCart = (itemId) => {
    setCart(prev => {
      if (!prev[itemId]) return prev;
      const count = prev[itemId].count - 1;
      if (count <= 0) {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      }
      return { ...prev, [itemId]: { ...prev[itemId], count } };
    });
  };

  const getTotalCount = () => {
    return Object.values(cart).reduce((acc, item) => acc + item.count, 0);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Kosha Cafe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              {user ? (
                <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
              ) : (
                <li className="nav-item"><Link className="nav-link" to="/signin">Sign In</Link></li>
              )}
              <li className="nav-item position-relative">
                <Link to="/cart" className="btn btn-outline-light position-relative" aria-label="Go to cart page">
                  Cart
                  <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                    {getTotalCount()}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} cart={cart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeItemFromCart={removeItemFromCart} addItemToCart={addItemToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events addItemToCart={addItemToCart} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/our-heritage" element={<OurHeritage />} />
        <Route path="/coffeehouse" element={<Coffeehouse />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/responsibility" element={<Responsibility />} />
        <Route path="/diversity" element={<Diversity />} />
        <Route path="/community" element={<Community />} />
        <Route path="/ethical-sourcing" element={<EthicalSourcing />} />
        <Route path="/environmental-stewardship" element={<EnvironmentalStewardship />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/web-accessibility" element={<WebAccessibility />} />
        <Route path="/privacy-statement" element={<PrivacyStatement />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/ayurvedic-coffee-blend-1" element={<AyurvedicCoffeeBlend1 />} />
        <Route path="/ayurvedic-coffee-blend-2" element={<AyurvedicCoffeeBlend2 />} />
        <Route path="/ayurvedic-herbal-salad" element={<AyurvedicHerbalSalad />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kosha-rewards" element={<KoshaRewards />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/kosha-pay" element={<KoshaPay />} />
        <Route path="/payment-modes" element={<PaymentModes />} />
        <Route path="/my-addresses" element={<MyAddresses />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/saved-articles" element={<SavedArticles />} />
      </Routes>
    </Router>
  );
}

export default App;
