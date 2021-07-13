const connect = require('../services/connect');

exports.save = async (req, res, next) => {
    await connect.post('cadastro/save-data', req.body, { headers: req.headers })
        .then(response => { res.status(200).json(response.data) })
        .catch(() => { res.status(400) })
}

exports.updtHora = async (req, res, next) => {
    await connect.post('cadastro/upd-data', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.get = async (req, res, next) => {
    await connect.get('cadastro/get-data', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.getWhere = async (req, res, next) => {
    await connect.post('cadastro/filter-data/' + req.params.filtro, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.delete = async (req, res, next) => {
    await connect.delete('cadastro/delete-data/' + req.params.id, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.update = async (req, res, next) => {
    await connect.put('cadastro/update-data', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}