const handlerWrapper = require('../../utils/handler-wrapper');
const validate = require('./validate');
const userRepository = require('../../repositories/users');
const { NotFoundError } = require('../../errors');

const main = async (event) => {
  const { body } = event;

  const dep = main.dependencies();

  const { email, password } = dep.validate(body)

  const userExist = await dep.getUserByEmail({ email });
  if (userExist) {
    throw new NotFoundError('Email already exists');
  }

  const userId = await dep.addUser({
    email,
    password
  });

  return {
    status: 200,
    body: {
      message: 'user created',
      user_id: userId
    }
  }
}

main.dependencies = () => ({
  validate,
  addUser: userRepository.add,
  getUserByEmail: userRepository.getByEmail
})

module.exports = {
  handler: handlerWrapper(main),
  main
}
