'use strict';

/**
 * Authors.js controller
 *
 * @description: A set of functions called "actions" for managing `Authors`.
 */

module.exports = {

  /**
   * Retrieve authors records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.authors.search(ctx.query);
    } else {
      return strapi.services.authors.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a authors record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.authors.fetch(ctx.params);
  },

  /**
   * Count authors records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.authors.count(ctx.query);
  },

  /**
   * Create a/an authors record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.authors.add(ctx.request.body);
  },

  /**
   * Update a/an authors record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.authors.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an authors record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.authors.remove(ctx.params);
  }
};
