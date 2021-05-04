const errorHandler = require('./error-handler');

const main = fn => async event => {
  const dep = main.dependencies();
  try{
    const body = JSON.parse(event.body);
    event.body = body;

    const response = await fn(event);
    return {
      statusCode: response.status || 200,
      body: response.body ? JSON.stringify(response.body): ""
    };
  }catch(error) {
    const response = dep.errorHandler(error);
    return response;
  }
}


main.dependencies = () => ({
  errorHandler
})

module.exports = main;
