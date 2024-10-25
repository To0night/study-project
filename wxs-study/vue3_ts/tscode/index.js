var Color;
(function (Color) {
    Color[Color["red"] = 3] = "red";
    Color[Color["orange"] = 4] = "orange";
    Color[Color["yellow"] = 5] = "yellow";
    Color[Color["green"] = 6] = "green";
})(Color || (Color = {}));
var c_1 = Color.red;
var c_2 = Color.orange;
console.log(c_2);
console.log(Color);
