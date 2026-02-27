/**
 * Zoorld - Meet Our Animals
 * Professional JavaScript with Dynamic Animal Detail System
 */

(function() {
    'use strict';

    // ===========================
    // ANIMAL DATA - 50 ANIMALS
    // ===========================
    const animalsData = [
        // MAMMALS (25)
        { id: 1, name: "African Lion", scientificName: "Panthera leo", category: "mammals", endangered: false, image: "assets/images/African Lion.jpg", habitat: "African Grasslands", diet: "Carnivore", lifespan: "10-14 years", conservation: "Vulnerable", height: "1.2 m (4 ft)", speed: "80 km/h", funFact: "Lions are the only cats that live in groups called prides! 🦁" },
        { id: 2, name: "Bengal Tiger", scientificName: "Panthera tigris tigris", category: "mammals", endangered: true, image: "assets/images/Bengal Tiger.jpg", habitat: "Asian Forests", diet: "Carnivore", lifespan: "10-15 years", conservation: "Endangered", height: "1.1 m (3.6 ft)", speed: "65 km/h", funFact: "Each tiger has unique stripe patterns like fingerprints! 🐯" },
        { id: 3, name: "Leopard", scientificName: "Panthera pardus", category: "mammals", endangered: true, image: "assets/images/Leopard.jpg", habitat: "African Savannas", diet: "Carnivore", lifespan: "12-17 years", conservation: "Vulnerable", height: "0.7 m (2.3 ft)", speed: "58 km/h", funFact: "Leopards can drag prey 3x their body weight up trees! 🌳" },
        { id: 4, name: "Cheetah", scientificName: "Acinonyx jubatus", category: "mammals", endangered: true, image: "assets/images/Cheetah.jpg", habitat: "African Savannas", diet: "Carnivore", lifespan: "10-12 years", conservation: "Vulnerable", height: "0.9 m (3 ft)", speed: "112 km/h", funFact: "Cheetahs can accelerate from 0 to 100 km/h in just 3 seconds! ⚡" },
        { id: 5, name: "African Elephant", scientificName: "Loxodonta africana", category: "mammals", endangered: true, image: "assets/images/African Elephant.jpg", habitat: "African Savanna", diet: "Herbivore", lifespan: "60-70 years", conservation: "Endangered", height: "3-4 m (10-13 ft)", speed: "40 km/h", funFact: "Elephant ears can span up to 6 feet wide! 👂" },
        { id: 6, name: "Giraffe", scientificName: "Giraffa camelopardalis", category: "mammals", endangered: false, image: "assets/images/Giraffe.jpg", habitat: "African Savanna", diet: "Herbivore", lifespan: "25 years", conservation: "Vulnerable", height: "5-6 m (16-20 ft)", speed: "56 km/h", funFact: "Giraffes only need 30 minutes of sleep per day! 😴" },
        { id: 7, name: "Zebra", scientificName: "Equus quagga", category: "mammals", endangered: false, image: "assets/images/Zebra.jpg", habitat: "African Savannas", diet: "Herbivore", lifespan: "20-25 years", conservation: "Near Threatened", height: "1.2-1.5 m (4-5 ft)", speed: "65 km/h", funFact: "Each zebra has unique stripe patterns like snowflakes! ❄️" },
        { id: 8, name: "Hippopotamus", scientificName: "Hippopotamus amphibius", category: "mammals", endangered: true, image: "assets/images/Hippopotamus.jpg", habitat: "African Rivers", diet: "Herbivore", lifespan: "40-50 years", conservation: "Vulnerable", height: "1.5 m (5 ft)", speed: "30 km/h", funFact: "Hippos can hold their breath for 5 minutes underwater! 🤿" },
        { id: 9, name: "Rhinoceros", scientificName: "Rhinocerotidae", category: "mammals", endangered: true, image: "assets/images/Rhinoceros.jpg", habitat: "African Savannas", diet: "Herbivore", lifespan: "35-40 years", conservation: "Critically Endangered", height: "1.8 m (6 ft)", speed: "50 km/h", funFact: "Rhinos have two horns made of keratin (same as hair)! 🦏" },
        { id: 10, name: "Camel", scientificName: "Camelus dromedarius", category: "mammals", endangered: false, image: "assets/images/Camel.jpg", habitat: "Deserts", diet: "Herbivore", lifespan: "40-50 years", conservation: "Least Concern", height: "1.8 m (6 ft)", speed: "40 km/h", funFact: "Camels can drink 100 liters of water in just 15 minutes! 💧" },
        { id: 11, name: "Kangaroo", scientificName: "Macropus", category: "mammals", endangered: false, image: "assets/images/Kangaroo.jpg", habitat: "Australian Outback", diet: "Herbivore", lifespan: "20-25 years", conservation: "Least Concern", height: "1.6 m (5.3 ft)", speed: "70 km/h", funFact: "Kangaroos can jump 3 meters high - that's as tall as a giraffe! 🦘" },
        { id: 12, name: "Giant Panda", scientificName: "Ailuropoda melanoleuca", category: "mammals", endangered: true, image: "assets/images/Panda.jpg", habitat: "Chinese Bamboo Forests", diet: "Herbivore", lifespan: "20 years", conservation: "Vulnerable", height: "1.5 m (5 ft)", speed: "32 km/h", funFact: "Pandas eat 12-38 kg of bamboo daily - that's 40% of their body weight! 🎋" },
        { id: 13, name: "Brown Bear", scientificName: "Ursus arctos", category: "mammals", endangered: false, image: "assets/images/Brown Bear.jpg", habitat: "Forests & Mountains", diet: "Omnivore", lifespan: "25-30 years", conservation: "Least Concern", height: "1.5 m (5 ft)", speed: "56 km/h", funFact: "Brown bears can weigh up to 700 kg - as heavy as a small car! 🐻" },
        { id: 14, name: "Polar Bear", scientificName: "Ursus maritimus", category: "mammals", endangered: true, image: "assets/images/Polar Bear.jpg", habitat: "Arctic", diet: "Carnivore", lifespan: "25-30 years", conservation: "Vulnerable", height: "1.6 m (5.3 ft)", speed: "40 km/h", funFact: "Polar bears have black skin under their white fur for warmth! ❄️" },
        { id: 15, name: "Gray Wolf", scientificName: "Canis lupus", category: "mammals", endangered: false, image: "assets/images/Gray Wolf.jpg", habitat: "Forests & Tundra", diet: "Carnivore", lifespan: "6-8 years", conservation: "Least Concern", height: "0.8 m (2.6 ft)", speed: "69 km/h", funFact: "Wolves can hear sounds up to 6 miles away - that's 10 km! 👂" },
        { id: 16, name: "Red Fox", scientificName: "Vulpes vulpes", category: "mammals", endangered: false, image: "assets/images/Red Fox.jpg", habitat: "Worldwide", diet: "Omnivore", lifespan: "3-4 years", conservation: "Least Concern", height: "0.4 m (1.3 ft)", speed: "50 km/h", funFact: "Foxes can hear a mouse from 100 feet away - like hearing a whisper! 🦊" },
        { id: 17, name: "Spotted Hyena", scientificName: "Crocuta crocuta", category: "mammals", endangered: false, image: "assets/images/Spotted Hyena.jpg", habitat: "African Savannas", diet: "Carnivore", lifespan: "10-12 years", conservation: "Least Concern", height: "0.9 m (3 ft)", speed: "60 km/h", funFact: "Hyenas can digest bones completely - nothing goes to waste! 🦴" },
        { id: 18, name: "White-Tailed Deer", scientificName: "Odocoileus virginianus", category: "mammals", endangered: false, image: "assets/images/White-Tailed Deer.jpg", habitat: "North American Forests", diet: "Herbivore", lifespan: "6-14 years", conservation: "Least Concern", height: "1.1 m (3.6 ft)", speed: "48 km/h", funFact: "Only male deer grow antlers, and they shed them every year! 🦌" },
        { id: 19, name: "Moose", scientificName: "Alces alces", category: "mammals", endangered: false, image: "assets/images/Moose.jpg", habitat: "Northern Forests", diet: "Herbivore", lifespan: "15-20 years", conservation: "Least Concern", height: "2.1 m (7 ft)", speed: "35 km/h", funFact: "Moose are the largest deer species - their antlers can span 2 meters! 🫎" },
        { id: 20, name: "American Bison", scientificName: "Bison bison", category: "mammals", endangered: false, image: "assets/images/American Bison.jpg", habitat: "North American Plains", diet: "Herbivore", lifespan: "15-20 years", conservation: "Near Threatened", height: "1.8 m (6 ft)", speed: "55 km/h", funFact: "Bison were once nearly extinct - now they've made an amazing comeback! 🐃" },
        { id: 21, name: "African Buffalo", scientificName: "Syncerus caffer", category: "mammals", endangered: false, image: "assets/images/African Buffalo.jpg", habitat: "African Savannas", diet: "Herbivore", lifespan: "15-20 years", conservation: "Near Threatened", height: "1.4 m (4.6 ft)", speed: "57 km/h", funFact: "Buffalo are known as 'black death' to predators - they're very tough! 🐃" },
        { id: 22, name: "Mountain Gorilla", scientificName: "Gorilla beringei", category: "mammals", endangered: true, image: "assets/images/Mountain Gorilla.jpg", habitat: "Central African Forests", diet: "Herbivore", lifespan: "35-40 years", conservation: "Endangered", height: "1.7 m (5.6 ft)", speed: "40 km/h", funFact: "Gorillas share 98% of their DNA with humans - we're family! 🦍" },
        { id: 23, name: "Chimpanzee", scientificName: "Pan troglodytes", category: "mammals", endangered: true, image: "assets/images/Chimpanzee.jpg", habitat: "African Rainforests", diet: "Omnivore", lifespan: "40-50 years", conservation: "Endangered", height: "1.2 m (4 ft)", speed: "40 km/h", funFact: "Chimpanzees use tools in the wild - they're incredibly smart! 🐒" },
        { id: 24, name: "Bornean Orangutan", scientificName: "Pongo pygmaeus", category: "mammals", endangered: true, image: "assets/images/Bornean Orangutan.jpg", habitat: "Bornean Rainforests", diet: "Omnivore", lifespan: "45-50 years", conservation: "Critically Endangered", height: "1.4 m (4.6 ft)", speed: "27 km/h", funFact: "Orangutan means 'man of the forest' in Malay - they live in trees! 🌴" },
        { id: 25, name: "Olive Baboon", scientificName: "Papio anubis", category: "mammals", endangered: false, image: "assets/images/Olive Baboon.jpg", habitat: "African Savannas", diet: "Omnivore", lifespan: "20-30 years", conservation: "Least Concern", height: "0.7 m (2.3 ft)", speed: "45 km/h", funFact: "Baboons live in troops of up to 150 - that's a big family! 🐕" },
        { id: 26, name: "Ring-Tailed Lemur", scientificName: "Lemur catta", category: "mammals", endangered: true, image: "assets/images/Ring-Tailed Lemur.jpg", habitat: "Madagascar Forests", diet: "Herbivore", lifespan: "16-20 years", conservation: "Endangered", height: "0.45 m (1.5 ft)", speed: "20 km/h", funFact: "Lemurs are native ONLY to Madagascar - they exist nowhere else! 🇲🇬" },
        { id: 27, name: "Two-Toed Sloth", scientificName: "Choloepus didactylus", category: "mammals", endangered: false, image: "assets/images/Two-Toed Sloth.jpg", habitat: "Central American Rainforests", diet: "Herbivore", lifespan: "15-20 years", conservation: "Least Concern", height: "0.6 m (2 ft)", speed: "0.12 km/h", funFact: "Sloths only go to the bathroom once a week - super efficient! 💩" },
        { id: 28, name: "North American Otter", scientificName: "Lontra canadensis", category: "mammals", endangered: false, image: "assets/images/North American Otter.jpg", habitat: "North American Rivers", diet: "Carnivore", lifespan: "10-15 years", conservation: "Least Concern", height: "0.4 m (1.3 ft)", speed: "11 km/h", funFact: "Otters hold hands while sleeping so they don't drift apart! 🤝" },
        { id: 29, name: "Meerkat", scientificName: "Suricata suricatta", category: "mammals", endangered: false, image: "assets/images/Meerkat.jpg", habitat: "Kalahari Desert", diet: "Omnivore", lifespan: "10-12 years", conservation: "Least Concern", height: "0.3 m (1 ft)", speed: "32 km/h", funFact: "Meerkats take turns being lookouts - it's a dangerous job! 👀" },
        { id: 30, name: "Common Raccoon", scientificName: "Procyon lotor", category: "mammals", endangered: false, image: "assets/images/Common Raccoon.jpg", habitat: "North American Forests", diet: "Omnivore", lifespan: "2-3 years", conservation: "Least Concern", height: "0.3 m (1 ft)", speed: "24 km/h", funFact: "Raccoons can rotate their hands 180 degrees - creepy! 🦝" },
        
        // BIRDS (7)
        { id: 31, name: "Greater Flamingo", scientificName: "Phoenicopterus roseus", category: "birds", endangered: false, image: "assets/images/Greater Flamingo.jpg", habitat: "Lagoons & Lakes", diet: "Omnivore", lifespan: "20-30 years", conservation: "Least Concern", height: "1.2-1.5 m (4-5 ft)", speed: "50 km/h", funFact: "Flamingos are pink because of the shrimp they eat - diet matters! 🦩" },
        { id: 32, name: "Indian Peacock", scientificName: "Pavo cristatus", category: "birds", endangered: false, image: "assets/images/Indian Peacock.jpg", habitat: "Indian Forests", diet: "Omnivore", lifespan: "15-20 years", conservation: "Least Concern", height: "1.2 m (4 ft)", speed: "16 km/h", funFact: "Male peacocks display feathers to attract mates - nature's beauty! 🦚" },
        { id: 33, name: "Scarlet Macaw", scientificName: "Ara macao", category: "birds", endangered: false, image: "assets/images/Scarlet Macaw.jpg", habitat: "Central & South American Rainforests", diet: "Herbivore", lifespan: "50-75 years", conservation: "Least Concern", height: "0.9 m (3 ft)", speed: "56 km/h", funFact: "Macaws can live to be over 80 years old - lifelong friends! 🦜" },
        { id: 34, name: "Bald Eagle", scientificName: "Haliaeetus leucocephalus", category: "birds", endangered: false, image: "assets/images/Bald Eagle.jpg", habitat: "Near Water Bodies", diet: "Carnivore", lifespan: "20-30 years", conservation: "Least Concern", height: "1 m (3.3 ft)", speed: "160 km/h", funFact: "Bald eagles are the national bird of the USA - freedom symbol! 🦅" },
        { id: 35, name: "Great Horned Owl", scientificName: "Bubo virginianus", category: "birds", endangered: false, image: "assets/images/Great Horned Owl.jpg", habitat: "North American Forests", diet: "Carnivore", lifespan: "15-20 years", conservation: "Least Concern", height: "0.5 m (1.6 ft)", speed: "64 km/h", funFact: "Owls can rotate their heads 270 degrees - almost all the way around! 🦉" },
        { id: 36, name: "Emperor Penguin", scientificName: "Aptenodytes forsteri", category: "birds", endangered: false, image: "assets/images/Emperor Penguin.jpg", habitat: "Antarctica", diet: "Carnivore", lifespan: "15-20 years", conservation: "Near Threatened", height: "1.2 m (4 ft)", speed: "9 km/h", funFact: "Males incubate eggs for 2 months without eating - true dads! 🐧" },
        { id: 37, name: "Common Ostrich", scientificName: "Struthio camelus", category: "birds", endangered: false, image: "assets/images/Common Ostrich.jpg", habitat: "African Savannas", diet: "Omnivore", lifespan: "40-50 years", conservation: "Least Concern", height: "2.1 m (7 ft)", speed: "70 km/h", funFact: "Ostriches have the largest eggs of any bird - each one weighs 1.5kg! 🥚" },
        
        // REPTILES (6)
        { id: 38, name: "Saltwater Crocodile", scientificName: "Crocodylus porosus", category: "reptiles", endangered: false, image: "assets/images/Saltwater Crocodile.jpg", habitat: "Coastal Regions", diet: "Carnivore", lifespan: "70 years", conservation: "Least Concern", height: "5 m (16 ft)", speed: "29 km/h", funFact: "Crocodiles have the strongest bite in the animal kingdom! 🐊" },
        { id: 39, name: "American Alligator", scientificName: "Alligator mississippiensis", category: "reptiles", endangered: false, image: "assets/images/American Alligator.jpg", habitat: "Southeastern US Wetlands", diet: "Carnivore", lifespan: "30-50 years", conservation: "Least Concern", height: "4 m (13 ft)", speed: "32 km/h", funFact: "Alligators have rounded snouts, crocodiles have pointed ones! 🐊" },
        { id: 40, name: "Galápagos Tortoise", scientificName: "Chelonoidis nigra", category: "reptiles", endangered: true, image: "assets/images/Galápagos Tortoise.jpg", habitat: "Galápagos Islands", diet: "Herbivore", lifespan: "100-175 years", conservation: "Vulnerable", height: "1.5 m (5 ft)", speed: "0.3 km/h", funFact: "Some tortoises are over 175 years old - they outlive humans! 🐢" },
        { id: 41, name: "King Cobra", scientificName: "Ophiophagus hannah", category: "reptiles", endangered: true, image: "assets/images/King Cobra.jpg", habitat: "South Asian Forests", diet: "Carnivore", lifespan: "20 years", conservation: "Vulnerable", height: "3-4 m (10-13 ft)", speed: "19 km/h", funFact: "King cobras are the longest venomous snakes in the world! 🐍" },
        { id: 42, name: "Komodo Dragon", scientificName: "Varanus komodoensis", category: "reptiles", endangered: true, image: "assets/images/Komodo Dragon.jpg", habitat: "Indonesian Islands", diet: "Carnivore", lifespan: "30 years", conservation: "Endangered", height: "3 m (10 ft)", speed: "20 km/h", funFact: "Komodo dragons have venomous bites - they're living dinosaurs! 🦎" },
        { id: 43, name: "Green Iguana", scientificName: "Iguana iguana", category: "reptiles", endangered: false, image: "assets/images/Green Iguana.jpg", habitat: "Central & South American Rainforests", diet: "Herbivore", lifespan: "15-20 years", conservation: "Least Concern", height: "1.5 m (5 ft)", speed: "35 km/h", funFact: "Iguanas can hold their breath for 30 minutes underwater! 🤿" },
        
        // AQUATIC (7)
        { id: 44, name: "Bottlenose Dolphin", scientificName: "Tursiops truncatus", category: "aquatic", endangered: false, image: "assets/images/Bottlenose Dolphin.jpg", habitat: "Oceans Worldwide", diet: "Carnivore", lifespan: "40-50 years", conservation: "Least Concern", height: "2-4 m (6.5-13 ft)", speed: "60 km/h", funFact: "Each dolphin has a unique whistle - like a name! 🐬" },
        { id: 45, name: "California Sea Lion", scientificName: "Zalophus californianus", category: "aquatic", endangered: false, image: "assets/images/California Sea Lion.jpg", habitat: "Pacific Coast", diet: "Carnivore", lifespan: "15-20 years", conservation: "Least Concern", height: "2.1 m (7 ft)", speed: "44 km/h", funFact: "Sea lions can walk on land using their flippers! 🦭" },
        { id: 46, name: "Gray Seal", scientificName: "Halichoerus grypus", category: "aquatic", endangered: false, image: "assets/images/Gray Seal.jpg", habitat: "North Atlantic", diet: "Carnivore", lifespan: "25-35 years", conservation: "Least Concern", height: "2.1 m (7 ft)", speed: "28 km/h", funFact: "Seals can hold their breath for 2 hours - incredible divers! 🤯" },
        { id: 47, name: "Great White Shark", scientificName: "Carcharodon carcharias", category: "aquatic", endangered: true, image: "assets/images/Great White Shark.jpg", habitat: "Cool Oceans", diet: "Carnivore", lifespan: "70 years", conservation: "Vulnerable", height: "4.6 m (15 ft)", speed: "56 km/h", funFact: "Sharks have no bones - their skeleton is made of cartilage! 🦈" },
        { id: 48, name: "Blue-Spotted Stingray", scientificName: "Taeniura lymma", category: "aquatic", endangered: false, image: "assets/images/Blue-Spotted Stingray.jpg", habitat: "Coral Reefs", diet: "Carnivore", lifespan: "10-15 years", conservation: "Near Threatened", height: "0.35 m (1.1 ft)", speed: "15 km/h", funFact: "Stingrays are flat like pancakes - they glide through water! 🦑" },
        
        // DOMESTIC ANIMALS (2)
        { id: 49, name: "Horse", scientificName: "Equus ferus caballus", category: "mammals", endangered: false, image: "assets/images/Horse.jpg", habitat: "Worldwide", diet: "Herbivore", lifespan: "25-30 years", conservation: "Domestic", height: "1.4-1.8 m (4.6-6 ft)", speed: "70 km/h", funFact: "Horses can sleep standing up - they never lie down sometimes! 🐴" },
        { id: 50, name: "Goat", scientificName: "Capra hircus", category: "mammals", endangered: false, image: "assets/images/Goat.jpg", habitat: "Worldwide", diet: "Herbivore", lifespan: "15-20 years", conservation: "Domestic", height: "0.7-1.1 m (2.3-3.6 ft)", speed: "25 km/h", funFact: "Goats have rectangular pupils - they can see almost 360 degrees! 🐐" }
    ];

    // ===========================
    // STATE
    // ===========================
    let currentCategory = 'all';
    let searchQuery = '';

    // ===========================
    // DOM ELEMENTS
    // ===========================
    const $navbar = $('#mainNavbar');
    const $animalsGrid = $('#animalsGrid');
    const $animalSearch = $('#animalSearch');
    const $searchClear = $('#searchClear');
    const $filterCategories = $('#filterCategories');
    const $resultsCount = $('#resultsCount');

    // ===========================
    // NAVBAR
    // ===========================
    function initNavbar() {
        let lastScroll = 0;
        
        function updateNavbar() {
            const scrollY = window.pageYOffset;
            if (scrollY > 10) {
                $navbar.removeClass('navbar--transparent').addClass('navbar--scrolled');
            } else {
                $navbar.removeClass('navbar--scrolled').addClass('navbar--transparent');
            }
            lastScroll = scrollY;
        }

        let ticking = false;
        $(window).on('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateNavbar();
                    ticking = false;
                });
                ticking = true;
            }
        });
        updateNavbar();
    }

    // ===========================
    // EVENT LISTENERS
    // ===========================
    function initEventListeners() {
        // Use event delegation for animal card clicks for better performance and accessibility.
        $animalsGrid.on('click keypress', '.animal-card', function(e) {
            if (e.type === 'keypress' && (e.key !== 'Enter' && e.key !== ' ')) return;
            e.preventDefault();
            const animalId = $(this).data('id');
            if (animalId) {
                window.navigateToAnimal(animalId);
            }
        });
    }

    // ===========================
    // FILTERS
    // ===========================
    function initFilters() {
        $filterCategories.on('click', '.filter-btn', function() {
            $filterCategories.find('.filter-btn').removeClass('active');
            $(this).addClass('active');
            currentCategory = $(this).data('category');
            filterAnimals();
        });
    }

    // ===========================
    // SEARCH
    // ===========================
    function initSearch() {
        let searchTimeout;
        
        $animalSearch.on('input', function() {
            const value = $(this).val();
            $searchClear.toggle(value.length > 0);
            
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchQuery = value.toLowerCase().trim();
                filterAnimals();
            }, 300);
        });

        $searchClear.on('click', function() {
            $animalSearch.val('');
            $(this).hide();
            searchQuery = '';
            filterAnimals();
        });
    }

    // ===========================
    // FILTER ANIMALS
    // ===========================
    function filterAnimals() {
        // Close any open detail when filtering
        document.querySelectorAll('.animal-detail-expanded').forEach(detail => detail.remove());
        document.body.classList.remove('detail-view-active');
        
        const filtered = animalsData.filter(animal => {
            const matchesCategory = currentCategory === 'all' || 
                animal.category === currentCategory ||
                (currentCategory === 'endangered' && animal.endangered);
            const matchesSearch = !searchQuery || 
                animal.name.toLowerCase().includes(searchQuery) ||
                (animal.scientificName && animal.scientificName.toLowerCase().includes(searchQuery));
            return matchesCategory && matchesSearch;
        });

        const categoryText = currentCategory === 'all' ? 'animals' : 
                           currentCategory === 'endangered' ? 'endangered animals' : currentCategory;
        $resultsCount.text(`Showing ${filtered.length} ${categoryText}`);
        
        renderAnimals(filtered);
    }

    // ===========================
    // RENDER ANIMALS
    // ===========================
    function renderAnimals(animals) {
        $animalsGrid.fadeOut(200, function() {
            $(this).empty();
            const cards = animals.map((animal, i) => createAnimalCard(animal, i)).join('');
            $(this).html(cards).fadeIn(300);
            initLazyLoading();
        });
    }

    function createAnimalCard(animal, index) {
        const badge = animal.endangered ? 
            `<span class="animal-card-badge endangered"><i class="fas fa-exclamation-triangle"></i> Endangered</span>` : '';
        
        return `
            <article class="animal-card" data-id="${animal.id}" data-name="${animal.name}"
                     style="animation-delay: ${(index % 8) * 0.05}s" role="button" tabindex="0">
                <img class="animal-card-image lazy-load" 
                     data-src="${animal.image}" 
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                     alt="${animal.name}" loading="lazy">
                ${badge}
                <div class="animal-card-content">
                    <h3 class="animal-card-name">${animal.name}</h3>
                    <span class="animal-card-category">
                        <i class="fas fa-${getCategoryIcon(animal.category)}"></i>
                        ${capitalize(animal.category)}
                    </span>
                </div>
            </article>
        `;
    }

    // ===========================
    // LAZY LOADING
    // ===========================
    function initLazyLoading() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => img.classList.remove('lazy-load');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });

        document.querySelectorAll('.lazy-load').forEach(img => observer.observe(img));
    }

    // ===========================
    // UTILITIES
    // ===========================
    function getCategoryIcon(category) {
        const icons = { mammals: 'paw', birds: 'wind', reptiles: 'egg', amphibians: 'water', aquatic: 'tint' };
        return icons[category] || 'paw';
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    function getCategoryLabel(category) {
        const labels = { 'mammals': 'Mammal', 'birds': 'Bird', 'reptiles': 'Reptile', 'amphibians': 'Amphibian', 'aquatic': 'Aquatic' };
        return labels[category] || 'Animal';
    }
    
    function getFactIcon(index) {
        const icons = ['star', 'heart', 'bolt', 'gem', 'leaf', 'paw', 'eye', 'crown'];
        return icons[index % icons.length];
    }

    // ===========================
    // NAVIGATE TO ANIMAL - IN-PAGE DYNAMIC DETAIL
    // ===========================
    window.navigateToAnimal = function(animalId) {
        const animal = animalsData.find(a => a.id === animalId);
        if (!animal) return;
        
        // Find the clicked card
        const card = document.querySelector(`[data-id="${animalId}"]`);
        if (!card) return;
        
        // Check if detail already open for this card
        const existingDetail = card.nextElementSibling;
        if (existingDetail && existingDetail.classList.contains('animal-detail-expanded')) {
            closeAnimalDetail(animalId);
            return;
        }
        
        // Close any other open details first
        document.querySelectorAll('.animal-detail-expanded').forEach(detail => detail.remove());
        
        // Handle Active States (Cinematic Spotlight)
        document.body.classList.add('detail-view-active');
        document.querySelectorAll('.animal-card').forEach(c => c.classList.remove('active-card'));
        card.classList.add('active-card');

        // Build the detail HTML dynamically
        const detailHTML = buildAnimalDetailHTML(animal);
        
        // Create detail element
        const detailEl = document.createElement('div');
        detailEl.className = 'animal-detail-expanded';
        detailEl.innerHTML = detailHTML;
        
        // Insert directly after the clicked card
        card.parentNode.insertBefore(detailEl, card.nextSibling);
        
        // Trigger animation
        requestAnimationFrame(() => {
            detailEl.querySelector('.detail-expanded-content')?.classList.add('detail-active');
            
            // Animate inner elements
            const layers = detailEl.querySelectorAll('.detail-slide-layer');
            layers.forEach((layer, index) => {
                setTimeout(() => {
                    layer.classList.add('slide-active');
                }, 100 * index);
            });
        });
        
        // Smooth scroll to detail
        setTimeout(() => {
            detailEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 200);
    };
    
    // ===========================
    // CLOSE ANIMAL DETAIL
    // ===========================
    window.closeAnimalDetail = function(animalId) {
        const card = document.querySelector(`[data-id="${animalId}"]`);
        if (!card) return;
        
        const detail = card.nextElementSibling;
        if (!detail || !detail.classList.contains('animal-detail-expanded')) return;
        
        // Scroll the card into view to mitigate layout shift perception on close.
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Remove animation classes
        detail.querySelector('.detail-expanded-content')?.classList.remove('detail-active');
        
        // Remove Active States
        card.classList.remove('active-card');
        document.body.classList.remove('detail-view-active');

        const layers = detail.querySelectorAll('.detail-slide-layer');
        layers.forEach(layer => layer.classList.remove('slide-active'));
        
        // Remove after animation
        setTimeout(() => {
            detail.remove();
        }, 500);
    };
    
    // ===========================
    // BUILD ANIMAL DETAIL HTML
    // ===========================
    function buildAnimalDetailHTML(animal) {
        const categoryLabel = getCategoryLabel(animal.category);
        const isEndangered = animal.conservation === 'Endangered' || animal.conservation === 'Critically Endangered' || animal.conservation === 'Vulnerable';
        
        // Build extra fun facts dynamically
        const extraFacts = [
            `${animal.name}s are known for their unique adaptations`,
            `They can be found in ${animal.habitat}`,
            `${animal.diet} diet makes them special`,
            `Their lifespan averages ${animal.lifespan}`
        ];
        
        const extraFactsHTML = extraFacts.map((fact, i) => `
            <div class="col-md-6 detail-slide-layer">
                <div class="fact-card">
                    <div class="fact-icon"><i class="fas fa-${getFactIcon(i + 4)}"></i></div>
                    <h4>Did You Know?</h4>
                    <p>${fact}</p>
                </div>
            </div>
        `).join('');
        
        // Original fun fact
        const funFactHTML = `
            <div class="col-md-12 detail-slide-layer">
                <div class="fact-card" style="background: linear-gradient(135deg, var(--primary-medium), var(--primary-light));">
                    <div class="fact-icon" style="background: white;"><i class="fas fa-star" style="color: var(--primary-medium);"></i></div>
                    <h4 style="color: white;">Fun Fact</h4>
                    <p style="color: rgba(255,255,255,0.95);">${animal.funFact}</p>
                </div>
            </div>
        `;
        
        return `
            <div class="detail-expanded-content">
                <button class="detail-close-btn detail-slide-layer" onclick="closeAnimalDetail(${animal.id})" aria-label="Close detail">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="detail-stats-row detail-slide-layer">
                    <div class="detail-stat-badge">
                        <i class="fas fa-globe"></i>
                        <span>${animal.habitat}</span>
                    </div>
                    <div class="detail-stat-badge">
                        <i class="fas fa-utensils"></i>
                        <span>${animal.diet}</span>
                    </div>
                    <div class="detail-stat-badge">
                        <i class="fas fa-heart"></i>
                        <span>${animal.lifespan}</span>
                    </div>
                    <div class="detail-stat-badge ${isEndangered ? 'endangered' : ''}">
                        <i class="fas fa-shield-alt"></i>
                        <span>${animal.conservation}</span>
                    </div>
                </div>
                
                <div class="detail-description detail-slide-layer">
                    <h3>About the ${animal.name}</h3>
                    <p>The <strong>${animal.name}</strong> (<em>${animal.scientificName || animal.name}</em>) is a magnificent ${categoryLabel.toLowerCase()} species native to ${animal.habitat}. As a ${animal.diet.toLowerCase()}, it plays a vital role in its ecosystem.</p>
                    <p>This incredible animal can reach heights of ${animal.height} and can move at speeds of ${animal.speed}. With an average lifespan of ${animal.lifespan}, these remarkable creatures continue to inspire awe and wonder.</p>
                </div>
                
                <div class="detail-facts-section detail-slide-layer">
                    <h3><i class="fas fa-lightbulb"></i> Interesting Facts</h3>
                    <div class="row g-3">
                        ${funFactHTML}
                        ${extraFactsHTML}
                    </div>
                </div>
                
                <div class="detail-cta detail-slide-layer">
                    <button class="btn btn-cta">
                        <span>Visit ${animal.name}</span>
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // ===========================
    // SMOOTH SCROLL
    // ===========================
    $('#hero').on('click', '.btn', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
    });

    // ===========================
    // PAGE LOADER
    // ===========================
    function initPageLoader() {
        const pageLoader = $('#pageLoader');
        
        // Show loader immediately
        pageLoader.removeClass('hidden');
        
        // Hide loader after 1200ms with fade out effect
        setTimeout(() => {
            pageLoader.addClass('hidden');
            
            // Remove from DOM after animation completes (0.8s transition)
            setTimeout(() => {
                pageLoader.css('display', 'none');
            }, 800);
        }, 1200);
    }

    // ===========================
    // HERO ANIMATIONS
    // ===========================
    function initHeroAnimations() {
        const heroSubtitle = $('#heroSubtitle');
        
        // Trigger typing effect
        setTimeout(() => {
            heroSubtitle.addClass('typing');
        }, 100);
    }

    // ===========================
    // INIT
    // ===========================
    $(document).ready(function() {
        initPageLoader();
        initNavbar();
        initFilters();
        initSearch();
        initEventListeners(); // Set up delegated event listeners once.
        renderAnimals(animalsData);
        initHeroAnimations();
    });

})();
