const app = require('./app');
const db = require('./models/database');

db.connect();

const PORT = 3333;

app.listen(PORT, () => console.log(`Server running or port ${PORT}`));
