import tilt from 'tilt.js';

const initTilt = () => {
  // Projects images
  $('.project-wrapper__image a div').tilt({
    maxTilt: 1,
  });
  // About me image
	$('#profpic').tilt({
		maxTilt: 1,
	});
};

export default initTilt;
