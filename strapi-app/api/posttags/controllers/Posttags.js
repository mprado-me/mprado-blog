'use strict';

/**
 * Posttags.js controller
 *
 * @description: A set of functions called "actions" for managing `Posttags`.
 */

module.exports = {

  /**
   * Retrieve posttags records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.posttags.search(ctx.query);
    } else {
      return strapi.services.posttags.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a posttags record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.posttags.fetch(ctx.params);
  },

  /**
   * Count posttags records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.posttags.count(ctx.query);
  },

  /**
   * Create a/an posttags record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.posttags.add(ctx.request.body);
  },

  /**
   * Update a/an posttags record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.posttags.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an posttags record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.posttags.remove(ctx.params);
  }
};
