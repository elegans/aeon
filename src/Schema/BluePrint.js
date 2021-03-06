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
 * Created By: Nitish Kumar on 6/11/18 10:43 AM
 */

class BluePrint {
    constructor(defaultStringLength = 191) {
        this.structure = {};
        this.defaultStringLength = defaultStringLength;
    }

    static _generateIntTypeBlocks(type, length, autoIncrement, unsigned) {
        return {
            type : type,
            length : length,
            autoIncrement : autoIncrement,
            unsigned : unsigned
        }
    }

    static _generateFloatingTypeBlocks(type, precision, scale) {
        return {
            type : type,
            precision : precision,
            scale : scale
        }
    }

    static _generateCharacterTypeBlocks(type, length) {
        return {
            type : type,
            length : length
        };
    }

    bit(name, length = 1, autoIncrement = false) {
        return this._addToStructure(name, BluePrint._generateIntTypeBlocks('BIT', length, autoIncrement, false));
    }

    tinyInt(name, length = 1, autoIncrement = false, unsigned = false) {
        return this._addToStructure(name, BluePrint._generateIntTypeBlocks('TINYINT', length, autoIncrement, unsigned));
    }

    bool(name) {
        return this._addToStructure(name, {
            type : 'BOOLEAN'
        });
    }

    smallInt(name, length = 2, autoIncrement = false, unsigned = false) {
        return this._addToStructure(name, BluePrint._generateIntTypeBlocks('SMALLINT', length, autoIncrement, unsigned));
    }

    mediumInt(name, length = 3, autoIncrement = false, unsigned = false) {
        return this._addToStructure(name, BluePrint._generateIntTypeBlocks('MEDIUMINT', length, autoIncrement, unsigned));
    }

    integer(name, length = 4, autoIncrement = false, unsigned = false) {
        return this._addToStructure(name, BluePrint._generateIntTypeBlocks('INT', length, autoIncrement, unsigned));
    }

    bigInt(name, length = 8, autoIncrement = false, unsigned = false) {
        return this._addToStructure(name, BluePrint._generateIntTypeBlocks('BIGINT', length, autoIncrement, unsigned));
    }

    serial(name) {
        return this._addToStructure(name, BluePrint._generateIntTypeBlocks('SERIAL', null, null, null));
    }

    decimal(name, precision = 10, scale = 0) {
        return this._addToStructure(name, BluePrint._generateFloatingTypeBlocks('DECIMAL', precision, scale));
    }

    float(name, precision = null, scale = null) {
        return this._addToStructure(name, BluePrint._generateFloatingTypeBlocks('FLOAT', precision, scale));
    }

    double(name, precision = null, scale = null) {
        return this._addToStructure(name, BluePrint._generateFloatingTypeBlocks('DOUBLE', precision, scale));
    }

    date(name) {
        return this._addToStructure(name, {
            type : 'DATE'
        });
    }

    dateTime(name, fsp = 0) {
        return this._addToStructure(name, {
            type : 'DATETIME',
            fsp : fsp
        });
    }

    timeStamp(name, fsp = 0) {
        return this._addToStructure(name, {
            type : 'TIMESTAMP',
            fsp : fsp
        });
    }

    time(name, fsp = 0) {
        return this._addToStructure(name, {
            type : 'TIME',
            fsp : fsp
        });
    }

    year(name, format = 2) {
        return this._addToStructure(name, {
            type : 'YEAR',
            format : format
        })
    }

    char(name, length = undefined) {
        return this._addToStructure(name, BluePrint._generateCharacterTypeBlocks('CHAR', typeof length === "undefined" ? this.defaultStringLength : length));
    }

    string(name, length = undefined) {
        return this._addToStructure(name, BluePrint._generateCharacterTypeBlocks('STRING', typeof length === "undefined" ? this.defaultStringLength : length));
    }

    text(name) {
        return this._addToStructure(name, BluePrint._generateCharacterTypeBlocks('TEXT', false));
    }

    mediumText(name) {
        return this._addToStructure(name, BluePrint._generateCharacterTypeBlocks('MEDIUMTEXT', false));
    }

    longText(name) {
        return this._addToStructure(name, BluePrint._generateCharacterTypeBlocks('LONGTEXT', false));
    }

    increments(name) {
        return this.integer(name, 4, true, true);
    }

    timestamps() {
        this.timeStamp('created_at');
        this.timeStamp('updated_at');
    }

    _addToStructure(columnName, options = undefined) {

        this.structure[columnName] = options;
        return this.structure[columnName];
    }
}

module.exports = BluePrint;