class BinaryTree{
	constructor(arr){
		/*
			Creating Instance Variables.
		*/
		this.arr = arr
		this.length = arr.length

		this.parents = []

	}

	getParent(val){
		//Formula to get parent of a leaf/child node
		/*
			parent = arr[i/2] #take floor value of i/2
		*/
		this.index = this.arr.indexOf(val)
		if(this.index %2 == 0){
		return this.arr[Math.floor(this.index/2)-1]
		}
		return this.arr[Math.floor(this.index/2)]
	}

	getChildren(val){
		//Formula to get children of a node/root
		/*
			left = 2*i+1
			right = 2*i+2
		*/
		 this.index = this.arr.indexOf(val)
		 this.left = this.arr[2*this.index+1]
		 this.right = this.arr[2*this.index+2]
		 return [this.left,this.right]
	}

	getLeftchild(val){
		return	this.getChildren(val)[0]
	}

	getRightChild(val){
		return this.getChildren(val)[1]
	}

	getHeight(){
		//Formula to get Height of a binary tree
		/*
			floor(log(length of array)) #base = 2
		*/
		return Math.floor(Math.log2(this.length))
	}

	getParents(val){
		if(val>0){
		this.par = this.getParent(val)
			if(this.par){
			this.parents.push(this.par)
			}
		this.getParents(Math.floor(this.par))
		}
	}

	isFull(){
		//Formula to know binary full tree 
		/*
			height = (2^(h+1))-1
		*/
		if(this.length == Math.pow(2,this.getHeight()+1)-1){
			return true
		}
		return false
	}
}
