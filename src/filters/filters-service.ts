export enum FILTERS {
    BLUR = 'blur',
    BNW = 'b&w',
    CLOUDS = 'clouds'
}

export class FiltersService {
    private appliedFilters:Array<FILTERS> = [];

    public constructor(private activeFiltersSlot: any) {
    }
    
    public applyFilter(filter: FILTERS):void {
        this.appliedFilters.push(filter);
        this.activeFiltersSlot.register([...this.appliedFilters]);
    }
}


