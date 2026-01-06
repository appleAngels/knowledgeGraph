// Knowledge Graph Data
// English learning data with nodes and links
export const knowledgeGraphData = {
  nodes: [
    // RAZ AA Level - Lesson 1: At the Lake
    { id: 1, type: 'word', label: 'Lake', definition: 'A large body of water surrounded by land.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Beautiful lake with clear water, surrounded by trees, realistic, high quality&image_size=square_hd', sentences: ['I see a lake.'] },
    { id: 2, type: 'word', label: 'I', definition: 'Used by a speaker to refer to himself or herself.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cartoon child pointing to themselves, simple style, friendly&image_size=square_hd', sentences: ['I see a lake.'] },
    { id: 3, type: 'word', label: 'See', definition: 'Perceive with the eyes; discern visually.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Eyes looking at something, simple style, friendly&image_size=square_hd', sentences: ['I see a duck.'] },
    { id: 4, type: 'word', label: 'Duck', definition: 'a bird that swims and makes a quacking noise (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute duck swimming in water, simple style, friendly&image_size=square_hd', sentences: ['A duck can fly and swim.', 'A duck has feathers and webbed feet.', 'I saw a duck at the pond near my home.'] },
    { id: 5, type: 'word', label: 'Boat', definition: 'A small vessel for traveling over water.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Small boat on a lake, simple style, friendly&image_size=square_hd', sentences: ['I see a boat.'] },
    { id: 6, type: 'word', label: 'Fish', definition: 'A limbless cold-blooded vertebrate animal with gills and fins and living wholly in water.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Colorful fish swimming in water, simple style, friendly&image_size=square_hd', sentences: ['I see a fish.'] },
    { id: 7, type: 'word', label: 'Frog', definition: 'A tailless amphibian with a short squat body, moist smooth skin, and very long hind legs for leaping.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute frog sitting on a lily pad, simple style, friendly&image_size=square_hd', sentences: ['I see a frog.'] },
    { id: 8, type: 'word', label: 'Turtle', definition: 'a reptile that moves slowly and has a shell (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute turtle swimming, simple style, friendly&image_size=square_hd', sentences: ['A turtle has scales on its legs and a shell on its back.', 'A turtle is a reptile with legs, and a snake is a reptile with no legs.', 'A sea turtle lays eggs in the sand.'] },
    
    // RAZ AA Level - Lesson 2: At the Park
    { id: 9, type: 'word', label: 'Park', definition: 'A public area with grass, trees, and places for recreation.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Children playing in a park with swings, slides, and green grass, realistic, high quality&image_size=square_hd', sentences: ['I go to the park.'] },
    { id: 10, type: 'word', label: 'Dog', definition: 'a four-legged mammal that barks and is often kept as a pet (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Friendly dog with wagging tail, simple style, cute&image_size=square_hd', sentences: ['A dog has fur, and a fish has scales.', 'May I pet your dog?', 'A young dog is a puppy.'] },
    { id: 11, type: 'word', label: 'Cat', definition: 'a four-legged mammal that meows and is often kept as a pet (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute cat sitting, simple style, friendly&image_size=square_hd', sentences: ['A cat, or pussycat, is a mammal that people keep as a pet.', 'A cat has fur, and a bird has feathers.', 'A young cat is a kitten.'] },
    { id: 12, type: 'word', label: 'Bird', definition: 'an animal with a backbone, a beak, wings, and feathers (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Colorful bird flying, simple style, friendly&image_size=square_hd', sentences: ['I can recognize a bird by its beak and wings.', 'A bird lays eggs.', 'A bird is warm-blooded and is the only animal with feathers.'] },
    { id: 13, type: 'word', label: 'Ball', definition: 'A spherical or roughly spherical object used in games.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Colorful ball for playing, simple style, friendly&image_size=square_hd', sentences: ['I see a ball.'] },
    { id: 14, type: 'word', label: 'Tree', definition: 'A woody perennial plant, typically having a single stem or trunk growing to a considerable height.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Green tree with leaves, simple style, friendly&image_size=square_hd', sentences: ['I see a tree.'] },
    
    // Core vocabulary
    { id: 15, type: 'word', label: 'Apple', definition: 'A round fruit with red, green, or yellow skin and firm white flesh.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Fresh red apple with green leaves, isolated on white background, realistic, high quality&image_size=square_hd', sentences: ['I eat an apple every day.'] },
    { id: 16, type: 'word', label: 'Banana', definition: 'A long curved fruit with a yellow skin.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Ripe yellow bananas bunch, isolated on white background, realistic, high quality&image_size=square_hd', sentences: ['Bananas are a good source of potassium.'] },
    { id: 17, type: 'word', label: 'Orange', definition: 'A round citrus fruit with a tough bright reddish-yellow rind.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Fresh orange citrus fruit, sliced and whole, isolated on white background, realistic, high quality&image_size=square_hd', sentences: ['Oranges are rich in vitamin C.'] },
    { id: 18, type: 'word', label: 'Fruit', definition: 'The sweet and fleshy product of a tree or other plant that contains seed and can be eaten as food.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Assorted fresh fruits including apples, bananas, oranges, grapes, isolated on white background, realistic, high quality&image_size=square_hd', sentences: ['Fruit is good for your health.'] },
    { id: 19, type: 'word', label: 'Plant', definition: 'A living organism of the kind exemplified by trees, shrubs, herbs, grasses, ferns, and mosses, typically growing in a permanent site, absorbing water and inorganic substances through its roots, and synthesizing nutrients in its leaves by photosynthesis using the green pigment chlorophyll.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Green plant with leaves and stem, growing in soil, realistic, high quality&image_size=square_hd', sentences: ['Plants need water to grow.'] },
    { id: 20, type: 'word', label: 'Water', definition: 'A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Clear water in a glass, with droplets, isolated on white background, realistic, high quality&image_size=square_hd', sentences: ['Water is essential for life.'] },
    { id: 21, type: 'word', label: 'Sun', definition: 'The star around which the earth orbits.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Bright sun with rays in a blue sky, realistic, high quality&image_size=square_hd', sentences: ['The sun provides energy for plants.'] },
    
    // Extended vocabulary
    { id: 22, type: 'word', label: 'Nutrition', definition: 'The process of providing or obtaining the food necessary for health and growth.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Healthy balanced diet with fruits, vegetables, grains, and proteins, realistic, high quality&image_size=square_hd', sentences: ['Good nutrition is important for growth.'] },
    { id: 23, type: 'word', label: 'Growth', definition: 'The process of increasing in size.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Plant growth stages from seed to mature plant, realistic, high quality&image_size=square_hd', sentences: ['Plants need sunlight for growth.'] },
    { id: 24, type: 'word', label: 'Energy', definition: 'The strength and vitality required for sustained physical or mental activity.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Sun energy rays shining on plants, realistic, high quality&image_size=square_hd', sentences: ['We get energy from food.'] },
    { id: 25, type: 'word', label: 'Health', definition: 'The state of being free from illness or injury.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Healthy person jogging in park, realistic, high quality&image_size=square_hd', sentences: ['Eating fruit promotes good health.'] },
    
    // New vocabulary - Animal
    { id: 26, type: 'word', label: 'Animal', definition: 'a living thing that can move from place to place and that eats plants, other animals, or both (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Assorted animals including dog, cat, bird, and fish, realistic, high quality&image_size=square_hd', sentences: ['An animal cannot make its own food, but a plant can.', 'An animal is a living thing that can move from place to place.', 'A horse, a lizard, and a bird are each a kind of animal.'] },
    { id: 27, type: 'word', label: 'Elephant', definition: 'A very large plant-eating mammal with a prehensile trunk, long curved ivory tusks, and large ears, native to Africa and southern Asia.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=African elephant with tusks, standing in savanna, realistic, high quality&image_size=square_hd', sentences: ['Elephants are the largest land animals.', 'Elephants have long trunks.'] },
    { id: 28, type: 'word', label: 'Lion', definition: 'A large tawny-colored cat that lives in prides, found in Africa and northwestern India.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Male lion with mane, standing in savanna, realistic, high quality&image_size=square_hd', sentences: ['Lions are known as the king of the jungle.', 'Lions hunt in groups called prides.'] },
    { id: 29, type: 'word', label: 'Habitat', definition: 'The natural home or environment of an animal, plant, or other organism.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Diverse animal habitats including forest, ocean, and savanna, realistic, high quality&image_size=square_hd', sentences: ['The rainforest is a rich habitat for many species.', 'Animals adapt to their specific habitats.'] },
    
    // New vocabulary - Food
    { id: 30, type: 'word', label: 'Pizza', definition: 'A flat, open-faced baked pie of Italian origin, typically round, made of thin bread dough spread with a spiced mixture of tomatoes and cheese.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Delicious pizza with cheese and toppings, isolated on white background, realistic, high quality&image_size=square_hd', sentences: ['Pizza is a popular Italian dish.'] },
    { id: 31, type: 'word', label: 'Burger', definition: 'A flat round cake of minced beef, fried or grilled and typically served in a bun.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Tasty burger with beef patty, lettuce, and tomato, isolated on white background, realistic, high quality&image_size=square_hd', sentences: ['Burgers are often served with fries.'] },
    { id: 32, type: 'word', label: 'Salad', definition: 'A mixture of raw greens, usually including lettuce, eaten either as a separate dish or with other food.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Fresh salad with greens, vegetables, and dressing, isolated on white background, realistic, high quality&image_size=square_hd', sentences: ['Salad is a healthy food choice.'] },
    { id: 33, type: 'word', label: 'Food', definition: 'Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Assorted food items including pizza, burger, salad, and fruit, realistic, high quality&image_size=square_hd', sentences: ['Food gives us the energy we need.'] },
    
    // New vocabulary - Nature
    { id: 34, type: 'word', label: 'Mountain', definition: 'A large natural elevation of the earth\'s surface rising abruptly from the surrounding level.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Tall mountain with snow-capped peak, blue sky background, realistic, high quality&image_size=square_hd', sentences: ['Mountains offer breathtaking views.'] },
    { id: 35, type: 'word', label: 'River', definition: 'A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Scenic river flowing through a valley, surrounded by trees, realistic, high quality&image_size=square_hd', sentences: ['Rivers provide water for plants and animals.'] },
    { id: 36, type: 'word', label: 'Forest', definition: 'A large area covered chiefly with trees and undergrowth.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Dense forest with tall trees, sunlight filtering through leaves, realistic, high quality&image_size=square_hd', sentences: ['Forests are home to many species.'] },
    { id: 37, type: 'word', label: 'Nature', definition: 'The phenomena of the physical world collectively, including plants, animals, the landscape, and other features and products of the earth.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Beautiful natural landscape with mountains, river, and forest, realistic, high quality&image_size=square_hd', sentences: ['Nature is full of beauty and wonder.'] },
    
    // New vocabulary - Farm Animal
    { id: 38, type: 'word', label: 'Pig', definition: 'a mammal with a flat snout, hooves, and very little hair (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute pig on a farm, simple style, friendly&image_size=square_hd', sentences: ['A pig is a mammal with a flat snout and hooves.', 'A pig is also called a hog.', 'A young pig is called a piglet.'] },
    { id: 39, type: 'word', label: 'Cow', definition: 'a large mammal with hooves that gives milk (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Friendly cow on a farm, simple style, cute&image_size=square_hd', sentences: ['A cow is a large mammal with hooves that gives milk.', 'The mate of a cow is a bull.', 'A young cow is called a calf.'] },
    { id: 40, type: 'word', label: 'Chicken', definition: 'a tame bird that is raised for its eggs and meat (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute chicken on a farm, simple style, friendly&image_size=square_hd', sentences: ['A chicken is a tame bird that people keep.', 'A chicken can be a hen or a rooster.', 'A chicken lives with others of its kind in a group called a flock.'] },
    { id: 41, type: 'word', label: 'Goat', definition: 'a medium-sized mammal with hooves, horns, and a short tail (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute goat on a farm, simple style, friendly&image_size=square_hd', sentences: ['A goat is a close relative of a sheep.', 'A person might keep a goat for its milk.', 'A male goat has a beard.'] },
    { id: 42, type: 'word', label: 'Sheep', definition: 'a medium-sized mammal with hooves and a thick, woolly coat (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute sheep on a farm, simple style, friendly&image_size=square_hd', sentences: ['"Baa" is the sound a sheep makes.', 'A sheep has a woolly coat that people use to make clothing.', 'A young sheep is a lamb.'] },
    
    // New vocabulary - Pet
    { id: 43, type: 'word', label: 'Bunny', definition: 'a small animal with long ears that hops and eats plants (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute bunny with long ears, simple style, friendly&image_size=square_hd', sentences: ['A bunny is a small mammal with long ears that hops and eats plants.', 'A bunny is the same as a rabbit.', 'A bunny has fur on its body, and a fish has scales.'] },
    { id: 44, type: 'word', label: 'Mouse', definition: 'a small mammal with a pointed nose and long, thin tail (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute mouse with pointed nose, simple style, friendly&image_size=square_hd', sentences: ['A mouse is a small mammal that looks like a baby rat.', 'A mouse is not the same as a rat, but they are cousins.', 'A mouse has fur on its body, and an owl has feathers.'] },
    { id: 45, type: 'word', label: 'Goldfish', definition: 'a small, orange fish that is often kept as a pet (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute goldfish swimming in bowl, simple style, friendly&image_size=square_hd', sentences: ['A goldfish is a small, orange fish that is often kept as a pet.', 'Goldfish need clean water to live.', 'A goldfish has scales, and a cat has fur.'] },
    { id: 46, type: 'word', label: 'Hamster', definition: 'a small mammal with large cheek pouches that looks a little like a mouse (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute hamster with cheek pouches, simple style, friendly&image_size=square_hd', sentences: ['A hamster is a small mammal with large cheek pouches.', 'Hamsters are often kept as pets in cages.', 'A hamster has fur, and a snake has scales.'] }
  ],
  links: [
    // RAZ AA Level - Lesson 1: At the Lake relationships
    { source: 1, target: 4, relationship: 'has' },
    { source: 1, target: 5, relationship: 'has' },
    { source: 1, target: 6, relationship: 'has' },
    { source: 1, target: 7, relationship: 'has' },
    { source: 1, target: 8, relationship: 'has' },
    { source: 2, target: 3, relationship: 'does' },
    { source: 3, target: 1, relationship: 'sees' },
    { source: 3, target: 4, relationship: 'sees' },
    { source: 3, target: 5, relationship: 'sees' },
    { source: 3, target: 6, relationship: 'sees' },
    { source: 3, target: 7, relationship: 'sees' },
    { source: 3, target: 8, relationship: 'sees' },
    
    // RAZ AA Level - Lesson 2: At the Park relationships
    { source: 9, target: 10, relationship: 'has' },
    { source: 9, target: 11, relationship: 'has' },
    { source: 9, target: 12, relationship: 'has' },
    { source: 9, target: 13, relationship: 'has' },
    { source: 9, target: 14, relationship: 'has' },
    { source: 2, target: 9, relationship: 'goes to' },
    { source: 3, target: 10, relationship: 'sees' },
    { source: 3, target: 11, relationship: 'sees' },
    { source: 3, target: 12, relationship: 'sees' },
    { source: 3, target: 13, relationship: 'sees' },
    { source: 3, target: 14, relationship: 'sees' },
    
    // Core vocabulary relationships
    { source: 15, target: 18, relationship: 'is a type of' },
    { source: 16, target: 18, relationship: 'is a type of' },
    { source: 17, target: 18, relationship: 'is a type of' },
    { source: 15, target: 14, relationship: 'grows on' },
    { source: 14, target: 19, relationship: 'is a type of' },
    { source: 19, target: 20, relationship: 'needs' },
    { source: 19, target: 21, relationship: 'needs' },
    
    // Extended vocabulary relationships
    { source: 18, target: 22, relationship: 'provides' },
    { source: 22, target: 23, relationship: 'supports' },
    { source: 22, target: 25, relationship: 'promotes' },
    { source: 21, target: 24, relationship: 'provides' },
    { source: 24, target: 23, relationship: 'supports' },
    
    // Animal relationships
    { source: 4, target: 26, relationship: 'is a type of' },
    { source: 6, target: 26, relationship: 'is a type of' },
    { source: 7, target: 26, relationship: 'is a type of' },
    { source: 8, target: 26, relationship: 'is a type of' },
    { source: 10, target: 26, relationship: 'is a type of' },
    { source: 11, target: 26, relationship: 'is a type of' },
    { source: 12, target: 26, relationship: 'is a type of' },
    { source: 26, target: 19, relationship: 'is a type of' },
    { source: 26, target: 29, relationship: 'lives in' },
    { source: 26, target: 33, relationship: 'needs' },
    { source: 6, target: 1, relationship: 'lives in' },
    { source: 27, target: 36, relationship: 'lives in' },
    { source: 28, target: 36, relationship: 'lives in' },
    
    // Food relationships
    { source: 30, target: 33, relationship: 'is a type of' },
    { source: 31, target: 33, relationship: 'is a type of' },
    { source: 32, target: 33, relationship: 'is a type of' },
    { source: 18, target: 33, relationship: 'is a type of' },
    { source: 33, target: 22, relationship: 'provides' },
    
    // Nature relationships
    { source: 34, target: 37, relationship: 'is part of' },
    { source: 35, target: 37, relationship: 'is part of' },
    { source: 36, target: 37, relationship: 'is part of' },
    { source: 1, target: 37, relationship: 'is part of' },
    { source: 35, target: 20, relationship: 'contains' },
    { source: 29, target: 37, relationship: 'is part of' },
    
    // Farm animal relationships
    { source: 38, target: 26, relationship: 'is a type of' },
    { source: 39, target: 26, relationship: 'is a type of' },
    { source: 40, target: 26, relationship: 'is a type of' },
    { source: 41, target: 26, relationship: 'is a type of' },
    { source: 42, target: 26, relationship: 'is a type of' },
    { source: 41, target: 42, relationship: 'is a close relative of' },
    
    // Pet relationships
    { source: 43, target: 26, relationship: 'is a type of' },
    { source: 44, target: 26, relationship: 'is a type of' },
    { source: 45, target: 26, relationship: 'is a type of' },
    { source: 46, target: 26, relationship: 'is a type of' }
  ]
};

// Function to get node by id
export const getNodeById = (id) => {
  return knowledgeGraphData.nodes.find(node => node.id === id);
};

// Function to get related nodes
export const getRelatedNodes = (nodeId, data = knowledgeGraphData) => {
  const relatedLinks = data.links.filter(link => {
    const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
    const targetId = typeof link.target === 'object' ? link.target.id : link.target;
    return sourceId === nodeId || targetId === nodeId;
  });
  
  const relatedNodeIds = relatedLinks.map(link => {
    const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
    const targetId = typeof link.target === 'object' ? link.target.id : link.target;
    return sourceId === nodeId ? targetId : sourceId;
  });
  
  return data.nodes.filter(node => 
    relatedNodeIds.includes(node.id)
  );
};

// Function to get relationship between two nodes
export const getRelationship = (sourceId, targetId, data = knowledgeGraphData) => {
  const link = data.links.find(link => {
    const linkSourceId = typeof link.source === 'object' ? link.source.id : link.source;
    const linkTargetId = typeof link.target === 'object' ? link.target.id : link.target;
    return (linkSourceId === sourceId && linkTargetId === targetId) ||
           (linkSourceId === targetId && linkTargetId === sourceId);
  });
  
  return link ? link.relationship : null;
};