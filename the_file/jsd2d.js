const jsd2d = (function() {
	const instances = [];
	function rid() {
		return (Math.random().toString(16).slice(2)) + (Math.random().toString(16).slice(2))
	}
	class Vector2 {
		constructor() {
			
		}
	}
	class CollisionSquare {
		constructor() {
			
		}
		onTouchObject(func) {
			if (typeof func == "function") {
				this.#connectionsTouch.push(func);
			}
		}
	}
	const json = {
		vm: {
			_currentFrame: 0,
			step: function() {
				
			}
		},
		instances: {
			
		},
		
	}
})()
