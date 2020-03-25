import tilt from 'tilt.js';

const initTilt = () => {
  // Projects images
  $('.project-wrapper__image a div').tilt({
    maxTilt: 0,
  });
  // About me image
	$('#profpic').tilt({
		maxTilt: 0,
	});
};

export default initTilt;
