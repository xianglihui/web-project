// base.ts
export class Base {
  /* 公共模块 */
  static env =
    process.env.NODE_ENV === "development" ? "http://localhost:8003" : "";
}

