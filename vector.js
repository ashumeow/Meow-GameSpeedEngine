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
	// o => vector
	// o1, o2 => vector
	// s => scalar
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
		multiplyScalar: function(s) {
			meow.x *= s;
			meow.y *= s;
			return meow;
		},
		divideScalar: function(s) {
			if(s) {
				meow.x /= s;
				meow.y /= s;
			} else {
				meow.set(0, 0);
			}
			return meow;
		},
		invalid: function() { // negate
			return meow.multiplyScalar(-1);
		},
		dot: function(o) {
			return (meow.x * o.x) + (meow.y * o.y);
		},
		lengthSquared: function() {
			return (meow.x + meow.x) + (meow.y + meow.y);
		},
		length: function() {
			return Math.sqrt(meow.lengthSquared());
		},
		normalize: function() {
			return meow.divideScalar(meow.length());
		},
		distanceTo: function(o) {
			return Math.sqrt(meow.distanceToSquared(o));
		},
		distanceToSquared: function(o) {
			var dx, dy; // dx, dy => distance x, distance y
			dx = meow.x - o.x;
			dy = meow.y - o.y;
			return (dx * dx) + (dy * dy);
		},
		setLength: function(a) {
			// a => length
			return meow.normalize().multiplyScalar(a);
		},
		equals: function(o) {
			return (meow.distanceTo(o) < 0.0001);
		},
		lerp: function(o, t) {
			// lerp => linear interpolation
			var x, y;
			x = (o.x - meow.x) * t + (meow.x);
			y = (o.y - meow.y) * t + (meow.y);
			return meow.set(x, y);
		},
		isZero: function() {
			return (meow.length() < 0.0001);
		},
		toString: function() {
			return meow.x + ',' + meow.y;
		},
		toObject: function() {
			return { x: meow.x, y: meow.y };
		}
	});
	var xgs = {
		// xgs => Get Set x
		get: function() {
			return meow.x;
		},
		set: function(o) {
			meow.x = o;
			meow.trigger(X2d.events.change, 'x');
		}
	};
	var ygs = {
		// ygs => Get Set y
		get: function() {
			return meow.y;
		},
		set: function() {
			meow.y = o;
			meow.trigger(X2d.events.change, 'y');
		}
	};
	// binding
	main.events.bind.apply(meow, arguments);
	return meow;
};
