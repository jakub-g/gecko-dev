// Error().stack (ScriptFrameIter) should not include frames from other contexts.
function g() {
    evaluate("function h() {\nstack = Error().stack;\n };\n h();", {newContext: true});
}
function f() {
    g();
}
f();
assertEq(stack,
    "h@@evaluate:2:1\n" +
    "@@evaluate:4:2\n");

function k() {
    evaluate("stack = Error().stack", {newContext: true});
}
k();
assertEq(stack, "@@evaluate:1:1\n");
