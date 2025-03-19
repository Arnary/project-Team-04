import sequelize from '../sequelize.js';
import { DataTypes } from 'sequelize';
import Users from './Users.js';
import Recipes from './Recipes.js';

const FavoriteRecipes = sequelize.define('favorite_recipe', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    recipeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Recipes,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
});

// Many-to-Many relationship
Users.belongsToMany(Recipes, {
    through: FavoriteRecipes,
    foreignKey: 'userId',
});
Recipes.belongsToMany(Users, {
    through: FavoriteRecipes,
    foreignKey: 'recipeId',
});

export default FavoriteRecipes;
