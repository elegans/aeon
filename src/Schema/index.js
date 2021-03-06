/*
 * This file is part of the elegans/aeon package.
 *
 * Copyright (c) 2018, Nitish Kumar <mintu.nitish@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see https://github.com/elegans/aeon
 * 
 * Created By: Nitish Kumar on 6/11/18 10:32 AM
 */

const driver = require('./../../config').driver;
const query = require('./../../lib/query');

class Schema {
    static create(tableName, blueprint, callback) {
        blueprint['table'] = tableName ? tableName : false;
        const Query = new query(blueprint, driver, 'C');
        Query.getResultData(callback);
    }

    static dropIfExists(tableName) {}
}

module.exports = Schema;