export default function middleware(req, ev) {
  const ua = req.headers.get("User-Agent");
  const isIE = /MSIE|Trident/.test(ua);
  if (isIE && req.nextUrl.pathname != "/unsupported") {
    return Response.redirect("/unsupported");
  }
}
