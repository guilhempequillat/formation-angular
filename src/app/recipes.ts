import { Recipe } from './recipe/recipe.model';

export const recipes: Recipe[] = <Recipe[]> [
    {
        name: 'Daiquiri',
        picture: 'https://cdn.liquor.com/wp-content/uploads/2016/07/29105024/DAIQUIRI-226x248-mosaic1.jpg',
        description: 'The classic Daiquiri is a super simple rum cocktail that’s well-balanced and refreshing. The combination of sweet, sour and spirit is refreshingly tangy and perfect for any occasion.',
        ingredients: [
            {
                name: 'Dark rum (Appleton Estate Reserve)',
                quantity: 2,
                unit: 'oz',
            },
            {
                name: 'Fresh lime juice',
                quantity: 1,
                unit: 'oz',
            },
            {
                name: 'Simple sirup',
                quantity: 1,
                unit: 'oz',
            }
        ],
        instructions: [
            'Add all the ingredients to a shaker and fill with ice.',
            'Shake, and strain into a chilled Martini glass.',
            'Garnish with a lime wheel.'
        ]
    },
    {
        name: 'Piña Colada',
        picture: 'https://cdn.liquor.com/wp-content/uploads/2016/07/29124300/PINA-COLADA-226x248-mosaic1.jpg',
        description: 'The Piña Colada is a classic tropical cocktail with rum, pineapple and coconut milk. This classic recipe will transport you to paradise. Getting caught in the rain is not required.',
        ingredients: [
            {
                name: 'Light or gold rum',
                quantity: 1.5,
                unit: 'oz',
            },
            {
                name: 'Coconut milk',
                quantity: 2,
                unit: 'oz',
            },
            {
                name: 'Fresh pineapple juice',
                quantity: 2,
                unit: 'oz',
            }
        ],
        instructions: [
            'Add all the ingredients to a shaker and fill with ice.',
            'Shake, and strain into a Hurricane glass filled with fresh ice.',
            'Garnish with a cherry and a pineapple wedge.'
        ]
    },
    {
        name: 'Mojito',
        picture: 'https://cdn.liquor.com/wp-content/uploads/2016/07/29124230/MOJITO-226x248-mosaic1.jpg',
        description: 'To many people, the Mojito represents the perfect rum cocktail. The origins of the drink can be traced back to Cuba and the 16th-century Cuban cocktail El Draque, named for Sir Francis Drake. ',
        ingredients: [
            {
                name: 'Mint leaves',
                quantity: 6
            },
            {
                name: 'Simple syrup',
                quantity: 0.75,
                unit: 'oz',
            },
            {
                name: 'Fresh lime juice',
                quantity: 0.75,
                unit: 'oz',
            },
            {
                name: 'White rum',
                quantity: 1.5,
                unit: 'oz',
            },
            {
                name: 'Club soda',
                quantity: 1.5,
                unit: 'oz',
            }
        ],
        instructions: [
            'In a shaker, lightly muddle the mint.',
            'Add the simple syrup, lime juice and rum, and fill with ice.',
            'Shake well and pour (unstrained) into a highball glass.',
            'Top with the club soda and garnish with a mint sprig.'
        ]
    }
];
