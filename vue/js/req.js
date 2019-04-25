(function(){
	//构造器
	function Req(){
		this._vueobj = {};
	}
	Req.prototype = {
		post: function(url, options = {}){
			const opts = {
		        url,
		        method: 'post',
		        data: options.data
		    };
	        opts.data = Qs.stringify(options.data);
		    if (options.cType === 1) {
		        opts.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
		    }
		    return axios(opts).then( function({ status, statusText, data }) {
		        return data;
		    }).catch(this.catchFn)
		},
		get: function(url, options = {}){
			const opts = {
		        url,
		        method: 'get',
		        params: options.data
		    };

		    return axios(opts).then( ({ status, statusText, data }) => {
		        return data;
		    }).catch(this.catchFn)
		},
		catchFn: function(error){
			console.log(error);
		    return {
		        code: '-1',
		        message: error.message
		    }
		}
	};

	if(!window.req) {
        window.req = new Req();
    }

	/*function req(){
		return new Req(); 
	}
	return req;*/
}());