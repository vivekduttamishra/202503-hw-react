

const delay= time=> new Promise(resolve=>setTimeout(resolve,time))

export const delayed = async(time,fn)=>{
    await delay(time);
    return fn();
}

export default  delay;






