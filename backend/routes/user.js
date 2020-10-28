const express = require("express");
const router = express.Router();
const bouncer = require ("express-bouncer")(10000, 600000, 3); //Importation de bouncer qui permet de contrer les attaques de force brut.
//Si mot de passe erronné au bout de 3 fois, il y a un délai compris entre 10000 et 600000 ms avnt de pouvoir se reconnecter.

const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", bouncer.block, userCtrl.login);

module.exports = router;
