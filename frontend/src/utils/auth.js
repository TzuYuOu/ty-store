
export const isLogin = () => {
  if(localStorage.getItem("token")){
    return true;
  }
  return false;
}

export const logout = () => {
  localStorage.removeItem("token");
}