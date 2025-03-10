import BaseService from '@/core/services/base';
import type { RequestLogin } from '@/modules/auth/models/RequestLogin';
import type { ResponseLogin } from '@/modules/auth/models/ResponseLogin';

class AuthApi extends BaseService {
  constructor() {
    const authURL = import.meta.env.VITE_AUTH_API_BASE_URL;
    super(authURL);
  }

  fetchLogin(requestLogin: RequestLogin) {
    return this.post<ResponseLogin>(`/auth/login`, requestLogin);
  }
}

export default new AuthApi();
