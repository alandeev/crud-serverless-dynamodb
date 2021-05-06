const add = require('./add');
const getByEmail = require('./get-by-email')
const getAll = require('./get')
const update = require('./update')
const deleteUser = require('./delete');
const getById = require('./get-by-id');

module.exports = {
  add,
  update,
  delete: deleteUser,
  all: getAll,
  getByEmail,
  getById
}
