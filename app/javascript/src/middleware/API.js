import request from "superagent";
import { camelizeKeys } from "humps";
import { assign } from "lodash/object";

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  assign({}, action, data, { [API_CALL]: undefined })
);

export default store => next => action => {
  if (!action[API_CALL]) return next(action);

  let params = action[API_CALL];
  const [requestType, successType, errorType] = params.types;

  next(nextAction(action, { type: requestType }));

  const promise = request[params.method.toLowerCase()](params.endpoint);
  promise.then(({ body }) => {
            let data = camelizeKeys(body);
            next(nextAction(action, { type: successType, data: data }));
          })
          .catch((error) => {
            next(nextAction(action, { type: errorType, error: error }));
          });

  return promise;
}
