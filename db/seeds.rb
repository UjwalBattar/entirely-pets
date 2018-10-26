# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

animals = ["dog", "cat"]
categories = ["toy", "food", "grooming", "accessory"]
colors = ["red", "blue", "green", "yellow", "orange", "black"]
images = ["https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000",
"https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg"]



ActiveRecord::Base.transaction do
  Product.destroy_all

  500.times do
    type = animals.sample
    img = type === "dog" ? images[0] : images[1]
    Product.create!(
      title: Faker::Commerce.product_name,
      image: img,
      animal: type,
      category: categories.sample,
      color: colors.sample,
      price: rand(100000) * 0.01
    )
  end
end
