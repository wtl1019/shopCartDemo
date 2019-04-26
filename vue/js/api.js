
// 所有的与后端请求
(function(global,factory,plugin){
	global[plugin] = factory.call(global);
})(window, function(){
	var __CORE__ = {
		__url_pre: './',
		// 购物车列表
	    qryCartLists: async function () {
		    const qry_obj = {
		      	pageIndex: 1,
	            pageSize: 10
		    };
		    const { code, data, message } = await req.post(this.__url_pre + '/cart/getCart', { qry_obj });
		    if (code === 200) {
		  	   return data.items
	        } else {
	        	//TODO 处理后端返回的数据
	        	/*var res_datas = [
	        	    {
	        	   	    skuGoods: {
	        	   	    	id: 1,
	        	   	    	skuName: '香港短期仓储/临时储存',
	        	   	    	salePrice: '100.00',
	        	   	    	leaseAbleQty: 20,
	        	   	    	leaseMinQty: 1
	        	   	    },
	        	   	    checked: true,
	        	   	    amount: 3,
	        	   	    leaseStartDay: 2018/2/22,
	        	   	    leaseEndDay: 2019/3/33,
	        	   	    mainPicUrl: '//img10.360buyimg.com/cms/s80x80_jfs/t27676/315/2372712442/278632/ecfcba0b/5bff90b2N11de8897.jpg',
	        	   	    properties: '',
	        	   	    shopNo: 1,
	        	   	    shopName: '北京京尊达贸易有限公司'
	        	    },
	        	    {
	        	   	    skuGoods: {
	        	   	    	id: 1,
	        	   	    	skuName: '软件工程类型业务/好不好/货物收发',
	        	   	    	salePrice: '200.00',
	        	   	    	leaseAbleQty: 98,
	        	   	    	leaseMinQty: 10
	        	   	    },
	        	   	    checked: true,
	        	   	    amount: 12,
	        	   	    leaseStartDay: 2018/2/22,
	        	   	    leaseEndDay: 2019/3/33,
	        	   	    mainPicUrl: '//img10.360buyimg.com/cms/s80x80_jfs/t27676/315/2372712442/278632/ecfcba0b/5bff90b2N11de8897.jpg',
	        	   	    properties: '',
	        	   	    shopNo: 2,
	        	   	    shopName: '北京字节跳动有限公司'
	        	    }
	        	];
                let st = [];
	        	res_datas.forEach(function(shop){
                    var obj = {
                        shopNo: shop.shopNo,
                        shopName: shop.shopName,
                        items: []
                    }
                    shop.items.forEach(function (good, idx) {
                        if (good.checked) {
                            obj.items.push(good);
                        }
                    });
                    if (obj.items.length > 0) {
                        st.push(obj);
                    }
                });
                return st;*/

	        	var res_datas = [
	        	    {
	        	    	shopNo: 1,
	        	    	shopName: '北京字节跳动有限公司',
	        	    	items: [
	        	    	    {
			        	   	    skuGoods: {
			        	   	    	id: 1,
			        	   	    	skuName: '香港短期仓储/临时储存',
			        	   	    	salePrice: 1.00,
			        	   	    	leaseAbleQty: 999,
			        	   	    	leaseMinQty: 5
			        	   	    },
			        	   	    isAble: 1,
			        	   	    tradeType: 1,
			        	   	    tradeMode: 1,
			        	   	    amount: 6,
			        	   	    leaseStartDay: 2018/2/22,
			        	   	    leaseEndDay: 2019/3/33,
			        	   	    mainPicUrl: '//img10.360buyimg.com/cms/s80x80_jfs/t27676/315/2372712442/278632/ecfcba0b/5bff90b2N11de8897.jpg',
			        	   	    properties: '服务类型：仓运配 服务周期：2018-10-15至2019-10-15'
			        	    },
			        	    {
			        	   	    skuGoods: {
			        	   	    	id: 2,
			        	   	    	skuName: '软件工程类型业务/好不好/货物收发',
			        	   	    	salePrice: 2.00,
			        	   	    	leaseAbleQty: 98,
			        	   	    	leaseMinQty: 10
			        	   	    },
			        	   	    isAble: 1,
			        	   	    tradeType: 1,
			        	   	    tradeMode: 2,
			        	   	    amount: 12,
			        	   	    leaseStartDay: 2018/2/22,
			        	   	    leaseEndDay: 2019/3/33,
			        	   	    mainPicUrl: '//img10.360buyimg.com/cms/s80x80_jfs/t27676/315/2372712442/278632/ecfcba0b/5bff90b2N11de8897.jpg',
			        	   	    properties: '服务类型：111111 服务周期：2018-10-15至2019-10-15'
			        	    },
			        	    {
			        	   	    skuGoods: {
			        	   	    	id: 3,
			        	   	    	skuName: '香港短期仓储/临时储存',
			        	   	    	salePrice: 3.00,
			        	   	    	leaseAbleQty: 20,
			        	   	    	leaseMinQty: 1
			        	   	    },
			        	   	    isAble: 1,
			        	   	    tradeType: 1,
			        	   	    tradeMode: '1,2',
			        	   	    amount: 3,
			        	   	    leaseStartDay: 2018/2/22,
			        	   	    leaseEndDay: 2019/3/33,
			        	   	    mainPicUrl: '//img10.360buyimg.com/cms/s80x80_jfs/t27676/315/2372712442/278632/ecfcba0b/5bff90b2N11de8897.jpg',
			        	   	    properties: '软件类型：极简版 图案：小猪佩奇 颜色:红色'
			        	    }
	        	    	]
	        	    },
	        	    {
	        	    	shopNo: 2,
	        	    	shopName: '北京京尊达贸易有限公司',
	        	    	items: [
	        	    	    {
			        	   	    skuGoods: {
			        	   	    	id: 4,
			        	   	    	skuName: '香港短期仓储/临时储存',
			        	   	    	salePrice: 1.00,
			        	   	    	leaseAbleQty: 20,
			        	   	    	leaseMinQty: 1
			        	   	    },
			        	   	    isAble: 1,
			        	   	    amount: 1,
			        	   	    tradeType: 2,
			        	   	    tradeMode: '1,2',
			        	   	    leaseStartDay: 2018/2/22,
			        	   	    leaseEndDay: 2019/3/33,
			        	   	    mainPicUrl: '//img10.360buyimg.com/cms/s80x80_jfs/t27676/315/2372712442/278632/ecfcba0b/5bff90b2N11de8897.jpg',
			        	   	    properties: '软件类型:极简版 图案:小猪佩奇 颜色:红色'
			        	    }
	        	    	]
	        	    },
	        	];
	        	return res_datas;
	        }
		},
		// 删除购物车
		deleteGood: async function (id) {
			const { code, data, message } = await req.post(this.__url_pre + '/cart/delCart', { skuId: id });
		    if (code === 200) {
		  	   return true;
	        } else {
	        	return false;
	        }
		},
		// 获取订单基础信息
		// response：  buyerSubjectName 买家公司名称  orderToken 秘钥token
		getBaseInfo: async function (id) {
			const { code, data, message } = await req.post(this.__url_pre + '/order/getOrderInfo', { skuId: id });
		    if (code === 200) {
		  	   return date;
	        } else {
	        	// TODO测试
	        	var resp = {
	        		buyerSubjectName: '北京京邦达贸易有限公司',
	        		orderToken: '123'
	        	}
	        	return resp;
	        }
		},
		// 拆单
		splitOrder: async function (skuIds) {
			const { code, data, message } = await req.post(this.__url_pre + '/order/splitOrder', { skuId: skuIds });
		    if (code === 200) {
		  	   return date;
	        } else {
	        	// TODO测试
	        	var resp = ['1,2,3', '4'];
	        	return resp;
	        }
		},
		// 提交订单
		submitOrder: async function (form) {
			return await req.post(this.__url_pre + '/order/saveOrder', form);
		}
	}
	return __CORE__;
}, 'api')