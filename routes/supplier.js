var mongoose  = require('mongoose');          
var fs = require('fs')
,path = require('path');  
 
/**
* 增加
*/
exports.add = function (req, res) {
    
  var dbconn = mongoose.connect('mongodb://127.0.0.1:27017/'+req.params.db);                                           
    var database = global.dbHelper.getModel(req.params.table);
    
   var createOrder = new database(req.body);
    createOrder.save(function (err,doc) {
        if (err){
            return res.json({err:err});
           
        }else{
            res.send(200);
	    mongoose.connection.close();                   
        }  
    }); 

};

/*
*  查询
*/
exports.select = function (req, res) {
                          
   var dbconn = mongoose.connect('mongodb://127.0.0.1:27017/'+req.params.db);
     var database = global.dbHelper.getModel(req.params.table);
        
        database.find({},function(err, docs){
            if (err) {
                return res.json({err:err});
            }
            var rs = {
                list : docs  
            };
	    var str = JSON.stringify(rs)              
            res.send(str);
	    mongoose.connection.close();      
        });

}


/*
* 添加产品图片 
*/
exports.morefile = function(req, res){
   var dbconn = mongoose.connect('mongodb://127.0.0.1:27017/supplier');
  var database = global.dbHelper.getModel('images');

	database.findOne({product_id:req.body.product_id}, function(err, pro){
		if(err){
			 return res.json({'err':err});
		}
		var template_base = req.body.template_base.split(',');
		if(pro){
			pro.url = pro.url.concat(template_base);
			pro.save(function(err,re){
				res.send(200);
				mongoose.connection.close();
			});
		}else{
			var jsonData = {url:template_base,product_id:req.body.product_id};
			var createOrder = new database(jsonData);
			createOrder.save(function (errs,doc) {
				if (errs){
					return res.json({'error':errs});
				}
				res.send(200);
				mongoose.connection.close();
			});
		}
	}); 
};


/*
* 添加供应商
*/
exports.supAdd = function (req, res) {
                                               
  
   var dbconn = mongoose.connect('mongodb://127.0.0.1:27017/supplier'),
       database = global.dbHelper.getModel('suppliers'),
       prodata = global.dbHelper.getModel('products'),
       bodys = req.body;
               
    var supdata = {name:bodys.name, tel:bodys.tel, QQ:bodys.qq};
    var createOrder = new database(supdata);
      
    createOrder.save(function (err,doc) {
        if (err){
            return res.json({err:err});  
        }
	prodata.findOne({_id:bodys.productId}, function(err, pro){
	  if (err){
            return res.json({'err':err});  
          }
	
	  if(pro){
		pro.supplierIds.push(doc._id);
		
		pro.save(function(err, re){
			res.send(200);
			mongoose.connection.close();	
		})
	  }else{
		res.send(404);
		mongoose.connection.close();	
	 }
	  
	})
	//test

    }); 

}; 

