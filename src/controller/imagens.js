const connect = require('../services/connect');

exports.save = async (req, res, next) => {
    await connect.post('images/save-data', req.body, { headers: req.headers })
        .then(response => { res.status(200).json(response.data) })
        .catch(() => { res.status(400) })
}

exports.get = async (req, res, next) => {
    await connect.get('images/get-data', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.delete = async (req, res, next) => {
    await connect.delete('images/delete-data/' + req.params.id, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}