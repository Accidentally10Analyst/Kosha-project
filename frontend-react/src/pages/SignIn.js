import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    setMessage('');
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setMessage('Sign-in successful! Redirecting...');
      setError('');
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      console.error('Error signing in with Google:', err);
      setError(`Error signing in: ${err.message || err}`);
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: '400px' }}>
      <h2>Sign In</h2>
      <button className="btn btn-danger mb-3" onClick={handleGoogleSignIn}>
        Sign In with Google
      </button>
      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default SignIn;
