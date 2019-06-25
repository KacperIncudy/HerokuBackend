const showScoreboard = (db, req, res) => {
	return db.select('name', 'entries', 'id').from('users').limit(10)
		.orderBy('entries', 'desc')
		.then(users => {
			res.json(users)
		})
		.catch(err => {
			console.log(err);
			res.status(400).json('Err');
		})
	}



module.exports = {
	showScoreboard
}