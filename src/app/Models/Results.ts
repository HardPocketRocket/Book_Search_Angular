import {Doc} from './Document';

export interface Results {
  numFound: number;
  docs: Doc[];
}