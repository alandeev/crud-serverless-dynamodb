const handlerWrapper = require('../../utils/handler-wrapper')
const { BadRequestError, NotFoundError } = require('../../errors');
const userRepository = require('../../repositories/users');

const main = async (event) => {
  const dep = main.dependencies();

  const {
    queryStringParameters: { user_id },
  } = event;

  const user = await dep.getUserById({
    user_id
  })

  if (!user) {
    throw new NotFoundError('User not found')
  }

  try {
    await dep.deleteUser({
      user_id
    })

    return {
      status: 204
    }
  } catch (error) {
    throw new BadRequestError("Failed to try delete user by id");
  }
}

main.dependencies = () => ({
  deleteUser: userRepository.delete,
  getUserById: userRepository.getById
})

module.exports = {
  handler: handlerWrapper(main)
}
