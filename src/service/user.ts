import request from '@/utils/request';

// 注册接口
export let register = (code:any)=>{
  return request.post('/teacher/register', code);
}

//登录接口:
export let login = (code:any)=>{
  return request.post('/teacher/login', code);
}

//检查用户登录信息：
export let checkUser = ()=>{
  return request.get('/teacher/checkuser');
}

//班级列表：
export let classList = ()=>{
  return request.get('/class/lists');
}

//创建班级
export let createClass = (code:any)=>{
  return request.put('/class/create',code);
}