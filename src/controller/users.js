const connect = require('../services/connect');

exports.save = async (req, res, next) => {
    await connect.post('users/save-user', req.body, { headers: req.headers })
        .then(response => { res.status(200).json(response.data) })
        .catch(() => { res.status(400) })
}

exports.auth = async (req, res, next) => {
    await connect.post('users/auth', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.get = async (req, res, next) => {
    await connect.get('users/get-user', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.getId = async (req, res, next) => {
    await connect.post('users/my-id', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.delete = async (req, res, next) => {
    await connect.delete('users/delete-user/' + req.params.cpf, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.verifyMAil = async (req, res, next) => {
    await connect.post('users/verify-user', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}