require 'faker'
require 'byebug'



Post.destroy_all
User.destroy_all
Location.destroy_all
Like.destroy_all

puts 'seeding users'
u1 = User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916')
u2 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u3 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u4 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u5 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u6 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u7 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u8 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u9 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u10 = User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u11 = User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u12 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u13 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u14 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u15 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u16 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u17 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u18 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u19 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )
u20 = User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name, avatar: 'https://firebasestorage.googleapis.com/v0/b/postr-f650a.appspot.com/o/images%2Fdefault_image%2Ftwitter-avi-gender-balanced-figure.png?alt=media&token=b7b78059-9b81-46d6-b5fb-63f37a714916' )


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
for i in 1..500 do
    Post.create(user_id: User.order('RANDOM()').first.id, location_id: Location.order('RANDOM()').first.id, text: Faker::Twitter.status[:text])
end


puts 'done seeding'
