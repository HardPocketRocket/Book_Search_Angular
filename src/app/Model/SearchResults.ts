import {Document} from './Document';
export interface SearchResults {
    num_found: number;
    docs: Document[];
}