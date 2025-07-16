import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCoffee, FaArrowRight, FaBell, FaCog, FaGift, FaShoppingCart, FaCalendarAlt, FaWallet, FaCreditCard, FaMapMarkerAlt, FaQuestionCircle, FaBookmark, FaSignOutAlt } from 'react-icons/fa';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

  const menuItems = [
    { label: 'Kosha Rewards', icon: <FaGift />, path: '/kosha-rewards' },
    { label: 'Orders', icon: <FaShoppingCart />, path: '/orders' },
    { label: 'My Events', icon: <FaCalendarAlt />, path: '/my-events' },
    { label: 'Kosha Pay', icon: <FaWallet />, path: '/kosha-pay' },
    { label: 'Payment Modes', icon: <FaCreditCard />, path: '/payment-modes' },
    { label: 'My Addresses', icon: <FaMapMarkerAlt />, path: '/my-addresses' },
    { label: 'Help Center', icon: <FaQuestionCircle />, path: '/help-center' },
    { label: 'Saved Articles & News', icon: <FaBookmark />, path: '/saved-articles' },
  ];

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const userTier = 'Welcome Tier';
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || user.email || 'User');
      } else {
        navigate('/signin');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      alert('Error logging out');
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.spacer} />
        <div style={styles.icons}>
          <FaBell style={styles.icon} title="Notifications" />
          <FaCog style={styles.icon} title="Settings" />
        </div>
      </header>
      <div style={styles.profileSection}>
        <div style={styles.profileImage}>
          <FaCoffee size={48} color="#6f4e37" />
        </div>
        <h2 style={styles.userName}>{userName}</h2>
        <p style={styles.userTier}>{userTier}</p>
      </div>
      <div style={styles.menuCard}>
        {menuItems.map((item) => (
          <div
            key={item.label}
            style={styles.menuItem}
            tabIndex={0}
            onClick={() => navigate(item.path)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                navigate(item.path);
              }
            }}
            role="button"
            aria-label={`Go to ${item.label}`}
          >
            <div style={styles.menuIcon}>{item.icon}</div>
            <span style={styles.menuLabel}>{item.label}</span>
            <FaArrowRight style={styles.arrowIcon} />
          </div>
        ))}
      </div>
      <button style={styles.logoutButton} onClick={handleLogout}>
        <FaSignOutAlt style={{ marginRight: 8 }} />
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 400,
    margin: '40px auto',
    padding: 20,
    backgroundColor: '#f5f0e6', // soft beige
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#3e3e3e',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  spacer: {
    width: 48,
  },
  icons: {
    display: 'flex',
    gap: 16,
  },
  icon: {
    fontSize: 20,
    color: '#6f4e37',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  profileSection: {
    textAlign: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  userName: {
    margin: 0,
    fontWeight: '600',
    fontSize: 24,
  },
  userTier: {
    margin: 0,
    fontSize: 14,
    color: '#a67c52',
  },
  menuCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 20px',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s',
  },
  menuItemHover: {
    backgroundColor: '#f0e6d2',
  },
  menuIcon: {
    marginRight: 16,
    fontSize: 20,
    color: '#6f4e37',
    minWidth: 24,
    display: 'flex',
    justifyContent: 'center',
  },
  menuLabel: {
    flexGrow: 1,
    fontSize: 16,
  },
  arrowIcon: {
    fontSize: 16,
    color: '#a67c52',
  },
  logoutButton: {
    marginTop: 30,
    width: '100%',
    padding: '12px 0',
    backgroundColor: '#d9534f', // red
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    fontSize: 16,
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    transition: 'background-color 0.3s',
  },
};

export default Dashboard;
