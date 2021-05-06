const handlerWrapper = require('../../utils/handler-wrapper');
const userRepository = require('../../repositories/users')
const validate = require('./validate');
const { NotFoundError } = require('../../errors');

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

  const user = await dep.getUserById({
    user_id
  })

  if (!user) {
    throw new NotFoundError('User not found')
  }

  await dep.updateUser(data)

  return {
    status: 204
  }
}

main.dependencies = () => ({
  validate,
  updateUser: userRepository.update,
  getUserById: userRepository.getById
})

module.exports = {
  handler: handlerWrapper(main),
  main
}
