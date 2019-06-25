const showImageHistory = (db, req, res) => {
	return db.select('date', 'imageurl').from('images').limit(10)
		.orderBy('date', 'desc')
		.then(images => {
			res.json(images)
		})
		.catch(err => {
			console.log(err);
			res.status(400).json('Err');
		})
	}



module.exports = {
	showImageHistory
}