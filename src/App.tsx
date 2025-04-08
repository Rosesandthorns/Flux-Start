import React, { useState } from 'react';
import { auth, googleProvider } from './firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Zap } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful sign up
    } catch (err) {
      setError('Failed to create account');
      console.error(err);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Handle successful Google sign up
    } catch (err) {
      setError('Failed to sign up with Google');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4318FF] to-[#9747FF] flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center text-white p-12">
        <div className="flex items-center gap-2 mb-6">
          <Zap className="w-12 h-12" />
          <h1 className="text-6xl font-bold">Flux</h1>
        </div>
        <p className="text-xl text-center max-w-md">
          Chat rebuilt for the people. Customize everything. No nonsense. Just real connection.
        </p>
      </div>

      {/* Right side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="bg-[#1A1B1F] p-8 rounded-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-white mb-8">Sign Up</h2>
          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#2A2B2F] text-white border-0 focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#2A2B2F] text-white border-0 focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#2A2B2F] text-white border-0 focus:ring-2 focus:ring-purple-500"
                placeholder="Create a password"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">Already have an account? 
              <a href="#" className="text-purple-500 hover:text-purple-400 ml-1">Sign In</a>
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;