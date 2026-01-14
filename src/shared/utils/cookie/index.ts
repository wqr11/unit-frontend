import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "@/shared/config";
import Cookie from "js-cookie";

export class CookieUtils {
  static getTokensFromCookies() {
    const access = Cookie.get(ACCESS_TOKEN_COOKIE);
    const refresh = Cookie.get(REFRESH_TOKEN_COOKIE);
    return { access, refresh };
  }
  static deleteTokenCookies() {
    Cookie.remove(ACCESS_TOKEN_COOKIE);
    Cookie.remove(REFRESH_TOKEN_COOKIE);
  }
  static saveTokenCookies({
    access,
    refresh,
  }: {
    access: string;
    refresh: string;
  }) {
    Cookie.set(ACCESS_TOKEN_COOKIE, access, {
      expires: new Date(Date.now() + 60 * 60 * 1000),
      sameSite: "None",
      secure: true,
    });
    Cookie.set(REFRESH_TOKEN_COOKIE, refresh, {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      sameSite: "None",
      secure: true,
    });
  }
}
