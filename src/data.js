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
    { id: 8, type: 'word', label: 'Turtle', definition: 'a slow-moving reptile with a hard shell that protects its body (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute turtle swimming, simple style, friendly&image_size=square_hd', sentences: ['A turtle has a hard shell that protects its body.', 'Turtles are reptiles that move slowly on land and swim in water.', 'A sea turtle lays its eggs in the sand on beaches.'] },
    
    // RAZ AA Level - Lesson 2: At the Park
    { id: 9, type: 'word', label: 'Park', definition: 'A public area with grass, trees, and places for recreation.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Children playing in a park with swings, slides, and green grass, realistic, high quality&image_size=square_hd', sentences: ['I go to the park.'] },
    { id: 10, type: 'word', label: 'Dog', definition: 'a four-legged mammal that barks and is often kept as a pet (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Friendly dog with wagging tail, simple style, cute&image_size=square_hd', sentences: ['A dog is a loyal pet that barks to communicate.', 'Dogs have four legs and a tail that wags when they are happy.', 'A young dog is called a puppy.'] },
    { id: 11, type: 'word', label: 'Cat', definition: 'a four-legged mammal that meows and is often kept as a pet (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute cat sitting, simple style, friendly&image_size=square_hd', sentences: ['A cat is a furry pet that meows to get attention.', 'Cats are good at catching mice and other small animals.', 'A young cat is called a kitten.'] },
    { id: 12, type: 'word', label: 'Bird', definition: 'a warm-blooded animal with feathers, wings, and a beak (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Colorful bird flying, simple style, friendly&image_size=square_hd', sentences: ['A bird has feathers, wings, and a beak.', 'Birds can fly, but some like ostriches cannot.', 'Birds lay eggs with hard shells.'] },
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
    { id: 27, type: 'word', label: 'Elephant', definition: 'a large, gray mammal with tusks and a long trunk (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=African elephant with tusks, standing in savanna, realistic, high quality&image_size=square_hd', sentences: ['An elephant uses its trunk to breathe, smell, pick things up, and wash.', 'An elephant is the largest land animal, and a blue whale is the largest sea animal.', 'An elephant is a gray animal with tusks, big ears, and a long trunk.'] },
    { id: 28, type: 'word', label: 'Lion', definition: 'A large tawny-colored cat that lives in prides, found in Africa and northwestern India.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Male lion with mane, standing in savanna, realistic, high quality&image_size=square_hd', sentences: ['Lions are known as the king of the jungle.', 'Lions hunt in groups called prides.'] },
    // New vocabulary - Plains Animals
    { id: 47, type: 'word', label: 'Zebra', definition: 'a large mammal that looks like a horse and has black-and-white stripes (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Zebra with black and white stripes, standing in savanna, realistic, high quality&image_size=square_hd', sentences: ['A zebra is a large mammal that has black-and-white stripes.', 'A zebra and a tiger both have stripes.', 'A zebra and a horse both have feet with hooves.'] },
    { id: 48, type: 'word', label: 'Ostrich', definition: 'a very large flightless bird that has long legs and a long neck (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Ostrich with long legs and neck, standing in savanna, realistic, high quality&image_size=square_hd', sentences: ['An ostrich is a very large bird that has long legs and a long neck.', 'An ostrich and a penguin are two very different flightless birds.', 'An ostrich, a native of Africa, can run as fast as 40 miles per hour.'] },
    { id: 49, type: 'word', label: 'Crocodile', definition: 'a large reptile similar to an alligator but with a narrower head (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Crocodile with narrow head, resting near water, realistic, high quality&image_size=square_hd', sentences: ['A crocodile, or croc, is a dangerous aquatic reptile that has powerful jaws, sharp teeth, and scaly skin.', 'Unlike an alligator, a crocodile has two teeth that stick out when its mouth is closed.', 'A crocodile is a large, scaly reptile similar to an alligator but with a narrower head.'] },
    { id: 50, type: 'word', label: 'Plains', definition: 'large stretches of flat or rolling land, usually with few trees; prairies (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Wide open plains with grass and few trees, realistic, high quality&image_size=square_hd', sentences: ['Farms are often built on the plains, with their large stretches of flat land and rich soil.', 'Prairies are plains where grasses are the main plants.', 'Coastal plains, or lowlands, are areas of flat land next to an ocean or sea.'] },
    { id: 51, type: 'word', label: 'Giraffe', definition: 'a large mammal with a very long neck and long legs (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Giraffe with long neck, standing in savanna, realistic, high quality&image_size=square_hd', sentences: ['A giraffe has brown spots, and a cheetah has black spots.', 'A giraffe has a very long neck and a dark purple tongue.', 'A giraffe is the tallest living animal.'] },
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
    { id: 45, type: 'word', label: 'Goldfish', definition: 'a small, orange fish that is often kept as a pet (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute goldfish swimming in bowl, simple style, friendly&image_size=square_hd', sentences: ['A goldfish is a small, orange fish.', 'My goldfish lives in a glass bowl.', 'A goldfish only needs food once a day.'] },
    { id: 46, type: 'word', label: 'Hamster', definition: 'a small mammal with large cheek pouches that looks a little like a mouse (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute hamster with cheek pouches, simple style, friendly&image_size=square_hd', sentences: ['A hamster likes to eat vegetables.', 'A hamster\'s tail is shorter than a mouse\'s tail.', 'My hamster lives in a cage with a wheel.'] },
    
    // New vocabulary - Baby Animal
    { id: 52, type: 'word', label: 'Kid', definition: 'a young goat (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute baby goat (kid) playing, simple style, friendly&image_size=square_hd', sentences: ['A kid is a young goat.', 'A female kid grows up to be a doe or a nanny goat.', 'A male kid grows up to be a buck or a billy goat.'] },
    { id: 53, type: 'word', label: 'Puppy', definition: 'a young dog (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute puppy playing, simple style, friendly&image_size=square_hd', sentences: ['A puppy becomes a dog when it grows up.', 'A puppy, a kitten, a lamb, and a cub are all baby animals.', 'My puppy is not trained yet.'] },
    { id: 54, type: 'word', label: 'Kitten', definition: 'a young cat (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Cute kitten playing, simple style, friendly&image_size=square_hd', sentences: ['A kitten is blind for the first week of its life.', 'A cat usually gives birth to more than one kitten.', 'A kitten will grow up to be a cat.'] },
    // New vocabulary - Mammal
    { id: 55, type: 'word', label: 'Mammal', definition: 'a warm-blooded vertebrate animal with hair or fur, typically giving birth to live young and feeding them with milk (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Assorted mammals including dog, cat, elephant, realistic, high quality&image_size=square_hd', sentences: ['A mammal is a warm-blooded animal with hair or fur.', 'Most mammals give birth to live young and feed them with milk.', 'Humans, dogs, and elephants are all mammals.'] },
    
    // New vocabulary - Mammal related
    { id: 56, type: 'word', label: 'Warm blood', definition: 'having a body temperature that remains relatively constant regardless of the temperature of the surroundings (adjective)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Thermometer showing warm temperature, scientific, high quality&image_size=square_hd', sentences: ['Mammals are warm-blooded animals.', 'Warm-blooded animals can maintain a constant body temperature.', 'Birds are also warm-blooded creatures.'] },
    { id: 57, type: 'word', label: 'Hair', definition: 'a thread-like growth that forms part of the coat of mammals (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Human hair strands close up, realistic, high quality&image_size=square_hd', sentences: ['Humans have hair on their heads.', 'Mammals have hair or fur covering their bodies.', 'Hair helps to keep mammals warm.'] },
    { id: 58, type: 'word', label: 'Fur', definition: 'the thick hair covering the body of certain animals, especially mammals (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Soft animal fur texture, realistic, high quality&image_size=square_hd', sentences: ['Cats have soft fur.', 'Fur helps animals stay warm in cold weather.', 'Some mammals have thick fur for insulation.'] },
    { id: 59, type: 'word', label: 'Birth', definition: 'the process of bringing forth young from the womb (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Mother and newborn baby, tender moment, realistic, high quality&image_size=square_hd', sentences: ['Mammals give birth to live young.', 'The birth of a baby is a special moment.', 'Some animals lay eggs instead of giving birth.'] },
    { id: 60, type: 'word', label: 'Milk', definition: 'a white liquid produced by female mammals for feeding their young (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Glass of fresh milk, white liquid, realistic, high quality&image_size=square_hd', sentences: ['Mammals feed their young with milk.', 'Cows produce milk for their calves.', 'Humans drink milk from cows, goats, and other animals.'] },
    { id: 61, type: 'word', label: 'Young', definition: 'being in an early stage of life or growth (adjective)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Young animal babies, cute, realistic, high quality&image_size=square_hd', sentences: ['Mammals care for their young.', 'The young of a dog is called a puppy.', 'Young animals need special care and attention.'] },
    { id: 62, type: 'word', label: 'Feed', definition: 'to give food to; supply with nourishment (verb)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Mother feeding baby, nurturing, realistic, high quality&image_size=square_hd', sentences: ['Mammals feed their young with milk.', 'Farmers feed their animals every day.', 'Parents feed their children nutritious food.'] },
    { id: 63, type: 'word', label: 'Human', definition: 'a member of the primate species Homo sapiens, characterized by bipedalism and large brains (noun)', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Diverse group of humans, realistic, high quality&image_size=square_hd', sentences: ['Humans are mammals.', 'Humans have the ability to think and reason.', 'Humans live in communities and build societies.'] },
    
    // RAZ AA Level - The Market
    { id: 64, type: 'word', label: 'Market', definition: 'A place where people buy and sell goods, especially food and household items.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Busy farmers market with people, stalls, and fresh produce, realistic, high quality&image_size=square_hd', sentences: ['I go to the market.', 'The market has many stalls.'] },
    { id: 65, type: 'word', label: 'farmers', definition: 'People who grow crops and raise animals for food.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Friendly farmers at market selling produce, realistic, high quality&image_size=square_hd', sentences: ['The farmers sell vegetables.'] },
    { id: 66, type: 'word', label: 'tents', definition: 'Portable shelters made of fabric supported by poles and ropes.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Colorful market tents in a park, realistic, high quality&image_size=square_hd', sentences: ['The market has colorful tents.'] },
    { id: 67, type: 'word', label: 'vegetables', definition: 'Plants or parts of plants that are used as food, such as carrots, potatoes, and beans.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Fresh vegetables in wooden baskets at market, realistic, high quality&image_size=square_hd', sentences: ['I buy vegetables at the market.'] },
    { id: 68, type: 'word', label: 'fruits', definition: 'The sweet and fleshy product of a tree or other plant that contains seed and can be eaten as food.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Assorted fresh fruits at market stall, realistic, high quality&image_size=square_hd', sentences: ['The market sells ripe fruits.'] },
    { id: 69, type: 'word', label: 'flowers', definition: 'The seed-bearing part of a plant, consisting of reproductive organs (stamens and carpels) surrounded by bright petals and sepals.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Beautiful colorful flowers at market, realistic, high quality&image_size=square_hd', sentences: ['I smell the flowers.'] },
    { id: 70, type: 'word', label: 'jam', definition: 'A sweet spread made by cooking fruit with sugar until it thickens.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Jars of homemade jam at market stall, realistic, high quality&image_size=square_hd', sentences: ['I like strawberry jam.'] },
    { id: 71, type: 'word', label: 'cookies', definition: 'Small sweet baked cakes, typically round, flat, and crisp.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Fresh baked cookies at market, realistic, high quality&image_size=square_hd', sentences: ['The cookies are delicious.'] },
    
    // RAZ AA Level - The Movie
    { id: 72, type: 'word', label: 'Movie', definition: 'A story or event recorded by a camera as a set of moving images and shown in a cinema or on television.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Movie theater with screen showing film, realistic, high quality&image_size=square_hd', sentences: ['I watch a movie.'] },
    { id: 73, type: 'word', label: 'line', definition: 'A number of people standing one behind the other, waiting for something.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=People waiting in line at movie theater ticket counter, realistic, high quality&image_size=square_hd', sentences: ['We wait in line.'] },
    { id: 74, type: 'word', label: 'tickets', definition: 'Pieces of paper that give you the right to enter a place or travel somewhere.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Movie tickets with colorful design, realistic, high quality&image_size=square_hd', sentences: ['I buy tickets.'] },
    { id: 75, type: 'word', label: 'doors', definition: 'Movable barriers used to close off an entrance, exit, or passage.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Movie theater doors with stars on carpet, realistic, high quality&image_size=square_hd', sentences: ['We go through the doors.'] },
    { id: 76, type: 'word', label: 'seats', definition: 'Furniture with a raised surface for sitting on, typically having a back and often armrests.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Movie theater seats with people sitting, realistic, high quality&image_size=square_hd', sentences: ['We sit in seats.'] },
    { id: 77, type: 'word', label: 'popcorn', definition: 'Corn that expands from the kernel and puffs up when heated, eaten as a snack.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Fresh popcorn in red and white bucket, realistic, high quality&image_size=square_hd', sentences: ['I eat popcorn.'] },
    { id: 78, type: 'word', label: 'screen', definition: 'A flat panel or area on an electronic device where images and text are displayed.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Movie screen showing film, realistic, high quality&image_size=square_hd', sentences: ['The movie is on the screen.'] },
    { id: 79, type: 'word', label: 'dark', definition: 'With little or no light.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Dark movie theater with screen glowing, realistic, high quality&image_size=square_hd', sentences: ['The theater is dark.'] },
    
    // RAZ AA Level - Mom
    { id: 80, type: 'word', label: 'Mom', definition: 'A mother; a female parent.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Warm and loving mother, realistic, high quality&image_size=square_hd', sentences: ['I love my mom.'] },
    { id: 81, type: 'word', label: 'voice', definition: 'The sound produced by vibrations of the vocal cords.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Mom waking up child with gentle voice, realistic, high quality&image_size=square_hd', sentences: ['I hear her voice.'] },
    { id: 82, type: 'word', label: 'help', definition: 'To make it easier for someone to do something by offering one\'s services or resources.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Mom helping child eat breakfast, realistic, high quality&image_size=square_hd', sentences: ['She gives me help.'] },
    { id: 83, type: 'word', label: 'hug', definition: 'To squeeze (someone) tightly in one\'s arms, typically to express affection.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Mom hugging child goodbye, realistic, high quality&image_size=square_hd', sentences: ['She gives me a hug.'] },
    { id: 84, type: 'word', label: 'wave', definition: 'To move one\'s hand to and fro in greeting or farewell.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Mom waving goodbye to child, realistic, high quality&image_size=square_hd', sentences: ['I see her wave.'] },
    { id: 85, type: 'word', label: 'smile', definition: 'A pleased, kind, or amused facial expression, typically with the corners of the mouth turned up.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Mom smiling at family dinner, realistic, high quality&image_size=square_hd', sentences: ['I love her smile.'] },
    { id: 86, type: 'word', label: 'eyes', definition: 'Organs of sight.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Mom with warm, loving eyes, realistic, high quality&image_size=square_hd', sentences: ['I look into her eyes.'] },
    { id: 87, type: 'word', label: 'tuck', definition: 'To make (someone) comfortable in bed by pulling the covers up around them.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Mom tucking child into bed, realistic, high quality&image_size=square_hd', sentences: ['She gives me a tuck.'] },
    { id: 88, type: 'word', label: 'love', definition: 'An intense feeling of deep affection.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Mom kissing child goodnight, realistic, high quality&image_size=square_hd', sentences: ['I feel her love.'] },
    
    // RAZ AA Level - The Zoo
    { id: 89, type: 'word', label: 'Zoo', definition: 'A place where wild animals are kept for public viewing and conservation.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Busy zoo with animals and visitors, realistic, high quality&image_size=square_hd', sentences: ['I go to the zoo.'] },
    { id: 90, type: 'word', label: 'lion', definition: 'A large cat with a mane, living in Africa and Asia.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Male lion with mane, realistic, high quality&image_size=square_hd', sentences: ['The lion is big.'] },
    { id: 91, type: 'word', label: 'tiger', definition: 'A large cat with stripes, living in Asia.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Tiger with stripes, realistic, high quality&image_size=square_hd', sentences: ['The tiger has stripes.'] },
    { id: 92, type: 'word', label: 'bear', definition: 'A large mammal with thick fur.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Black bear, realistic, high quality&image_size=square_hd', sentences: ['The bear is strong.'] },
    { id: 93, type: 'word', label: 'wolf', definition: 'A wild dog with a sharp sense of smell.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Wolf, realistic, high quality&image_size=square_hd', sentences: ['The wolf howls.'] },
    { id: 94, type: 'word', label: 'ostrich', definition: 'A large flightless bird from Africa.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Ostrich with long neck and legs, realistic, high quality&image_size=square_hd', sentences: ['The ostrich has a long neck.'] },
    { id: 95, type: 'word', label: 'monkey', definition: 'A primate with a tail, living in trees.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Monkey sitting, realistic, high quality&image_size=square_hd', sentences: ['The monkey climbs trees.'] },
    { id: 96, type: 'word', label: 'snake', definition: 'A long, legless reptile.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Snake, realistic, high quality&image_size=square_hd', sentences: ['The snake is long.'] },
    { id: 97, type: 'word', label: 'zebra', definition: 'A horse-like animal with black and white stripes.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Zebra with black and white stripes, realistic, high quality&image_size=square_hd', sentences: ['The zebra has stripes.'] },
    
    // Colors
    { id: 98, type: 'word', label: 'Color', definition: 'The property possessed by an object of producing different sensations on the eye as a result of the way the object reflects or emits light.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Rainbow with all colors, realistic, high quality&image_size=square_hd', sentences: ['Color makes the world beautiful.'] },
    { id: 99, type: 'word', label: 'Blue', definition: 'A color intermediate between green and violet, as of the sky or sea.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Blue sky, realistic, high quality&image_size=square_hd', sentences: ['The sky is blue.'] },
    
    // Blue objects
    { id: 100, type: 'word', label: 'sky', definition: 'The region of the atmosphere and outer space seen from the earth.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Blue sky with clouds, realistic, high quality&image_size=square_hd', sentences: ['The blue sky is beautiful.'] },
    { id: 101, type: 'word', label: 'helmet', definition: 'A hard or padded protective hat, especially worn by cyclists and construction workers.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Blue bicycle helmet, realistic, high quality&image_size=square_hd', sentences: ['He wears a blue helmet.'] },
    { id: 102, type: 'word', label: 'bike', definition: 'A bicycle.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Blue bicycle, realistic, high quality&image_size=square_hd', sentences: ['I ride a blue bike.'] },
    { id: 103, type: 'word', label: 'bottle', definition: 'A glass or plastic container with a narrow neck, used for storing drinks or other liquids.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Blue water bottle, realistic, high quality&image_size=square_hd', sentences: ['She drinks from a blue bottle.'] },
    { id: 104, type: 'word', label: 'bench', definition: 'A long seat for several people, typically made of wood or metal and fixed in place.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Blue bench in garden, realistic, high quality&image_size=square_hd', sentences: ['We sit on a blue bench.'] },
    { id: 105, type: 'word', label: 'swing', definition: 'A seat suspended by ropes or chains, on which someone may sit and swing back and forth.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Blue swing, realistic, high quality&image_size=square_hd', sentences: ['I play on a blue swing.'] },
    { id: 106, type: 'word', label: 'slide', definition: 'A smooth sloping surface, especially one for children to slide down for amusement.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Blue slide in playground, realistic, high quality&image_size=square_hd', sentences: ['The blue slide is fun.'] },
    { id: 107, type: 'word', label: 'playground', definition: 'An outdoor area provided for children to play in, especially at a school or public park.', image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=Playground with blue equipment, realistic, high quality&image_size=square_hd', sentences: ['The playground has blue equipment.'] }
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
    { source: 27, target: 26, relationship: 'is a type of' },
    { source: 28, target: 26, relationship: 'is a type of' },
    { source: 47, target: 26, relationship: 'is a type of' },
    { source: 48, target: 26, relationship: 'is a type of' },
    { source: 49, target: 26, relationship: 'is a type of' },
    { source: 51, target: 26, relationship: 'is a type of' },
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
    { source: 46, target: 26, relationship: 'is a type of' },
    
    // Plains animal relationships
    { source: 47, target: 26, relationship: 'is a type of' },
    { source: 48, target: 26, relationship: 'is a type of' },
    { source: 49, target: 26, relationship: 'is a type of' },
    { source: 51, target: 26, relationship: 'is a type of' },
    
    // Baby animal relationships
    { source: 52, target: 26, relationship: 'is a type of' },
    { source: 53, target: 26, relationship: 'is a type of' },
    { source: 54, target: 26, relationship: 'is a type of' },
    
    // Specific baby animal relationships
    { source: 53, target: 10, relationship: 'is a young of' },
    { source: 54, target: 11, relationship: 'is a young of' },
    { source: 52, target: 41, relationship: 'is a young of' },
    
    // Mammal relationships
    { source: 55, target: 26, relationship: 'is a type of' },
    
    // Mammal connections
    { source: 10, target: 55, relationship: 'is a type of' },
    { source: 11, target: 55, relationship: 'is a type of' },
    { source: 27, target: 55, relationship: 'is a type of' },
    { source: 47, target: 55, relationship: 'is a type of' },
    { source: 51, target: 55, relationship: 'is a type of' },
    { source: 38, target: 55, relationship: 'is a type of' },
    { source: 39, target: 55, relationship: 'is a type of' },
    { source: 41, target: 55, relationship: 'is a type of' },
    { source: 42, target: 55, relationship: 'is a type of' },
    { source: 43, target: 55, relationship: 'is a type of' },
    { source: 44, target: 55, relationship: 'is a type of' },
    { source: 46, target: 55, relationship: 'is a type of' },
    { source: 52, target: 55, relationship: 'is a type of' },
    { source: 53, target: 55, relationship: 'is a type of' },
    { source: 54, target: 55, relationship: 'is a type of' },
    
    // Human connection to Mammal
    { source: 63, target: 55, relationship: 'is a type of' },
    
    // Mammal attributes and related connections
    { source: 55, target: 56, relationship: 'has' },
    { source: 55, target: 57, relationship: 'has' },
    { source: 55, target: 58, relationship: 'has' },
    { source: 55, target: 59, relationship: 'does' },
    { source: 55, target: 60, relationship: 'produces' },
    { source: 55, target: 61, relationship: 'cares for' },
    { source: 55, target: 62, relationship: 'does' },
    
    // Human specific connections
    { source: 63, target: 57, relationship: 'has' },
    
    // Animal specific connections
    { source: 10, target: 57, relationship: 'has' },
    { source: 10, target: 58, relationship: 'has' },
    { source: 11, target: 57, relationship: 'has' },
    { source: 11, target: 58, relationship: 'has' },
    { source: 27, target: 57, relationship: 'has' },
    { source: 27, target: 58, relationship: 'has' },
    { source: 39, target: 60, relationship: 'produces' },
    
    // Market relationships
    { source: 64, target: 65, relationship: 'has' },
    { source: 64, target: 66, relationship: 'has' },
    { source: 64, target: 67, relationship: 'has' },
    { source: 64, target: 68, relationship: 'has' },
    { source: 64, target: 69, relationship: 'has' },
    { source: 64, target: 70, relationship: 'has' },
    { source: 64, target: 71, relationship: 'has' },
    { source: 65, target: 63, relationship: 'is a type of' },
    { source: 67, target: 19, relationship: 'is a type of' },
    { source: 68, target: 18, relationship: 'is a type of' },
    { source: 69, target: 19, relationship: 'is a type of' },
    { source: 70, target: 33, relationship: 'is a type of' },
    { source: 71, target: 33, relationship: 'is a type of' },
    
    // Movie relationships
    { source: 72, target: 73, relationship: 'has' },
    { source: 72, target: 74, relationship: 'has' },
    { source: 72, target: 75, relationship: 'has' },
    { source: 72, target: 76, relationship: 'has' },
    { source: 72, target: 77, relationship: 'has' },
    { source: 72, target: 78, relationship: 'has' },
    { source: 72, target: 79, relationship: 'has' },
    { source: 77, target: 33, relationship: 'is a type of' },
    
    // Mom relationships
    { source: 80, target: 81, relationship: 'has' },
    { source: 80, target: 82, relationship: 'gives' },
    { source: 80, target: 83, relationship: 'gives' },
    { source: 80, target: 84, relationship: 'does' },
    { source: 80, target: 85, relationship: 'has' },
    { source: 80, target: 86, relationship: 'has' },
    { source: 80, target: 87, relationship: 'does' },
    { source: 80, target: 88, relationship: 'shows' },
    { source: 80, target: 63, relationship: 'is a type of' },
    { source: 80, target: 55, relationship: 'is a type of' },
    
    // Zoo relationships
    { source: 89, target: 90, relationship: 'has' },
    { source: 89, target: 91, relationship: 'has' },
    { source: 89, target: 92, relationship: 'has' },
    { source: 89, target: 93, relationship: 'has' },
    { source: 89, target: 94, relationship: 'has' },
    { source: 89, target: 95, relationship: 'has' },
    { source: 89, target: 96, relationship: 'has' },
    { source: 89, target: 97, relationship: 'has' },
    { source: 90, target: 26, relationship: 'is a type of' },
    { source: 91, target: 26, relationship: 'is a type of' },
    { source: 92, target: 26, relationship: 'is a type of' },
    { source: 93, target: 26, relationship: 'is a type of' },
    { source: 94, target: 26, relationship: 'is a type of' },
    { source: 95, target: 26, relationship: 'is a type of' },
    { source: 96, target: 26, relationship: 'is a type of' },
    { source: 97, target: 26, relationship: 'is a type of' },
    { source: 90, target: 55, relationship: 'is a type of' },
    { source: 91, target: 55, relationship: 'is a type of' },
    { source: 92, target: 55, relationship: 'is a type of' },
    { source: 93, target: 55, relationship: 'is a type of' },
    { source: 95, target: 55, relationship: 'is a type of' },
    { source: 97, target: 55, relationship: 'is a type of' },
    { source: 94, target: 12, relationship: 'is a type of' },
    { source: 90, target: 28, relationship: 'is a type of' },
    { source: 47, target: 89, relationship: 'is at' },
    
    // Color relationships
    { source: 99, target: 98, relationship: 'is a type of' },
    { source: 100, target: 99, relationship: 'is' },
    { source: 101, target: 99, relationship: 'is' },
    { source: 102, target: 99, relationship: 'is' },
    { source: 103, target: 99, relationship: 'is' },
    { source: 104, target: 99, relationship: 'is' },
    { source: 105, target: 99, relationship: 'is' },
    { source: 106, target: 99, relationship: 'is' },
    { source: 107, target: 99, relationship: 'is' }
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