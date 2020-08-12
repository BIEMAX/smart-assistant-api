/**
 * @apiIgnore
 * 
 * Export array of HTTP responses status with code and messages
 * @returns Object[]
 */
module.exports.ResponseStatus = [
  /**
   * Indica que até o momento tudo está OK e que o cliente 
   * pode continuar com a requisição ou ignorar caso já tenha terminado.
   */
  { Continue: { Cod: 100, Msg: 'Informational status response code indicates that everything so far is OK' } },
  { Switch: { Cod: 101, Msg: '' }, },
  { Success: { Cod: 200, Msg: 'OK' }, },
  { Created: { Cod: 201, Msg: '' }, },
  { Accepted: { Cod: 202, Msg: '' }, },
  { NonAuthorization: { Cod: 203, Msg: '' }, },
  { NoContent: { Cod: 204, Msg: '' }, },
  { ResetContent: { Cod: 205, Msg: '' }, },
  { PartialContent: { Cod: 206, Msg: '' }, },
  { MultipleChoices: { Cod: 300, Msg: '' }, },
  { Moved: { Cod: 301, Msg: '' }, },
  { Found: { Cod: 302, Msg: '' }, },
  { SeeOther: { Cod: 303, Msg: '' }, },
  { NotModified: { Cod: 304, Msg: '' }, },
  { TemporaryRedirect: { Cod: 307, Msg: '' }, },
  { PermanentRedirect: { Cod: 308, Msg: '' }, },
  { Error: { Cod: 400, Msg: 'Ocorreu um erro e o servidor resolveu negar a requisição' }, },
  { Unauthorized: { Cod: 401, Msg: '' }, },
  { Forbidden: { Cod: 403, Msg: '' }, },
  { NotFound: { Cod: 404, Msg: '' }, },
  { MethodNotAllowed: { Cod: 405, Msg: '' }, },
  { NotAcceptable: { Cod: 406, Msg: '' }, },
  { ProxyRequired: { Cod: 407, Msg: '' }, },
  { RequestTimeout: { Cod: 408, Msg: '' }, },
  { Conflict: { Cod: 409, Msg: '' }, },
  { Gone: { Cod: 410, Msg: '' }, },
  { LengthRequired: { Cod: 411, Msg: '' }, },
  { PreconditionFailed: { Cod: 412, Msg: '' }, },
  { PayloadTooLarge: { Cod: 413, Msg: '' }, },
  { UriTooLong: { Cod: 414, Msg: '' }, },
  { UnsupportedMediaType: { Cod: 415, Msg: '' }, },
  { Switch: { Cod: 416, Msg: '' }, },
  { Switch: { Cod: 417, Msg: '' }, },
  { Switch: { Cod: 418, Msg: '' }, },
  { Switch: { Cod: 422, Msg: '' }, },
  { Switch: { Cod: 425, Msg: '' }, },
  { Switch: { Cod: 426, Msg: '' }, },
  { Switch: { Cod: 428, Msg: '' }, },
  { Switch: { Cod: 429, Msg: '' }, },
  { Switch: { Cod: 431, Msg: '' }, },
  { Switch: { Cod: 451, Msg: '' }, },
  { Switch: { Cod: 500, Msg: '' }, },
  { Switch: { Cod: 501, Msg: '' }, },
  { Switch: { Cod: 502, Msg: '' }, },
  { Switch: { Cod: 503, Msg: '' }, },
  { Switch: { Cod: 504, Msg: '' }, },
  { Switch: { Cod: 505, Msg: '' }, },
  { Switch: { Cod: 511, Msg: '' }, },
]

module.exports.ValueStatus = {
  Empty: true,
  Filled: true
}