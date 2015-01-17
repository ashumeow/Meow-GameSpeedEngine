var vector3d = function() {
	'use strict';
	var x, y, z;
	this.X = x;
	this.Y = y;
	this.Z = z;
	var v;
	return (this.X == v.X && this.Y == v.Y && this.Z == v.Z);
	function vector3d_op(vector) {
		return new vector3d_op(-vector.X, -vector.Y, -vector.Z);
	}
	function point3d(vector, point) {
		return new point3d(vector.X - point.X, vector.Y - point.Y, vector.Z - point.Z);
	}
	function vector3d_op1(vector1, vector2) {
		return new vector3d_op1(vector1.X - vector2.X, vector1.Y - vector2.Y, vector1.Z - vector2.Z);
	}
	function vector3d_op2(scalar, vector) {
		return new vector3d_op2(vector.X * scalar, vector.Y * scalar, vector.Z * scalar);
	}
	function vector3d_op3(vector, scalar) {
		return new vector3d_op3(vector.X * scalar, vector.Y * scalar, vector.Z * scalar);
	}
	function vector3d_op4(vector, scalar) {
		return new vector3d_op4(vector.X / scalar, vector.Y / scalar, vector.Z / scalar);
	}
	function point3d_(vector, point) {
		return new point3d_(point.X + vector.X, point.Y + vector.Y, point.Z + vector.Z);
	}
	function vector3d_op5(vector, point) {
		return new vector3d_op5(vector1.X + vector2.X, vector1.Y + vector2.Y, vector1.Z + vector2.Z);
	}
	//
	// Still more to code
	//
};
