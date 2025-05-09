import React, { useState, useEffect } from 'react';

import GemstoneCard from './_components/gemstoneCard/GemStoneCard';
import { FiSearch } from 'react-icons/fi';
import './knowYourGemstones.scss';
import GemOne from "../../assets/gems/emerald.png" 
import GemTwo from "../../assets/gems/feroza.png" 
import GemThree from "../../assets/Rudraksh Testing-image.png"

const Tab = ({ value, label, active, onClick }) => (
  <span
    className={`tab-trigger ${active ? 'active' : ''}`}
    onClick={() => onClick(value)}
  >
    {label}
  </span>
);



const gemstones = [
    {
      name: "Blue Sapphire",
      image: {GemOne},
      description: "This beautiful blue gem is part of the corundum family, which is known for its hardness (second only to a diamond). Sapphires are valued for their stunning blue color.",
      category: "precious"
    },
    {
      name: "Garnet",
      image: {GemTwo},
      description: "Garnets come in almost every color, but the garnet is the most common. The mineral is primarily used in jewelry as a 'dark red'.",
      category: "semi-precious"
    },
    {
      name: "Emerald",
      image: {GemThree},
      description: "This precious green gem is a type of beryl. Its green color comes from small amounts of chromium and vanadium in the green stone. Most emeralds have natural marks inside them.",
      category: "precious"
    },
    {
      name: "Feroza",
      image: {GemOne},
      description: "This blue-to-green gem has been used for thousands of years. Turquoise is known for its unique color and history.",
      category: "semi-precious"
    },
    {
      name: "Fire Opal",
      image: {GemTwo},
      description: "Opal is known for its amazing type of 'play-of-color'. Unlike most gemstone colors, fire opal is made of silica and is amorphous, which means it doesn't have a fixed crystal structure.",
      category: "precious"
    },
    {
      name: "Peridot",
      image: {GemThree},
      description: "This gem is a variety of the mineral olivine. It is distinguished by its yellow-green color, which comes from iron. It's often found in volcanic rocks.",
      category: "semi-precious"
    },
    {
      name: "Iolite",
      image: {GemOne},
      description: "This gem comes in shades of violet-blue and gets its name from the Greek word 'ios', which means violet. The gem stone is mined from different regions.",
      category: "semi-precious"
    },
    {
      name: "Lajwart (Lapis Lazuli)",
      image: {GemTwo},
      description: "The deep blue stone is actually made of a few different minerals, including lazurite, calcite and pyrite. Its rich, deep blue (often flecked with golden flecks) is highly valued and has been used for centuries.",
      category: "semi-precious"
    },
    {
      name: "Topaz",
      image: {GemThree},
      description: "Topaz is a hard silicate mineral that naturally comes in yellow to golden colors, although it can be treated for almost any color imaginable. It can also be found clear. It is the birthstone for November.",
      category: "precious"
    },
    {
      name: "Raw Pyrite (Fool's Gold)",
      image: "/lovable-uploads/b6d8da4c-89b0-4e58-bb8b-13681312f348.png",
      description: "Often called 'Fool's Gold' because of its resemblance to gold, pyrite is an iron sulfide. It has a metallic luster and a brassy-yellow color. Despite its humble gold-like appearance, it is popular for its crystal formations and is often found near real gold deposits. It is known for bringing prosperity.",
      category: "rare"
    },
    {
      name: "Amethyst",
      image: "/lovable-uploads/b6d8da4c-89b0-4e58-bb8b-13681312f348.png",
      description: "A popular purple variety of quartz, amethyst has been treasured for thousands of years. It is associated with royalty and spirituality and once was considered more valuable than diamonds. It is often found in geodes.",
      category: "semi-precious"
    },
    {
      name: "Rose Quartz",
      image: "/lovable-uploads/b6d8da4c-89b0-4e58-bb8b-13681312f348.png",
      description: "This is a popular pink variety of quartz, characterized by its gentle pink color. It has a medium-dark pink and often has a cloudy translucence. In crystal healing methods, it's known as the stone of unconditional love and is believed to promote peace and calm.",
      category: "semi-precious"
    },
    {
      name: "Citrine",
      image: "/lovable-uploads/b6d8da4c-89b0-4e58-bb8b-13681312f348.png",
      description: "This is the yellow to brownish or orange variety. One of quartz, its name comes from the French word 'citron', meaning lemon. It's a suitable birthstone that has historically been used to manifest abundance and prosperity. Its sunshine color represents prosperity.",
      category: "semi-precious"
    },
    {
      name: "Tiger Eye",
      image: "/lovable-uploads/b6d8da4c-89b0-4e58-bb8b-13681312f348.png",
      description: "This gemstone is known for its silky luster and golden to red-brown color. It exhibits a chatoyancy (changing colors from different angles) that resembles the eye of a tiger. It's believed to provide strength, protection, and good luck.",
      category: "semi-precious"
    },
    {
      name: "Diamond",
      image: "/lovable-uploads/b6d8da4c-89b0-4e58-bb8b-13681312f348.png",
      description: "Diamonds are famous for being the hardest natural substance on Earth, formed of pure carbon under extreme pressure deep within the Earth. While they can come in many colors, colorless diamonds are the most popular and are graded based on the 4 C's: cut, color, clarity, and carat weight.",
      category: "precious"
    }
  ];

const GemstonePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredGemstones, setFilteredGemstones] = useState(gemstones);

  useEffect(() => {
    let filtered = gemstones;

    if (searchTerm) {
      filtered = filtered.filter(gemstone =>
        gemstone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gemstone.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(gemstone =>
        gemstone.category === selectedCategory
      );
    }

    setFilteredGemstones(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="gemstone-page">
  
      <main className="main-content">
        <section className="hero">
          <div className="container">
            <div className="text-content">
              <span className="badge">Gemstone Encyclopedia</span>
              <h1>Know Your Gemstone</h1>
              <p>
                Explore our comprehensive guide to precious and semi-precious gemstones from around the world.
              </p>
              <div className="search-bar">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search gemstones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="tabs">
                <Tab value="all" label="All Gemstones" active={selectedCategory === 'all'} onClick={setSelectedCategory} />
                <Tab value="precious" label="Precious" active={selectedCategory === 'precious'} onClick={setSelectedCategory} />
                <Tab value="semi-precious" label="Semi-Precious" active={selectedCategory === 'semi-precious'} onClick={setSelectedCategory} />
                <Tab value="rare" label="Rare" active={selectedCategory === 'rare'} onClick={setSelectedCategory} />
              </div>
            </div>
          </div>
        </section>

        <section className="gemstone-grid">
          <div className="container">
            {filteredGemstones.length > 0 ? (
              <div className="grid">
                {filteredGemstones.map((gemstone, index) => (
                  <GemstoneCard key={index} {...gemstone} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No gemstones found matching your search</h3>
                <p>Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </section>
      </main>
    
    </div>
  );
};

export default GemstonePage;
