require('dotenv').config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRETKEY

module.exports = {
	PORT,
	SECRET
}