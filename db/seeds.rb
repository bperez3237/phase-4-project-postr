require 'faker'
require 'byebug'



Post.destroy_all
User.destroy_all
Location.destroy_all
Like.destroy_all

puts 'seeding users'
my_user = User.create(username: 'brian123', password_digest: 'password',name: 'Brian')
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
u11 = User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u12 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u13 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u14 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u15 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u16 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u17 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u18 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u19 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u20 = User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )


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
l11 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")
l12 = Location.create(name: Faker::Address.unique.city , country: Faker::Address.country, coordinates: "(#{Faker::Address.latitude},#{Faker::Address.longitude})")


puts 'seeding posts'
for i in 1..100 do
    Post.create(user_id: User.order('RANDOM()').first.id, location_id: Location.order('RANDOM()').first.id, text: Faker::Twitter.status[:text])
end


puts 'done seeding'
