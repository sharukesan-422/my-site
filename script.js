/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #121212;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
}

.container {
    padding: 2rem;
    border-radius: 15px;
    background: #1e1e1e;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    transition: transform 0.3s ease;
}

.container:hover {
    transform: translateY(-5px);
}

h1 {
    color: #00ff88;
    margin-bottom: 10px;
}

p {
    color: #b0b0b0;
    margin-bottom: 20px;
}

button {
    padding: 10px 25px;
    background-color: #00ff88;
    border: none;
    border-radius: 5px;
    color: #121212;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background-color: #00cc6e;
}
