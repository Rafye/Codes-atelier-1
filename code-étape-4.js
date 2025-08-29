// Mon premier server Http 2024
import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req.url);
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));