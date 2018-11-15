/**
 * get the metatable from a given table
 * 
 * @param table the table to get the metatable from
 */
declare function getmetatable(table: object): object;

/**
 * set / override a metatable
 * 
 * @param target the object to set the metatable for
 * @param meta the new metatable
 */
declare function setmetatable(target: object, meta: object): void;

/**
 * casts data to a string literal
 * @param data the data to cast to a string literal
 */
declare function tostring(data: any): string;