var obj={};
function updateObjectWithKeyAndValue(object, key, value)
{
  object.assign({},object,{[key],value});
  return object;
}
