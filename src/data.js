// Knowledge Graph Data
// English learning data with nodes and links
export const knowledgeGraphData = {
  nodes: [
    // Core vocabulary
    { id: 1, type: 'word', label: 'Apple', definition: 'A round fruit with red, green, or yellow skin and firm white flesh.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Fresh red apple with green leaves, isolated on white background, realistic, high quality&image_size=square_hd' },
    { id: 2, type: 'word', label: 'Banana', definition: 'A long curved fruit with a yellow skin.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Ripe yellow bananas bunch, isolated on white background, realistic, high quality&image_size=square_hd' },
    { id: 3, type: 'word', label: 'Orange', definition: 'A round citrus fruit with a tough bright reddish-yellow rind.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Fresh orange citrus fruit, sliced and whole, isolated on white background, realistic, high quality&image_size=square_hd' },
    { id: 4, type: 'word', label: 'Fruit', definition: 'The sweet and fleshy product of a tree or other plant that contains seed and can be eaten as food.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Assorted fresh fruits including apples, bananas, oranges, grapes, isolated on white background, realistic, high quality&image_size=square_hd' },
    { id: 5, type: 'word', label: 'Tree', definition: 'A woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Tall green tree with lush leaves, standing in a field, realistic, high quality&image_size=square_hd' },
    { id: 6, type: 'word', label: 'Plant', definition: 'A living organism of the kind exemplified by trees, shrubs, herbs, grasses, ferns, and mosses, typically growing in a permanent site, absorbing water and inorganic substances through its roots, and synthesizing nutrients in its leaves by photosynthesis using the green pigment chlorophyll.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Green plant with leaves and stem, growing in soil, realistic, high quality&image_size=square_hd' },
    { id: 7, type: 'word', label: 'Water', definition: 'A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Clear water in a glass, with droplets, isolated on white background, realistic, high quality&image_size=square_hd' },
    { id: 8, type: 'word', label: 'Sun', definition: 'The star around which the earth orbits.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Bright sun with rays in a blue sky, realistic, high quality&image_size=square_hd' },
    
    // Sentences related to vocabulary
    { id: 9, type: 'sentence', label: 'I eat an apple every day.', relatedWord: 'Apple' },
    { id: 10, type: 'sentence', label: 'Bananas are a good source of potassium.', relatedWord: 'Banana' },
    { id: 11, type: 'sentence', label: 'Oranges are rich in vitamin C.', relatedWord: 'Orange' },
    { id: 12, type: 'sentence', label: 'Fruit is good for your health.', relatedWord: 'Fruit' },
    { id: 13, type: 'sentence', label: 'The apple grows on a tree.', relatedWord: 'Tree' },
    { id: 14, type: 'sentence', label: 'Plants need water to grow.', relatedWord: 'Plant' },
    { id: 15, type: 'sentence', label: 'Water is essential for life.', relatedWord: 'Water' },
    { id: 16, type: 'sentence', label: 'The sun provides energy for plants.', relatedWord: 'Sun' },
    
    // Extended vocabulary
    { id: 17, type: 'word', label: 'Nutrition', definition: 'The process of providing or obtaining the food necessary for health and growth.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Healthy balanced diet with fruits, vegetables, grains, and proteins, realistic, high quality&image_size=square_hd' },
    { id: 18, type: 'word', label: 'Growth', definition: 'The process of increasing in size.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Plant growth stages from seed to mature plant, realistic, high quality&image_size=square_hd' },
    { id: 19, type: 'word', label: 'Energy', definition: 'The strength and vitality required for sustained physical or mental activity.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Sun energy rays shining on plants, realistic, high quality&image_size=square_hd' },
    { id: 20, type: 'word', label: 'Health', definition: 'The state of being free from illness or injury.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Healthy person jogging in park, realistic, high quality&image_size=square_hd' },
    
    // More sentences
    { id: 21, type: 'sentence', label: 'Good nutrition is important for growth.', relatedWord: 'Nutrition' },
    { id: 22, type: 'sentence', label: 'Plants need sunlight for growth.', relatedWord: 'Growth' },
    { id: 23, type: 'sentence', label: 'We get energy from food.', relatedWord: 'Energy' },
    { id: 24, type: 'sentence', label: 'Eating fruit promotes good health.', relatedWord: 'Health' },
    
    // New vocabulary - Animals
    { id: 25, type: 'word', label: 'Dog', definition: 'A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Friendly dog with wagging tail, standing in grass, realistic, high quality&image_size=square_hd' },
    { id: 26, type: 'word', label: 'Cat', definition: 'A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute cat sitting on a windowsill, looking outside, realistic, high quality&image_size=square_hd' },
    { id: 27, type: 'word', label: 'Bird', definition: 'A warm-blooded egg-laying vertebrate distinguished by the possession of feathers, wings, and a beak.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Colorful bird perched on a branch, realistic, high quality&image_size=square_hd' },
    { id: 28, type: 'word', label: 'Animal', definition: 'A living organism that feeds on organic matter, typically having specialized sense organs and nervous system and able to respond rapidly to stimuli.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Assorted animals including dog, cat, bird, and fish, realistic, high quality&image_size=square_hd' },
    
    // New vocabulary - Food
    { id: 29, type: 'word', label: 'Pizza', definition: 'A flat, open-faced baked pie of Italian origin, typically round, made of thin bread dough spread with a spiced mixture of tomatoes and cheese.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Delicious pizza with cheese and toppings, isolated on white background, realistic, high quality&image_size=square_hd' },
    { id: 30, type: 'word', label: 'Burger', definition: 'A flat round cake of minced beef, fried or grilled and typically served in a bun.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Tasty burger with beef patty, lettuce, and tomato, isolated on white background, realistic, high quality&image_size=square_hd' },
    { id: 31, type: 'word', label: 'Salad', definition: 'A mixture of raw greens, usually including lettuce, eaten either as a separate dish or with other food.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Fresh salad with greens, vegetables, and dressing, isolated on white background, realistic, high quality&image_size=square_hd' },
    { id: 32, type: 'word', label: 'Food', definition: 'Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Assorted food items including pizza, burger, salad, and fruit, realistic, high quality&image_size=square_hd' },
    
    // New vocabulary - Nature
    { id: 33, type: 'word', label: 'Mountain', definition: 'A large natural elevation of the earth\'s surface rising abruptly from the surrounding level.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Tall mountain with snow-capped peak, blue sky background, realistic, high quality&image_size=square_hd' },
    { id: 34, type: 'word', label: 'River', definition: 'A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Scenic river flowing through a valley, surrounded by trees, realistic, high quality&image_size=square_hd' },
    { id: 35, type: 'word', label: 'Forest', definition: 'A large area covered chiefly with trees and undergrowth.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Dense forest with tall trees, sunlight filtering through leaves, realistic, high quality&image_size=square_hd' },
    { id: 36, type: 'word', label: 'Nature', definition: 'The phenomena of the physical world collectively, including plants, animals, the landscape, and other features and products of the earth.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Beautiful natural landscape with mountains, river, and forest, realistic, high quality&image_size=square_hd' },
    
    // New sentences related to animals
    { id: 37, type: 'sentence', label: 'Dogs are known as man\'s best friend.', relatedWord: 'Dog' },
    { id: 38, type: 'sentence', label: 'Cats are independent and curious animals.', relatedWord: 'Cat' },
    { id: 39, type: 'sentence', label: 'Birds can fly high in the sky.', relatedWord: 'Bird' },
    { id: 40, type: 'sentence', label: 'Animals live in different habitats.', relatedWord: 'Animal' },
    
    // New sentences related to food
    { id: 41, type: 'sentence', label: 'Pizza is a popular Italian dish.', relatedWord: 'Pizza' },
    { id: 42, type: 'sentence', label: 'Burgers are often served with fries.', relatedWord: 'Burger' },
    { id: 43, type: 'sentence', label: 'Salad is a healthy food choice.', relatedWord: 'Salad' },
    { id: 44, type: 'sentence', label: 'Food gives us the energy we need.', relatedWord: 'Food' },
    
    // New sentences related to nature
    { id: 45, type: 'sentence', label: 'Mountains offer breathtaking views.', relatedWord: 'Mountain' },
    { id: 46, type: 'sentence', label: 'Rivers provide water for plants and animals.', relatedWord: 'River' },
    { id: 47, type: 'sentence', label: 'Forests are home to many species.', relatedWord: 'Forest' },
    { id: 48, type: 'sentence', label: 'Nature is full of beauty and wonder.', relatedWord: 'Nature' }
  ],
  links: [
    // Word-word relationships
    { source: 1, target: 4, relationship: 'is a type of' },
    { source: 2, target: 4, relationship: 'is a type of' },
    { source: 3, target: 4, relationship: 'is a type of' },
    { source: 4, target: 6, relationship: 'comes from' },
    { source: 1, target: 5, relationship: 'grows on' },
    { source: 5, target: 6, relationship: 'is a type of' },
    { source: 6, target: 7, relationship: 'needs' },
    { source: 6, target: 8, relationship: 'needs' },
    { source: 4, target: 17, relationship: 'provides' },
    { source: 17, target: 18, relationship: 'supports' },
    { source: 17, target: 20, relationship: 'promotes' },
    { source: 8, target: 19, relationship: 'provides' },
    { source: 19, target: 18, relationship: 'supports' },
    
    // Word-sentence relationships
    { source: 1, target: 9, relationship: 'used in' },
    { source: 2, target: 10, relationship: 'used in' },
    { source: 3, target: 11, relationship: 'used in' },
    { source: 4, target: 12, relationship: 'used in' },
    { source: 5, target: 13, relationship: 'used in' },
    { source: 6, target: 14, relationship: 'used in' },
    { source: 7, target: 15, relationship: 'used in' },
    { source: 8, target: 16, relationship: 'used in' },
    { source: 17, target: 21, relationship: 'used in' },
    { source: 18, target: 22, relationship: 'used in' },
    { source: 19, target: 23, relationship: 'used in' },
    { source: 20, target: 24, relationship: 'used in' },
    
    // Sentence-word relationships
    { source: 9, target: 17, relationship: 'relates to' },
    { source: 10, target: 17, relationship: 'relates to' },
    { source: 11, target: 17, relationship: 'relates to' },
    { source: 12, target: 20, relationship: 'relates to' },
    { source: 13, target: 6, relationship: 'relates to' },
    { source: 14, target: 7, relationship: 'relates to' },
    { source: 14, target: 18, relationship: 'relates to' },
    { source: 15, target: 6, relationship: 'relates to' },
    { source: 16, target: 19, relationship: 'relates to' },
    { source: 16, target: 6, relationship: 'relates to' },
    { source: 21, target: 18, relationship: 'relates to' },
    { source: 22, target: 8, relationship: 'relates to' },
    { source: 23, target: 4, relationship: 'relates to' },
    { source: 24, target: 4, relationship: 'relates to' },
    
    // New word-word relationships
    // Animal relationships
    { source: 25, target: 28, relationship: 'is a type of' },
    { source: 26, target: 28, relationship: 'is a type of' },
    { source: 27, target: 28, relationship: 'is a type of' },
    { source: 28, target: 6, relationship: 'is a type of' },
    
    // Food relationships
    { source: 29, target: 32, relationship: 'is a type of' },
    { source: 30, target: 32, relationship: 'is a type of' },
    { source: 31, target: 32, relationship: 'is a type of' },
    { source: 4, target: 32, relationship: 'is a type of' },
    { source: 32, target: 17, relationship: 'provides' },
    
    // Nature relationships
    { source: 33, target: 36, relationship: 'is part of' },
    { source: 34, target: 36, relationship: 'is part of' },
    { source: 35, target: 36, relationship: 'is part of' },
    { source: 36, target: 6, relationship: 'includes' },
    { source: 34, target: 7, relationship: 'contains' },
    
    // New word-sentence relationships
    // Animal sentences
    { source: 25, target: 37, relationship: 'used in' },
    { source: 26, target: 38, relationship: 'used in' },
    { source: 27, target: 39, relationship: 'used in' },
    { source: 28, target: 40, relationship: 'used in' },
    
    // Food sentences
    { source: 29, target: 41, relationship: 'used in' },
    { source: 30, target: 42, relationship: 'used in' },
    { source: 31, target: 43, relationship: 'used in' },
    { source: 32, target: 44, relationship: 'used in' },
    
    // Nature sentences
    { source: 33, target: 45, relationship: 'used in' },
    { source: 34, target: 46, relationship: 'used in' },
    { source: 35, target: 47, relationship: 'used in' },
    { source: 36, target: 48, relationship: 'used in' },
    
    // New sentence-word relationships
    // Animal sentence relationships
    { source: 37, target: 28, relationship: 'relates to' },
    { source: 38, target: 28, relationship: 'relates to' },
    { source: 39, target: 28, relationship: 'relates to' },
    { source: 40, target: 36, relationship: 'relates to' },
    
    // Food sentence relationships
    { source: 41, target: 17, relationship: 'relates to' },
    { source: 42, target: 17, relationship: 'relates to' },
    { source: 43, target: 17, relationship: 'relates to' },
    { source: 44, target: 19, relationship: 'relates to' },
    
    // Nature sentence relationships
    { source: 45, target: 36, relationship: 'relates to' },
    { source: 46, target: 7, relationship: 'relates to' },
    { source: 46, target: 6, relationship: 'relates to' },
    { source: 47, target: 6, relationship: 'relates to' },
    { source: 47, target: 28, relationship: 'relates to' },
    { source: 48, target: 6, relationship: 'relates to' }
  ]
};

// Function to get node by id
export const getNodeById = (id) => {
  return knowledgeGraphData.nodes.find(node => node.id === id);
};

// Function to get related nodes
export const getRelatedNodes = (nodeId) => {
  const relatedLinks = knowledgeGraphData.links.filter(link => 
    link.source === nodeId || link.target === nodeId
  );
  
  const relatedNodeIds = relatedLinks.map(link => 
    link.source === nodeId ? link.target : link.source
  );
  
  return knowledgeGraphData.nodes.filter(node => 
    relatedNodeIds.includes(node.id)
  );
};

// Function to get relationship between two nodes
export const getRelationship = (sourceId, targetId) => {
  const link = knowledgeGraphData.links.find(link => 
    (link.source === sourceId && link.target === targetId) ||
    (link.source === targetId && link.target === sourceId)
  );
  
  return link ? link.relationship : null;
};