const connect = require('../services/connect');

exports.save = async (req, res, next) => {
    await connect.post('arquivo/save-archive', req.body, { headers: req.headers })
        .then(response => { res.status(200).json(response.data) })
        .catch(() => { res.status(400) })
}

exports.get = async (req, res, next) => {
    await connect.get('arquivo/get-archive', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.delete = async (req, res, next) => {
    await connect.delete('arquivo/delete-archive/' + req.params.id, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}