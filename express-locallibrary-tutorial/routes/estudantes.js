var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Página de Estudantes');
});

router.get('/exercicios', function(req, res, next) {
    res.send('Página de Exercícios');
  });

  router.get('/provas', function(req, res, next) {
    res.send('Página de Provas');
  });

  router.get('/notas', function(req, res, next) {
    res.send('Página de Notas');
  });

module.exports = router;
