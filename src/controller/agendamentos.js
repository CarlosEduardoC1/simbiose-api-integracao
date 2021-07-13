const connect = require('../services/connect');

exports.save = async (req, res, next) => {
    await connect.post('agendamentos/save-schedule', req.body, { headers: req.headers })
        .then(response => { res.status(200).json(response.data) })
        .catch(() => { res.status(400) })
}

exports.get = async (req, res, next) => {
    await connect.get('agendamentos/get-schedule', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.getWhere = async (req, res, next) => {
    await connect.post('agendamentos/filter-schedule/' + req.params.filtro, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.delete = async (req, res, next) => {
    await connect.delete('agendamentos/delete-schedule/' + req.params.id, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.my = async (req, res, next) => {
    await connect.post('agendamentos/my-schedule/' + req.params.cpf, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}