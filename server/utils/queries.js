import House from '../models/House';
import Senate from '../models/Senate';

const utils = {};

/**
 * MONGODB QUERY FOR GENERAL PURPOSE HOUSE COLLECTION QUERYING
 * @param query === ANY AVAILABLE QUERY NAME FROM DB (OPTIONAL or NULL)
 * @param selections === SPECIFIC DATA TO BE PASSED BACK (OPTIONAL or NULL)
 * @param cb == CALLBACK WITH RETURNED DATA
 */
utils.queryHouse = (query, selections, cb) => {
    House.find(query)
        .select(selections)
        .exec((err, houseDocs) => {
           return cb(houseDocs);
        })
};

/**
 * QUERY FOR GENERAL PURPOSE SENATE COLLECTION QUERYING
 * @param query=== ANY AVAILABLE QUERY NAME FROM DB (OPTIONAL or NULL)
 * @param selections === SPECIFIC DATA TO BE PASSED BACK (OPTIONAL or NULL)
 * @param cb == CALLBACK WITH RETURNED DATA
 */
utils.querySenate = (query, selections, cb) => {
    Senate.find(query)
        .select(selections)
        .exec((err, senateDocs) => {
            return cb(senateDocs);
        });
}

export default utils;