const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let users = []; 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'Email занято' });
    }

    users.push({ name, email });
    return res.json({ message: 'Пользователь успешно зарегистрирован' });
});

app.get('/users', (req, res) => {
    let userHtml = '<h1>Users</h1><ul>';
    users.forEach(user => {
        userHtml += `<li>Name: ${user.name}, Email: ${user.email}</li>`;
    });
    userHtml += '</ul>';
    
    res.send(userHtml);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
