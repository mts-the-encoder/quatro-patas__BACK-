const app = require('./app');

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listen on port: ${PORT}`);
});