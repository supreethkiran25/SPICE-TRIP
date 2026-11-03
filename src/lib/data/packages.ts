import { TravelPackage } from "@/types";

export const PACKAGES: TravelPackage[] = [
  {
    id: "pkg-15",
    slug: "explore-vietnam",
    title: "Explore Vietnam — Hanoi, Halong & Hoi An",
    destination: "Vietnam",
    country: "Vietnam",
    region: "International",
    duration: { nights: 5, days: 6 },
    startingPrice: 34999,
    currency: "INR",
    description: "An evocative Indochina voyage connecting the French colonial avenues of Hanoi, an overnight luxury wooden junk cruise amidst emerald limestone karsts in Halong Bay, and the warm lantern-lit alleys of ancient Hoi An.",
    highlights: [
      "5-Star Overnight Luxury Cruise in Halong Bay",
      "Lantern Crafting & Tailor Atelier Tour in Hoi An",
      "Guided Street Gastronomy & French Quarter Walk in Hanoi",
      "Private Chauffeur Airport & Inter-City Transfers"
    ],
    inclusions: [
      "05 Nights Deluxe Star Hotel & Boutique Cruise Accommodations",
      "Daily gourmet buffet breakfast and select full-board cruise dining",
      "All private airport and inter-city excursion transfers in AC vehicles",
      "Halong Bay kayaking, cave exploration and cooking masterclass",
      "English-speaking licensed regional docents and entrance permits",
      "All applicable local taxes and service surcharges"
    ],
    exclusions: [
      "International flights and Vietnam visa stamping charges",
      "Personal expenses, laundry, minibar, tips and porterage",
      "Optional water activities or spa treatments not in the itinerary",
      "Travel insurance (highly recommended, concierge add-on available)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Hanoi Arrival & French Quarter Stroll",
        description: "Arrive at Noi Bai International Airport in Hanoi. Our private SpiceTrip airport concierge greets you and escorts you to your boutique heritage hotel in the Old Quarter. Settle in, then enjoy an evening cyclo tour around Hoan Kiem Lake and taste authentic egg coffee at a lakeside café."
      },
      {
        day: 2,
        title: "Hanoi Heritage & Halong Bay Embarkation",
        description: "Morning visit to the Temple of Literature and Ho Chi Minh Complex. Journey through the Red River Delta to Tuan Chau Marina, stepping aboard your luxury traditional wooden junk boat. Cruise through mystical limestone islets, savor fresh seafood, and kayak through secluded sea grottos."
      },
      {
        day: 3,
        title: "Sung Sot Cave & Flight to Da Nang / Hoi An",
        description: "Greet dawn with Tai Chi on the sundeck followed by an expedition into the grand Sung Sot (Surprise) Cave. Disembark midday and transfer to Hanoi Airport for your flight to Da Nang. Arrive in ancient Hoi An, checking into a serene riverside resort."
      },
      {
        day: 4,
        title: "Ancient Hoi An Walking Discovery & River Cruise",
        description: "Guided walking tour through UNESCO-protected Hoi An: Japanese Covered Bridge, Tan Ky merchant residence, and Phuc Kien Assembly Hall. Evening sunset sampan boat ride along the Thu Bon River with thousands of glowing floating paper lanterns."
      },
      {
        day: 5,
        title: "Cam Thanh Coconut Forest & An Bang Beach",
        description: "Experience traditional basket boating through the lush waterways of Cam Thanh water coconut village. Spend the afternoon unwinding on the white sands of An Bang beach or visiting Hoi An’s famous artisanal silk tailors."
      },
      {
        day: 6,
        title: "Da Nang Marble Mountains & Departure",
        description: "Following breakfast, stop by the dramatic Marble Mountains and the sweeping sands of My Khe Beach in Da Nang before your private transfer to Da Nang International Airport for your flight home."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["International", "Cultural"],
    rating: 4.9,
    reviewsCount: 42,
    featured: true
  },
  {
    id: "pkg-10",
    slug: "maldives-luxury-escape",
    title: "Maldives — Barefoot Coral Atoll Sanctuary",
    destination: "Maldives",
    country: "Maldives",
    region: "International",
    duration: { nights: 3, days: 4 },
    startingPrice: 58000,
    currency: "INR",
    description: "The quintessential tropical paradise of 26 ring-shaped coral atolls in the azure Indian Ocean. Luxurious private villas, turquoise lagoons, marine life safaris, and tranquil sunset indulgence.",
    highlights: [
      "Overwater or Lagoon Villa Sanctuary with Sunset Deck",
      "Speedboat or Scenic Twin-Otter Seaplane Transfers",
      "Guided House Reef Snorkel with Marine Biologist",
      "Champagne Sunset Cruise with Spinner Dolphin Watching"
    ],
    inclusions: [
      "03 Nights in Luxury Resort Villa (Overwater / Beach Villa)",
      "Daily gourmet breakfast and chef-crafted dinner (MAP Plan)",
      "Round-trip Speedboat or Seaplane airport transfers from Malé",
      "Complimentary non-motorized watersports (kayak, paddleboard, snorkel gear)",
      "Green Tax and Maldivian Goods & Services Tax (TGST) included"
    ],
    exclusions: [
      "International flights to Velana International Airport (Malé)",
      "Alcoholic beverages and à la carte specialty dining upgrades",
      "Scuba diving excursions and motorized water sports",
      "Personal wellness treatments at the resort spa"
    ],
    itinerary: [
      {
        day: 1,
        title: "Malé Arrival & Scenic Island Transfer",
        description: "Touch down at Velana International Airport in Malé. You are warmly received by our island representative and transferred via speedboat or seaplane over turquoise coral lagoons directly to your private resort island. Check in, sip your chilled welcome coconut, and indulge in a leisurely evening watching the sunset."
      },
      {
        day: 2,
        title: "House Reef Discovery & Overwater Leisure",
        description: "Awake to infinite turquoise horizons. After a leisurely breakfast over the lagoon, explore the protected house reef with colorful clownfish, reef sharks, and sea turtles. Afternoon at leisure on your private sun lounger or pamper yourself with an aromatic spa treatment."
      },
      {
        day: 3,
        title: "Sandbank Picnic & Dolphin Sunset Cruise",
        description: "Board a traditional Maldivian Dhoni for a secluded private sandbank excursion. In the late afternoon, embark on an idyllic ocean cruise to spot playful pods of wild spinner dolphins leaping against the setting sun."
      },
      {
        day: 4,
        title: "Island Sunrise & Farewell Maldives",
        description: "Savor a tranquil beachfront breakfast and take one last dip in the sparkling lagoon. Transfer by speedboat back to Malé airport for your onward journey with unforgettable memories."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["International", "Honeymoon"],
    rating: 5.0,
    reviewsCount: 56,
    featured: true
  },
  {
    id: "pkg-9",
    slug: "bali-classic-tour",
    title: "Bali Classic Tour — Ubud & Uluwatu Sunset",
    destination: "Bali",
    country: "Indonesia",
    region: "International",
    duration: { nights: 4, days: 5 },
    startingPrice: 39900,
    currency: "INR",
    description: "Immerse yourself in Indonesia’s spiritual island of gods: forested volcanic peaks, stepped emerald rice terraces, cliffside temples, and romantic sunset cruises.",
    highlights: [
      "Full Day Ubud Arts, Tegalalang Rice Terraces & Kintamani Volcano",
      "Cliffside Uluwatu Temple & Sunset Jimbaran Bay Seafood",
      "Taman Ayun Royal Temple, Ulun Danu & Iconic Tanah Lot",
      "Private Air-Conditioned Vehicle with English-Speaking Guide"
    ],
    inclusions: [
      "04 Nights Hotel Accommodation in Kuta / Seminyak with daily breakfast",
      "Full day Ubud tour with Kintamani Mount Batur view",
      "Sunset tour to Uluwatu Temple overlooking the Indian Ocean",
      "Full day excursion to Taman Ayun, Bedugul & Tanah Lot Temple",
      "All airport and excursion transfers in private AC vehicle",
      "Entrance fees and local donation tickets as per itinerary"
    ],
    exclusions: [
      "International flights and Indonesia visa fees (Visa on Arrival available)",
      "Lunches and dinners not explicitly specified",
      "Water sports activities (available on-site)",
      "Personal expenses and gratuities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bali Arrival & Check-In",
        description: "Arrive at Ngurah Rai International Airport in Denpasar. Our SpiceTrip representative welcomes you with fresh flower garlands. Private transfer to your hotel. Evening free to stroll along Seminyak beach or explore vibrant local boutiques."
      },
      {
        day: 2,
        title: "Ubud Arts, Rice Terraces & Kintamani Volcano",
        description: "Breakfast at hotel. Embark on a full-day cultural journey through Ubud’s artisan villages (Celuk & Mas), the iconic Tegalalang tiered rice terraces, and dramatic views of Mount Batur active volcano across Lake Batur."
      },
      {
        day: 3,
        title: "Uluwatu Cliff Temple & Sunset Jimbaran Dinner",
        description: "Morning at leisure. Mid-afternoon departure to the dramatic south coast where Uluwatu Temple clings to a sheer 70-meter cliff above crashing ocean waves. Witness the traditional Kecak fire dance at sunset followed by a candlelit seafood dinner on Jimbaran Beach."
      },
      {
        day: 4,
        title: "Taman Ayun, Lake Beratan & Tanah Lot Temple",
        description: "Journey to the royal water temple of Taman Ayun in Mengwi. Ascend to Bedugul highlands to see the floating Ulun Danu temple on Lake Beratan. Finish the afternoon watching the legendary sunset behind Tanah Lot temple perched upon an offshore rock."
      },
      {
        day: 5,
        title: "Souvenir Shopping & Departure",
        description: "Breakfast at hotel. Free time for last-minute Balinese handicrafts and coffee shopping in Kuta before your private transfer to Denpasar Airport."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["International", "Cultural"],
    rating: 4.8,
    reviewsCount: 39,
    featured: true
  },
  {
    id: "pkg-2",
    slug: "bali-luxury-honeymoon",
    title: "Bali Luxury Honeymoon — Private Pool Villa & Nusa Penida",
    destination: "Bali",
    country: "Indonesia",
    region: "International",
    duration: { nights: 4, days: 5 },
    startingPrice: 68800,
    currency: "INR",
    description: "An ultra-romantic Balinese honeymoon package featuring private pool villa sanctuaries, romantic sunset pirate dinner cruises, candlelit beach dinners at Jimbaran, and a fast boat crossing to spectacular Nusa Penida island.",
    highlights: [
      "Private Pool Villa Stay with Flower Bath & Honeymoon Inclusions",
      "Full Day Nusa Penida Island Tour (Kelingking Beach & Angel’s Billabong)",
      "Romantic Sunset Dinner Cruise with International Buffet",
      "Tanjung Benoa Watersports (Banana Boat & Jet Ski included)",
      "Jimbaran Bay Candlelit Seafood Dinner on the Beach"
    ],
    inclusions: [
      "Economy class return Airfare (as included in client package)",
      "Visa on Arrival assistance",
      "04 Nights in Deluxe Pool Villa with Daily Breakfast",
      "Pirates Sunset Dinner Cruise with International Buffet Dinner",
      "Full Day Kintamani Volcano and Ubud Artist Village Tour",
      "Full Day Benoa Watersports (Banana boat & Jet ski) + Uluwatu Temple",
      "Candlelit romantic seafood dinner at Jimbaran beach",
      "Nusa Penida West Island excursion with private boat transfers",
      "Tanah Lot Temple sunset tour",
      "Private airport and excursion transfers"
    ],
    exclusions: [
      "Personal expenses, room service, laundry",
      "Travel insurance",
      "Any extra activities or meals not stated"
    ],
    itinerary: [
      {
        day: 1,
        title: "Romantic Welcome to Bali & Pool Villa Relaxation",
        description: "Arrive in Bali. Private chauffeur transfer to your private pool villa adorned with honeymoon flower decorations. Spend your first evening relaxing in complete privacy."
      },
      {
        day: 2,
        title: "Kintamani Volcano, Ubud Culture & Romantic Dinner",
        description: "Private tour to Mount Batur viewpoint, coffee plantations, and Ubud arts. Evening private candlelit dinner under the stars."
      },
      {
        day: 3,
        title: "Tanjung Benoa Watersports & Uluwatu Sunset",
        description: "Thrilling morning watersports in Tanjung Benoa including banana boat and jet ski. Late afternoon excursion to the cliffs of Uluwatu followed by a romantic seafood dinner right on the sand at Jimbaran Bay."
      },
      {
        day: 4,
        title: "Nusa Penida Island Expedition",
        description: "Speedboat crossing to Nusa Penida. Visit the jaw-dropping T-Rex cliff at Kelingking Beach, Broken Beach, and natural infinity pool at Angel’s Billabong. Return to Bali in the late afternoon for a sunset dinner cruise."
      },
      {
        day: 5,
        title: "Tanah Lot & Departure",
        description: "Visit the sacred sea temple of Tanah Lot before transferring to Ngurah Rai International Airport for your departure."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["International", "Honeymoon"],
    rating: 5.0,
    reviewsCount: 31,
    featured: false
  },
  {
    id: "pkg-3",
    slug: "singapore-tour",
    title: "Singapore Tour — Marina Bay, Flyer & Sentosa",
    destination: "Singapore",
    country: "Singapore",
    region: "International",
    duration: { nights: 4, days: 5 },
    startingPrice: 54000,
    currency: "INR",
    description: "A dazzling cosmopolitan city-state journey highlighting Marina Bay, Singapore Flyer, futuristic Gardens by the Bay, Chinatown heritage, and action-packed Sentosa Island.",
    highlights: [
      "Panoramic Singapore City Tour & Singapore Flyer Giant Observation Wheel",
      "Full Day Sentosa Island with Cable Car & Wings of Time Show",
      "Gardens by the Bay Flower Dome & Cloud Forest Supertrees",
      "Night Safari Tram Experience in the World’s First Nocturnal Zoo"
    ],
    inclusions: [
      "04 Nights 4-Star Hotel Accommodations in Singapore",
      "Daily international breakfast buffet at hotel",
      "Panoramic city tour covering Merlion Park, Chinatown, and Civic District",
      "Admission ticket to the Singapore Flyer",
      "Sentosa Island admission with scenic cable car ride and Wings of Time",
      "All airport transfers and tour transportation in air-conditioned coaches",
      "English-speaking guide assistance"
    ],
    exclusions: [
      "International airfare and Singapore entry visa fees",
      "Universal Studios Singapore entrance (optional upgrade available)",
      "Lunches, dinners, and personal expenditures"
    ],
    itinerary: [
      {
        day: 1,
        title: "Changi Arrival & Singapore City Experience",
        description: "Arrive at world-renowned Changi Airport. Clear customs and transfer to your hotel. In the afternoon, embark on a panoramic city tour showcasing the contrast of colonial heritage buildings, the iconic Merlion Park, and modern architecture."
      },
      {
        day: 2,
        title: "Gardens by the Bay & Singapore Flyer",
        description: "Visit the architectural wonder Gardens by the Bay. Walk through the climate-controlled Cloud Forest with its towering indoor waterfall and the Flower Dome. At dusk, take a ride on the Singapore Flyer for 360-degree skyline views."
      },
      {
        day: 3,
        title: "Sentosa Island Adventure & Wings of Time",
        description: "Ride the Singapore Cable Car over the harbor into Sentosa Island. Enjoy S.E.A. Aquarium and Madame Tussauds. Finish with the breathtaking Wings of Time pyrotechnic and laser water show on the beach."
      },
      {
        day: 4,
        title: "Shopping on Orchard Road & Night Safari",
        description: "Free morning for world-class shopping along Orchard Road and cultural exploration of Little India and Kampong Glam. In the evening, visit the world-famous Night Safari tram ride through wildlife habitats."
      },
      {
        day: 5,
        title: "Jewel Changi & Departure",
        description: "Check out and transfer to Changi Airport. Marvel at the HSBC Rain Vortex at Jewel Changi before boarding your flight back home."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["International", "Family Holidays"],
    rating: 4.9,
    reviewsCount: 47,
    featured: true
  },
  {
    id: "pkg-1",
    slug: "dubai-tour",
    title: "Dubai Tour — Burj Khalifa, Desert Safari & Luxury Yacht",
    destination: "Dubai",
    country: "United Arab Emirates",
    region: "International",
    duration: { nights: 4, days: 5 },
    startingPrice: 78700,
    currency: "INR",
    description: "The crown jewel of the Arabian Gulf. Futuristic skyscrapers, ultra-luxury shopping, heart-pumping desert dune bashing with barbecue dinner under starlit skies, and iconic sights from Burj Khalifa.",
    highlights: [
      "Burj Khalifa Observation Deck at the Top (124th & 125th Floor)",
      "4x4 Desert Safari with Dune Bashing, Camel Ride & Tanoura Dance Dinner",
      "Dubai Marina Dhow Cruise Dinner with Skyline Illumination",
      "Half Day Guided Dubai City Tour & Miracle Garden / Frame"
    ],
    inclusions: [
      "04 Nights in 4/5-Star Dubai City / Marina Hotel with breakfast",
      "Burj Khalifa 124th Floor entrance ticket with Dubai Mall visit",
      "Desert Safari in 4x4 Land Cruiser with BBQ dinner and live cultural shows",
      "Marina Dhow Cruise with international 5-star buffet dinner",
      "Half-day Dubai city orientation with gold & spice souks visit",
      "All airport and excursion transfers in private AC vehicle",
      "UAE Tourist Visa and travel insurance assistance"
    ],
    exclusions: [
      "International flights",
      "Tourism Dirham fee payable directly at the hotel",
      "Personal expenses, porterage, and tips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dubai Arrival & Marina Dhow Cruise Dinner",
        description: "Arrive at Dubai International Airport. Private transfer to your hotel. In the evening, step aboard a traditional wooden Dhow for a 2-hour glide along the glittering Dubai Marina accompanied by a live buffet and Tanoura dance."
      },
      {
        day: 2,
        title: "Dubai City Tour & Burj Khalifa At The Top",
        description: "Explore the historic Al Fahidi neighborhood, Dubai Creek via Abra boat, and Jumeirah Mosque. In the afternoon, visit Dubai Mall and ascend to the 124th floor of Burj Khalifa for panoramic vistas, followed by the Dubai Fountain show."
      },
      {
        day: 3,
        title: "Leisure Morning & Thrilling 4x4 Desert Safari",
        description: "Morning free for Gold and Spice Souk shopping. Mid-afternoon departure into the red dunes for 4x4 dune bashing, sandboarding, and camel riding. Enjoy an authentic Arabic barbecue dinner beneath the stars with fire dances."
      },
      {
        day: 4,
        title: "Dubai Frame & Museum of the Future",
        description: "Visit the iconic Dubai Frame connecting old and new Dubai, and marvel at the architectural masterpiece Museum of the Future. Evening free for dining or luxury shopping."
      },
      {
        day: 5,
        title: "Departure Dubai",
        description: "Enjoy a leisurely breakfast and private transfer to Dubai International Airport for your departure flight."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["International", "Family Holidays"],
    rating: 4.9,
    reviewsCount: 52,
    featured: true
  },
  {
    id: "pkg-4",
    slug: "thailand-tour",
    title: "Thailand Tour — Bangkok City & Coral Island Pattaya",
    destination: "Thailand",
    country: "Thailand",
    region: "International",
    duration: { nights: 4, days: 5 },
    startingPrice: 48800,
    currency: "INR",
    description: "Discover the vibrant Land of Smiles. Glittering golden Buddhist temples, energetic night markets in Bangkok, and crystal turquoise waters of Coral Island in Pattaya.",
    highlights: [
      "Speedboat Excursion to Coral Island (Koh Larn) with Indian Lunch",
      "Bangkok Temple Tour: Wat Traimit (Golden Buddha) & Wat Benchamabophit",
      "Alcazar Cabaret Show with VIP Seating in Pattaya",
      "Chao Phraya River Princess Dinner Cruise in Bangkok"
    ],
    inclusions: [
      "02 Nights accommodation in Pattaya with daily breakfast",
      "02 Nights accommodation in Bangkok with daily breakfast",
      "Speedboat transfer and lunch at Coral Island (Koh Larn)",
      "Alcazar Show regular entry ticket",
      "Bangkok city and temple tour with English-speaking guide",
      "All inter-city and airport transfers in private AC vehicle"
    ],
    exclusions: [
      "International airfare and Thailand visa fees",
      "Watersports at Coral Island (parasailing, sea walking, banana boat)",
      "Meals not explicitly mentioned in the itinerary",
      "Personal expenses and driver tips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bangkok Arrival & Transfer to Pattaya",
        description: "Arrive at Suvarnabhumi Airport in Bangkok. Meet our representative and travel along the eastern coast to the resort city of Pattaya. Check in and spend your evening exploring the vibrant seaside."
      },
      {
        day: 2,
        title: "Coral Island (Koh Larn) & Alcazar Show",
        description: "Board a speedboat to Coral Island. Lounge on white sands or engage in parasailing and snorkeling. Return for lunch. In the evening, witness the dazzling world-famous Alcazar Cabaret performance."
      },
      {
        day: 3,
        title: "Pattaya to Bangkok & Chao Phraya Dinner Cruise",
        description: "Drive back to Bangkok. Visit the Gems Gallery. Check into your Bangkok hotel. In the evening, cruise along the Chao Phraya River with a live music buffet dinner past the illuminated Wat Arun."
      },
      {
        day: 4,
        title: "Bangkok Temples & Shopping",
        description: "Morning guided tour of Bangkok's sacred temples: Wat Traimit housing a 5.5-ton solid gold Buddha and Wat Benchamabophit (Marble Temple). Spend the afternoon shopping at MBK Center or CentralWorld."
      },
      {
        day: 5,
        title: "Departure Bangkok",
        description: "Breakfast at hotel and private transfer to Suvarnabhumi Airport for your return flight."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["International", "Family Holidays"],
    rating: 4.7,
    reviewsCount: 35,
    featured: false
  },
  {
    id: "pkg-14",
    slug: "kerala-tour",
    title: "Kerala — Munnar Hills & Alleppey Backwater Houseboat",
    destination: "Kerala",
    country: "India",
    region: "Domestic",
    duration: { nights: 4, days: 5 },
    startingPrice: 19900,
    currency: "INR",
    description: "God’s Own Country: misty tea plantations of Munnar, wildlife sanctuaries of Thekkady, and a private traditional houseboat cruise through the tranquil backwaters of Alleppey.",
    highlights: [
      "2 Nights in Tea Capital Munnar with Mattupetty Dam & Eravikulam",
      "Spice Plantation Tour & Elephant Experience in Thekkady",
      "Overnight Private Houseboat in Alleppey with All Meals Included",
      "Dedicated Private Safe Wheels Sedan with Chauffeur"
    ],
    inclusions: [
      "02 Nights in Munnar (Star Hotel / Resort)",
      "01 Night in Thekkady (Resort)",
      "01 Night in Deluxe Houseboat in Alleppey (Private A/C Bedroom)",
      "Daily breakfast at hotels + All meals on the Houseboat (Lunch, Dinner, Breakfast)",
      "Private dedicated air-conditioned vehicle with Safe Wheels verified driver",
      "All toll, parking, driver bata and fuel charges included"
    ],
    exclusions: [
      "Airfare or train tickets to/from Kochi",
      "Entry fees at parks, monuments, boating and cultural shows",
      "Ayurvedic massages and personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cochin to Munnar (130 Kms / 4 Hrs)",
        description: "Arrive at Cochin Airport or Ernakulam Railway Station. Our Safe Wheels chauffeur welcomes you. Drive past cascading Cheeyappara and Valara waterfalls up into the mist-clad hills of Munnar. Check in at resort."
      },
      {
        day: 2,
        title: "Munnar Sightseeing Tour",
        description: "Explore Eravikulam National Park (home to the endangered Nilgiri Tahr), Mattupetty Dam, Echo Point, and the Tata Tea Museum with tea tasting."
      },
      {
        day: 3,
        title: "Munnar to Thekkady (90 Kms / 3 Hrs)",
        description: "Scenic drive through the Western Ghats to Thekkady. Tour aromatic cardamom, pepper, and cinnamon plantations. Take an optional boat safari on Periyar Lake."
      },
      {
        day: 4,
        title: "Thekkady to Alleppey Houseboat (140 Kms / 4 Hrs)",
        description: "Drive down to Alleppey and board your traditional kettuvallam houseboat. Cruise silently through narrow canal networks, paddy fields, and coconut groves while savoring authentic Kerala cuisine."
      },
      {
        day: 5,
        title: "Alleppey to Cochin Departure",
        description: "Disembark after breakfast. Visit Fort Kochi's Chinese fishing nets and colonial streets if time permits before drop-off at Cochin Airport/Railway Station."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["Domestic", "Honeymoon", "Family Holidays"],
    rating: 4.9,
    reviewsCount: 64,
    featured: true
  },
  {
    id: "pkg-13",
    slug: "andaman-islands",
    title: "Andaman — Radhanagar Beach & Cellular Jail Heritage",
    destination: "Andaman",
    country: "India",
    region: "Domestic",
    duration: { nights: 4, days: 5 },
    startingPrice: 28900,
    currency: "INR",
    description: "An emerald island paradise in the Bay of Bengal: pristine Radhanagar Beach, historical Cellular Jail in Port Blair, and coral reefs of Elephant Beach via premium catamarans.",
    highlights: [
      "Cellular Jail National Memorial & Light and Sound Show in Port Blair",
      "High-Speed Luxury Catamaran (Makruzz/Nautika) to Havelock Island",
      "Radhanagar Beach (Asia’s Best Beach by Time Magazine)",
      "Snorkeling & Coral Watching at Elephant Beach"
    ],
    inclusions: [
      "02 Nights accommodation in Port Blair with breakfast",
      "02 Nights accommodation in Havelock Island with breakfast",
      "Round-trip luxury catamaran tickets (Port Blair <-> Havelock)",
      "Cellular Jail entry ticket and Light & Sound show entry",
      "Elephant Beach boat transfer and basic snorkeling session",
      "All airport and harbor transfers in private AC vehicle"
    ],
    exclusions: [
      "Airfare to/from Port Blair (Veer Savarkar International Airport)",
      "Camera fees and personal water sports (scuba diving, sea walk)",
      "Lunch, dinner, and personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Port Blair Arrival & Cellular Jail Light & Sound",
        description: "Arrive at Port Blair. Transfer to hotel. In the afternoon, visit the historic Cellular Jail. In the evening, witness the stirring Light and Sound show bringing the Indian freedom struggle to life."
      },
      {
        day: 2,
        title: "Cruise to Havelock Island & Radhanagar Beach",
        description: "Morning cruise aboard a luxury private catamaran to Havelock Island. Check in at your beach resort. Later, visit world-famous Radhanagar Beach (Beach No. 7) for a breathtaking sunset."
      },
      {
        day: 3,
        title: "Elephant Beach Coral Reef Snorkel",
        description: "Speedboat ride to Elephant Beach. Marvel at vibrant live corals and tropical marine life through complimentary snorkeling."
      },
      {
        day: 4,
        title: "Havelock to Port Blair & Chidiya Tapu Sunset",
        description: "Catamaran cruise back to Port Blair. Afternoon trip to Chidiya Tapu (Bird Island), known for lush mangroves and spectacular sunsets."
      },
      {
        day: 5,
        title: "Departure Port Blair",
        description: "Breakfast and private transfer to Veer Savarkar Airport for your departure flight."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["Domestic", "Honeymoon", "Adventure"],
    rating: 4.8,
    reviewsCount: 29,
    featured: false
  },
  {
    id: "pkg-12",
    slug: "krabi-phuket",
    title: "Krabi & Phuket — Phi Phi Island & 4-Island Speedboat",
    destination: "Krabi & Phuket",
    country: "Thailand",
    region: "International",
    duration: { nights: 4, days: 5 },
    startingPrice: 38000,
    currency: "INR",
    description: "The ultimate Andaman tropical twin-destination journey: dramatic towering limestone karst formations of Krabi, 4-Island tour, and the vibrant island life and Phi Phi Islands of Phuket.",
    highlights: [
      "Krabi 4-Island Tour by Speedboat (Phra Nang Cave, Tup & Chicken Island)",
      "Full Day Phi Phi Islands Excursion with Maya Bay & Lunch",
      "Scenic Coastal Chauffeur Drive between Krabi and Phuket",
      "Phuket City Tour & Promthep Cape Sunset Viewpoint"
    ],
    inclusions: [
      "02 Nights stay in Krabi with daily breakfast",
      "02 Nights stay in Phuket with daily breakfast",
      "Krabi 4-Island speedboat tour with picnic lunch & snorkel gear",
      "Phi Phi Island tour by big boat/speedboat with international lunch",
      "Inter-hotel private transfer between Krabi and Phuket",
      "All airport and excursion transfers in AC vehicle"
    ],
    exclusions: [
      "International flights and Thailand visa fees",
      "National Park entry fees (payable in cash on-site)",
      "Dinners and personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Krabi Arrival & Leisure",
        description: "Arrive at Krabi International Airport. Private transfer to your Ao Nang beach resort. Evening free to relax on the promenade."
      },
      {
        day: 2,
        title: "Krabi 4-Island Tour by Speedboat",
        description: "Speedboat excursion across azure waters: Koh Poda, Chicken Island, Tup Island with its sandbar connecting two islands at low tide, and Phra Nang Cave beach."
      },
      {
        day: 3,
        title: "Krabi to Phuket via Scenic Coastal Road",
        description: "Scenic 3-hour transfer through rubber plantations and coastal hills to Phuket. Check in at hotel and enjoy evening nightlife around Patong."
      },
      {
        day: 4,
        title: "Phi Phi Island Day Trip & Maya Bay",
        description: "Embark on an expedition to Phi Phi Don and Phi Phi Leh. See Maya Bay (featured in 'The Beach'), Viking Cave, and snorkel in crystal lagoons."
      },
      {
        day: 5,
        title: "Phuket Sightseeing & Departure",
        description: "Visit Promthep Cape and Big Buddha before transfer to Phuket International Airport."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["International", "Honeymoon", "Adventure"],
    rating: 4.9,
    reviewsCount: 38,
    featured: false
  },
  {
    id: "pkg-11",
    slug: "mauritius-island-paradise",
    title: "Mauritius — Ile Aux Cerfs & Chamarel Coloured Earth",
    destination: "Mauritius",
    country: "Mauritius",
    region: "International",
    duration: { nights: 6, days: 7 },
    startingPrice: 57000,
    currency: "INR",
    description: "An intoxicating French-Creole island in the Indian Ocean: crystalline emerald lagoons, sugar cane plantations, luxury beachfront resorts, and volcanic Seven Coloured Earth of Chamarel.",
    highlights: [
      "Full Day Ile Aux Cerfs Island Speedboat Tour with Water Sports",
      "South Island Tour: Chamarel Seven Coloured Earth & Grand Bassin Sacred Lake",
      "North Island Tour: Port Louis Capital, Fort Adelaide & Caudan Waterfront",
      "Deluxe 4-Star Beachfront Resort with Breakfast and Dinner Included"
    ],
    inclusions: [
      "06 Nights in Deluxe 4-Star Beach Resort in Mauritius",
      "Daily gourmet buffet breakfast and dinner (Half Board MAP Plan)",
      "Full day North Island tour including Port Louis and Caudan Waterfront",
      "Full day South Island tour including Chamarel waterfall and volcanic crater",
      "Full day Ile Aux Cerfs excursion with speedboat transfers",
      "Return airport transfers in air-conditioned coaches"
    ],
    exclusions: [
      "International flights to Sir Seewoosagur Ramgoolam Airport",
      "Lunches and alcoholic drinks",
      "Undersea walk, parasailing, and optional watersports at Ile Aux Cerfs"
    ],
    itinerary: [
      {
        day: 1,
        title: "Mauritius Arrival & Resort Welcome",
        description: "Arrive at SSR International Airport in Mauritius. Meet our local representative and transfer to your beachfront resort. Savor dinner overlooking the Indian Ocean."
      },
      {
        day: 2,
        title: "Ile Aux Cerfs Speedboat Excursion",
        description: "Drive to the East Coast jetty and board a speedboat to Ile Aux Cerfs, an emerald lagoon paradise. Enjoy warm sands and optional parasailing."
      },
      {
        day: 3,
        title: "Day at Leisure on the Beach",
        description: "Unwind at the resort with complimentary glass-bottom boat rides, windsurfing, or private spa relaxation."
      },
      {
        day: 4,
        title: "North Island & Port Louis Discovery",
        description: "Explore the capital Port Louis, historic Fort Adelaide (La Citadelle), and the chic Le Caudan Waterfront shops."
      },
      {
        day: 5,
        title: "Day at Leisure / Catamaran Cruise Option",
        description: "Spend the day enjoying beachfront cocktails or take an optional catamaran cruise along the west coast to spot dolphins."
      },
      {
        day: 6,
        title: "South Island Scenic Wonders & Chamarel",
        description: "Visit Trou aux Cerfs dormant volcanic crater, Grand Bassin sacred Hindu crater lake, and the unique seven-colored dunes of Chamarel."
      },
      {
        day: 7,
        title: "Farewell Mauritius",
        description: "Breakfast and private transfer to the airport for your return flight."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["International", "Honeymoon"],
    rating: 5.0,
    reviewsCount: 27,
    featured: false
  },
  {
    id: "pkg-8",
    slug: "himachal-pradesh-tour",
    title: "Himachal Pradesh — Shimla, Manali & Solang Valley",
    destination: "Himachal Pradesh",
    country: "India",
    region: "Domestic",
    duration: { nights: 8, days: 9 },
    startingPrice: 36500,
    currency: "INR",
    description: "A grand Himalayan journey: cedar-lined ridges of colonial Shimla, snow-capped peaks of Manali, adventure in Solang Valley, and Tibetan monasteries under high alpine skies.",
    highlights: [
      "2 Nights Shimla + 3 Nights Manali with MAP Meal Plan (Breakfast & Dinner)",
      "Solang Valley Adventure & Atal Tunnel Excursion",
      "Mall Road Shimla, Jakhoo Temple & Kufri Snow Viewpoint",
      "Dedicated Sedan Vehicle with Experienced Mountain Chauffeur"
    ],
    inclusions: [
      "Economy class return airfare (or verified inclusion as per client)",
      "05 Nights Hotel Accommodations on Double Sharing Basis (3N Manali, 2N Shimla)",
      "Meal Plan: MAP (Daily Breakfast and Dinner included at hotels)",
      "All sightseeing and inter-city tours by private dedicated Sedan",
      "All toll taxes, state permits, parking fees, and driver allowances"
    ],
    exclusions: [
      "Rohtang Pass permit and local union taxi (if applicable)",
      "Adventure activities like paragliding, zorbing, and river rafting",
      "Monument and museum entry tickets",
      "Personal expenses, laundry, and tips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh to Shimla (130 Kms / 3.5 Hrs)",
        description: "Arrive at Chandigarh Airport/Railway Station. Meet your Safe Wheels mountain chauffeur and drive up through Shivalik hills via Pinjore Garden to Shimla. Dinner at hotel."
      },
      {
        day: 2,
        title: "Kufri Excursion & Shimla Mall Road",
        description: "Excursion to Kufri for panoramic Himalayan views. In the evening, stroll along the vehicle-free Ridge, Christ Church, and Mall Road."
      },
      {
        day: 3,
        title: "Shimla to Manali via Kullu Valley (260 Kms / 7 Hrs)",
        description: "Scenic drive alongside the Beas River through Sundernagar Lake, Pandoh Dam, and Kullu shawl weaving centers to Manali."
      },
      {
        day: 4,
        title: "Solang Valley & Atal Tunnel",
        description: "Full day in Solang Valley: paragliding, zorbing, and cable car rides. Drive through the engineering marvel of Atal Tunnel towards Sissu in Lahaul."
      },
      {
        day: 5,
        title: "Manali Local Sightseeing",
        description: "Visit the 450-year-old wooden Hadimba Temple, Vashisht hot springs, and Tibetan Monastery. Free time in Old Manali cafés."
      },
      {
        day: 6,
        title: "Manali to Chandigarh & Departure",
        description: "Drive back down to Chandigarh for your onward flight or train home."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["Domestic", "Family Holidays", "Adventure"],
    rating: 4.8,
    reviewsCount: 45,
    featured: false
  },
  {
    id: "pkg-7",
    slug: "rajasthan-royal-heritage",
    title: "Rajasthan — Jaipur, Jodhpur, Udaipur & Jaisalmer",
    destination: "Rajasthan",
    country: "India",
    region: "Domestic",
    duration: { nights: 9, days: 10 },
    startingPrice: 56000,
    currency: "INR",
    description: "The royal realm of kings, majestic hill forts, Thar Desert camel caravans, and fairytale palaces reflecting in the calm waters of Lake Pichola.",
    highlights: [
      "Jaipur Pink City: Amber Fort, Hawa Mahal, City Palace & Jantar Mantar",
      "Jodhpur Blue City: Mighty Mehrangarh Fort & Jaswant Thada",
      "Jaisalmer: Golden Sand Dunes with Luxury Desert Camp & Folk Music",
      "Udaipur City of Lakes: Lake Pichola Boat Cruise & Jagdish Temple"
    ],
    inclusions: [
      "09 Nights Hotel & Luxury Desert Camp Accommodations with Breakfast",
      "Overnight stay in Jaisalmer Sam Sand Dunes with Camel Safari and cultural show",
      "Private dedicated air-conditioned vehicle with expert Rajasthan chauffeur",
      "All inter-city transfers and excursions as per itinerary",
      "All toll taxes, parking, and driver allowances"
    ],
    exclusions: [
      "Airfare or train tickets",
      "Fort and palace entry tickets, camera permits, and audio guides",
      "Lunches, dinners (except in Desert camp), and personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Jaipur Arrival & Welcome",
        description: "Arrive in the Pink City of Jaipur. Our Safe Wheels executive greets you and transfers you to your heritage hotel."
      },
      {
        day: 2,
        title: "Jaipur Forts & Palaces",
        description: "Explore Amber Fort overlooking Maota Lake, Jal Mahal water palace, City Palace complex, and the astronomical observatory Jantar Mantar."
      },
      {
        day: 3,
        title: "Jaipur to Bikaner (330 Kms / 5.5 Hrs)",
        description: "Drive to desert outpost Bikaner. Visit Junagarh Fort and the unique Camel Breeding Farm."
      },
      {
        day: 4,
        title: "Bikaner to Jaisalmer Golden City (330 Kms / 5.5 Hrs)",
        description: "Drive deeper into the Thar Desert to Jaisalmer. Evening sunset view of the Golden Fort."
      },
      {
        day: 5,
        title: "Jaisalmer Fort & Sam Sand Dunes Luxury Camp",
        description: "Tour the living Golden Fort and intricately carved Patwon ki Haveli. Late afternoon drive to Sam Sand Dunes for camel rides and Kalbeliya folk dances around a campfire."
      },
      {
        day: 6,
        title: "Jaisalmer to Jodhpur Blue City (280 Kms / 5 Hrs)",
        description: "Drive to Jodhpur. Visit towering Mehrangarh Fort commanding panoramic views over indigo-painted houses."
      },
      {
        day: 7,
        title: "Jodhpur to Udaipur via Ranakpur (260 Kms / 5 Hrs)",
        description: "Drive to Udaipur, stopping to admire the 1,444 intricately carved marble pillars of Ranakpur Jain Temple."
      },
      {
        day: 8,
        title: "Udaipur City of Lakes Sightseeing",
        description: "Visit City Palace, Saheliyon ki Bari, and take a romantic sunset boat ride across Lake Pichola past Lake Palace."
      },
      {
        day: 9,
        title: "Udaipur Leisure & Heritage Crafts",
        description: "Free day for Pichwai art, miniature paintings, and lakeside dining."
      },
      {
        day: 10,
        title: "Udaipur Departure",
        description: "Breakfast and transfer to Maharana Pratap Airport in Udaipur for your flight home."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["Domestic", "Cultural", "Family Holidays"],
    rating: 4.9,
    reviewsCount: 37,
    featured: false
  },
  {
    id: "pkg-6",
    slug: "gangtok-darjeeling-tour",
    title: "Gangtok & Darjeeling — Himalayan Vistas & Tsomgo Lake",
    destination: "Gangtok & Darjeeling",
    country: "India",
    region: "Domestic",
    duration: { nights: 4, days: 5 },
    startingPrice: 34000,
    currency: "INR",
    description: "The mystical Eastern Himalayas: sunrise over Kanchenjunga from Tiger Hill, tea gardens of Darjeeling, and glacial high-altitude Tsomgo Lake in Sikkim.",
    highlights: [
      "Sunrise at Tiger Hill over Mt. Kanchenjunga (World’s 3rd Highest Peak)",
      "Excursion to High-Altitude Glacial Tsomgo Lake (12,400 ft) & Baba Mandir",
      "UNESCO Darjeeling Himalayan Toy Train Ride Experience",
      "Rumtek Monastery & Flower Exhibition Centre in Gangtok"
    ],
    inclusions: [
      "02 Nights stay in Gangtok with daily breakfast",
      "02 Nights stay in Darjeeling with daily breakfast",
      "Full day excursion to Tsomgo Lake and Baba Mandir in Sikkim",
      "Tiger Hill sunrise tour with Batasia Loop and Ghoom Monastery",
      "All inter-city and airport transfers from Bagdogra (IXB) in private AC vehicle"
    ],
    exclusions: [
      "Airfare to/from Bagdogra Airport",
      "Nathula Pass permit and vehicle surcharge (subject to military clearance)",
      "Toy train tickets and personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bagdogra Airport to Gangtok (120 Kms / 4.5 Hrs)",
        description: "Arrive at Bagdogra Airport (IXB). Scenic drive along Teesta River climbing up to Gangtok (5,500 ft). Evening stroll on MG Marg."
      },
      {
        day: 2,
        title: "Glacial Tsomgo Lake & Baba Mandir",
        description: "Ascend to sacred glacial Tsomgo Lake at 12,400 feet, surrounded by alpine peaks, and visit Baba Harbhajan Singh Mandir."
      },
      {
        day: 3,
        title: "Gangtok to Darjeeling Queen of the Hills (100 Kms / 4 Hrs)",
        description: "Morning visit to Enchey Monastery and Do Drul Chorten. Drive through rolling tea gardens into Darjeeling (6,700 ft)."
      },
      {
        day: 4,
        title: "Tiger Hill Sunrise & Himalayan Mountaineering Institute",
        description: "Early 4:00 AM trip to Tiger Hill for dawn over Mt. Kanchenjunga. Visit Batasia Loop, Ghoom Monastery, and the Himalayan Mountaineering Institute (HMI)."
      },
      {
        day: 5,
        title: "Darjeeling to Bagdogra Departure",
        description: "Breakfast and descent to Bagdogra Airport for departure."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["Domestic", "Family Holidays", "Adventure"],
    rating: 4.8,
    reviewsCount: 33,
    featured: false
  },
  {
    id: "pkg-5",
    slug: "nepal-himalayan-kingdom",
    title: "Nepal — Kathmandu Valley & Pokhara Lake Annapurna",
    destination: "Nepal",
    country: "Nepal",
    region: "International",
    duration: { nights: 5, days: 6 },
    startingPrice: 49000,
    currency: "INR",
    description: "The sacred Himalayan kingdom: ancient pagoda temples of Kathmandu Durbar Square, sacred Pashupatinath, sunrise over the Annapurna range from Sarangkot, and tranquil boating on Phewa Lake.",
    highlights: [
      "UNESCO Kathmandu Sightseeing: Pashupatinath, Boudhanath & Swayambhunath",
      "Sarangkot Sunrise with Panoramic Annapurna & Machhapuchhre Views",
      "Phewa Lake Boating & Davis Falls in Pokhara",
      "Private Vehicle Transfers Across Nepal with Guided Assistance"
    ],
    inclusions: [
      "03 Nights in Kathmandu with breakfast",
      "02 Nights in Pokhara with breakfast",
      "Full day Kathmandu Valley temple and cultural tour",
      "Half day Pokhara sightseeing and Sarangkot sunrise trip",
      "Round-trip road transfers between Kathmandu and Pokhara in private AC vehicle",
      "Airport pickup and drop at Tribhuvan International Airport"
    ],
    exclusions: [
      "International flights to Kathmandu",
      "Nepal visa fee (Free/Visa on Arrival for Indian citizens with voter ID/passport)",
      "Entrance fees at monuments and temples",
      "Personal expenses and mountain flight upgrades"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kathmandu Arrival & Thamel Stroll",
        description: "Arrive at Tribhuvan International Airport in Kathmandu. Meet our SpiceTrip representative and transfer to hotel. Explore vibrant Thamel."
      },
      {
        day: 2,
        title: "Kathmandu Valley UNESCO Heritage Tour",
        description: "Full day tour: sacred Hindu temple Pashupatinath on Bagmati River, colossal Buddhist stupa Boudhanath, and hilltop 'Monkey Temple' Swayambhunath."
      },
      {
        day: 3,
        title: "Kathmandu to Pokhara (200 Kms / 6 Hrs)",
        description: "Drive alongside the Trisuli River to the valley of Pokhara nestled beneath the Annapurna massif. Evening boat ride on Phewa Lake."
      },
      {
        day: 4,
        title: "Sarangkot Sunrise & Pokhara Sights",
        description: "Early morning drive to Sarangkot for sunrise over snow-capped Annapurna peaks. Visit Davis Falls, Gupteshwor Mahadev Cave, and Bindhyabasini Temple."
      },
      {
        day: 5,
        title: "Pokhara to Kathmandu",
        description: "Drive back to Kathmandu. Free evening for pashmina and handicraft shopping in Thamel."
      },
      {
        day: 6,
        title: "Departure Kathmandu",
        description: "Breakfast and private airport transfer for your departure flight."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&w=1600&q=80"
    ],
    category: ["International", "Cultural", "Adventure"],
    rating: 4.8,
    reviewsCount: 28,
    featured: false
  }
];

export const DESTINATIONS = [
  {
    id: "dest-vietnam",
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    region: "International" as const,
    headline: "Emerald Waters, Ancient Lanterns & Indochina Heritage",
    description: "From the majestic limestone karsts of Halong Bay to the lantern-lit cobblestones of Hoi An and the vibrant French quarter of Hanoi, Vietnam is a sensory tapestry of timeless culture, gastronomy, and natural splendor.",
    startingPrice: 34999,
    packageCount: 14,
    heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
    ],
    bestTimeToVisit: "October to April",
    visaRequirement: "E-Visa available online with SpiceTrip Concierge assistance",
    highlights: ["Overnight Halong Bay Cruise", "Ancient Hoi An Lantern Ateliers", "Hanoi Old Quarter Street Gastronomy"]
  },
  {
    id: "dest-maldives",
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "International" as const,
    headline: "Overwater Villa Solitude & Coral Atoll Sanctuaries",
    description: "A world of 26 atolls scattered across the warm Indian Ocean. Pure barefoot luxury, turquoise lagoons, marine safaris, and secluded overwater villas designed for extraordinary romance.",
    startingPrice: 58000,
    packageCount: 9,
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80"
    ],
    bestTimeToVisit: "November to April",
    visaRequirement: "Free 30-day Visa on Arrival for Indian tourists",
    highlights: ["Private Overwater Bungalows", "Manta Ray & Turtle Safaris", "Seaplane Transfers"]
  },
  {
    id: "dest-bali",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "International" as const,
    headline: "Sacred Temples, Jungle Ravines & Sunset Cliffs",
    description: "Indonesia's captivating Island of the Gods balances spiritual sanctuaries, tiered rice terraces in Ubud, cliffside sea temples in Uluwatu, and vibrant beach club living.",
    startingPrice: 39900,
    packageCount: 12,
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80"
    ],
    bestTimeToVisit: "April to October",
    visaRequirement: "Visa on Arrival (e-VOA easily processed)",
    highlights: ["Ubud Private Pool Villas", "Uluwatu Sunset Kecak Fire Dance", "Nusa Penida Day Trips"]
  },
  {
    id: "dest-singapore",
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    region: "International" as const,
    headline: "Garden City Splendour & Futuristic Horizons",
    description: "A dazzling global metropolis where heritage shophouses meet the towering Supertrees of Gardens by the Bay, luxury Marina Bay Sands, and tropical Sentosa Island.",
    startingPrice: 54000,
    packageCount: 8,
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=80"
    ],
    bestTimeToVisit: "Year-Round Destination",
    visaRequirement: "E-Visa required before travel (Processed by SpiceTrip IATA desk)",
    highlights: ["Gardens by the Bay Cloud Forest", "Sentosa Cable Car & Island", "Night Safari Wildlife Park"]
  },
  {
    id: "dest-dubai",
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    region: "International" as const,
    headline: "Desert Glamour, Skyline Marvels & Arabian Hospitality",
    description: "From Burj Khalifa to 4x4 red dune desert adventures and luxury yacht cruises along the Marina, Dubai delivers a breathtaking spectacle of Arabian innovation and luxury.",
    startingPrice: 78700,
    packageCount: 10,
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80"
    ],
    bestTimeToVisit: "October to April",
    visaRequirement: "E-Visa processed within 48-72 hours via SpiceTrip",
    highlights: ["Burj Khalifa 124th Floor Deck", "Red Dune 4x4 Desert Safari", "Marina Luxury Dhow Dinner"]
  },
  {
    id: "dest-kerala",
    slug: "kerala",
    name: "Kerala",
    country: "India",
    region: "Domestic" as const,
    headline: "Misty Tea Slopes & Whispering Backwaters",
    description: "Known affectionately as God's Own Country. Serene palm-lined lagoons in Alleppey, emerald tea gardens in Munnar, spice scents in Thekkady, and authentic Ayurvedic wellness.",
    startingPrice: 19900,
    packageCount: 8,
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80"
    ],
    bestTimeToVisit: "September to March",
    visaRequirement: "Domestic Indian destination (No visa needed)",
    highlights: ["Alleppey Overnight Houseboat", "Munnar Tea Plantations", "Safe Wheels Private Chauffeur Drive"]
  }
];

