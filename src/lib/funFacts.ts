const facts = [
  "Capybaras are the largest rodents in the world, growing up to 4.4 feet long and weighing over 140 pounds.",
  "Shoebill storks can grow up to 5 feet tall and have a wingspan of over 8 feet.",
  "Capybaras are highly social animals and live in groups of 10 to 40 individuals.",
  "Shoebills have a slow-motion hunting style, standing still for hours before striking with lightning speed.",
  "Capybaras can hold their breath underwater for up to five minutes to escape predators.",
  "Shoebills make a loud bill-clattering sound as a form of communication and territorial display.",
  "Capybaras are excellent swimmers and have webbed feet to help them navigate through water.",
  "Shoebills have a distinctive, dinosaur-like appearance, with piercing yellow eyes and a massive beak.",
  "Capybaras love to take mud baths to keep cool and deter insects.",
  "Shoebills prefer to eat lungfish, catfish, and even baby crocodiles.",
  "Capybaras have been known to form unlikely friendships with animals like birds, monkeys, and even alligators.",
  "Shoebills are silent hunters, relying on stealth rather than chasing prey.",
  "Capybaras secrete an oily substance on their skin that acts as a natural sunscreen.",
  "Shoebills can stand motionless for hours, waiting patiently for the perfect moment to strike their prey.",
  "Capybaras communicate using a variety of vocalizations, including purrs, barks, whistles, and grunts.",
  "Shoebills are monogamous and will stay with their mate for life.",
  "Capybaras have continuously growing teeth that they keep worn down by chewing on plants.",
  "Shoebill chicks take up to three years to reach full maturity.",
  "Capybaras are herbivores, mainly eating grasses and aquatic plants, but they also snack on fruit.",
  "Shoebills prefer to live in isolated swamps and wetlands in East Africa.",
  "Capybaras are often seen with birds perched on their backs, picking off parasites and insects.",
  "Shoebills have an incredibly strong bite force, powerful enough to crush a turtle’s shell.",
  "Capybaras can sleep in the water with just their nose sticking out to breathe.",
  "Shoebills bow to each other when greeting, a behavior unique among large birds.",
  "Capybaras have a scent gland on their noses that they use to mark their territory.",
  "Shoebills have been nicknamed 'death pelicans' due to their intense stare and hunting style.",
  "Capybaras sometimes act as 'babysitters' for each other's young within their groups.",
  "Shoebills can live up to 35 years in captivity, making them one of the longest-living bird species.",
  "Capybaras are related to guinea pigs and rock cavies, despite their large size.",
  "Shoebills rarely flap their wings and prefer to glide silently through their swampy habitats.",
];

export const getFunFact = () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
};
