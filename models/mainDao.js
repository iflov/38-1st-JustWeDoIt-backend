const {database} = require('./dataSource');

const requestMain = async () => {
    const main = await database.query(
        `
            SELECT 
            products.id,
            products.name,
            products.thumbnail_image_url AS thumbnailImageUrl,
            products.price,
            c.name AS category,
            s.name AS special,
            g.gender AS gender
            FROM products
            JOIN categories c ON products.category_id=c.id
            JOIN special s ON products.special_id=s.id
            JOIN gender g ON products.gender_id=g.id
            WHERE products.id LIMIT 0,10 `
    )

    return main;
}

module.exports = { requestMain };