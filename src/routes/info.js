const PoolBitcoin = require('../lib/poolBitcoin');
const Slushpool = require('../lib/slushpool');

/**
 * @swagger
 * /user:
 *   get:
 *     x-swagger-router-controller:
 *       info
 *     operationId:
 *       user
 *     tags:
 *       - Info
 *     description: Возвращает информацию о пользователе
 *     security:
 *       - BasicAuth: []
 *     x-security-scopes:
 *       - all
 *     produces:
 *       - application/json
 *     responses:
 *       default:
 *         description: Возвращает объект
 *         schema:
 *           type: object
 *           description: Объект с информацией
 *       200:
 *         description: Возвращает обект
 *         schema:
 *           type: object
 *           description: Объект с информацией
 *       500:
 *         description: При появлении внутренней ошибки
 *         schema:
 *           $ref: '#/definitions/RpcError'
 */
async function user(req, res, next) {
  try {
    const [bBTCData, bBCHData, sData]
      = await Promise.all([PoolBitcoin.getUserInfo('BTC'), PoolBitcoin.getUserInfo('BCH'), Slushpool.getUserInfo()]);
    console.log(sData);
    res
      .status(200)
      .json({bitcoinPool: {bBTCData, bBCHData}, slushPool: { reward: sData.confirmed_reward, hashrate: sData.hashrate }});
  } catch (e) {
    next(e);
  }
}

/**
 * @swagger
 * /workers:
 *   get:
 *     x-swagger-router-controller:
 *       info
 *     operationId:
 *       workers
 *     tags:
 *       - Info
 *     description: Возвращает информацию о worker`ах
 *     security:
 *       - BasicAuth: []
 *     x-security-scopes:
 *       - all
 *     produces:
 *       - application/json
 *     responses:
 *       default:
 *         description: Возвращает список объектов
 *         schema:
 *           type: object
 *           description: Объект с информацией
 *       200:
 *         description: Возвращает спсок объектов
 *         schema:
 *           type: object
 *           description: Объект с информацией
 *       500:
 *         description: При появлении внутренней ошибки
 *         schema:
 *           $ref: '#/definitions/RpcError'
 */
async function workers(req, res, next) {
  try {
    const [bData, sData] = await Promise.all([PoolBitcoin.getWorkersInfo(), Slushpool.getUserInfo()]);
    res
      .status(200)
      .json({bitcoinPool: bData, slushPool: sData.workers});
  } catch (e) {
    next(e);
  }
}

module.exports = { user, workers };