import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/shared/config";
import Cookie from "js-cookie";

export class CookieUtils {
  static getTokensFromCookies() {
    const access = Cookie.get(ACCESS_TOKEN_COOKIE);
    const refresh = Cookie.get(REFRESH_TOKEN_COOKIE);
    return { access, refresh };
  }
}
