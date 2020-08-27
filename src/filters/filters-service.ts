export enum FILTERS {
    BLUR = 'blur',
    BNW = 'b&w',
    CLOUDS = 'clouds'
}

let fiboNum = 0;
const fibo = (num: number): number => {
    if (num === 0) {
        return 0
    }
    if (num === 1) {
        return 1
    }
    return fibo(num -1) + fibo(num - 2);
}

export class FiltersService {
    private appliedFilters:Array<FILTERS> = [];
    

    
    public applyFilter(filter: FILTERS):Array<FILTERS> {
        this.appliedFilters.push(filter);
        console.log(fibo(fiboNum++));
        return this.appliedFilters
    }
}


