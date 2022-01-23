/**
 * C# style formatting in JS
 */
export function format(str, ...args) {
    return str.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};

/**
 * C# style formatting for JSX replaces
 */
export function formatJSX(str, ...args) {

    var splitted = str.split(/({\d+})/g);

    return splitted.map(function (str) {

        var match = str.match(/{(\d+)}/);

        if (match) {
            let index = parseInt(match[1]);
            if (typeof args[index] != 'undefined') {
                return args[index];
            }
        }

        return str;
    });
}

export function padStart(str, width, letter = "0") {
    return str.length >= width ? str : new Array(width - str.length + 1).join(letter) + str;
}