	(function() {

		'use strict';

		var toggler = function(options) {

			var el = document.querySelectorAll(options.el);
			var classToggle = options.classToggle;
			var target = document.querySelectorAll(options.target);
			
			var initCalled = false;

			var init = function() {
				if (!initCalled) {
					initCalled = true;

					for (var i = 0; i < el.length; i++) {
						var current = el[i];
						current.addEventListener('click', toggleClass.bind(classToggle, target), false);
					}
				}
			};

			var toggleClass = function(e) {
				target.forEach(function(e){
					e.classList.toggle(classToggle);
				});
			};

			return {
				init: init
			};

		};

		window.toggler = toggler;

	})();

	var menuToggler = toggler({
		el: '.burger-container',
		classToggle: 'open',
		target: '.burger-container, .menu'
	});

	menuToggler.init();

