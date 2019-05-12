'use strict';

/**
 * Socialnetworks.js controller
 *
 * @description: A set of functions called "actions" for managing `Socialnetworks`.
 */

module.exports = {

  /**
   * Retrieve socialnetworks records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.socialnetworks.search(ctx.query);
    } else {
      return strapi.services.socialnetworks.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a socialnetworks record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.socialnetworks.fetch(ctx.params);
  },

  /**
   * Count socialnetworks records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.socialnetworks.count(ctx.query);
  },

  /**
   * Create a/an socialnetworks record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.socialnetworks.add(ctx.request.body);
  },

  /**
   * Update a/an socialnetworks record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.socialnetworks.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an socialnetworks record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.socialnetworks.remove(ctx.params);
  }
};
