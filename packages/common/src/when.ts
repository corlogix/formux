export function when<S = any, F = any>(condition: boolean, success: S, fail: F = null) {
  if(condition) {
    return success
  } else {
    return fail;
  }
}