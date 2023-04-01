exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  return today.toLocaleDateString('en-US', options);
};

exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  const day = today.toLocaleDateString('en-US', options);
  return 'hello';
};
