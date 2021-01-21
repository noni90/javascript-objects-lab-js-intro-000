var obj={};
function updateObjectWithKeyAndValue(object, key, value)
{
return  Object.assign({},object,{[key]:value});

}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  return object[key]=value;
}

function  destructivelydeleteFromObjectByKey(object, key)
{
  delete object[key];
  return object;
}
 function deleteFromObjectByKey(object, key)
 {
   var newob=Object.assign({},object);
   delete newob[key];
   return newob;
 }
