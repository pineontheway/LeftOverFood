/**
 * New node file
 */
var ejs=require('ejs');
var mysql=require('mysql');

var getConnection=function()
{  /* var sam;
	var a=[];
	var f=[];
	f.length=10;
	a.length=10;
for(var i=0;i<a.length;i++)
	{
 a[i]= mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password:'123456',
		database: 'test1'
          

	});
	f[i]=1;
	}
for(var i=0;i<f.length;i++)
	{
	if(f[i===1])
		{
		f[i]===0;
		sam=i;
		break;
		}
	}


return a[sam];*/
	var connection=mysql.createConnection(
			{
				host: 'localhost',
				user: 'root',
				password:'root',
				database: 'cmpe272'	
			});
	return connection;
};
function fetchData(callback,sqlQuery){
	
	console.log("\nSQL Query::"+sqlQuery);
	
	var connection=getConnection();
	
	connection.query(sqlQuery, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}	

exports.getConnection=getConnection;
exports.fetchData=fetchData;
