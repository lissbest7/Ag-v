import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Neymar Junior',
    position: 'Footballer',
    image: 'https://b.fssta.com/uploads/application/soccer/headshots/713.png',
    text: 'There are many variations passages of Lorem Ipsum majority some by words which dont look. ',
    rating: 5,
  },
  {
    name: 'Leo Messi',
    position: 'Footballer',
    image: 'https://i.pinimg.com/736x/63/3b/3e/633b3efcba10eeab08535116634bd5e3.jpg',
    text: 'There are many variations passages of Lorem Ipsum majority some by words which dont look',
    rating: 1,
  },
  {
    name: 'Cristioano Ronaldo',
    position: 'GOAT',
    image: 'https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg',
    text: 'There are many variations passages of Lorem Ipsum majority some by words which dont look.',
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">What our clients say</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm transition-transform transform hover:-translate-y-2"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm opacity-70">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-base mb-4">{testimonial.text}</p>
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}