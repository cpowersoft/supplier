
var index = require('./index');    
var supplier = require('./supplier');
    
var mongoose = require('mongoose');    

module.exports = function (app) {
    
    /**  public start */
    app.get('/list/:db/:table',  index.index);   //limit 多少条记录   skip 第几条开始
    
    app.post('/create/:db/:table', index.create);/** * public end */ 
	
    	         
    app.post('/adds/:db/:table', supplier.add);  /* 添加分类  */

    app.get('/selects/:db/:table/:cid/:limit', supplier.select);  /* 查询分类  */

    app.post('/productAdd/:db/:table', supplier.add);   /* 上传产品 */ 
	
    app.post('/proMoreFile', supplier.morefile);  /* 上传多张图片 */

    app.post('/supplierAdd', supplier.supAdd);   /* 添加供应商 */
};
