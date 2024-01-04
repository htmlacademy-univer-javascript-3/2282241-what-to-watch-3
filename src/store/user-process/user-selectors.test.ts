import {describe} from "vitest";
import {NameSpace} from "../../const/const.ts";
import {AuthorizationStatus} from "../../components/private-route/private-route.tsx";
import {getAuthorizationStatus} from "./user-selectors.ts";

describe('User selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Unknown,
    }
  }

  it('should return authorization status from state', () => {
    const {authorizationStatus} = state[NameSpace.User];
    const result = getAuthorizationStatus(state);
    expect(result).toEqual(authorizationStatus);
  })
})
