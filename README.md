# 🧩 Overview

The `Login` component is a simple React functional component that provides a basic login form with email and password fields. It uses React's `useState` hook for state management and includes client-side validation.


## 🚀 Features

- Two controlled input fields: Email and Password
- Client-side validation (checks for empty fields)
- Custom `onLogin` callback for handling login data
- Clean and minimal JSX structure


## 🧠 How it works

1. The user enters their email and password.
2. When the form is submitted:
   - If either field is empty → an alert "All fields are required" is shown.
   - Otherwise → the `onLogin` callback is triggered with `{ email, password }` as the argument.


## 🛠️ Usage

```jsx
import React from "react";
import Login from "./Login";

function App() {
  const handleLogin = (credentials) => {
    console.log("User Logged In:", credentials);
    // You can perform authentication logic here (e.g., API call)
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
```


## 📦 Props

| Prop Name | Type     | Required | Description                                                                 |
|-----------|----------|:--------:|-----------------------------------------------------------------------------|
| `onLogin` | Function |   ✅ Yes | Callback function triggered on successful login with `{ email, password }` |


## 🧱 Component code

```jsx
import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
```


## 🧾 Example output

When you submit the form:

```
User Logged In: { email: "user@example.com", password: "12345" }
```
