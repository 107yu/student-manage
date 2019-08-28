import request from '@/utils/request';

// 注册接口
export let register = (code:any)=>{
  return request.post('/teacher/register', code);
}

//登录接口:
export let login = (code:any)=>{
  return request.post('/teacher/login', code);
}