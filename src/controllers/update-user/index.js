const handlerWrapper = require('../../utils/handler-wrapper');
const userRepository = require('../../repositories/users')
const validate = require('./validate');

const main = async (event) => {
  const dep = main.dependencies();

  const {
    body: { name },
    queryStringParameters: { user_id },
  } = event;

  const data = dep.validate({
    user_id,
    name
  });

  await dep.updateUser(data)

  return {
    status: 204
  }
}

main.dependencies = () => ({
  validate,
  updateUser: userRepository.update
})

module.exports = {
  handler: handlerWrapper(main),
  main
}
