// Sample rental car data (replace with your actual data)
const rentalCars = [
    {
      name: "Toyota Corolla",
      pricePerDay: "$45",
      image: "2.jpeg",
      description: "Compact sedan, ideal for city driving."
    },
    {
      name: "Ford Mustang",
      pricePerDay: "$85",
      image: "3.jpeg",
      description: "Sports car with powerful engine, great for long drives."
    },
    {
      name: "Jeep Wrangler",
      pricePerDay: "$75",
      image: "4.jpeg",
      description: "Off-road SUV, perfect for adventurous trips."
    },

    {
        name: "Toyota Camry",
        pricePerDay: "$50",
        image: "5.jpeg",
        description: "The Toyota Camry is a reliable mid-size sedan."
      },
      {
        name: "BMW M5",
        pricePerDay: "$85",
        image: "7.jpeg",
        description: "The BMW M5 is a high-performance sports sedan."
      },
      {
        name: "Tesla Model S",
        pricePerDay: "$90",
        image: "8.jpeg",
        description: "The Tesla Model S is an all-electric luxury sedan."
      }
  ];
  
  // Function to generate rental car cards dynamically
  function generateRentalCarCards() {
    const container = document.getElementById('rental-cards');
    container.innerHTML = ''; // Clear existing content
    
    rentalCars.forEach(car => {
      // Create card elements
      const card = document.createElement('div');
      card.classList.add('card');
      
      // Card content
      const img = document.createElement('img');
      img.src = car.image;
      img.alt = car.name;
      
      const name = document.createElement('h2');
      name.textContent = car.name;
      
      const pricePerDay = document.createElement('p');
      pricePerDay.textContent = `Price per day: ${car.pricePerDay}`;
      
      const description = document.createElement('p');
      description.textContent = car.description;
      
      // Append content to card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(pricePerDay);
      card.appendChild(description);
      
      // Append card to container
      container.appendChild(card);
    });
  }
  
  // Generate initial cards when page loads
  generateRentalCarCards();
  