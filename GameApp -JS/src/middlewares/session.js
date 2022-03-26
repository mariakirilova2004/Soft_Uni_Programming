import { getUser } from "../utils.js";

export function addSession(ctx, next){
    ctx.user = getUser();
    next();
}