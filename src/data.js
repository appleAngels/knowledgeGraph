// Knowledge Graph Data
// English learning data with nodes and links

// Helper function to create multiple links with the same source
export const createLinks = (source, targets) => {
  return targets.map(target => ({ source, target }));
};

export const knowledgeGraphData = {
  nodes: [
    // RAZ AA Level - Lesson 1: At the Lake
    { id: 1, type: 'word', label: 'Lake', definition: 'A large body of water surrounded by land.', image: 'https://picsum.photos/id/71/300/300', sentences: ['I see a lake.'] },
    { id: 2, type: 'word', label: 'I', definition: 'Used by a speaker to refer to himself or herself.', image: 'https://picsum.photos/id/599/300/300', sentences: ['I see a lake.'] },
    { id: 3, type: 'word', label: 'See', definition: 'Perceive with the eyes; discern visually.', image: 'https://picsum.photos/id/540/300/300', sentences: ['I see a duck.'] },
    { id: 4, type: 'word', label: 'Duck', definition: 'a bird that swims and makes a quacking noise (noun)', image: 'https://picsum.photos/id/790/300/300', sentences: ['A duck can fly and swim.', 'A duck has feathers and webbed feet.', 'I saw a duck at the pond near my home.'] },
    { id: 5, type: 'word', label: 'Boat', definition: 'A small vessel for traveling over water.', image: 'https://picsum.photos/id/235/300/300', sentences: ['I see a boat.'] },
    { id: 6, type: 'word', label: 'Fish', definition: 'A limbless cold-blooded vertebrate animal with gills and fins and living wholly in water.', image: 'https://picsum.photos/id/742/300/300', sentences: ['I see a fish.'] },
    { id: 7, type: 'word', label: 'Frog', definition: 'A tailless amphibian with a short squat body, moist smooth skin, and very long hind legs for leaping.', image: 'https://picsum.photos/id/793/300/300', sentences: ['I see a frog.'] },
    { id: 8, type: 'word', label: 'Turtle', definition: 'a slow-moving reptile with a hard shell that protects its body (noun)', image: 'https://picsum.photos/id/193/300/300', sentences: ['A turtle has a hard shell that protects its body.', 'Turtles are reptiles that move slowly on land and swim in water.', 'A sea turtle lays its eggs in the sand on beaches.'] },
    
    // RAZ AA Level - Lesson 2: At the Park
    { id: 9, type: 'word', label: 'Park', definition: 'A public area with grass, trees, and places for recreation.', image: 'https://picsum.photos/id/193/300/300', sentences: ['I go to the park.'] },
    { id: 10, type: 'word', label: 'Dog', definition: 'a four-legged mammal that barks and is often kept as a pet (noun)', image: 'https://picsum.photos/id/865/300/300', sentences: ['A dog is a loyal pet that barks to communicate.', 'Dogs have four legs and a tail that wags when they are happy.', 'A young dog is called a puppy.'] },
    { id: 11, type: 'word', label: 'Cat', definition: 'a four-legged mammal that meows and is often kept as a pet (noun)', image: 'https://picsum.photos/id/89/300/300', sentences: ['A cat is a furry pet that meows to get attention.', 'Cats are good at catching mice and other small animals.', 'A young cat is called a kitten.'] },
    { id: 12, type: 'word', label: 'Bird', definition: 'a warm-blooded animal with feathers, wings, and a beak (noun)', image: 'https://picsum.photos/id/915/300/300', sentences: ['A bird has feathers, wings, and a beak.', 'Birds can fly, but some like ostriches cannot.', 'Birds lay eggs with hard shells.'] },
    { id: 13, type: 'word', label: 'Ball', definition: 'A spherical or roughly spherical object used in games.', image: 'https://picsum.photos/id/756/300/300', sentences: ['I see a ball.'] },
    { id: 14, type: 'word', label: 'Tree', definition: 'A woody perennial plant, typically having a single stem or trunk growing to a considerable height.', image: 'https://picsum.photos/id/165/300/300', sentences: ['I see a tree.'] },
    
    // Core vocabulary
    { id: 15, type: 'word', label: 'Apple', definition: 'A round fruit with red, green, or yellow skin and firm white flesh.', image: 'https://picsum.photos/id/369/300/300', sentences: ['I eat an apple every day.'] },
    { id: 16, type: 'word', label: 'Banana', definition: 'A long curved fruit with a yellow skin.', image: 'https://picsum.photos/id/903/300/300', sentences: ['Bananas are a good source of potassium.'] },
    { id: 17, type: 'word', label: 'Orange', definition: 'A round citrus fruit with a tough bright reddish-yellow rind.', image: 'https://picsum.photos/id/545/300/300', sentences: ['Oranges are rich in vitamin C.'] },
    { id: 18, type: 'word', label: 'Fruit', definition: 'The sweet and fleshy product of a tree or other plant that contains seed and can be eaten as food.', image: 'https://picsum.photos/id/968/300/300', sentences: ['Fruit is good for your health.'] },
    { id: 19, type: 'word', label: 'Plant', definition: 'A living organism of the kind exemplified by trees, shrubs, herbs, grasses, ferns, and mosses, typically growing in a permanent site, absorbing water and inorganic substances through its roots, and synthesizing nutrients in its leaves by photosynthesis using the green pigment chlorophyll.', image: 'https://picsum.photos/id/691/300/300', sentences: ['Plants need water to grow.'] },
    { id: 20, type: 'word', label: 'Water', definition: 'A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.', image: 'https://picsum.photos/id/98/300/300', sentences: ['Water is essential for life.'] },
    { id: 21, type: 'word', label: 'Sun', definition: 'The star around which the earth orbits.', image: 'https://picsum.photos/id/314/300/300', sentences: ['The sun provides energy for plants.'] },
    
    // Extended vocabulary
    { id: 22, type: 'word', label: 'Nutrition', definition: 'The process of providing or obtaining the food necessary for health and growth.', image: 'https://picsum.photos/id/163/300/300', sentences: ['Good nutrition is important for growth.'] },
    { id: 23, type: 'word', label: 'Growth', definition: 'The process of increasing in size.', image: 'https://picsum.photos/id/786/300/300', sentences: ['Plants need sunlight for growth.'] },
    { id: 24, type: 'word', label: 'Energy', definition: 'The strength and vitality required for sustained physical or mental activity.', image: 'https://picsum.photos/id/472/300/300', sentences: ['We get energy from food.'] },
    { id: 25, type: 'word', label: 'Health', definition: 'The state of being free from illness or injury.', image: 'https://picsum.photos/id/630/300/300', sentences: ['Eating fruit promotes good health.'] },
    
    // New vocabulary - Animal
    { id: 26, type: 'word', label: 'Animal', definition: 'a living thing that can move from place to place and that eats plants, other animals, or both (noun)', image: 'https://picsum.photos/id/725/300/300', sentences: ['An animal cannot make its own food, but a plant can.', 'An animal is a living thing that can move from place to place.', 'A horse, a lizard, and a bird are each a kind of animal.'] },
    { id: 27, type: 'word', label: 'Elephant', definition: 'a large, gray mammal with tusks and a long trunk (noun)', image: 'https://picsum.photos/id/963/300/300', sentences: ['An elephant uses its trunk to breathe, smell, pick things up, and wash.', 'An elephant is the largest land animal, and a blue whale is the largest sea animal.', 'An elephant is a gray animal with tusks, big ears, and a long trunk.'] },
    { id: 28, type: 'word', label: 'Lion', definition: 'A large tawny-colored cat that lives in prides, found in Africa and northwestern India.', image: 'https://picsum.photos/id/975/300/300', sentences: ['Lions are known as the king of the jungle.', 'Lions hunt in groups called prides.'] },
    // New vocabulary - Plains Animals
    { id: 47, type: 'word', label: 'Zebra', definition: 'a large mammal that looks like a horse and has black-and-white stripes (noun)', image: 'https://picsum.photos/id/183/300/300', sentences: ['A zebra is a large mammal that has black-and-white stripes.', 'A zebra and a tiger both have stripes.', 'A zebra and a horse both have feet with hooves.'] },
    { id: 48, type: 'word', label: 'Ostrich', definition: 'a very large flightless bird that has long legs and a long neck (noun)', image: 'https://picsum.photos/id/342/300/300', sentences: ['An ostrich is a very large bird that has long legs and a long neck.', 'An ostrich and a penguin are two very different flightless birds.', 'An ostrich, a native of Africa, can run as fast as 40 miles per hour.'] },
    { id: 49, type: 'word', label: 'Crocodile', definition: 'a large reptile similar to an alligator but with a narrower head (noun)', image: 'https://picsum.photos/id/89/300/300', sentences: ['A crocodile, or croc, is a dangerous aquatic reptile that has powerful jaws, sharp teeth, and scaly skin.', 'Unlike an alligator, a crocodile has two teeth that stick out when its mouth is closed.', 'A crocodile is a large, scaly reptile similar to an alligator but with a narrower head.'] },
    { id: 50, type: 'word', label: 'Plains', definition: 'large stretches of flat or rolling land, usually with few trees; prairies (noun)', image: 'https://picsum.photos/id/280/300/300', sentences: ['Farms are often built on the plains, with their large stretches of flat land and rich soil.', 'Prairies are plains where grasses are the main plants.', 'Coastal plains, or lowlands, are areas of flat land next to an ocean or sea.'] },
    { id: 51, type: 'word', label: 'Giraffe', definition: 'a large mammal with a very long neck and long legs (noun)', image: 'https://picsum.photos/id/516/300/300', sentences: ['A giraffe has brown spots, and a cheetah has black spots.', 'A giraffe has a very long neck and a dark purple tongue.', 'A giraffe is the tallest living animal.'] },
    { id: 29, type: 'word', label: 'Habitat', definition: 'The natural home or environment of an animal, plant, or other organism.', image: 'https://picsum.photos/id/184/300/300', sentences: ['The rainforest is a rich habitat for many species.', 'Animals adapt to their specific habitats.'] },
    
    // New vocabulary - Food
    { id: 30, type: 'word', label: 'Pizza', definition: 'A flat, open-faced baked pie of Italian origin, typically round, made of thin bread dough spread with a spiced mixture of tomatoes and cheese.', image: 'https://picsum.photos/id/581/300/300', sentences: ['Pizza is a popular Italian dish.'] },
    { id: 31, type: 'word', label: 'Burger', definition: 'A flat round cake of minced beef, fried or grilled and typically served in a bun.', image: 'https://picsum.photos/id/823/300/300', sentences: ['Burgers are often served with fries.'] },
    { id: 32, type: 'word', label: 'Salad', definition: 'A mixture of raw greens, usually including lettuce, eaten either as a separate dish or with other food.', image: 'https://picsum.photos/id/62/300/300', sentences: ['Salad is a healthy food choice.'] },
    { id: 33, type: 'word', label: 'Food', definition: 'Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth.', image: 'https://picsum.photos/id/356/300/300', sentences: ['Food gives us the energy we need.'] },
    
    // New vocabulary - Nature
    { id: 34, type: 'word', label: 'Mountain', definition: 'A large natural elevation of the earth\'s surface rising abruptly from the surrounding level.', image: 'https://picsum.photos/id/207/300/300', sentences: ['Mountains offer breathtaking views.'] },
    { id: 35, type: 'word', label: 'River', definition: 'A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.', image: 'https://picsum.photos/id/765/300/300', sentences: ['Rivers provide water for plants and animals.'] },
    { id: 36, type: 'word', label: 'Forest', definition: 'A large area covered chiefly with trees and undergrowth.', image: 'https://picsum.photos/id/395/300/300', sentences: ['Forests are home to many species.'] },
    { id: 37, type: 'word', label: 'Nature', definition: 'The phenomena of the physical world collectively, including plants, animals, the landscape, and other features and products of the earth.', image: 'https://picsum.photos/id/611/300/300', sentences: ['Nature is full of beauty and wonder.'] },
    
    // New vocabulary - Farm Animal
    { id: 38, type: 'word', label: 'Pig', definition: 'a mammal with a flat snout, hooves, and very little hair (noun)', image: 'https://picsum.photos/id/920/300/300', sentences: ['A pig is a mammal with a flat snout and hooves.', 'A pig is also called a hog.', 'A young pig is called a piglet.'] },
    { id: 39, type: 'word', label: 'Cow', definition: 'a large mammal with hooves that gives milk (noun)', image: 'https://picsum.photos/id/414/300/300', sentences: ['A cow is a large mammal with hooves that gives milk.', 'The mate of a cow is a bull.', 'A young cow is called a calf.'] },
    { id: 40, type: 'word', label: 'Chicken', definition: 'a tame bird that is raised for its eggs and meat (noun)', image: 'https://picsum.photos/id/644/300/300', sentences: ['A chicken is a tame bird that people keep.', 'A chicken can be a hen or a rooster.', 'A chicken lives with others of its kind in a group called a flock.'] },
    { id: 41, type: 'word', label: 'Goat', definition: 'a medium-sized mammal with hooves, horns, and a short tail (noun)', image: 'https://picsum.photos/id/157/300/300', sentences: ['A goat is a close relative of a sheep.', 'A person might keep a goat for its milk.', 'A male goat has a beard.'] },
    { id: 42, type: 'word', label: 'Sheep', definition: 'a medium-sized mammal with hooves and a thick, woolly coat (noun)', image: 'https://picsum.photos/id/16/300/300', sentences: ['"Baa" is the sound a sheep makes.', 'A sheep has a woolly coat that people use to make clothing.', 'A young sheep is a lamb.'] },
    
    // New vocabulary - Pet
    { id: 43, type: 'word', label: 'Bunny', definition: 'a small animal with long ears that hops and eats plants (noun)', image: 'https://picsum.photos/id/533/300/300', sentences: ['A bunny is a small mammal with long ears that hops and eats plants.', 'A bunny is the same as a rabbit.', 'A bunny has fur on its body, and a fish has scales.'] },
    { id: 44, type: 'word', label: 'Mouse', definition: 'a small mammal with a pointed nose and long, thin tail (noun)', image: 'https://picsum.photos/id/434/300/300', sentences: ['A mouse is a small mammal that looks like a baby rat.', 'A mouse is not the same as a rat, but they are cousins.', 'A mouse has fur on its body, and an owl has feathers.'] },
    { id: 45, type: 'word', label: 'Goldfish', definition: 'a small, orange fish that is often kept as a pet (noun)', image: 'https://picsum.photos/id/561/300/300', sentences: ['A goldfish is a small, orange fish.', 'My goldfish lives in a glass bowl.', 'A goldfish only needs food once a day.'] },
    { id: 46, type: 'word', label: 'Hamster', definition: 'a small mammal with large cheek pouches that looks a little like a mouse (noun)', image: 'https://picsum.photos/id/793/300/300', sentences: ['A hamster likes to eat vegetables.', 'A hamster\'s tail is shorter than a mouse\'s tail.', 'My hamster lives in a cage with a wheel.'] },
    
    // New vocabulary - Baby Animal
    { id: 52, type: 'word', label: 'Kid', definition: 'a young goat (noun)', image: 'https://picsum.photos/id/155/300/300', sentences: ['A kid is a young goat.', 'A female kid grows up to be a doe or a nanny goat.', 'A male kid grows up to be a buck or a billy goat.'] },
    { id: 53, type: 'word', label: 'Puppy', definition: 'a young dog (noun)', image: 'https://picsum.photos/id/991/300/300', sentences: ['A puppy becomes a dog when it grows up.', 'A puppy, a kitten, a lamb, and a cub are all baby animals.', 'My puppy is not trained yet.'] },
    { id: 54, type: 'word', label: 'Kitten', definition: 'a young cat (noun)', image: 'https://picsum.photos/id/739/300/300', sentences: ['A kitten is blind for the first week of its life.', 'A cat usually gives birth to more than one kitten.', 'A kitten will grow up to be a cat.'] },
    // New vocabulary - Mammal
    { id: 55, type: 'word', label: 'Mammal', definition: 'a warm-blooded vertebrate animal with hair or fur, typically giving birth to live young and feeding them with milk (noun)', image: 'https://picsum.photos/id/375/300/300', sentences: ['A mammal is a warm-blooded animal with hair or fur.', 'Most mammals give birth to live young and feed them with milk.', 'Humans, dogs, and elephants are all mammals.'] },
    
    // New vocabulary - Mammal related
    { id: 56, type: 'word', label: 'Warm blood', definition: 'having a body temperature that remains relatively constant regardless of the temperature of the surroundings (adjective)', image: 'https://picsum.photos/id/142/300/300', sentences: ['Mammals are warm-blooded animals.', 'Warm-blooded animals can maintain a constant body temperature.', 'Birds are also warm-blooded creatures.'] },
    { id: 57, type: 'word', label: 'Hair', definition: 'a thread-like growth that forms part of the coat of mammals (noun)', image: 'https://picsum.photos/id/266/300/300', sentences: ['Humans have hair on their heads.', 'Mammals have hair or fur covering their bodies.', 'Hair helps to keep mammals warm.'] },
    { id: 58, type: 'word', label: 'Fur', definition: 'the thick hair covering the body of certain animals, especially mammals (noun)', image: 'https://picsum.photos/id/981/300/300', sentences: ['Cats have soft fur.', 'Fur helps animals stay warm in cold weather.', 'Some mammals have thick fur for insulation.'] },
    { id: 59, type: 'word', label: 'Birth', definition: 'the process of bringing forth young from the womb (noun)', image: 'https://picsum.photos/id/528/300/300', sentences: ['Mammals give birth to live young.', 'The birth of a baby is a special moment.', 'Some animals lay eggs instead of giving birth.'] },
    { id: 60, type: 'word', label: 'Milk', definition: 'a white liquid produced by female mammals for feeding their young (noun)', image: 'https://picsum.photos/id/653/300/300', sentences: ['Mammals feed their young with milk.', 'Cows produce milk for their calves.', 'Humans drink milk from cows, goats, and other animals.'] },
    { id: 61, type: 'word', label: 'Young', definition: 'being in an early stage of life or growth (adjective)', image: 'https://picsum.photos/id/866/300/300', sentences: ['Mammals care for their young.', 'The young of a dog is called a puppy.', 'Young animals need special care and attention.'] },
    { id: 62, type: 'word', label: 'Feed', definition: 'to give food to; supply with nourishment (verb)', image: 'https://picsum.photos/id/201/300/300', sentences: ['Mammals feed their young with milk.', 'Farmers feed their animals every day.', 'Parents feed their children nutritious food.'] },
    { id: 63, type: 'word', label: 'Human', definition: 'a member of the primate species Homo sapiens, characterized by bipedalism and large brains (noun)', image: 'https://picsum.photos/id/496/300/300', sentences: ['Humans are mammals.', 'Humans have the ability to think and reason.', 'Humans live in communities and build societies.'] },
    
    // RAZ AA Level - The Market
    { id: 64, type: 'word', label: 'Market', definition: 'A place where people buy and sell goods, especially food and household items.', image: 'https://picsum.photos/id/145/300/300', sentences: ['I go to the market.', 'The market has many stalls.'] },
    { id: 65, type: 'word', label: 'farmers', definition: 'People who grow crops and raise animals for food.', image: 'https://picsum.photos/id/956/300/300', sentences: ['The farmers sell vegetables.'] },
    { id: 66, type: 'word', label: 'tents', definition: 'Portable shelters made of fabric supported by poles and ropes.', image: 'https://picsum.photos/id/559/300/300', sentences: ['The market has colorful tents.'] },
    { id: 67, type: 'word', label: 'vegetables', definition: 'Plants or parts of plants that are used as food, such as carrots, potatoes, and beans.', image: 'https://picsum.photos/id/47/300/300', sentences: ['I buy vegetables at the market.'] },
    { id: 68, type: 'word', label: 'fruits', definition: 'The sweet and fleshy product of a tree or other plant that contains seed and can be eaten as food.', image: 'https://picsum.photos/id/249/300/300', sentences: ['The market sells ripe fruits.'] },
    { id: 69, type: 'word', label: 'flowers', definition: 'The seed-bearing part of a plant, consisting of reproductive organs (stamens and carpels) surrounded by bright petals and sepals.', image: 'https://picsum.photos/id/351/300/300', sentences: ['I smell the flowers.'] },
    { id: 70, type: 'word', label: 'jam', definition: 'A sweet spread made by cooking fruit with sugar until it thickens.', image: 'https://picsum.photos/id/481/300/300', sentences: ['I like strawberry jam.'] },
    { id: 71, type: 'word', label: 'cookies', definition: 'Small sweet baked cakes, typically round, flat, and crisp.', image: 'https://picsum.photos/id/541/300/300', sentences: ['The cookies are delicious.'] },
    
    // RAZ AA Level - The Movie
    { id: 72, type: 'word', label: 'Movie', definition: 'A story or event recorded by a camera as a set of moving images and shown in a cinema or on television.', image: 'https://picsum.photos/id/567/300/300', sentences: ['I watch a movie.'] },
    { id: 73, type: 'word', label: 'line', definition: 'A number of people standing one behind the other, waiting for something.', image: 'https://picsum.photos/id/879/300/300', sentences: ['We wait in line.'] },
    { id: 74, type: 'word', label: 'tickets', definition: 'Pieces of paper that give you the right to enter a place or travel somewhere.', image: 'https://picsum.photos/id/318/300/300', sentences: ['I buy tickets.'] },
    { id: 75, type: 'word', label: 'doors', definition: 'Movable barriers used to close off an entrance, exit, or passage.', image: 'https://picsum.photos/id/177/300/300', sentences: ['We go through the doors.'] },
    { id: 76, type: 'word', label: 'seats', definition: 'Furniture with a raised surface for sitting on, typically having a back and often armrests.', image: 'https://picsum.photos/id/956/300/300', sentences: ['We sit in seats.'] },
    { id: 77, type: 'word', label: 'popcorn', definition: 'Corn that expands from the kernel and puffs up when heated, eaten as a snack.', image: 'https://picsum.photos/id/974/300/300', sentences: ['I eat popcorn.'] },
    { id: 78, type: 'word', label: 'screen', definition: 'A flat panel or area on an electronic device where images and text are displayed.', image: 'https://picsum.photos/id/587/300/300', sentences: ['The movie is on the screen.'] },
    { id: 79, type: 'word', label: 'dark', definition: 'With little or no light.', image: 'https://picsum.photos/id/83/300/300', sentences: ['The theater is dark.'] },
    
    // RAZ AA Level - Mom
    { id: 80, type: 'word', label: 'Mom', definition: 'A mother; a female parent.', image: 'https://picsum.photos/id/190/300/300', sentences: ['I love my mom.'] },
    { id: 81, type: 'word', label: 'voice', definition: 'The sound produced by vibrations of the vocal cords.', image: 'https://picsum.photos/id/658/300/300', sentences: ['I hear her voice.'] },
    { id: 82, type: 'word', label: 'help', definition: 'To make it easier for someone to do something by offering one\'s services or resources.', image: 'https://picsum.photos/id/513/300/300', sentences: ['She gives me help.'] },
    { id: 83, type: 'word', label: 'hug', definition: 'To squeeze (someone) tightly in one\'s arms, typically to express affection.', image: 'https://picsum.photos/id/551/300/300', sentences: ['She gives me a hug.'] },
    { id: 84, type: 'word', label: 'wave', definition: 'To move one\'s hand to and fro in greeting or farewell.', image: 'https://picsum.photos/id/371/300/300', sentences: ['I see her wave.'] },
    { id: 85, type: 'word', label: 'smile', definition: 'A pleased, kind, or amused facial expression, typically with the corners of the mouth turned up.', image: 'https://picsum.photos/id/630/300/300', sentences: ['I love her smile.'] },
    { id: 86, type: 'word', label: 'eyes', definition: 'Organs of sight.', image: 'https://picsum.photos/id/267/300/300', sentences: ['I look into her eyes.'] },
    { id: 87, type: 'word', label: 'tuck', definition: 'To make (someone) comfortable in bed by pulling the covers up around them.', image: 'https://picsum.photos/id/965/300/300', sentences: ['She gives me a tuck.'] },
    { id: 88, type: 'word', label: 'love', definition: 'An intense feeling of deep affection.', image: 'https://picsum.photos/id/273/300/300', sentences: ['I feel her love.'] },
    
    // RAZ AA Level - The Zoo
    { id: 89, type: 'word', label: 'Zoo', definition: 'A place where wild animals are kept for public viewing and conservation.', image: 'https://picsum.photos/id/313/300/300', sentences: ['I go to the zoo.'] },
    { id: 90, type: 'word', label: 'lion', definition: 'A large cat with a mane, living in Africa and Asia.', image: 'https://picsum.photos/id/62/300/300', sentences: ['The lion is big.'] },
    { id: 91, type: 'word', label: 'tiger', definition: 'A large cat with stripes, living in Asia.', image: 'https://picsum.photos/id/281/300/300', sentences: ['The tiger has stripes.'] },
    { id: 92, type: 'word', label: 'bear', definition: 'A large mammal with thick fur.', image: 'https://picsum.photos/id/18/300/300', sentences: ['The bear is strong.'] },
    { id: 93, type: 'word', label: 'wolf', definition: 'A wild dog with a sharp sense of smell.', image: 'https://picsum.photos/id/11/300/300', sentences: ['The wolf howls.'] },
    { id: 94, type: 'word', label: 'ostrich', definition: 'A large flightless bird from Africa.', image: 'https://picsum.photos/id/832/300/300', sentences: ['The ostrich has a long neck.'] },
    { id: 95, type: 'word', label: 'monkey', definition: 'A primate with a tail, living in trees.', image: 'https://picsum.photos/id/13/300/300', sentences: ['The monkey climbs trees.'] },
    { id: 96, type: 'word', label: 'snake', definition: 'A long, legless reptile.', image: 'https://picsum.photos/id/812/300/300', sentences: ['The snake is long.'] },
    { id: 97, type: 'word', label: 'zebra', definition: 'A horse-like animal with black and white stripes.', image: 'https://picsum.photos/id/408/300/300', sentences: ['The zebra has stripes.'] },
    
    // Colors
    { id: 98, type: 'word', label: 'Color', definition: 'The property possessed by an object of producing different sensations on the eye as a result of the way the object reflects or emits light.', image: 'https://picsum.photos/id/855/300/300', sentences: ['Color makes the world beautiful.'] },
    { id: 99, type: 'word', label: 'Blue', definition: 'A color intermediate between green and violet, as of the sky or sea.', image: 'https://picsum.photos/id/96/300/300', sentences: ['The sky is blue.'] },
    
    // Blue objects
    { id: 100, type: 'word', label: 'sky', definition: 'The region of the atmosphere and outer space seen from the earth.', image: 'https://picsum.photos/id/389/300/300', sentences: ['The blue sky is beautiful.'] },
    { id: 101, type: 'word', label: 'helmet', definition: 'A hard or padded protective hat, especially worn by cyclists and construction workers.', image: 'https://picsum.photos/id/204/300/300', sentences: ['He wears a blue helmet.'] },
    { id: 102, type: 'word', label: 'bike', definition: 'A bicycle.', image: 'https://picsum.photos/id/176/300/300', sentences: ['I ride a blue bike.'] },
    { id: 103, type: 'word', label: 'bottle', definition: 'A glass or plastic container with a narrow neck, used for storing drinks or other liquids.', image: 'https://picsum.photos/id/518/300/300', sentences: ['She drinks from a blue bottle.'] },
    { id: 104, type: 'word', label: 'bench', definition: 'A long seat for several people, typically made of wood or metal and fixed in place.', image: 'https://picsum.photos/id/597/300/300', sentences: ['We sit on a blue bench.'] },
    { id: 105, type: 'word', label: 'swing', definition: 'A seat suspended by ropes or chains, on which someone may sit and swing back and forth.', image: 'https://picsum.photos/id/578/300/300', sentences: ['I play on a blue swing.'] },
    { id: 106, type: 'word', label: 'slide', definition: 'A smooth sloping surface, especially one for children to slide down for amusement.', image: 'https://picsum.photos/id/54/300/300', sentences: ['The blue slide is fun.'] },
    { id: 107, type: 'word', label: 'playground', definition: 'An outdoor area provided for children to play in, especially at a school or public park.', image: 'https://picsum.photos/id/477/300/300', sentences: ['The playground has blue equipment.'] },
    
    // Toys
    { id: 108, type: 'word', label: 'Toy', definition: 'An object for a child to play with, typically a model or miniature replica of something.', image: 'https://picsum.photos/id/293/300/300', sentences: ['I play with toys.'] },
    { id: 109, type: 'word', label: 'blocks', definition: 'Solid pieces of wood or other material used by children to build things.', image: 'https://picsum.photos/id/943/300/300', sentences: ['I build with blocks.'] },
    { id: 110, type: 'word', label: 'bear', definition: 'A stuffed toy in the shape of a bear.', image: 'https://picsum.photos/id/412/300/300', sentences: ['I hug my bear.'] },
    { id: 111, type: 'word', label: 'paint', definition: 'A colored liquid used for drawing or painting, especially by children.', image: 'https://picsum.photos/id/729/300/300', sentences: ['I use paint to draw.'] },
    { id: 112, type: 'word', label: 'drum', definition: 'A percussion instrument consisting of a hollow cylinder or hemisphere with a membrane stretched tightly over one or both ends, played by beating with sticks or the hands.', image: 'https://picsum.photos/id/105/300/300', sentences: ['I play the drum.'] },
    { id: 113, type: 'word', label: 'plane', definition: 'A toy aircraft.', image: 'https://picsum.photos/id/304/300/300', sentences: ['I fly the plane.'] },
    { id: 114, type: 'word', label: 'wagon', definition: 'A toy cart with four wheels that is pulled by a child.', image: 'https://picsum.photos/id/861/300/300', sentences: ['I pull the wagon.'] },
    { id: 115, type: 'word', label: 'kite', definition: 'A toy consisting of a light frame with thin material stretched over it, flown in the wind at the end of a long string.', image: 'https://picsum.photos/id/514/300/300', sentences: ['I fly the kite.'] },
    { id: 116, type: 'word', label: 'robot', definition: 'A toy that can move and perform simple tasks when controlled.', image: 'https://picsum.photos/id/712/300/300', sentences: ['The robot moves.'] },
    
    // Garden vocabulary
    { id: 117, type: 'word', label: 'Garden', definition: 'A plot of land where plants, flowers, or vegetables are grown.', image: 'https://picsum.photos/id/432/300/300', sentences: ['I grow vegetables in the garden.'] },
    { id: 118, type: 'word', label: 'Peas', definition: 'A round green seed that grows in a pod and is eaten as a vegetable.', image: 'https://picsum.photos/id/104/300/300', sentences: ['I eat peas from the garden.'] },
    { id: 119, type: 'word', label: 'Beans', definition: 'The edible seed of various plants, typically kidney-shaped and growing in long pods.', image: 'https://picsum.photos/id/174/300/300', sentences: ['The beans grow on the vine.'] },
    { id: 120, type: 'word', label: 'Melons', definition: 'A large round fruit with green skin, red pulp, and black seeds.', image: 'https://picsum.photos/id/102/300/300', sentences: ['I eat juicy melons from the garden.'] },
    { id: 121, type: 'word', label: 'Onions', definition: 'A strong-smelling bulb that is used as a vegetable in cooking.', image: 'https://picsum.photos/id/114/300/300', sentences: ['The onions grow underground.'] },
    { id: 122, type: 'word', label: 'Potatoes', definition: 'A starchy vegetable that grows underground and is used as food.', image: 'https://picsum.photos/id/127/300/300', sentences: ['I dig potatoes from the garden.'] },
    { id: 123, type: 'word', label: 'Tomatoes', definition: 'A round red fruit with a juicy pulp, eaten as a vegetable.', image: 'https://picsum.photos/id/133/300/300', sentences: ['The tomatoes are red and ripe.'] },
    { id: 124, type: 'word', label: 'Corn', definition: 'A tall plant grown for its large seeds, which are eaten as a vegetable or used to make flour.', image: 'https://picsum.photos/id/137/300/300', sentences: ['The corn grows tall in the garden.'] }
  ],
  links: [
    ...createLinks(1, [4, 5, 6, 7, 8, 37]),
    ...createLinks(2, [3, 9]),
    ...createLinks(3, [1, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14]),
    ...createLinks(4, [26]),
    ...createLinks(6, [1, 26]),
    ...createLinks(7, [26]),
    ...createLinks(8, [26]),
    ...createLinks(9, [10, 11, 12, 13, 14]),
    ...createLinks(10, [26, 55]),
    ...createLinks(11, [26, 55]),
    ...createLinks(12, [26]),
    ...createLinks(14, [19]),
    ...createLinks(15, [14, 18]),
    ...createLinks(16, [18]),
    ...createLinks(17, [18]),
    ...createLinks(18, [22, 33]),
    ...createLinks(19, [20, 21]),
    ...createLinks(21, [24]),
    ...createLinks(22, [23, 25]),
    ...createLinks(24, [23]),
    ...createLinks(26, [19, 29, 33]),
    ...createLinks(27, [26, 36, 55]),
    ...createLinks(28, [26, 36]),
    ...createLinks(29, [37]),
    ...createLinks(30, [33]),
    ...createLinks(31, [33]),
    ...createLinks(32, [33]),
    ...createLinks(33, [22]),
    ...createLinks(34, [37]),
    ...createLinks(35, [20, 37]),
    ...createLinks(36, [37]),
    ...createLinks(38, [26, 55]),
    ...createLinks(39, [26, 55]),
    ...createLinks(40, [26]),
    ...createLinks(41, [26, 42, 55]),
    ...createLinks(42, [26, 55]),
    ...createLinks(43, [26, 55]),
    ...createLinks(44, [26, 55]),
    ...createLinks(45, [26]),
    ...createLinks(46, [26, 55]),
    ...createLinks(47, [26, 55]),
    ...createLinks(48, [26]),
    ...createLinks(49, [26]),
    ...createLinks(51, [26, 55]),
    ...createLinks(52, [26, 41, 55]),
    ...createLinks(53, [10, 26, 55]),
    ...createLinks(54, [11, 26, 55]),
    ...createLinks(55, [26]),
    ...createLinks(56, [55]),
    ...createLinks(57, [11, 27, 55]),
    ...createLinks(58, [10, 11, 27, 55]),
    ...createLinks(59, [55]),
    ...createLinks(60, [39, 55]),
    ...createLinks(61, [55]),
    ...createLinks(62, [55]),
    ...createLinks(63, [55, 56, 57, 58, 59, 60, 61, 62]),
    ...createLinks(64, [65, 66, 67, 68, 69, 70, 71]),
    ...createLinks(65, [63]),
    ...createLinks(67, [19]),
    ...createLinks(68, [18]),
    ...createLinks(69, [19]),
    ...createLinks(70, [33]),
    ...createLinks(71, [33]),
    ...createLinks(72, [73, 74, 75, 76, 77, 78, 79]),
    ...createLinks(77, [33]),
    ...createLinks(80, [55, 63, 81, 82, 83, 84, 85, 86, 87, 88]),
    ...createLinks(89, [90, 91, 92, 93, 94, 95, 96, 97]),
    ...createLinks(90, [26, 28, 55]),
    ...createLinks(91, [26, 55]),
    ...createLinks(92, [26, 55]),
    ...createLinks(93, [26, 55]),
    ...createLinks(94, [12, 26]),
    ...createLinks(95, [26, 55]),
    ...createLinks(96, [26]),
    ...createLinks(97, [26, 55]),
    ...createLinks(98, [26]),
    ...createLinks(99, [98]),
    ...createLinks(100, [99]),
    ...createLinks(101, [99]),
    ...createLinks(102, [99]),
    ...createLinks(103, [99]),
    ...createLinks(104, [99]),
    ...createLinks(105, [99]),
    ...createLinks(106, [99]),
    ...createLinks(107, [99]),
    ...createLinks(109, [108]),
    ...createLinks(110, [108]),
    ...createLinks(111, [108]),
    ...createLinks(112, [108]),
    ...createLinks(113, [108]),
    ...createLinks(114, [108]),
    ...createLinks(115, [108]),
    ...createLinks(116, [108]),
    
    // Garden connections
    ...createLinks(117, [118, 119, 120, 121, 122, 123, 124]),
    ...createLinks(118, [19, 67]),
    ...createLinks(119, [19, 67]),
    ...createLinks(120, [19, 18, 67]),
    ...createLinks(121, [19, 67]),
    ...createLinks(122, [19, 67]),
    ...createLinks(123, [19, 18, 67]),
    ...createLinks(124, [19, 67])
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
