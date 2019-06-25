const sendImage = (db, req, res) => {
	const { imageurl, name } = req.body;
	db('images').insert({ imageurl, name })
	.catch(err => res.status(400).json('unable to update db'))
}



module.exports = {
	sendImage
}