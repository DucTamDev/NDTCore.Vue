import { ResponseLogin } from '@/modules/auth/models/ResponseLogin';
import { RequestLogin } from '@/modules/auth/models/RequestLogin';
import AuthApi from '@modules/auth/apis/auth.api';

class AuthService {
  private login: ResponseLogin = new ResponseLogin();

  // Fetch data login
  public async fetchAuth(requestLogin: RequestLogin): Promise<ResponseLogin> {
    try {
      const response: ResponseLogin = await AuthApi.fetchLogin(requestLogin);
      this.login = response;

      return this.login;
    } catch (error) {
      console.error('Error fetching login:', error);
      this.login = new ResponseLogin();

      return this.login;
    }
  }
}

export default new AuthService();
