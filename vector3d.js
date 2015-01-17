var vector3d = function() {
	'use strict';
	var x, y, z;
	// initializing new instances
	this.X = x;
	this.Y = y;
	this.Z = z;
	// checking for object equality
	function equals(v) {
	return (this.X == v.X && this.Y == v.Y && this.Z == v.Z);
	}
	// negative vector
	function Vector3d_op(vector) {
		return new Vector3d_op(-vector.X, -vector.Y, -vector.Z);
	}
	// point subtracted from vector
	function Point3d(vector, point) {
		return new Point3d(vector.X - point.X, vector.Y - point.Y, vector.Z - point.Z);
	}
	// vector2 subtracted from vector1
	function Vector3d_op1(vector1, vector2) {
		return new Vector3d_op1(vector1.X - vector2.X, vector1.Y - vector2.Y, vector1.Z - vector2.Z);
	}
	// multiplying scalar and vector
	function Vector3d_op2(scalar, vector) {
		return new Vector3d_op2(vector.X * scalar, vector.Y * scalar, vector.Z * scalar);
	}
	// multiplying vector and scalar
	function Vector3d_op3(vector, scalar) {
		return new Vector3d_op3(vector.X * scalar, vector.Y * scalar, vector.Z * scalar);
	}
	// dividing vector by scalar
	function Vector3d_op4(vector, scalar) {
		return new Vector3d_op4(vector.X / scalar, vector.Y / scalar, vector.Z / scalar);
	}
	// translating point by vector
	function Point3d_(vector, point) {
		return new Point3d_(point.X + vector.X, point.Y + vector.Y, point.Z + vector.Z);
	}
	// addition of vector1 and vector2
	function Vector3d_op5(vector, point) {
		return new Vector3d_op5(vector1.X + vector2.X, vector1.Y + vector2.Y, vector1.Z + vector2.Z);
	}
	//
	// Still more to code
	//
};
