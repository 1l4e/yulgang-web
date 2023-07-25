import { charList, faction } from "./constant"
import { itemOp, opTrungCap, thuocTinh } from "./options"

export function buffRead(buff:string) {
    let arrayBuff = buff.split(';')
    let res:any[] = []
    arrayBuff.forEach(item=> {
        let ii = item.split(",")
        if (ii[0]){
            res.push({id: ii[0], time: msToTime(parseInt(ii[1])),timeString: ii[1],ttime: stringToTime(ii[1])})
        }
        
    })
   return res
}


function stringToTime(string:string){
    const strArray = string.match(/.{1,2}/g);
if (strArray){
    return '20'+strArray[0]+'/'+strArray[1]+'/'+strArray[2]+' '+strArray[3]+':'+strArray[4]
}
   return ''
    
    
}

function msToTime(durationMs: number): string {
    // calculate the values of days, hours, minutes, and seconds
    let seconds = Math.floor(durationMs / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    // calculate the remainder values
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
  
    // create a list of the values
    const timeValues: number[] = [days, hours, minutes, seconds];
  
    // create a list of the corresponding labels
    const timeLabels: string[] = ['ngày', 'giờ', 'phút', 'giây'];
  
    // build the time string
    let timeString = '';
    for (let i = 0; i < timeValues.length; i++) {
      const value = timeValues[i];
      const label = timeLabels[i];
      if (value > 0) {
        timeString += `${value} ${label}${value > 1 ? '' : ''} `;
      }
    }
  
    // remove trailing space and return the string
    return timeString.trim();
  }

 export function cuongHoa(str:string) {
    //console.log(str)
    //Cường hóa và thuộc tính
    const ch = parseInt(str)%100;
    const tt = ((parseInt(str)-ch)%10000)/100
    const ttch = tt%10;
    const ttname = (tt-ttch)/10;
    const name =thuocTinh[ttname]?.name
    const stoneopt =((parseInt(str)-ch))/10
    //Trung cấp ngũ hành
    let three = "0"
    if (str.toString().length > 3) {
        three = str.toString().charAt(2)
    }
    const data = {
        ch : ch,
        ttname: name,
        ttid: ttname,
        ttch : ttch,
        type: three,
        stoneopt: stoneopt,
    }
    //console.log(data)
    return data;
}
export function tachOp (str:string) {
    let magic = parseInt(str);
    let opValue = magic % 1000;
    const a = getOp(str);
    let option = {
        name: a.name,
        value: opValue,
        sub:a.sub,
        magic: a.id,
        code: str
    }
    return option
}

export function getOp(str:string) {
    let magic = parseInt(str);
    let opValue = magic % 1000;
    let opName =  (magic-opValue)/1000;
    let res:any
    if (itemOp.some(o => o.id == opName)){
        let a = itemOp.find(o => o.id == opName)
        a ?res = a
        :res= { id: 0, name: "Không tìm thấy",sub: "" }
    }
    else{
        res= { id: 0, name: "Chưa hỗ trợ",sub: "" }
    }
    res.value = +opValue
    return res;

}

export function fact(id:string){
    return faction[parseInt(id)];
  };
export function num(query:string) {
    if (query) {
      for (let x of charList) {
        if (x.slug == query){
          return x.id
        }
      }  
    }
    return 0;
  }
export function getOpDa(str:string) {
    let magic = parseInt(str);
    let opValue = magic % 1000;
    let opName =  (magic-opValue)/10;
    //console.log({opName,opValue})
    let res:any
    if (itemOp.some(o => o.id == opName)){
        let a = itemOp.find(o => o.id == opName)
        a ?res = a
        :res= { id: 0, name: "Không tìm thấy",sub: "" }
    }
    else{
        res= { id: 0, name: "Chưa hỗ trợ",sub: "" }
    }
    res.value = +opValue
    return res;

}


export function getTrungCap(type:number,number:number) {
    if (type == 1) {
        if( opTrungCap[0].some(o=>o.id == number))
        {
            return opTrungCap[0].find(o=>o.id == number)
        }
    }
    else if (type == 2) {
        if( opTrungCap[1].some(o=>o.id == number))
        {
            return opTrungCap[1].find(o=>o.id == number)
        }
    }
    return  { id : 0, name : "", pre: ''}
}
export function stringToItemDec(str: string) {
    const arr = str.split(",");
    return {
        series: arr[0],
        u0: arr[1],
        itemId: arr[2],
        soluong: arr[3],
        u1: arr[4],
        option: arr[5],
        magic1: getOp(arr[6]),
        magic2: getOp(arr[7]),
        magic3: getOp(arr[8]),
        magic4: getOp(arr[9]),
        u2: arr[10],
        trungcapset: arr[11],
        trungcap: arr[12],
        u3: arr[13],
        createdTime: arr[14],
        expiredTime: arr[15],
        u4: arr[16],
        thuctinh: arr[17],
        u5: arr[18],
        tinhchat:arr[19],
        u6: arr[20],
        lock: arr[21],
    };

}
export function generateArray(num:number) {
    const array = [];
    for (let i = 1; i <= num; i++) {
      array.push(`Item ${i}`);
    }
    return array;
  }