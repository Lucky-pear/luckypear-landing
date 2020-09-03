const dev = {
  api: {
    URL: "http://api.luckypear.io/"
  },
};

const prod = {
  api: {
    URL: "http://api.luckypear.io/"
  }
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};