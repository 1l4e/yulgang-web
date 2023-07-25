

const enConvert = (str: string): string => {
    let arr = str.match(/.{1,1}/g);
    let con: string[] = [];

    for (let x in arr) {
        if (str.charCodeAt(parseInt(x)) > 192) {
            let currentChar = arr[parseInt(x)];
            let previousChar = parseInt(x) > 0 ? arr[parseInt(x) - 1] : '';

            if (w1258.includes(currentChar)) {
                let u = w1258.findIndex((e) => e === currentChar);
                con[parseInt(x)] = unicode[u] ?? '';
            } else if (w1258.includes(previousChar + currentChar)) {
                let u = w1258.findIndex((e) => e === previousChar + currentChar);
                con[parseInt(x) - 1] = '';
                con[parseInt(x)] = unicode[u] ?? '';
            } else {
                con[parseInt(x)] = currentChar;
            }
        } else {
            con[parseInt(x)] = arr[parseInt(x)];
        }
    }
    //console.log(con.join(''));
    return con.join('');
};
const unicode= 
    ["á", "à", "ả", "ã", "ạ", "â", "ấ", "ầ", "ẩ", "ẫ", "ậ", "ă", "ắ", "ằ", "ẳ", "ẵ", "ặ", "đ", "é", 
"è", "ẻ", "ẽ", "ẹ", "ê", "ế", "ề", "ể", "ễ", "ệ", "í", "ì", "ỉ", "ĩ", "ị", "ó", "ò", "ỏ", "õ", 
"ọ", "ô", "ố", "ồ", "ổ", "ỗ", "ộ", "ơ", "ớ", "ờ", "ở", "ỡ", "ợ", "ú", "ù", "ủ", "ũ", "ụ", "ư", "ứ", 
"ừ", "ử", "ữ", "ự", "ý", "ỳ", "ỷ", "ỹ", "ỵ", "Á", "À", "Ả", "Ã", "Ạ", "Â", "Ấ", "Ầ", "Ẩ", "Ẫ", 
"Ậ", "Ă", "Ắ", "Ằ", "Ẳ", "Ẵ", "Ặ", "Đ", "É", "È", "Ẻ", "Ẽ", "Ẹ", "Ê", "Ế", "Ề", "Ể", "Ễ", "Ệ", 
"Í", "Ì", "Ỉ", "Ĩ", "Ị", "Ó", "Ò", "Ỏ", "Õ", "Ọ", "Ô", "Ố", "Ồ", "Ổ", "Ỗ", "Ộ", "Ơ", "Ớ", "Ờ", 
"Ở", "Ỡ", "Ợ", "Ú", "Ù", "Ủ", "Ũ", "Ụ", "Ư", "Ứ", "Ừ", "Ử", "Ữ", "Ự", "Ý", "Ỳ", "Ỷ", "Ỹ", "Ỵ"]
const w1258 = ["aì", "aÌ", "aÒ", "aÞ", "aò", "â", "âì", "âÌ", "âÒ", "âÞ", "âò", "ã", "ãì", "ãÌ", "ãÒ", "ãÞ", "ãò", "ð", "eì", 
"eÌ", "eÒ", "eÞ", "eò", "ê", "êì", "êÌ", "êÒ", "êÞ", "êò", "iì", "iÌ", "iÒ", "iÞ", "iò", "oì", "oÌ", "oÒ", "oÞ", 
"oò", "ô", "ôì", "ôÌ", "ôÒ", "ôÞ", "ôò", "õ", "õì", "õÌ", "õÒ", "õÞ", "õò", "uì", "uÌ", "uÒ", "uÞ", "uò", "ý", "ýì", 
"ýÌ", "ýÒ", "ýÞ", "ýò", "yì", "yÌ", "yÒ", "yÞ", "yò", "Aì", "AÌ", "AÒ", "AÞ", "Aò", "Â", "Âì", "ÂÌ", "ÂÒ", "ÂÞ", 
"Âò", "Ã", "Ãì", "ÃÌ", "ÃÒ", "ÃÞ", "Ãò", "Ð", "Eì", "EÌ", "EÒ", "EÞ", "Eò", "Ê", "Êì", "ÊÌ", "ÊÒ", "ÊÞ", "Êò", 
"Iì", "IÌ", "IÒ", "IÞ", "Iò", "Oì", "OÌ", "OÒ", "OÞ", "Oò", "Ô", "Ôì", "ÔÌ", "ÔÒ", "ÔÞ", "Ôò", "Õ", "Õì", "ÕÌ", 
"ÕÒ", "ÕÞ", "Õò", "Uì", "UÌ", "UÒ", "UÞ", "Uò", "Ý", "Ýì", "ÝÌ", "ÝÒ", "ÝÞ", "Ýò", "Yì", "YÌ", "YÒ", "YÞ", "Yò"]


export default enConvert