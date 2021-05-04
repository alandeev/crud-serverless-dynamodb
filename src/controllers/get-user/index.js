const handlerWrapper = require('../../utils/handler-wrapper');
const validate = require('./validate');
const userRepository = require('../../repositories/users');

const main = async (event) => {
  const dep = main.dependencies();

  const users = await dep.getUsers();

  return {
    status: 200,
    body: {
      message: 'users getted',
      users
    }
  }
}

main.dependencies = () => ({
  getUsers: userRepository.get
})

module.exports = {
  handler: handlerWrapper(main),
  main
}
