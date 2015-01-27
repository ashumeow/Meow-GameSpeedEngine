var vector = function(X2d) {
	'use strict';
	var meow = this;
	X2d.vector = function(x, y) {
		meow.x = x || 0;
		meow.y = y || 0;
	};
	xx.extend(vector, {
		zero: new X2d.vector()
	});
	xx.extend(vector.prototype, main.events, {
		set: function(x, y) {
			meow.x = x;
			meow.y = y;
			return meow;
		},
		copy: function(x, y) {
			meow.x = o.x;
			meow.y = o.y;
			return meow;
		},
		clone: function() {
			var Vector = vector;
			return new Vector(meow.x, meow.y);
		},
		add: function(o1, o2) {
			meow.x = o1.x + o2.x;
			meow.y = o1.y + o2.y;
			return meow;
		},
		addx: function(o) {
			meow.x += o.x;
			meow.y += o.y;
			return meow;
		},
		sub: function(o1, o2) {
			meow.x = o1.x - o2.x;
			meow.y = o1.y - o2.y;
			return meow;
		},
		subx: function(o) {
			meow.x -= o.x;
			meow.y -= o.y;
			return meow;
		},
		multiplyx: function(o) {
			meow.x *= o.x;
			meow.y *= o.y;
			return meow;
		},
		//
		// Still more to code
		//
	});
};
