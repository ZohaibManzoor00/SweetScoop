/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('posts', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users')
    table.string('name')
    table.integer('price')
    table.integer('rating')
    table.string('image_src')
    table.text('details')
    table.text('ingredients')
    table.timestamps(true, true)
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('posts')
