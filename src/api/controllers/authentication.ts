import { controller, httpPost } from 'inversify-express-utils'
import { inject } from 'inversify'
import { Types } from '../constants'
import { AuthenticationService } from '../services'

@controller('/api/auth')
export class AuthenticationController {
  constructor (@inject(Types.AuthenticationService) private authenticationService: AuthenticationService) { }

  @httpPost('/register')
  async register () {

  }

  @httpPost('/login')
  async login () {

  }
}
