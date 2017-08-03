import House from '../models/House';
import Senate from '../models/Senate';

const utils = {};

/**
 * MONGODB QUERY FOR GENERAL PURPOSE HOUSE COLLECTION QUERYING
 * @param query === ANY AVAILABLE QUERY NAME FROM DB (OPTIONAL or NULL)
 * @param selections === SPECIFIC DATA TO BE PASSED BACK (OPTIONAL or NULL)
 * @param cb == CALLBACK WITH RETURNED DATA
 */
utils.queryDatabase = (collection , query, selections, cb) => {
    if(collection === 'House'){
        House.find(query)
            .select(selections)
            .exec((err, houseDocs) => {
                return cb(houseDocs);
            })
    }else {
        Senate.find(query)
            .select(selections)
            .exec((err,SenateDocs) => {
                return cb(SenateDocs);
            })
    }
};

export default utils;
