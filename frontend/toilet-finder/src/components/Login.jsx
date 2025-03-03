import React, { useState } from "react";

const Login = ({ onClose, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in:", { email, password });
    onClose(); // Close modal after successful login
  };

  return (
    <div className="p-4">
      <button className="absolute top-4 right-6 text-gray-700 text-xl cursor-pointer" onClick={onClose}>✖</button>
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <p className="text-gray-600 mb-6 text-center">Welcome back! Please log in.</p>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border border-gray-300 rounded-md mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border border-gray-300 rounded-md mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600" onClick={handleLogin}>
        Login
      </button>

      <p className="mt-4 text-center text-gray-600">
        Don't have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={onRegister}>
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
