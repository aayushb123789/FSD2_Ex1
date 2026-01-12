import {useState} from "react";
function Login({onLogin}){
    const [email, setEmail] = useState(initialEmail: "");
    const [password, setPassword] = useState(initialPassword: "");
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({email, password});
        if (email || password) {
            alert("all field are required");
            return;

        }
        onLogin({email});
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email">
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            </input>
            <input
                type="password"
                placeholder="Password">
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            </input>
            <button type="submit">Login</button>
        </form>

    );
}
