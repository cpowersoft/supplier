var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
                    
module.exports = {

 images:{
   url:[{type:String}],
   product_id:{type:Schema.ObjectId, ref:'products'}
 },
 products:{
   category_id:{type:Schema.ObjectId, ref:'categorys'},
   title:{type:String},
   description:{type:String},
   add_time:{type:Date, default:Date.now},
   mainUrl:{type:String},
   supplierIds:[{type:Schema.ObjectId, ref:'suppliers'}],
   price:{type:String}
 },
 descs:{
   product_id:{type:Schema.ObjectId, ref:'products'},
   cn_desc:{type:String},
   en_desc:{type:String}
 },  
 categorys:{
   name:{type:String},                                                 
   parent_id:{type:Schema.ObjectId, ref:'categorys'}
 },
 suppliers:{
   name:{type:String},
   tel:{type:Number},
   QQ:{type:String}
 },
 aliexpress_templates:{
   aeopAeProductPropertys:[{
     attrNameId:Number,
     attrName:String,
     attrValueId:Number,
     attrValue:String
   }],					//商品的类目属性
   aeopAeProductSKUs:[{
      aeopSKUProperty:String,
      skuPrice:String,
      skuCode:String,
      skuStock:String,
      ipmSkuStock:Number,
      id:String,
      currencyCode:String
   }],					//商品的SKU信息
   detail:String,			//商品详描
   deliveryTime:Number,			//商品的备货期
   ownerMemberId:String,		//商品拥有者的login_id
   ownerMemberSeq:Number,		//商品拥有者的ID
   productId:String,			//产品ID
   categoryId:Number,			//产品所在类目的ID
   subject:String,			//产品的标题
   packageType:Number,			// 是否为打包出售方式 
   lotNum:Number,			//每包的数量
   packageLength:Number,		//产品的长度
   packageWidth:Number,			//产品的宽度
   packageHeight:Number,		// 产品的高度 
   grossWeight:String,			// 产品的毛重	
   isPackSell:Number,			// 是否支持是自定义计重
   reduceStrategy:String,		//库存的扣减策略 
   groupIds:String,			// 产品所在的产品分组列表
   bulkDiscount:Number,			// 产品的批发折扣 
   imageURLs:String,			//产品的主图列表
   productUnit:Number,			//产品的单位
   wsValidNum:Number,			// 产品的有效期
   src:String,				// 产品的来源 
   wsOfflineDate:{type:Date, default:Date.now},	// 产品的下架日期 
   wsDisplay:String,			//产品的下架原因
   productStatusType:String,		// 产品的状态 
   currencyCode:String,			// 产品的货币单位。美元: USD, 卢布: RUB
   freightTemplateId:String,		// 产品关联的运费模版ID 
   addUnit:Number,		
   addWeight:String,
   baseUnit:Number,			//自定义计重的基本产品件数 
   bulkOrder:Number,			// 享受批发价的产品数 
   groupId:Number,			// 产品所关联的产品分组ID
   isImageDynamic:Number,		// 是否是动态图产品
   productPrice:String,			// 单品产品的价格。
   promiseTemplateId:String,		// 产品所关联的服务模版
   sizechartId:String			// 产品所关联的尺码模版ID
   //修改测试一下git提交
 }

  
};  






















