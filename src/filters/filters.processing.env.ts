import filtersFeature, {processingEnv} from "./filters.feature";
import {FiltersService} from './filters-service';

filtersFeature.setup(processingEnv, () => {
    return {
        filterService: new FiltersService()
    }
})