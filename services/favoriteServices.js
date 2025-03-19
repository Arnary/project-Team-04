import Recipes from '../db/models/Recipes.js';
import RecipesIngredients from '../db/models/RecipesIngredients.js';
import HttpError from '../helpers/HttpError.js';
import FavoriteRecipes from '../db/models/FavoriteRecipes.js';

export const findOneRecipeById = async (recipeId) => {
    return Recipes.findByPk(recipeId);
};

export const createFavoriteRecipe = async ({ userId, recipeId }) => {
    return FavoriteRecipes.create({ userId, recipeId });
};

export const findOneFavoriteRecipe = async ({ userId, recipeId }) => {
    return FavoriteRecipes.findOne({
        where: { userId, recipeId },
    });
};

export const findAndCountAllFavoriteRecipes = async ({
    userId,
    limit = 100,
    offset = 0,
}) => {
    const { count, rows } = await Recipes.findAndCountAll({
        include: {
            model: FavoriteRecipes,
            where: { userId },
            attributes: [],
        },
        limit,
        offset,
    });

    return { count, rows };
};
