const Category = require('../models/Category');
const Product = require('../models/Product');
const ProductTag = require('../models/ProductTag');
const Tag = require('../models/Tag');

const categorySeedData = require('./category-seeds.json');
const productSeedData = require('./product-seeds.json');
const productTagSeedData = require('./product-tag-seeds.json');
const tagSeedData = require('./tag-seeds.json');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await Category.bulkCreate(categorySeedData);
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await Product.bulkCreate(productSeedData);
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await Tag.bulkCreate(tagSeedData);
  console.log('\n----- TAGS SEEDED -----\n');

  await ProductTag.bulkCreate(productTagSeedData);
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
