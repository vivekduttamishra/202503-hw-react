export class DataError extends Error{
    constructor(error,data){
        super(error);
        this.data=data;
    }
}