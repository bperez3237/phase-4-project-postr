require 'faker'

Post.destroy_all
User.destroy_all
Location.destroy_all

puts 'seeding users'
u1 = User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u2 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u3 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u4 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u5 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u6 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u7 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u8 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u9 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u10 = User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )


puts 'seeding locations'
l1 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")
l2 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")
l3 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")
l4 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")
l5 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")
l6 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")
l7 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")
l8 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")
l9 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")
l10 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")


puts 'seeding posts'
for i in 1..100 do
    Post.create(user_id: User.order('RANDOM()').first, location_id: Location.order('RANDOM()').first , text: Faker::Twitter.status[:text])
end


puts 'done seeding'
