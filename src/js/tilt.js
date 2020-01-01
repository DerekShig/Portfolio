import tilt from 'tilt.js';

const initTilt = () => {
  // Projects images
  $('.project-wrapper__image a div').tilt({
    maxTilt: 2,
  });
  // About me image
	$('#profpic').tilt({
		maxTilt: 3,
	});
};

export default initTilt;
