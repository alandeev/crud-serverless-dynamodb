const main = (error) => {
  if (error.isTraeted || error instanceof Error) {
    return {
      statusCode: error.statusCode,
      body: JSON.stringify({
        status: 'Error',
        message: error.message
      })
    }
  }

  return {
    statusCode: 500,
    body: JSON.stringify({
      status: 'Error',
      message: 'Server Internal Error'
    })
  }
}

module.exports = main;
