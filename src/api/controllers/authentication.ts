import { Response } from 'express'
import { controller, httpGet, queryParam, response } from 'inversify-express-utils'
import { inject } from 'inversify'
import { Types } from '../constants'
import { AuthenticationService } from '../services'

@controller('/api/auth')
export class AuthenticationController {

}
