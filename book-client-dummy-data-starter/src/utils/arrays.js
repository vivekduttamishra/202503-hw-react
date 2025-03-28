
import {DataError} from './data-error';

Array.prototype.findOne=function(matcher,message,data){
    let result = this.find(matcher);
    if(result)
        return result
    throw new DataError(message||"Not Found "+(matcher.name||""),data)
}

