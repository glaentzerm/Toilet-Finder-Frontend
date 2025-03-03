import React, { useState } from "react";

const Register = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registering:", { email, password });
    onClose(); // Close modal after successful registration
  };

  return (
    <div className="p-4">
      <button className="absolute top-4 right-6 text-gray-700 text-xl cursor-pointer" onClick={onClose}>✖</button>
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
      <p className="text-gray-600 mb-6 text-center">Sign up to start using the app</p>

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
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full p-3 border border-gray-300 rounded-md mb-3"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600" onClick={handleRegister}>
        Register
      </button>

      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={onLogin}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
